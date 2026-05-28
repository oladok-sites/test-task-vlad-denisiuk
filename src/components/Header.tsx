'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from "next/image";

export default function Header() {
	const pathname = usePathname();

	const isActive = (path: string) => {
		return pathname === path || (pathname === '/' && path === '/');
	};

	return (
		<header className='bg-slate-900 border-b border-slate-800 sticky top-0 z-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-16'>
					<Link href='/'>
						<Image src="/images/logo.png" alt="" width={45} height={45}/>
					</Link>

					<nav className='hidden md:flex gap-8'>
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
							className={`text-sm font-medium transition-colors ${
								isActive('/contact') ? 'text-white' : 'text-slate-400 hover:text-white'
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
