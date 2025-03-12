import { ArrowRight, ChevronRight, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import { motion } from "motion/react";

export default function Hero() {
	return (
		<section className="flex items-center justify-center py-32 rounded-3xl">
			<div className="flex items-center justify-center flex-col max-w-screen-xl mx-auto pb-4 px-4 sm:px-8 space-y-8">
				<div className="text-center items-center justify-center flex flex-col space-y-8 max-w-screen-md">
					<div className="">
						<a
							href="/"
							className="inline-flex justify-center space-x-4 items-center rounded-md p-1 border text-sm font-medium duration-150 bg-background hover:bg-border/20 shadow-lg px-1 relative"
						>
							<span className="inline-block rounded-sm px-2 py-2.5 lg:px-3 lg:py-1 md:px-3 md:py-1 bg-primary-dslight text-xs lg:text-md">
								Novo!
							</span>
							<p className="flex items-center text-xs lg:text-md">
								Leia a postagem de lançamento aqui
								<ArrowRight className="h-6 w-6 ml-0.5 lg:h-4 lg:w-4 md:h-4 md:w-4" />
							</p>
							<BorderBeam
								duration={6}
								className="from-transparent via-primary-dsdark to-transparent"
							/>
						</a>
					</div>
					<h1 className="text-5xl md:text-6xl lg:text-7xl font-coolvetica">
						A Plataforma Financeira Que Muda Seu Caminho
					</h1>
					<p className="text-md font-semibold text-muted-foreground max-w-xl mt-4 text-md">
						Gerencie suas finanças de forma simples. Alcance suas metas,
						acompanhe ganhos, controle gastos e veja seu progresso em tempo
						real.
					</p>
				</div>
				<div className="flex flex-col items-center justify-center space-y-2 mt-4">
					<Button
						size="lg"
						className="bg-primary text-secondary py-6 hover:bg-primary-dslight hover:text-primary transition-all duration-200 ease-in rounded-full cursor-pointer text-md font-semibold shadow-lg"
					>
						Comece gratuitamente
						<ChevronRight strokeWidth={3} />
					</Button>
					<span className="bg-gradient-to-b from-primary to-muted-foreground bg-clip-text text-sm font-normal text-transparent dark:from-white dark:to-neutral-60">
						Aproveite 7 dias grátis!
					</span>
				</div>
			</div>
		</section>
	);
}
