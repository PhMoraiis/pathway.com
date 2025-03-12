import Image from "next/image";
import { Check, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PathwayLogo } from "@/components/pathway-logo";
import { StripeIcon } from "@/components/icons";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { ShineBorder } from "@/components/ui/shine-border";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Pricing() {
	return (
		<div className="py-16 px-4 md:py-36">
			<div className="max-w-7xl mx-auto">
				<div className="text-left mb-20 max-w-4xl">
					<Badge className="text-lg font-medium mb-4">
						Comece gratuitamente e atualize a qualquer momento.
					</Badge>
					<h1 className="text-4xl md:text-6xl font-coolvetica">Preços</h1>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 space-x-6 min-h-[60vh]">
					{/* Intro Card */}
					<Card className="bg-input/50 border-0 overflow-hidden relative py-12 flex justify-between">
						<div className="absolute inset-0 bg-gradient-to-t from-tertiary-ds via-transparent to-transparent z-0" />
						<CardHeader className="relative z-10">
							<h2 className="text-2xl font-lufgaMd">
								Assinaturas mensais e anuais
							</h2>
						</CardHeader>
						<CardContent className="relative z-10">
							<p className="text-muted-foreground mb-8">
								Planos flexiveis que cabem no seu bolso. Comece a economizar e
								se divertir com o Pathway!
							</p>
						</CardContent>
						<CardFooter className="relative z-10 mt-auto space-x-6">
							<div className="text-xs text-zinc-500 mb-4">
								<p>
									Gerenciamento de metas com Pathway, pagamento seguro com
									Stripe e a liberdade de cancelar sua assinatura a qualquer
									momento.
								</p>
							</div>
							<div className="flex items-center gap-2">
								<PathwayLogo width={30} height={30} />
								<span className="text-muted-foreground text-sm">/</span>
								<StripeIcon color="#111111" width={50} height={50} />
							</div>
						</CardFooter>
					</Card>

					{/* 2 Card */}
					<Card className="bg-input/50 border-0 relative overflow-hidden py-12 flex justify-between">
						<ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
						<div className="absolute inset-0 bg-gradient-to-t from-quaternary-ds via-transparent to-transparent z-0" />
						<CardHeader>
							<div className="flex items-baseline justify-between relative z-10">
								<div>
									<span className="text-2xl font-bold">R$29,99</span>
									<span className="text-zinc-500 ml-1">/mês</span>
								</div>
								<div className="flex items-center justify-end gap-2 mb-2">
									<div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
										<span
											className={cn(
												"absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
											)}
											style={{
												WebkitMask:
													"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
												WebkitMaskComposite: "destination-out",
												mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
												maskComposite: "subtract",
												WebkitClipPath: "padding-box",
											}}
										/>
										<AnimatedGradientText className="text-md font-lufga">
											Mais popular
										</AnimatedGradientText>
									</div>
								</div>
							</div>
						</CardHeader>
						<CardContent className="relative z-10">
							<div className="flex flex-col items-start justify-center gap-7">
								<div>
									<p className="text-muted-foreground mb-10 text-left">
										O plano ideal para fazer um teste completo da nossa
										plataforma! E economizar muitooo!
									</p>
								</div>
								<div>
									<h4 className="text-xs font-medium text-zinc-500 mb-4">
										BENEFÍCIOS:
									</h4>
									<ul className="space-y-3">
										{[
											"Controle de gastos e ganhos ilimitados",
											"Metas ilimitadas",
											"Relatórios ilimitados",
											"Badge Exclusiva",
										].map((feature, i) => (
											// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											<li key={i} className="flex items-center gap-2">
												<div className="flex items-center justify-center w-5 h-5 rounded-full bg-zinc-800">
													<Check className="w-3 h-3" />
												</div>
												<span className="text-muted-foreground text-sm">
													{feature}
												</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</CardContent>
						<CardFooter className="pt-4 relative z-10">
							<Button className="w-full bg-zinc-800 hover:bg-zinc-700 border-0">
								Assinar agora
							</Button>
						</CardFooter>
					</Card>

					{/* Design + Dev Card */}
					<Card className="bg-input/50 border-0 overflow-hidden relative py-12 flex justify-between">
						<div className="absolute inset-0 bg-gradient-to-t from-quinary-ds/50 via-transparent to-transparent z-0" />
						<CardHeader>
							<div className="flex items-baseline justify-between relative z-10">
								<div>
									<span className="text-2xl font-bold">R$19,99</span>
									<span className="text-zinc-500 ml-1">/ano</span>
								</div>
								<div className="flex items-center justify-end gap-2 mb-2">
									<Badge className="text-lg px-4 font-lufga rounded-full">
										Melhor preço
									</Badge>
								</div>
							</div>
						</CardHeader>
						<CardContent className="relative z-10">
							<div className="flex flex-col items-start justify-center">
								<div>
									<p className="text-muted-foreground mb-10 text-left">
										Comece agora mesmo economizando no nosso plano anual. E
										fique longe de preocupações por um bom tempo!
									</p>
								</div>
								<div>
									<h4 className="text-xs font-medium text-zinc-500 mb-4">
										BENEFÍCIOS:
									</h4>
									<ul className="space-y-3">
										{[
											"Controle de gastos e ganhos ilimitados",
											"Metas ilimitadas",
											"Relatórios ilimitados",
											"Badge Exclusiva",
										].map((feature, i) => (
											// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											<li key={i} className="flex items-center gap-2">
												<div className="flex items-center justify-center w-5 h-5 rounded-full bg-zinc-800">
													<Check className="w-3 h-3" />
												</div>
												<span className="text-muted-foreground text-sm">
													{feature}
												</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</CardContent>
						<CardFooter className="pt-4 relative z-10">
							<Button className="w-full bg-zinc-800 hover:bg-zinc-700 border-0">
								Assinar agora
							</Button>
						</CardFooter>
					</Card>
				</div>
			</div>
		</div>
	);
}
