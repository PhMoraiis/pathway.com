import { AvatarCircles } from "@/components/ui/avatar-circles";
import React from "react";

const Customers = () => {
	const avatars = [
		{
			imageUrl: "https://avatars.githubusercontent.com/u/16860528",
		},
		{
			imageUrl: "https://avatars.githubusercontent.com/u/20110627",
		},
		{
			imageUrl: "https://avatars.githubusercontent.com/u/106103625",
		},
		{
			imageUrl: "https://avatars.githubusercontent.com/u/59228569",
		},
		{
			imageUrl: "https://avatars.githubusercontent.com/u/59442788",
		},
	];

	return (
		<div className="flex flex-col items-center justify-center text-center py-20">
			<h2 className="text-4xl sm:text-5xl font-coolvetica text-gray-900 leading-tight">
				Mais de{" "}
				<span className="inline-flex items-center">
					<AvatarCircles numPeople={99} avatarUrls={avatars} />
				</span>{" "}
				usuários <br />
				<span>já alcançaram suas metas financeiras</span>
			</h2>
			<p className="mt-4 max-w-2xl text-gray-600 text-lg">
				Junte-se a um montão de pessoas que utilizam nossa plataforma para
				definir, acompanhar e atingir seus objetivos financeiros de forma
				simples e divertida.
			</p>
		</div>
	);
};

export default Customers;
