"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
	{
		id: 1,
		title: "Elegant Solitaire Collection",
		description: "New Arrivals",
		img: "/ChatGPT Image May 23, 2025, 03_02_43 PM.png",
		url: "/shop?cat=solitaire",
		bg: "bg-gradient-to-r from-gray-900 to-black",
	},
	{
		id: 2,
		title: "Luxury Ring Collection",
		description: "Discover Timeless Elegance",
		img: "/ChatGPT Image May 23, 2025, 03_08_32 PM.png",
		url: "/shop?cat=rings",
		bg: "bg-gradient-to-r from-amber-950 to-black",
	},
	{
		id: 3,
		title: "Special Occasions",
		description: "Engagement & Wedding",
		img: "/ChatGPT Image May 23, 2025, 03_17_40 PM.png",
		url: "/shop?cat=wedding",
		bg: "bg-gradient-to-r from-teal-900 to-teal-950",
	},
];

const Slider = () => {
	const [current, setCurrent] = useState(0);
	const slideCount = slides.length;
	// Auto-slide logic
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev === slideCount - 1 ? 0 : prev + 1));
		}, 5000);
		return () => clearInterval(interval);
	}, [slideCount]);

	// Manual navigation handlers
	const goToPrev = () =>
		setCurrent((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
	const goToNext = () =>
		setCurrent((prev) => (prev === slideCount - 1 ? 0 : prev + 1));

	return (
		<div className="h-[calc(100vh-80px)] overflow-hidden relative flex items-center">
			{/* Navigation Buttons - Jamila 1.0 style */}
			<button
				aria-label="Previous slide"
				onClick={goToPrev}
				className="slider-nav-btn left-6 md:left-10 absolute top-1/2 -translate-y-1/2 z-10 bg-teal-500 text-white w-12 h-12 md:w-[50px] md:h-[50px] flex items-center justify-center rounded-full shadow-j-1 transition-colors duration-200 hover:bg-white hover:text-teal-500 focus:bg-white focus:text-teal-500 border-0 outline-none"
				style={{ boxShadow: "0 8px 16px rgba(0,0,0,0.15)" }}
			>
				<svg
					width="24"
					height="24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<polyline points="15 18 9 12 15 6" />
				</svg>
			</button>
			<button
				aria-label="Next slide"
				onClick={goToNext}
				className="slider-nav-btn right-6 md:right-10 absolute top-1/2 -translate-y-1/2 z-10 bg-teal-500 text-white w-12 h-12 md:w-[50px] md:h-[50px] flex items-center justify-center rounded-full shadow-j-1 transition-colors duration-200 hover:bg-white hover:text-teal-500 focus:bg-white focus:text-teal-500 border-0 outline-none"
				style={{ boxShadow: "0 8px 16px rgba(0,0,0,0.15)" }}
			>
				<svg
					width="24"
					height="24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<polyline points="9 6 15 12 9 18" />
				</svg>
			</button>
			{/* Slides */}
			<div
				className="w-max h-full flex transition-all ease-in-out duration-1000"
				style={{ transform: `translateX(-${current * 100}vw)` }}
			>
				{slides.map((slide) => (
					<div
						className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
						key={slide.id}
					>						{/* TEXT CONTAINER */}
						<div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
							<h2 className="text-xl lg:text-3xl 2xl:text-5xl text-amber-400">
								{slide.description}
							</h2>
							<h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold text-teal-400">
								{slide.title}
							</h1>
							<Link href={slide.url}>
								<button className="rounded-md bg-teal-500 text-white py-3 px-4 hover:bg-teal-600 transition-colors">
									SHOP NOW
								</button>
							</Link>
						</div>
						{/* IMAGE CONTAINER */}
						<div className="h-1/2 xl:w-1/2 xl:h-full relative">
							<Image
								src={slide.img}
								alt=""
								fill
								sizes="100%"
								className="object-cover"
							/>
						</div>
					</div>
				))}
			</div>
			{/* Dots */}
			<div className="absolute m-auto left-1/2 bottom-8 flex gap-4 -translate-x-1/2">
				{slides.map((slide, index) => (
					<div
						className={`w-3 h-3  rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
							current === index ? "scale-150" : ""
						}`}
						key={slide.id}
						onClick={() => setCurrent(index)}
					>
						{current === index && (
							<div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Slider;
