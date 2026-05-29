import Link from 'next/link';
import Image from "next/image";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-slate-900 border-t border-slate-800 mt-auto">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					{/* Logo and Copyright */}
					<div className="flex flex-col gap-4 items-center">
                        <Image src="/images/logo.png" alt="" width={45} height={45}/>
						<p className="text-slate-400 text-sm">© {currentYear}. All rights reserved.</p>
					</div>

					{/* Links */}
					<div className="flex flex-col gap-2 justify-center items-center">
						<Link href="/" className="text-slate-400 hover:text-white text-sm transition-colors">
							Политика конфиденциальности
						</Link>
						<Link href="/" className="text-slate-400 hover:text-white text-sm transition-colors">
							Условия использования
						</Link>
					</div>

					<div className="flex gap-6 justify-center items-center">
						<a href="#" className="text-slate-400 hover:text-white transition-colors">
							<span className="sr-only">Telegram</span>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.022c.242-.213-.054-.328-.373-.115l-6.871 4.326-2.962-.924c-.643-.204-.658-.643.136-.953l11.566-4.461c.542-.204 1.013.131.844.953z" />
							</svg>
						</a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">
                            <span className="sr-only">Telegram</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.022c.242-.213-.054-.328-.373-.115l-6.871 4.326-2.962-.924c-.643-.204-.658-.643.136-.953l11.566-4.461c.542-.204 1.013.131.844.953z" />
                            </svg>
                        </a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">
                            <span className="sr-only">Telegram</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.022c.242-.213-.054-.328-.373-.115l-6.871 4.326-2.962-.924c-.643-.204-.658-.643.136-.953l11.566-4.461c.542-.204 1.013.131.844.953z" />
                            </svg>
                        </a>
					</div>
				</div>
			</div>
		</footer>
	);
}

