import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

export const Skills = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="flex justify-around text-[2.5rem] lg:text-[3rem] w-[60%] mt-6">
				<IoLogoCss3 className="text-orange-500 mr-2" />
				<FaHtml5 className="text-blue-600 mr-2" />
				<SiTailwindcss className="text-sky-400 mr-2" />
				<SiJavascript className="text-yellow-400 mr-2 mt-1" />
				<FaReact className="text-blue-400 mr-2 w-14 h-14" />
				<FaSass className="text-pink-600 mr-2" />
				<FaNodeJs className="text-green-400" />
				<FcLinux className="text-black" />
			</div>
		</div>
	);
};
