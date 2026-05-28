'use client';

import { useState } from 'react';

export default function Contact() {
	const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
	const [formData, setFormData] = useState({
		fullName: '',
		phoneNumber: '',
		email: '',
		serviceType: '',
		comment: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Simulate form submission
		setFormState('sending');
		setTimeout(() => {
			setFormState('success');
		}, 2000);
	};

	const resetForm = () => {
		setFormState('idle');
		setFormData({
			fullName: '',
			phoneNumber: '',
			email: '',
			serviceType: '',
			comment: '',
		});
	};

	return (
		<div className="min-h-[calc(100vh-128px)] bg-gradient-to-b from-slate-950 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-2xl mx-auto">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold text-white mb-2">
                        Свяжитесь <span className="text-purple-500">с нами</span>
					</h1>
					<p className="text-slate-400">Отправьте запрос, и мы свяжемся с вами как можно скорее.</p>
				</div>

				{formState === 'idle' || formState === 'sending' ? (
					<div className="bg-slate-800 border border-slate-700 rounded-lg p-8 mb-12">
						<h2 className="text-2xl font-semibold text-white mb-6">Форма обратной связи</h2>
						<form onSubmit={handleSubmit} className="space-y-5">
							<div>
								<label htmlFor="fullName" className="block text-sm font-medium text-white mb-2">
									Имя <span className="text-red-500">*</span>
								</label>
								<div className="relative">
									<input
										type="text"
										id="fullName"
										name="fullName"
										placeholder="Введите имя"
										value={formData.fullName}
										onChange={handleChange}
										required
										className="w-full bg-slate-700 border border-slate-600 rounded-lg py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
									/>
								</div>
								{formState === 'sending' && formData.fullName === '' && (
									<p className="text-red-500 text-sm mt-1">Please enter your full name</p>
								)}
							</div>

							<div>
								<label htmlFor="phoneNumber" className="block text-sm font-medium text-white mb-2">
									Телефон <span className="text-red-500">*</span>
								</label>
								<div className="relative">
									<input
										type="tel"
										id="phoneNumber"
										name="phoneNumber"
										placeholder="Введите номер"
										value={formData.phoneNumber}
										onChange={handleChange}
										required
										className="w-full bg-slate-700 border border-slate-600 rounded-lg py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
									/>
								</div>
								{formState === 'sending' && formData.phoneNumber === '' && (
									<p className="text-red-500 text-sm mt-1">Please enter a valid phone number</p>
								)}
							</div>

							<div>
								<label htmlFor="email" className="block text-sm font-medium text-white mb-2">
									Email <span className="text-red-500">*</span>
								</label>
								<div className="relative">
									<input
										type="email"
										id="email"
										name="email"
										placeholder="example@mail.com"
										value={formData.email}
										onChange={handleChange}
										required
										className="w-full bg-slate-700 border border-slate-600 rounded-lg py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
									/>
								</div>
								{formState === 'sending' && formData.email === '' && (
									<p className="text-red-500 text-sm mt-1">Please enter a valid email</p>
								)}
							</div>

							<div>
								<label htmlFor="serviceType" className="block text-sm font-medium text-white mb-2">
                                    Тип услуги <span className="text-red-500">*</span>
								</label>
								<select
									id="serviceType"
									name="serviceType"
									value={formData.serviceType}
									onChange={handleChange}
									required
									className="w-full bg-slate-700 border border-slate-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none cursor-pointer"
								>
									<option value="web-development">Web Development</option>
									<option value="mobile-development">Mobile Development</option>
									<option value="consulting">Consulting</option>
									<option value="support">Support</option>
								</select>
								{formState === 'sending' && formData.serviceType === '' && (
									<p className="text-red-500 text-sm mt-1">Please select a service type</p>
								)}
							</div>

							<div>
								<label htmlFor="comment" className="block text-sm font-medium text-white mb-2">
                                    Комментарий
								</label>
								<textarea
									id="comment"
									name="comment"
									placeholder="..."
									value={formData.comment}
									onChange={handleChange}
									rows={5}
									className="w-full bg-slate-700 border border-slate-600 rounded-lg py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
								/>
								<div className="text-right text-sm text-slate-400 mt-1">
									{formData.comment.length} / 500
								</div>
							</div>

							<button
								type="submit"
								disabled={formState === 'sending'}
								className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-75 text-white font-semibold py-3 px-4 rounded-lg transition-colors mt-8"
							>
								{formState === 'sending' ? 'Sending...' : 'Отправить'}
							</button>
                        </form>
					</div>
				) : null}

				<div className="mt-16">
					<h2 className="text-2xl font-bold text-white text-center mb-12">Состояния формы</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="bg-slate-800 border border-slate-700 rounded-lg p-8 text-center">
							<div className="mb-6 flex justify-center">
								<div className="relative w-16 h-16">
									<div className="absolute inset-0 border-4 border-slate-600 border-t-purple-500 rounded-full animate-spin"></div>
								</div>
							</div>
							<h3 className="text-lg font-semibold text-white mb-2">{"Отправка вашего запроса..."}</h3>
							<p className="text-slate-400 text-sm mb-6">Пожалуйста, подождите</p>
							<button className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors cursor-not-allowed opacity-50">
								Отправка...
							</button>
						</div>

						<div className="bg-slate-800 border border-slate-700 rounded-lg p-8 text-center">
							<div className="mb-6 flex justify-center">
								<div className="relative w-16 h-16 bg-green-500 bg-opacity-10 border-2 border-green-500 rounded-full flex items-center justify-center">
									<span className="text-2xl">✓</span>
								</div>
							</div>
							<h3 className="text-lg font-semibold text-white mb-2">Запрос отправлен!</h3>
							<p className="text-slate-400 text-sm mb-6">{"Мы свяжемся с вами в ближайшее время"}</p>
							<button
								onClick={resetForm}
								className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
							>
								Готово!
							</button>
						</div>

						<div className="bg-slate-800 border border-slate-700 rounded-lg p-8 text-center">
							<div className="mb-6 flex justify-center">
								<div className="relative w-16 h-16 bg-red-500 bg-opacity-10 border-2 border-red-500 rounded-full flex items-center justify-center">
									<span className="text-2xl">✕</span>
								</div>
							</div>
							<h3 className="text-lg font-semibold text-white mb-2">Что-то пошло не так</h3>
							<p className="text-slate-400 text-sm mb-6">{"Не удалось отправить ваш запрос. Пожалуйста, попробуйте позже."}</p>
							<button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
								Попробовать снова
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

