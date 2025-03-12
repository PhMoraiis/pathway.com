import Link from "next/link";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import { PathwayLogo } from "@/components/pathway-logo";

export default function Footer() {
	return (
		<footer className="py-16 px-4 md:py-16">
			<div className="max-w-7xl mx-auto sm:px-6 lg:px-12 py-12 md:py-10">
				<div className="flex flex-col md:flex-row justify-between">
					{/* Logo and tagline - left side */}
					<div className="mb-8 md:mb-0 md:max-w-xs">
						<div className="flex items-center space-x-2 mb-4">
							<PathwayLogo width={35} height={35} />
							<h1 className="text-3xl font-lufga whitespace-nowrap leading-normal tracking-tight">
								Pathway
							</h1>
						</div>
						<p className="text-muted-foreground text-sm leading-relaxed">
							Empowering organizations to harness the full potential of
							artificial intelligence for sustainable growth.
						</p>
					</div>

					{/* Navigation columns - right side */}
					<div className="flex gap-16">
						{/* Menu column */}
						<div>
							<h3 className="text-sm font-medium mb-4">Menu</h3>
							<nav className="flex flex-col space-y-2 text-muted-foreground text-sm">
								<Link href="#" className="hover:text-white transition-colors">
									Sobre
								</Link>
								<Link href="#" className="hover:text-white transition-colors">
									Funcionalidades
								</Link>
								<Link href="#" className="hover:text-white transition-colors">
									Preços
								</Link>
								<Link href="#" className="hover:text-white transition-colors">
									Recursos
								</Link>
							</nav>
						</div>

						{/* Legal column */}
						<div>
							<h3 className="text-sm font-medium mb-4">Legal</h3>
							<nav className="flex flex-col space-y-2 text-muted-foreground text-sm">
								<Link href="#" className="hover:text-white transition-colors">
									Termos de Serviço
								</Link>
								<Link href="#" className="hover:text-white transition-colors">
									Política de Privacidade
								</Link>
								<Link href="#" className="hover:text-white transition-colors">
									Uso de Cookies
								</Link>
							</nav>

							{/* Social icons */}
							<div className="flex space-x-4 mt-6">
								<Link
									href="#"
									className="text-primary-dsdark hover:text-white transition-colors"
								>
									<Twitter size={18} />
									<span className="sr-only">Twitter</span>
								</Link>
								<Link
									href="#"
									className="text-primary-dsdark hover:text-white transition-colors"
								>
									<Linkedin size={18} />
									<span className="sr-only">LinkedIn</span>
								</Link>
								<Link
									href="#"
									className="text-primary-dsdark hover:text-white transition-colors"
								>
									<Instagram size={18} />
									<span className="sr-only">Instagram</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
