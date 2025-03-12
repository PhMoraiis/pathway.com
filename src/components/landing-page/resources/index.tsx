"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
	{
		id: 1,
		title: "Say hello to Slices",
		description:
			"In Prismic, every component of a web page (what we call a Slice) is a reusable building block in our Page Builder, instead of a static part of a page.",
		color: "bg-primary-dslight",
	},
	{
		id: 2,
		title: "Build components locally with Slice Machine",
		description:
			"Slice Machine, Prismic's development tool, is where you build your Slices, versioning them as you go.",
		color: "bg-secondary-dslight dark:bg-primary-dsdark",
	},
	{
		id: 3,
		title: "Connect your Slices to Prismic to source the content",
		description:
			"As you build your components, Slice Machine will automatically define data models for your Slices. These data models allow content created in Prismic to connect seamlessly with your components via our API.",
		color: "bg-tertiary-ds dark:bg-secondary-dsdark",
	},
	{
		id: 4,
		title: "Ship your Slices to a custom page builder",
		description:
			"Once ready and tested, you can ship your Slices for your content team to use in a custom page builder. Now they can populate content independently in a cloud-based interface, ready for your next API call.",
		color: "bg-quinary-ds",
	},
];

export default function Resources() {
	const [activeStep, setActiveStep] = useState(0);

	return (
		<div className="py-16 px-4 md:py-36">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-lg font-medium mb-2">
						Como o Pathway funciona, em 4 passos
					</h2>
					<h1 className="text-4xl md:text-6xl font-coolvetica">
						Uma nova maneira de economizar
					</h1>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
					{steps.map((step, index) => (
						<motion.div
							key={step.id}
							onClick={() => setActiveStep(index)}
							className={`relative rounded-xl overflow-hidden border transition-all duration-500 cursor-pointer shadow-xl ${
								activeStep === index
									? `${step.color} text-accent-foreground`
									: "bg-[#1F1F1F] text-muted-foreground"
							}`}
							initial={{ opacity: 0.7, y: 20 }}
							animate={{
								opacity: activeStep === index ? 1 : 0.7,
								y: 0,
								scale: activeStep === index ? 1.03 : 1,
							}}
							transition={{ duration: 0.5 }}
						>
							<div className="p-6 flex flex-col h-full">
								<div
									className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors duration-500 ${
										activeStep === index ? "bg-accent-foreground" : "bg-ring/50"
									} ${activeStep === index ? "text-secondary" : "text-accent-foreground"}`}
								>
									<span className="font-bold">{step.id}</span>
								</div>
								<h3 className="text-xl font-lufgaMd mb-3">{step.title}</h3>
								<p className="mb-8">{step.description}</p>

								<div className="mt-auto h-40 relative">
									<AnimatePresence mode="wait">
										{activeStep === index && (
											<motion.div
												key={`svg-${step.id}`}
												initial={{ opacity: 0, scale: 0.8 }}
												animate={{ opacity: 1, scale: 1 }}
												exit={{ opacity: 0, scale: 0.8 }}
												transition={{ duration: 0.5 }}
												className="absolute inset-0 flex items-center justify-center"
											>
												{/* <step.SvgComponent /> */}
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
