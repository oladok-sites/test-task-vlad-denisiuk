import type { Metadata } from 'next';
import './globals.css';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';

export const metadata: Metadata = {
	title: 'Vlad | Test task',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={`h-full antialiased`}>
			<body className='min-h-full flex flex-col bg-gradient-to-b from-slate-950 to-slate-900'>
				<Header />
				<main className='flex-1'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
