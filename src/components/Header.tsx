'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';

export default function Header() {
	const pathname = usePathname();

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const isActive = (path: string) => {
		return pathname === path || (pathname === '/' && path === '/');
	};

	useEffect(() => {
		Modal.setAppElement('body');
	}, []);

	useEffect(() => {
		document.body.style.overflow = isMenuOpen ? 'hidden' : '';
	}, [isMenuOpen]);

	return (
		<header className='bg-slate-900 border-b border-slate-800 sticky top-0 z-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div
					className={`flex items-center justify-center fixed top-16.25 left-0 right-0 bottom-0 bg-slate-900 outline-none transition scroll-auto max-h-screen ${
						isMenuOpen ? 'translate-x-0' : 'translate-x-full'
					}`}
				>
					<nav className='flex flex-col gap-6 uppercase tracking-widest'>
						<Link
							href='/'
							className={`text-sm font-medium transition-colors ${
								isActive('/') ? 'text-white' : 'text-slate-400 hover:text-white'
							}`}
							onClick={() => setIsMenuOpen(false)}
						>
							Главная
						</Link>
						<Link
							href='/services'
							className={`text-sm font-medium transition-colors ${
								isActive('/services') ? 'text-white' : 'text-slate-400 hover:text-white'
							}`}
							onClick={() => setIsMenuOpen(false)}
						>
							Услуги
						</Link>
						<Link
							href='/about-us'
							className={`text-sm font-medium transition-colors ${
								isActive('/about-us') ? 'text-white' : 'text-slate-400 hover:text-white'
							}`}
							onClick={() => setIsMenuOpen(false)}
						>
							О нас
						</Link>
						<Link
							href='/contact'
							className={`text-sm font-medium transition-colors ${
								isActive('/contact') ? 'text-white' : 'text-slate-400 hover:text-white'
							}`}
							onClick={() => setIsMenuOpen(false)}
						>
							Свяжитесь с нами
						</Link>
					</nav>
				</div>
				<div className='flex justify-between items-center h-16'>
					<Link href='/'>
						<Image src='/images/logo.png' alt='' width={45} height={45} />
					</Link>

					<button
						onClick={() => setIsMenuOpen((prev) => !prev)}
						className='flex md:hidden relative w-10 h-10 items-center justify-center transition'
					>
						<span className={`absolute w-6 h-0.5 ${isMenuOpen ? 'top-4.25' : 'top-5'} right-5 bg-purple-500 rounded transition ${isMenuOpen ? 'rotate-45' : 'rotate-0'}`}></span>

						<span className={`absolute w-6 h-0.5 top-5 right-5 bg-purple-500 rounded transition translate-y-2 ${isMenuOpen && 'opacity-0'}`}></span>

						<span className={`absolute w-6 h-0.5 ${isMenuOpen ? 'top-6.25' : 'top-5'} right-5 bg-purple-500 rounded transition -translate-y-2 ${isMenuOpen ? '-rotate-45' : 'rotate-0'}`}></span>
					</button>

					<nav className='hidden md:flex gap-8 items-center'>
						<Link
							href='/'
							className={`text-sm font-medium transition-colors ${
								isActive('/') ? 'text-white' : 'text-slate-400 hover:text-white'
							}`}
						>
							Главная
						</Link>
						<Link
							href='/services'
							className={`text-sm font-medium transition-colors ${
								isActive('/services') ? 'text-white' : 'text-slate-400 hover:text-white'
							}`}
						>
							Услуги
						</Link>
						<Link
							href='/about-us'
							className={`text-sm font-medium transition-colors ${
								isActive('/about-us') ? 'text-white' : 'text-slate-400 hover:text-white'
							}`}
						>
							О нас
						</Link>
						<Link
							href='/contact'
							className={`text-sm font-medium px-8 py-3 rounded-xl transition ${
								isActive('/contact') ? 'text-white border border-white/40 bg-zinc-900 shadow-[0_0_10px_rgba(255,255,255,0.7),0_0_20px_rgba(255,255,255,0.4)]' : 'text-white bg-purple-500 hover:bg-white hover:text-black'
							}`}
						>
							Свяжитесь с нами
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
}
