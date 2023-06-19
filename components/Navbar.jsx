import Link from 'next/link';
// const theme = localStorage.getItem('theme');
const Navbar = () => {
	const menuItems = ['home', 'news', 'blog', 'transfer', 'about'];
	const authItems = ['login', 'register'];
	return (
		<nav className="w-full grid grid-cols-2  md:grid-cols-4 gap-2 xl:gap-5  items-center  rounded-lg bg-[#121119f2] dark:bg-[#ffffff] text-dark-primary-text dark:text-primary-text  px-8 py-5 backdrop-blur-sm">
			<div className="logo hidden  md:flex justify-start  col-span-1">
				<Link
					className="font-Roboto font-[700] md:text-[15px] lg:text-[15px] xl:text-lg   2xl:text-xl"
					href="/">
					90 MINUTES MADNESS
				</Link>
			</div>

			<div className="links hidden md:flex justify-evenly md:col-span-2 ">
				{menuItems.map((item, index) => (
					<Link
						key={index}
						href={`/${item}`}
						className="capitalize  text-sm">
						{item}
					</Link>
				))}
			</div>

			<div className="links hidden md:flex justify-end  col-span-1">
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
