import { BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

export const MenuItems = () => {
	return (
		<div className="absolute z-50 lg:hidden rounded-xl right-[4rem] text-white top-[3rem] w-[70%] text-[1.2rem] h-auto py-8 px-10 bg-pink-600">
			<ul className="w-full font-Prompt flex flex-col items-center">
				<li className="mb-5">
					<a
						href="https://www.instagram.com/thirrazz/"
						target="_blank"
						className="flex items-center"
					>
						<BsInstagram className="mr-3 w-4 h-4" /> Instagram
					</a>
				</li>
				<li className="flex items-center mb-5">
					<a
						href="https://github.com/thirraz"
						target="_blank"
						className="flex items-center"
					>
						<AiFillGithub className="mr-3 w-4 h-4" /> GitHub
					</a>
				</li>
				<li className="flex items-center mb-4">
					<a
						href="https://twitter.com/thirrazz"
						target="_blank"
						className="flex items-center"
					>
						<BsTwitter className="mr-3 w-4 h-4" /> Twitter
					</a>
				</li>
				<button className="text-slate-300 bg-[#120729] rounded-md px-8 py-7 mt-10">
					<a href="mailto: thiagofernandosouza20@gmail.com">
						Click here to send an e-mail :)
					</a>
				</button>
			</ul>
		</div>
	);
};
