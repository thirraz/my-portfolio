import myPic from "../assets/imgs/profilePic.jpg";
import { Skills } from "./Skills";

export const Presentation = () => {
	return (
		<div className="w-screen h-[40rem] flex flex-col lg:flex-row items-center lg:justify-around">
			<div className="text-center px-4 lg:w-[50%]">
				<h1 className="h-fit font-Raleway text-[#ee79b6] uppercase text-[2.5rem] mb-4">
					Welcome to my portfolio!
				</h1>
				<p className="font-Prompt text-[#dadada]">
					Hi! My name is Thiago Morais! I'm a self-taught
					programming student and would like to start a career in
					the Front-End field. Currently my core technologies are
					HTML5, CSS3, JavaScript, React, Tailwind and SASS.
				</p>
				<Skills />
			</div>
			<div className="w-auto flex flex-col items-center mr-10 ">
				<div className="w-[20rem] h-[12rem] my-8 lg:my-0 relative lg:w-[25rem] lg:h-[22rem] ">
					<span className="bg-[#ee79b6] h-14 w-14 lg:h-28 lg:w-28 absolute left-[25%] lg:left-0 z-0"></span>
					<span className="bg-[#ee79b6] h-14 w-14 lg:h-28 lg:w-28 absolute rounded-full bottom-4 right-[22%] lg:right-0 lg:bottom-0 z-20"></span>
					<div className="w-auto lg:w-[25rem] h-auto absolute z-10 left-[28%] lg:left-0">
						<img
							src={myPic}
							alt="my profile pic"
							className="w-[10rem] h-[10rem] lg:w-[22rem] lg:h-[22rem] rounded-full mx-auto"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
