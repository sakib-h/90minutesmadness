import '@styles/globals.css';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('@components/Navbar'));
const Topbar = dynamic(() => import('@components/Topbar'));
import Providers from '@providers/provider';
import Loading from './news/loading';
export const metadata = {
	title: '90 MINUTES MADNESS',
	description: 'Check daily News & Updates of your favorite sports',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className="w-screen min-h-screen bg-primary-bg dark:bg-dark-primary-bg overflow-hidden"
				suppressHydrationWarning={true}>
				<div className="container relative">
					<Providers>
						<Suspense fallback={<Loading />}>
							<Topbar />
							<Navbar />
							{children}
						</Suspense>
					</Providers>
				</div>
			</body>
		</html>
	);
}
