"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, Github, TwitterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { focusRing } from "./styles";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";
import { PathwayLogo } from "@/components/pathway-logo";
import ArrowButton from "@/components/arrow-button";

export const Header = () => {
	const { scrolled } = useScrolled({ initial: false });

	return (
		<header
			className={cn(
				"sticky top-0 z-50 flex items-center justify-center h-14 rounded-md max-md:border-b md:h-16 mt-4",
				scrolled && "pointer-events-none",
			)}
		>
			<div className="container flex items-center justify-center">
				{/* Desktop Nav */}
				<div className="hidden w-full items-center justify-between md:flex">
					<div className="flex items-center justify-center">
						<Link
							href="/"
							className={cn(
								focusRing(),
								"flex items-center space-x-2 rounded opacity-100 transition-[opacity,transform] duration-300 ease-out",
								scrolled && "pointer-events-none -translate-x-2 opacity-0",
							)}
							aria-hidden={scrolled}
						>
							<PathwayLogo width={35} height={35} />
							<div className="font-josephin whitespace-nowrap font-bold leading-normal tracking-tighter">
								Pathway
							</div>
						</Link>
					</div>
					<div className="absolute lg:left-1/2 lg:-translate-x-1/2 flex justify-center md:left-1/3 md:-translate-x-1/3 md:text-sm">
						<div
							className={cn(
								"relative flex items-center overflow-hidden rounded-md bg-transparent px-4 transition-[padding,background-color] duration-300 ease-out",
								scrolled &&
									"pointer-events-auto bg-bg-muted pl-14 shadow-xl bg-background/100",
							)}
						>
							<Link
								href="/"
								className={cn(
									focusRing(),
									"pointer-events-none absolute -translate-x-14 rounded opacity-0 transition-[opacity,transform] duration-300 ease-out",
									scrolled && "-translate-x-10 opacity-100",
								)}
								aria-hidden={!scrolled}
								tabIndex={scrolled ? undefined : -1}
							>
								<PathwayLogo width={25} height={25} />
							</Link>
							<Nav items={nav.links} />
						</div>
					</div>
					<div
						className={cn(
							"flex items-center justify-center space-x-2 opacity-100 transition-[opacity,transform] duration-300 ease-out",
							scrolled && "pointer-events-none translate-x-2 opacity-0",
						)}
						aria-hidden={scrolled}
						tabIndex={scrolled ? -1 : undefined}
					>
						<Link href="/auth">
							<ArrowButton />
						</Link>
						<Link href="/auth">
							<Button
								aria-label="Login"
								className="bg-background border text-sm font-medium lg:h-10 lg:px-6 text-primary rounded-full shadow-md cursor-pointer hover:bg-primary hover:text-secondary duration-200 ease-in transition-all hover:border-primary md:text-sm md:px-4 md:h-8"
							>
								Entrar
							</Button>
						</Link>
					</div>
				</div>
				{/* Mobile nav */}
				<div className="mx-auto items-center flex w-full justify-between gap-4 md:hidden px-4">
					<Link
						href="/"
						className={cn(
							focusRing(),
							"flex items-center justify-center space-x-2 rounded transition-opacity hover:opacity-80",
						)}
					>
						<PathwayLogo width={35} height={35} />
						<div className="mt-1 font-bold leading-normal tracking-tighter">
							Pathway
						</div>
					</Link>
					<div className="flex items-center justify-center space-x-4">
						<Link href="/auth">
							<ArrowButton />
						</Link>
						<Drawer>
							<DrawerTrigger asChild>
								<Button
									variant="ghost"
									aria-label="Open menu"
									className="cursor-pointer"
								>
									<MenuIcon />
								</Button>
							</DrawerTrigger>
							<DrawerContent>
								<Nav
									direction="col"
									items={[{ label: "Home", href: "/" }, ...nav.links]}
									onNavItemClick={close}
								/>
							</DrawerContent>
						</Drawer>
					</div>
				</div>
			</div>
		</header>
	);
};

interface NavItem {
	label: string;
	href?: string;
}

interface NavProps {
	items: NavItem[];
	direction?: "col" | "row";
	onNavItemClick?: () => void;
}

const nav = {
	links: [
		{
			label: "Sobre",
			href: "/about",
		},
		{
			label: "Funcionalidades",
			href: "/features",
		},
		{
			label: "Preços",
			href: "/pricing",
		},
		{
			label: "Recursos",
			href: "/resources",
		},
	],
};

const Nav = (props: NavProps) => {
	const { items, direction = "row", onNavItemClick } = props;
	const pathname = usePathname();

	return (
		<nav
			className={cn("flex items-center justify-center gap-0 sm:gap-2", {
				"flex-col gap-2": direction === "col",
			})}
		>
			{items.map(
				(item, index) =>
					item.href && (
						<Link
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							className={cn(
								focusRing(),
								"flex items-center justify-center gap-2 rounded px-4 py-1 text-sm font-medium text-text/90 transition-colors hover:text-accent-foreground ",
								pathname.startsWith(item.href) &&
									item.href !== "/" &&
									"bg-foreground/10 text-fg",
								direction === "row" && "text-md w-full py-2",
							)}
							href={item.href}
							onClick={onNavItemClick}
						>
							{item.href === "/" && <PathwayLogo width={30} height={30} />}
							<span className="relative after:absolute after:bg-neutral-400 after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
								{item.label}
							</span>
						</Link>
					),
			)}
		</nav>
	);
};
