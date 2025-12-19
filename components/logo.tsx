"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Logo = ({ className }: { className?: string }) => {
	const [showHat, setShowHat] = useState(false);

	useEffect(() => {
		const now = new Date();
		// Show only in December (Month index 11)
		if (now.getMonth() === 11) {
			setShowHat(true);
		}
	}, []);

	return (
		<div
			className={cn(
				"flex justify-center flex-row items-center gap-2",
				className,
			)}
		>
			<div className="relative">
				{showHat && (
					<svg
						viewBox="0 0 28 28"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="absolute -top-3.5 -left-1.5 z-10 w-6 h-6 -rotate-[22deg] transform"
						aria-hidden="true"
					>
						{/* Pom-pom - moved to the drooping tip */}
						<circle cx="3" cy="11" r="2.5" className="fill-white" />
						{/* Hat Body - Drooping to the left */}
						<path
							d="M19 17 C20 12 15 2 8 5 C 5 6 3 9 4 11 C 5 12 4 17 4 17 L19 17 Z"
							className="fill-red-600"
						/>
						{/* Brim - unchanged */}
						<path
							d="M2 16C2 15.4477 2.44772 15 3 15H20C20.5523 15 21 15.4477 21 16V18C21 18.5523 20.5523 19 20 19H3C2.44772 19 2 18.5523 2 18V16Z"
							className="fill-white"
						/>
					</svg>
				)}
				<Image
					src="/logos/base7-submark.svg"
					alt="Base 7 Logo - Fast App Development in 10 Days"
					width={14}
					height={14}
					className="mt-0.5 dark:invert"
					priority
				/>
			</div>
		</div>
	);
};
