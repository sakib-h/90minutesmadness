'use client';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';

const Providers = ({ children }) => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
	}, []);

	if (!loading) {
		return null;
	}



	return (
		<ThemeProvider
			attribute="class"
			enableSystem={true}
			enableColorScheme={true}>
			{children}
		</ThemeProvider>
	);
};

export default Providers;
