'use client';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
	const containerVariants = {
		initial: {
			rotate: 0,
		},
		animate: {
			rotate: 360,

			transition: {
				duration: 1.2,
				repeat: Infinity,
				repeatType: 'loop',
				ease: 'linear',
			},
		},
	};

	return (
		<html lang="en">
			<body
				className="w-screen min-h-screen bg-primary-bg flex flex-col justify-center items-center overflow-hidden backdrop-blur-sm"
				suppressHydrationWarning={true}>
				<motion.div
					class="w-10 h-10 rounded-full  border-[6px] border-x-secondary-color border-y-transparent   bg-transparent"
					variants={containerVariants}
					initial="initial"
					animate="animate"
				/>
			</body>
		</html>
	);
};

export default LoadingScreen;
