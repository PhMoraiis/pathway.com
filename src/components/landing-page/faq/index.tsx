"use client";

import type React from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "./accordion";
import { Separator } from "@/components/ui/separator";

const faqItems = [
	{
		id: "faq-1",
		question: "How quickly can I access the funds?",
		answer:
			"Once approved, you can usually access your funds within 24-48 hours. Our streamlined process ensures that you get the capital you need as quickly as possible to keep your business moving forward.",
	},
	{
		id: "faq-2",
		question: "What can I use the funding for?",
		answer:
			"Our funding is flexible and can be used for various business purposes including inventory purchase, equipment upgrades, marketing campaigns, hiring staff, expanding your location, or managing cash flow during seasonal fluctuations.",
	},
	{
		id: "faq-3",
		question: "How do I know that my company is a good match?",
		answer:
			"We work with businesses across many industries that have been operating for at least 6 months and generate a minimum of $10,000 in monthly revenue. Our team can quickly assess if your business qualifies during an initial consultation.",
	},
	{
		id: "faq-4",
		question: "Can I pay to suppliers abroad?",
		answer:
			"Yes, our funding solutions support international payments to suppliers. We offer competitive exchange rates and secure transfer methods to ensure your global business operations run smoothly.",
	},
	{
		id: "faq-5",
		question: "What are the repayment terms?",
		answer:
			"Our repayment terms are flexible and tailored to your business cash flow. We offer options ranging from 3 to 18 months, with the ability to choose between fixed payments or a percentage of your daily sales.",
	},
	{
		id: "faq-6",
		question: "Is there a penalty for early repayment?",
		answer:
			"No, we encourage early repayment and do not charge any penalties. In fact, paying early may reduce your overall cost of capital, as our pricing is based on the time you use the funds.",
	},
	{
		id: "faq-7",
		question: "What documents do I need to apply?",
		answer:
			"To start the application process, we typically need your last 3 months of bank statements, basic business information, and a simple one-page application. Additional documentation may be requested based on your specific situation.",
	},
];

export default function FAQ() {
	return (
		<div className="py-16 px-4 md:py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="mb-16"
				>
					<h1 className="text-6xl font-coolvetica">FAQs</h1>
				</motion.div>
				<motion.div
					className="md:col-span-8 lg:col-span-9"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<Accordion
						className="flex w-full flex-col space-y-4"
						transition={{ type: "spring", stiffness: 120, damping: 20 }}
						variants={{
							expanded: {
								opacity: 1,
								scale: 1,
							},
							collapsed: {
								opacity: 0,
								scale: 0.7,
							},
						}}
					>
						{faqItems.map((item) => (
							<AccordionItem key={item.id} value={item.id} className="py-2">
								<AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50 text-lg">
									<div className="flex items-center">
										<ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50" />
										<div className="ml-2 text-zinc-950 dark:text-zinc-50">
											{item.question}
										</div>
									</div>
								</AccordionTrigger>
								<AccordionContent className="origin-left max-w-4xl">
									<p className="pl-6 pr-2 text-muted-foreground">
										{item.answer}
									</p>
								</AccordionContent>
								<Separator className="mt-6" />
							</AccordionItem>
						))}
					</Accordion>
				</motion.div>
			</div>
		</div>
	);
}
