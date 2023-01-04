import React from "react";

export const ProjectCard = ({ thumb, link, title }) => {
	return (
		<div className="flex flex-col items-center px-4 mb-12">
			<div className="w-auto md:w-[35rem] lg:w-[25rem]  h-auto flex flex-col items-center overflow-hidden rounded-xl border-4 border-[#ee79b6] hover:scale-[1.1] duration-300">
				<a href={link} target="_blank">
					<img
						src={thumb}
						alt="project thumb"
						className="lg:h-[13rem]"
					/>
				</a>
			</div>
			<h2 className="text-white font-Raleway text-[1.5rem] font-bold text-center mt-3">
				{title}
			</h2>
		</div>
	);
};
