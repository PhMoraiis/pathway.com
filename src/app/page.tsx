"use client";

import Customers from "@/components/landing-page/customers";
import { Header } from "@/components/landing-page/header";
import Hero from "@/components/landing-page/hero";
import Movie from "@/components/landing-page/movie";

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Movie />
			<Customers />
		</>
	);
}
