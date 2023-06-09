import Link from 'next/link';
// const theme = localStorage.getItem('theme');
const Navbar = () => {
	const menuItems = ['home', 'news', 'blog', 'transfer', 'about'];
	const authItems = ['login', 'register'];
	return (
		<nav className="w-full grid grid-cols-2 lg:grid-cols-4 gap-10  items-center  rounded-lg bg-[#121119f2] dark:bg-[#ffffff] text-dark-primary-text dark:text-primary-text  px-8 py-5 backdrop-blur-sm">
			<div className="logo hidden  lg:flex justify-start  col-span-1">
				<Link
					className="font-Roboto font-[700] text-xl"
					href="/">
					90 MINUTES MADNESS
				</Link>
			</div>

			<div className="links hidden lg:flex justify-between lg:col-span-2 ">
				{menuItems.map((item, index) => (
					<Link
						key={index}
						href={`/${item}`}
						className="capitalize  ">
						{item}
					</Link>
				))}
			</div>

			<div className="links hidden lg:flex justify-end  col-span-1">
				{authItems.map((item, index) => (
					<Link
						key={index}
						href={`/api/auth/${item}`}
						className={`capitalize ${
							authItems.length === index + 1
								? 'mx-0'
								: 'mx-5 xl:mx-10'
						}`}>
						{item}
					</Link>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
