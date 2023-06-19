'use client';
import { useState, useEffect } from 'react';
import Navbar from '@components/Navbar';
import Topbar from '@components/Topbar';

const ThemeContainer = ({ children }) => {
	const [theme, setTheme] = useState('');

	useEffect(() => {
		if (!('theme' in localStorage)) {
			const sysTheme = matchMedia('(prefers-color-scheme: dark)').matches;
			if (!sysTheme) {
				setTheme('light');
			} else {
				setTheme('dark');
			}
		} else {
			setTheme(localStorage.getItem('theme'));
		}
	}, [theme]);
	return (
		<html
			lang="en"
			className={theme}>
			<body
				className="w-screen min-h-screen bg-primary-bg dark:bg-dark-primary-bg"
				suppressHydrationWarning={true}>
				<div className="container relative">
					<Topbar
						theme={theme}
						setTheme={setTheme}
					/>
					<Navbar />
					{children}
				</div>
			</body>
		</html>
	);
};

export default ThemeContainer;
