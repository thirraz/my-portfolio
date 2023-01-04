import { RxHamburgerMenu } from "react-icons/rx";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

import { useState } from "react";
import { MenuItems } from "./MenuItems";

export const NavBar = () => {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<header className=" text-white h-16 relative lg:flex lg:items-center">
			<nav className="hidden lg:flex lg:justify-around lg:items-center text-white w-full h-full mt-8">
				<ul className="flex justify-around  w-[70%]">
					<li className="flex items-center justify-center">
						<a
							href="https://www.instagram.com/thirrazz/"
							target="_blank"
						>
							<BsInstagram className="mr-3 w-8 h-8" />
						</a>
					</li>
					<li className="flex items-center justify-center">
						<a
							href="https://github.com/thirraz"
							target="_blank"
						>
							<AiFillGithub className="mr-3 w-9 h-9" />
						</a>
					</li>
					<li className="flex items-center justify-center">
						<a
							href="https://twitter.com/thirrazz"
							target="_blank"
						>
							<BsTwitter className="mr-3 w-8 h-8" />
						</a>
					</li>
				</ul>
				<button className="text-white font-bold uppercase bg-pink-600 rounded-md px-4 py-3 mr-[4.5rem]">
					<a href="mailto: thiagofernandosouza20@gmail.com">
						Click here to send an e-mail :)
					</a>
				</button>
			</nav>
			<RxHamburgerMenu
				onClick={() => setOpenMenu(!openMenu)}
				className="absolute lg:hidden right-8 top-4 w-7 h-7 cursor-pointer"
			/>

			{openMenu && <MenuItems />}
		</header>
	);
};
