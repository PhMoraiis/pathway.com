import { PathwayLogo } from "@/components/pathway-logo";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTA = () => {
	return (
		<div className="py-16 px-4 md:py-16">
			<div className="max-w-7xl mx-auto sm:px-6 lg:px-12 py-12 md:py-10 bg-primary-dslight rounded-xl shadow-xl flex items-center justify-center">
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="max-w-xl flex flex-col items-center justify-center space-y-8 z-10 text-center"
				>
					<PathwayLogo width={50} height={50} />
					<h1 className="text-6xl font-coolvetica text-primary">
						Pronto para começar a cumprir suas metas?
					</h1>
					<div className="max-w-xl mt-2">
						<p>
							Junte se a nós e comece a mudar sua vida financeira, com o Pathway você pode alcançar suas metas de forma simples e divertida.
						</p>
					</div>
					<div>
						<Button
							size="lg"
							className="bg-primary text-secondary py-6 hover:bg-secondary hover:text-primary transition-all duration-200 ease-in rounded-full cursor-pointer text-md font-semibold shadow-lg"
						>
							Comece hoje
						</Button>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default CTA;
