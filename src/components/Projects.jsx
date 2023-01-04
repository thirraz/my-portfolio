import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { useEffect, useRef, useState } from "react";

import p1Thumb from "../assets/projects/p1.png";
import p2Thumb from "../assets/projects/p2.png";
import p3Thumb from "../assets/projects/p3.png";
import p4Thumb from "../assets/projects/p4.png";
import p5Thumb from "../assets/projects/p5.png";
import p6Thumb from "../assets/projects/p6.png";
import p7Thumb from "../assets/projects/p7.png";
import p8Thumb from "../assets/projects/p8.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
	return (
		<>
			<h2 className="text-[#ee79b6] font-Raleway text-center mb-12 uppercase text-[2rem]">
				Some Projects
			</h2>
			<div className="max-w-screen h-auto flex flex-col md:flex-row flex-wrap items-center justify-center">
				<ProjectCard
					link="https://soft-pie-7a805a.netlify.app/"
					thumb={p1Thumb}
					title="Fylo Landing Page (Dark Theme)"
				/>
				<ProjectCard
					link="https://stellar-fairy-9d5b23.netlify.app/"
					thumb={p2Thumb}
					title="Advice Generator with Advice API"
				/>
				<ProjectCard
					link="https://sage-sprinkles-f0e61a.netlify.app/"
					thumb={p3Thumb}
					title="Agency Landing Page (SASS)"
				/>
				<ProjectCard
					link="https://tangerine-puppy-8d26d8.netlify.app/"
					thumb={p4Thumb}
					title="Secret Word Game"
				/>
				<ProjectCard
					link="https://enchanting-rugelach-b0a744.netlify.app/"
					thumb={p5Thumb}
					title="Sunnyside Agency Landing Page"
				/>
				<ProjectCard
					link="https://soft-brigadeiros-734216.netlify.app/"
					thumb={p6Thumb}
					title="Dots In Screen Application"
				/>
				<ProjectCard
					link="https://storied-kleicha-7e10cc.netlify.app/#"
					thumb={p7Thumb}
					title="Landing Page with Styled Components"
				/>
				<ProjectCard
					link="https://dancing-pudding-307a24.netlify.app/"
					thumb={p8Thumb}
					title="Pomodoro App (TypeScript)"
				/>
			</div>
		</>
	);
};
