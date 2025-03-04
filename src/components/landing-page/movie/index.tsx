import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import React from "react";

const Movie = () => {
	return (
		<div className="relative flex items-center justify-center mb-12">
			<HeroVideoDialog
				className="block dark:hidden"
				animationStyle="from-center"
				videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
				thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
				thumbnailAlt="Hero Video"
			/>
			<HeroVideoDialog
				className="hidden dark:block"
				animationStyle="from-center"
				videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
				thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
				thumbnailAlt="Hero Video"
			/>
			<div className="pointer-events-none absolute inset-x-0 -bottom-12 h-1/3 bg-gradient-to-t from-background via-background to-transparent lg:h-1/4" />
		</div>
	);
};

export default Movie;
