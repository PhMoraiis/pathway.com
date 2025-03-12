import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	ArrowLeft,
	ArrowRight,
	CreditCard,
	Building,
	ArrowUp,
} from "lucide-react";

export default function Features() {
	return (
		<div className="py-16 px-4 md:py-36">
			<div className="max-w-7xl mx-auto">
				{/* Header with navigation */}
				<div className="flex justify-between items-center mb-8">
					<h1 className="text-3xl md:text-6xl font-coolvetica">
						Gerencie, gastos e ganhos
						<br />
						em um único lugar
					</h1>
				</div>

				{/* Main content grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
					{/* Left section - Bill management */}
					<div className="bg-input/50 shadow-md rounded-xl p-6 text-white relative overflow-hidden">
						<div className="relative z-10">
							<div className="bg-secondary p-2 rounded-lg w-10 h-10 flex items-center justify-center mb-4 shadow-lg">
								<div className="text-primary-dslight font-bold text-xl text-center">
									⊕
								</div>
							</div>

							{/* Bill examples */}
							<div className="mb-6 space-y-4 ">
								<div className="bg-white p-4 rounded-lg shadow-xl">
									<div className="flex justify-between items-center mb-1">
										<div className="flex items-center">
											<span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mr-2">
												Despesa
											</span>
										</div>
									</div>
									<div className="flex justify-between">
										<span className="font-medium text-primary dark:text-secondary">
											Alex Noerdin
										</span>
										<span className="font-medium text-primary dark:text-secondary">
											R$ 1.850,00
										</span>
									</div>
									<div className="text-muted-foreground text-sm">Fev 23, 2024</div>
								</div>

								<div className="bg-white p-4 rounded-lg shadow-xl">
									<div className="flex justify-between items-center mb-1">
										<div className="flex items-center">
											<span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-2">
												Ganho
											</span>
										</div>
									</div>
									<div className="flex justify-between">
										<span className="font-medium text-primary dark:text-secondary">
											Ricky Smith
										</span>
										<span className="font-medium text-primary dark:text-secondary">
											R$ 2.450,00
										</span>
									</div>
									<div className="text-muted-foreground text-sm">Fev 20, 2024</div>
								</div>
							</div>

							<h3 className="text-xl font-bold mb-2 text-primary">
								Easily add and manage business bills in one place
							</h3>
						</div>
					</div>

					{/* Middle section - Approvals */}
					<div className="bg-primary-dslight rounded-xl p-6 text-white relative overflow-hidden">
						<div className="relative z-10">
							<div className="bg-secondary dark:bg-primary/80 p-2 rounded-lg w-10 h-10 flex items-center justify-center mb-4 shadow-lg">
								<div className="text-primary-dslight font-bold text-xl text-center">
									⊕
								</div>
							</div>

							<div className="bg-secondary/20 backdrop-blur-sm p-4 rounded-lg mb-6 shadow-xl">
								<h4 className="font-medium mb-2">Request Approval</h4>
								<p className="text-sm mb-3 text-secondary/95 dark:text-primary/95">
									This invoice requires approval from someone before it can be
									paid
								</p>
								<div className="flex gap-2 mb-3">
									<Button
										size="sm"
										className="bg-primary hover:bg-secondary hover:text-primary duration-200 ease-in transition-all cursor-pointer"
									>
										Approve
									</Button>
									<Button
										size="sm"
										variant="outline"
										className="text-primary bg-background shadow-md cursor-pointer hover:bg-primary hover:text-secondary duration-200 ease-in transition-all border-none"
									>
										Decline
									</Button>
								</div>
								<div className="flex items-center gap-2 text-sm">
									<input
										type="checkbox"
										id="none"
										className="appearance-none w-3 h-3 rounded-full bg-primary-dsdark cursor-pointer hover:bg-tertiary-ds checked:bg-tertiary-ds transition-all duration-200 ease-in-out"
									/>
									<span>Enable Approvals</span>
								</div>
							</div>

							<h3 className="text-xl font-bold mb-2">
								Set approvals and controls
							</h3>
							<p className="text-secondary/95 dark:text-primary/95 text-sm">
								Easily set up custom approval workflows to increase control and
								minimize any potential overspend or fraud.
							</p>
						</div>
					</div>

					{/* Right section - Payment methods */}
					<div className="bg-input/75 shadow-md rounded-xl p-6 text-white relative overflow-hidden">
						<div className="relative z-10">
							<div className="bg-secondary p-2 rounded-lg w-10 h-10 flex items-center justify-center mb-4 shadow-lg">
								<div className="text-primary-dslight font-bold text-xl text-center">
									⊕
								</div>
							</div>

							<div className="p-4 space-y-4 mb-6">
								<div className="bg-white p-4 rounded-lg flex items-center justify-between shadow-xl">
									<div className="flex items-center gap-3">
										<div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
											<div className="w-3 h-3 rounded-full bg-muted-foreground text-muted-foreground" />
										</div>
										<div className="w-8 h-8 flex items-center">
											<div className="flex items-center justify-center w-8 h-5 bg-red-500 rounded-md">
												<div className="w-4 h-4 bg-yellow-400 rounded-full opacity-80" />
											</div>
										</div>
										<div>
											<div className="font-medium text-[#18181b]">
												Mastercard
											</div>
											<div className="text-muted-foreground text-xs">Expires 12/23</div>
										</div>
									</div>
								</div>

								<div className="bg-white p-4 rounded-lg flex items-center justify-between shadow-xl">
									<div className="flex items-center gap-3">
										<div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
											<div className="w-3 h-3 rounded-full bg-gray-100" />
										</div>
										<div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-md">
											<Building className="h-4 w-4 text-blue-600" />
										</div>
										<div>
											<div className="font-medium text-[#18181b]">
												Bank Transfer
											</div>
											<div className="text-muted-foreground text-xs">
												ACH (free, 3-5 days)
											</div>
										</div>
									</div>
								</div>
							</div>

							<h3 className="text-xl font-bold mb-2 text-primary">
								Set approvals and controls
							</h3>
							<p className="text-primary/80 text-sm">
								Easily set up custom approval workflows to increase control and
								minimize any potential overspend or fraud.
							</p>
						</div>
					</div>
				</div>

				{/* Stats section */}
				<div className="flex justify-around space-x-6">
					{[
						{ value: "50%", label: "Effective than before" },
						{ value: "30%", label: "Easier to Use" },
						{ value: "28%", label: "Transactions Success" },
						{ value: "70%", label: "Problem Solved" },
					].map((stat, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<div key={index} className="flex flex-col items-center">
							<div className="flex items-center text-2xl md:text-6xl font-bold mb-1">
								<ArrowUp className="h-full w-20 mr-1" />
								{stat.value}
							</div>
							<div className="text-muted-foreground text-sm text-center">
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
