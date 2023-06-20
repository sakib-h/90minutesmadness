'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
	const containerVariants = {
		initial: {
			rotate: 0,
		},
		animate: {
			rotate: 360,

			transition: {
				duration: 1.3,
				delay: 0.5,
				repeat: Infinity,
				repeatType: 'loop',
			},
		},
	};

	return (
		<div className="flex justify-center items-center h-screen overflow-hidden">
			<motion.div
				variants={containerVariants}
				initial="initial"
				animate="animate">
				<Image
					src="/assets/images/football.svg"
					alt="Football"
					width={100}
					height={100}
				/>
			</motion.div>
		</div>
	);
};

export default LoadingScreen;
