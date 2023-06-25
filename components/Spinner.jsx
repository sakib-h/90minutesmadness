'use client';
import { motion } from 'framer-motion';

const Spinner = () => {
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
		<motion.div
			className="w-10 h-10 rounded-full border-[6px] border-x-secondary-color border-y-transparent bg-transparent"
			variants={containerVariants}
			initial="initial"
			animate="animate"
		/>
	);
};

export default Spinner;
