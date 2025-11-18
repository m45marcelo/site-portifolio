import { useState } from "react";

interface CardIconStackProps {
    stackName: string;
	className: string;
	imageStack: string;
	heightIcon: number;
	widthIcon: number;
}

export const CardIconStack: React.FC<CardIconStackProps> = ({
    stackName,
	className,
	imageStack,
	heightIcon,
	widthIcon,
}) => {
	const [stateTolltip, setStateTolltip] = useState<"hidden" | "flex">(
		"hidden",
	);
	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: <explanation>
		<div
			onMouseEnter={() => console.log(setStateTolltip("flex"))}
			onMouseLeave={() => console.log(setStateTolltip("hidden"))}
			className={`${className} relative cursor-pointer flex bg-transparent items-center justify-center border border-card-border`}
		>
			<img
				height={`${heightIcon}`}
				width={`${widthIcon}`}
				className="absolute"
				alt="icon stack"
				src={imageStack}
			/>
			<span
				className={`absolute ${stateTolltip} items-center justify-center top-[-2.5rem] bg-card-background text-[14px] text-white font-normal py-1 px-2 rounded border border-card-border`}
			>
				{stackName}
			</span>
		</div>
	);
};
