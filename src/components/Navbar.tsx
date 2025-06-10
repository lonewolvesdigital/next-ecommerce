import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import dynamic from "next/dynamic";

const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/collection", label: "Collection" },
	{ href: "/shop", label: "Shop" },
	{ href: "/offer", label: "Offer" },
	{ href: "/blog", label: "Blog" },
];

const Navbar = ({
	logoSrc = "/logo-new.svg",
	brandName = "Jamila Beauty",
}: {
	logoSrc?: string;
	brandName?: string;
}) => {
	return (
		<header className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex items-center bg-white shadow-j-1 z-30">
			{/* MOBILE */}
			<div className="h-full flex items-center justify-center md:hidden w-full">
				<Link href="/" className="flex items-center gap-2">
					<Image
						src="/logo.jpg"
						alt="logo"
						width={48}
						height={48}
						className="rounded-full object-cover"
					/>
					<span className="ml-2 font-playfair text-base font-semibold">
						Jamila Beauty Store
					</span>
				</Link>
			</div>
			{/* DESKTOP */}
			<div className="hidden md:flex items-center w-full" style={{ minHeight: "96px" }}>
				{/* LEFT: Nav Links */}
				<nav className="flex gap-8 items-center flex-1">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="navbar-link has-after font-medium text-j-7 hover:text-primary transition-colors"
						>
							{link.label}
						</Link>
					))}
				</nav>
				{/* CENTER: Logo and Store Name */}
				<div className="flex items-center gap-4 justify-center" style={{ minHeight: "96px", marginLeft: '10%' }}>
					<Image
						src="/logo.jpg"
						alt="logo"
						width={96}
						height={96}
						className="rounded-full object-cover"
					/>
					<span className="font-playfair text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
						Jamila Beauty Store
					</span>
				</div>
				{/* RIGHT: Header Actions */}
				<div className="flex-1 flex justify-end items-center">
					<NavIcons />
				</div>
			</div>
		</header>
	);
};

export default Navbar;
