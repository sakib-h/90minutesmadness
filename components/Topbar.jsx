'use client';
import Link from 'next/link';
import { useState, useContext } from 'react';
import { FaFacebookF, FaInstagram, FaMoon, FaSun } from 'react-icons/fa';
import { MdDarkMode, MdSunny, MdMonitor } from 'react-icons/md';
const Topbar = ({ theme, setTheme }) => {
	const switchTheme = (value) => {
		if (value === 'system') {
			localStorage.removeItem('theme');
			setTheme('');
		} else {
			localStorage.setItem('theme', value);
			setTheme(value);
		}
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
					className="topbarIcon"
					onClick={() => switchTheme('light')}
				/>
				<MdDarkMode
					className="topbarIcon"
					onClick={() => switchTheme('dark')}
				/>
				<MdMonitor
					className="topbarIcon"
					onClick={() => switchTheme('system')}
				/>
			</div>
		</div>
	);
};

export default Topbar;
