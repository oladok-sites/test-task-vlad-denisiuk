"use client"

import { useRouter } from "next/navigation";
import {useState} from "react";

export default function AdminLogin() {
    const router = useRouter()

    const [adminPageState, setAdminPageState] = useState<'error' | 'init'>('init');

    const handleLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const password = formData.get('password')

        const res = await fetch('/api/admin-login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password }),
        });

        if (res.ok) {
            router.push('/admin');
        } else {
            setAdminPageState('error')
        }
    };

    return (
        <div className='min-h-[calc(100vh-128px)] bg-gradient-to-b from-slate-950 to-slate-900 py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-2xl mx-auto'>
                <div className='text-center mb-12'>
                    <h1 className='text-4xl font-bold text-white mb-2'>
                        Вход в панель для <span className='text-purple-500'>админов</span>
                    </h1>
                </div>

                {adminPageState === 'init' && (
                <div className='bg-slate-800 border border-slate-700 rounded-lg p-8 mb-12'>
                    <h2 className='text-2xl font-semibold text-white mb-6'>Введите пароль</h2>
                    <form onSubmit={handleLogin}>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Пароль'
                            className='w-full bg-slate-700 border border-slate-600 rounded-lg py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                        />
                        <button
                            type='submit'
                            className='w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-75 text-white font-semibold py-3 px-4 rounded-lg transition-colors mt-8'
                        >
                            Отправить
                        </button>
                    </form>
                </div>)}

                {adminPageState === 'error' && (
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
            </div>
        </div>
    );
}
