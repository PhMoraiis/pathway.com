import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { AvatarCircles } from "../ui/avatar-circles";

export default function Hero() {
	return (
		<section className="max-w-screen-2xl mx-auto flex items-center justify-center p-32 mt-16 relative rounded-3xl">
			<div className="flex items-center justify-center flex-col max-w-screen-lg mx-auto pb-4 px-4 sm:px-8 space-y-8">
				<div className="text-center items-center justify-center flex flex-col space-y-8 max-w-screen-md">
					<a
						href="/"
						className="inline-flex justify-between space-x-4 items-center rounded-md p-1 border text-sm font-medium duration-150 bg-background hover:bg-border/20 shadow-lg px-1"
					>
						<span className="inline-block rounded-sm px-3 py-1 bg-primary-dslight text-text">
							Novo!
						</span>
						<p className="flex items-center">
							Leia a postagem de lançamento aqui
							<ArrowRight className="h-4 w-4 ml-0.5" />
						</p>
					</a>
					<h1 className="text-7xl font-coolvetica">
						A Plataforma Financeira Que Muda Seu Caminho
					</h1>
					<p className="text-md font-semibold text-muted-foreground max-w-xl">
						Gerencie suas finanças de forma simples. Alcance suas metas,
						acompanhe ganhos, controle gastos e veja seu progresso em tempo
						real.
					</p>
				</div>
				<div className="flex flex-col items-center justify-center space-y-2 mt-4">
					<Button
						size="lg"
						className="bg-primary text-secondary py-6 hover:bg-primary-dslight hover:text-primary duration-200 ease-in rounded-full cursor-pointer text-md font-semibold shadow-lg"
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
