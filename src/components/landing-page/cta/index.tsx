import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTA = () => {
	return (
		<div className="py-16 px-4 md:py-16">
			<div className="max-w-7xl mx-auto sm:px-6 lg:px-12 py-12 md:py-8 bg-primary-dslight rounded-xl shadow-xl flex flex-col justify-center items-start">
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="mb-16 max-w-xl flex flex-col space-y-6"
				>
					<h1 className="text-6xl font-coolvetica">
						Ready to unlock the power of AI?
					</h1>
					<div className="max-w-xl">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quos
							soluta iusto accusamus amet, quaerat porro, cupiditate vitae.
						</p>
					</div>
					<div className="">
						<Button>Get Started</Button>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default CTA;
