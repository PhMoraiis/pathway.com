"use client";

import Customers from "@/components/landing-page/customers";
import Features from "@/components/landing-page/features";
import Header from "@/components/landing-page/header";
import Hero from "@/components/landing-page/hero";
import Movie from "@/components/landing-page/movie";
import Numbers from "@/components/landing-page/numbers";

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Movie />
			<Customers />
			<Features />
			<Numbers />
		</>
	);
}
