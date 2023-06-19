import '@styles/globals.css';
import ThemeContainer from '@theme/ThemeContainer';

export const metadata = {
	title: '90 MINUTES MADNESS',
	description: 'Check daily News & Updates of your favorite sports',
};

export default function RootLayout({ children }) {
	return <ThemeContainer children={children} />;
}
