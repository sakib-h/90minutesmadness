'use client';
import Link from 'next/link';
import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { IoCloseSharp } from 'react-icons/io5';
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuItems = ['home', 'news', 'blog', 'transfer', 'about'];
	const authItems = ['login', 'register'];
	return (
		<nav className="w-full grid grid-cols-2  lg:grid-cols-4 gap-2 xl:gap-5  items-center mt-3 lg:mt-0  rounded-lg bg-[#121119f2] dark:bg-[#ffffff] text-dark-primary-text dark:text-primary-text  px-8 py-5 backdrop-blur-sm">
			<div className="logo flex justify-start  col-span-1">
				<Link
					className="font-Roboto font-[700] text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"
					href="/">
					90 MINUTES MADNESS
				</Link>
			</div>
			<div className="flex justify-end lg:hidden">
				{!isOpen ? (
					<HiMenu
						className="menuIcon"
						onClick={() => {
							setIsOpen(true);
						}}
					/>
				) : (
					<IoCloseSharp
						className="menuIcon"
						onClick={() => {
							setIsOpen(false);
						}}
					/>
				)}
			</div>

			<div className="links hidden lg:flex justify-evenly md:col-span-2 ">
				{menuItems.map((item, index) => (
					<Link
						key={index}
						href={`/${item}`}
						className="capitalize  text-sm">
						{item}
					</Link>
				))}
			</div>

			<div className="links hidden lg:flex justify-end  col-span-1">
				{authItems.map((item, index) => (
					<Link
						key={index}
						href={`/api/auth/${item}`}
						className={`capitalize text-sm  ${
							authItems.length === index + 1
								? 'mx-0'
								: 'mx-3 xl:mx-10'
						}`}>
						{item}
					</Link>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
