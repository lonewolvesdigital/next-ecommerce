"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/events", label: "Events" },
	{ href: "/shop", label: "Shop" },
	{ href: "/offer", label: "Offer" },
	{ href: "/blog", label: "Blog" },
];

const Menu = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Image
				src="/menu.png"
				alt="Open menu"
				width={28}
				height={28}
				className="cursor-pointer"
				onClick={() => setOpen(true)}
			/>
			{open && (
				<>
					<div
						className="fixed inset-0 bg-black bg-opacity-40 z-40"
						onClick={() => setOpen(false)}
					/>
					<aside className="fixed left-0 top-0 w-4/5 max-w-xs h-full bg-white z-50 flex flex-col p-6 shadow-j-1 animate-slide-in">
						<div className="flex items-center justify-between mb-8">
							<button
								aria-label="Close menu"
								onClick={() => setOpen(false)}
								className="p-2 order-2"
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
									<line x1="18" y1="6" x2="6" y2="18" />
									<line x1="6" y1="6" x2="18" y2="18" />
								</svg>
							</button>
							<Link
								href="/"
								onClick={() => setOpen(false)}
								className="order-1"
							>
								<Image
									src="/logo.jpg"
									alt="Jamila Beauty Logo"
									width={48}
									height={48}
									className="rounded-full object-cover"
								/>
							</Link>
						</div>
						<nav className="flex flex-col gap-6">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="text-lg font-medium text-gray-800 hover:text-primary transition-colors"
									onClick={() => setOpen(false)}
								>
									{link.label}
								</Link>
							))}
						</nav>
					</aside>
				</>
			)}
		</>
	);
};

export default Menu;
