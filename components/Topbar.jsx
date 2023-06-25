'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { MdDarkMode, MdSunny, MdMonitor, MdContrast } from 'react-icons/md';
const Topbar = () => {
	const { theme, setTheme } = useTheme();
	const [selectedTheme, setSelectedTheme] = useState(theme && theme);
	const switchTheme = (value) => {
		setTheme(value);
		setSelectedTheme(value);
	};
	return (
		<div className="hidden md:flex justify-end py-3">
			<div className="socialIcon flex items-center">
				<Link
					href="https://www.facebook.com/90minutesmadness"
					title="@90minutesmadness"
					target="_blank">
					<FaFacebookF className="topbarIcon" />
				</Link>

				<Link
					href="https://www.instagram.com/90minutesmadness"
					title="@90minutesmadness"
					target="_blank">
					<FaInstagram className="topbarIcon" />
				</Link>
				<MdSunny
					className={`topbarIcon ${
						selectedTheme === 'light' && 'text-secondary-color'
					}`}
					onClick={() => switchTheme('light')}
				/>
				<MdDarkMode
					className={`topbarIcon ${
						selectedTheme === 'dark' && 'dark:text-secondary-color'
					}`}
					onClick={() => switchTheme('dark')}
				/>
				<MdMonitor
					className={`topbarIcon ${
						selectedTheme === 'system' &&
						'text-secondary-color dark:text-secondary-color'
					}`}
					onClick={() => switchTheme('system')}
				/>
			</div>
		</div>
	);
};

export default Topbar;
