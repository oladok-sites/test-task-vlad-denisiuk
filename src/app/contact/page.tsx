'use client';

import { useState } from 'react';
import Link from "next/link";

export default function Contact() {
	const [errors, setErrors] = useState<Record<string, string>>({});

	const [formState, setFormState] = useState<'loading' | 'success' | 'error' | 'init'>('init');

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        serviceType: '',
        comment: '',
    });

	const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();

        setFormState('loading')

		const formData = new FormData(e.currentTarget);

		const data = {
			name: formData.get('name'),
			phone: formData.get('phone'),
			email: formData.get('email'),
			serviceType: formData.get('serviceType'),
			comment: formData.get('comment'),
		};

		try {
			const response = await fetch('/api/leads', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			const result = await response.json();

			console.log(result);

            if (!response.ok) {

                if (response.status === 400) {
                    const fieldErrors: Record<string, string> = {};

                    result.issues.forEach((issue: any) => {
                        const fieldName = issue.path[0];
                        fieldErrors[fieldName] = issue.message;
                    });

                    setErrors(fieldErrors);
                    setFormState('init')

                    return;
                }

                setFormState('error');
                return;
            }

			setFormState('success');
		} catch (error) {
			setFormState('error');
		}
	};

	return (
		<div className='min-h-[calc(100vh-128px)] bg-gradient-to-b from-slate-950 to-slate-900 py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-2xl mx-auto'>
				<div className='text-center mb-12'>
					<h1 className='text-4xl font-bold text-white mb-2'>
						Свяжитесь <span className='text-purple-500'>с нами</span>
					</h1>
					<p className='text-slate-400'>Отправьте запрос, и мы свяжемся с вами как можно скорее.</p>
				</div>

				{formState === 'init' && (
					<div className='bg-slate-800 border border-slate-700 rounded-lg p-8 mb-12'>
						<h2 className='text-2xl font-semibold text-white mb-6'>Форма обратной связи</h2>
						<form onSubmit={handleSubmit} className='space-y-5'>
							<div>
								<label htmlFor='fullName' className='block text-sm font-medium text-white mb-2'>
									Имя <span className='text-red-500'>*</span>
								</label>
								<div className='relative'>
									<input
										type='text'
										id='name'
										name='name'
										placeholder='Введите имя'
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                name: e.target.value
                                            }))
                                        }
										className='w-full bg-slate-700 border border-slate-600 rounded-lg py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
									/>
								</div>
								{errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
							</div>

							<div>
								<label htmlFor='phoneNumber' className='block text-sm font-medium text-white mb-2'>
									Телефон <span className='text-red-500'>*</span>
								</label>
								<div className='relative'>
									<input
										type='tel'
										id='phone'
										name='phone'
										placeholder='+380000000000'
                                        value={formData.phone}
                                        onChange={(e) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                phone: e.target.value
                                            }))
                                        }
										className='w-full bg-slate-700 border border-slate-600 rounded-lg py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
									/>
								</div>
								{errors.phone && <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>}
							</div>

							<div>
								<label htmlFor='email' className='block text-sm font-medium text-white mb-2'>
									Email <span className='text-red-500'>*</span>
								</label>
								<div className='relative'>
									<input
										type='email'
										id='email'
										name='email'
										placeholder='example@mail.com'
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                email: e.target.value
                                            }))
                                        }
										className='w-full bg-slate-700 border border-slate-600 rounded-lg py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
									/>
								</div>
								{errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
							</div>

							<div>
								<label htmlFor='serviceType' className='block text-sm font-medium text-white mb-2'>
									Тип услуги <span className='text-red-500'>*</span>
								</label>
								<select
									id='serviceType'
									name='serviceType'
                                    value={formData.serviceType}
                                    onChange={(e) =>
                                        setFormData(prev => ({
                                            ...prev,
                                            serviceType: e.target.value
                                        }))
                                    }
									className='w-full bg-slate-700 border border-slate-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none cursor-pointer'
								>
									<option value='WEB_DEVELOPMENT'>Web Development</option>
									<option value='MOBILE_DEVELOPMENT'>Mobile Development</option>
									<option value='CONSULTING'>Consulting</option>
									<option value='SUPPORT'>Support</option>
								</select>
							</div>

							<div>
								<label htmlFor='comment' className='block text-sm font-medium text-white mb-2'>
									Комментарий
								</label>
								<textarea
									id='comment'
									name='comment'
									placeholder='...'
									rows={5}
                                    value={formData.comment}
                                    onChange={(e) =>
                                        setFormData(prev => ({
                                            ...prev,
                                            comment: e.target.value
                                        }))
                                    }
									className='w-full bg-slate-700 border border-slate-600 rounded-lg py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none'
								/>
								{errors.comment && <p className='text-red-500 text-sm mt-1'>{errors.comment}</p>}
							</div>

							<button
								type='submit'
								className='w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-75 text-white font-semibold py-3 px-4 rounded-lg transition-colors mt-8'
							>
								Отправить
							</button>
						</form>
					</div>
				)}
                {formState === 'success' && (
                    <div className='bg-slate-800 border border-slate-700 rounded-lg p-8 text-center'>
                        <div className='mb-6 flex justify-center'>
                            <div className='relative w-16 h-16 bg-green-500 bg-opacity-10 border-2 border-green-500 rounded-full flex items-center justify-center'>
                                <span className='text-2xl'>✓</span>
                            </div>
                        </div>
                        <h3 className='text-lg font-semibold text-white mb-2'>Запрос отправлен!</h3>
                        <p className='text-slate-400 text-sm mb-6'>{'Мы свяжемся с вами в ближайшее время'}</p>
                        <Link href="/" className='bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors'>
                            Готово!
                        </Link>
                    </div>
                )}

                {formState === 'error' && (
                    <div className='bg-slate-800 border border-slate-700 rounded-lg p-8 text-center'>
                        <div className='mb-6 flex justify-center'>
                            <div className='relative w-16 h-16 bg-red-500 bg-opacity-10 border-2 border-red-500 rounded-full flex items-center justify-center'>
                                <span className='text-2xl'>✕</span>
                            </div>
                        </div>
                        <h3 className='text-lg font-semibold text-white mb-2'>Что-то пошло не так</h3>
                        <p className='text-slate-400 text-sm mb-6'>
                            {'Не удалось отправить ваш запрос. Пожалуйста, попробуйте позже.'}
                        </p>
                        <button onClick={() => window.location.reload()} className='bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors'>
                            Попробовать снова
                        </button>
                    </div>
                )}

                {formState === 'loading' && (
                    <div className='bg-slate-800 border border-slate-700 rounded-lg p-8 text-center'>
                        <div className='mb-6 flex justify-center'>
                            <div className='relative w-16 h-16'>
                                <div className='absolute inset-0 border-4 border-slate-600 border-t-purple-500 rounded-full animate-spin'></div>
                            </div>
                        </div>
                        <h3 className='text-lg font-semibold text-white mb-2'>{'Отправка вашего запроса...'}</h3>
                        <p className='text-slate-400 text-sm mb-6'>Пожалуйста, подождите</p>
                        <button className='bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors cursor-not-allowed opacity-50'>
                            Отправка...
                        </button>
                    </div>
                )}
			</div>
		</div>
	);
}
