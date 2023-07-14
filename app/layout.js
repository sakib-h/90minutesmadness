import '@styles/globals.css';
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('@components/Navbar'));
const Topbar = dynamic(() => import('@components/Topbar'));
import Providers from '@providers/provider';
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
						<Topbar />
						<Navbar />
						{children}
					</Providers>
				</div>
			</body>
		</html>
	);
}
