'use client';
import Link from 'next/link';
const theme = localStorage.getItem('theme');
console.log(theme);
const Navbar = () => {
	const menuItems = ['home', 'news', 'blog', 'transfer', 'about'];
	const authItems = ['login', 'register'];

	return (
		<nav className="md:w-full hidden md:flex justify-between  mt-10 rounded-lg bg-[#121119f2] dark:bg-[#ffffff] text-dark-primary-text dark:text-primary-text  px-8 py-5 backdrop-blur-sm">
			<div className="logo hidden lg:flex">
				<Link
					className="font-Roboto font-[700] text-xl"
					href="/">
					90 MINUTES MADNESS
				</Link>
			</div>
			<div className="logoIcon"></div>
			<div className="links hidden lg:flex justify-between">
				{menuItems.map((item, index) => (
					<Link
						key={index}
						href={`/${item}`}
						className="capitalize lg:mx-5 xl:mx-10 ">
						{item}
					</Link>
				))}
			</div>

			<div className="links flex justify-between">
				{authItems.map((item, index) => (
					<Link
						key={index}
						href={`/api/auth/${item}`}
						className={`capitalize ${
							authItems.length === index + 1
								? 'mx-0'
								: 'lg:mx-5 xl:mx-10'
						}`}>
						{item}
					</Link>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
