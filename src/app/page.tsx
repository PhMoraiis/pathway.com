"use client";

import CTA from "@/components/landing-page/cta";
import Customers from "@/components/landing-page/customers";
import FAQ from "@/components/landing-page/faq";
import Resources from "@/components/landing-page/resources";
import Footer from "@/components/landing-page/footer";
import Header from "@/components/landing-page/header";
import Hero from "@/components/landing-page/hero";
import Movie from "@/components/landing-page/movie";
import Features from "@/components/landing-page/features";

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Movie />
			<Customers />
			<Features />
			<Resources />
			<FAQ />
			<CTA />
			<Footer />
		</>
	);
}
