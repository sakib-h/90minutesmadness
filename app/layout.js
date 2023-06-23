import LoadingScreen from '@components/LoadingScreen';
import '@styles/globals.css';

import ThemeContainer from '@container/ThemeContainer';
export const metadata = {
	title: '90 MINUTES MADNESS',
	description: 'Check daily News & Updates of your favorite sports',
};

export default function RootLayout({ children }) {
	return (
		<div>
			<ThemeContainer children={children} />
			
		</div>
	);
}
