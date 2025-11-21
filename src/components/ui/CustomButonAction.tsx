import { useState } from "react";
import iconEnter from "../../assets/icon-enter.png";
import iconGitHub from "../../assets/icon-github.png";
import iconInstagram from "../../assets/icon-instagram.png";
import iconLinkedin from "../../assets/icon-linkedin.png";

interface CustomButtonActionProps {
	icon: string;
	heightButton: "small" | "medium";
	heightIcon: number;
	widthIcon: number;
}

export const CustomButtonAction = ({
	icon,
	heightIcon,
	widthIcon,
	heightButton,
}: CustomButtonActionProps) => {
	const [stateTooltip, setStateTooltip] = useState<"hidden" | "flex">(
		"hidden",
	);
	return (
		<button
			onMouseEnter={() => setStateTooltip("flex")}
			onMouseLeave={() => setStateTooltip("hidden")}
			type="button"
			className={
				heightButton === "small"
					? "relative rounded-full cursor-pointer h-9.5 w-9.5 flex items-center justify-center bg-icons-background border border-card-border"
					: "relative rounded-full cursor-pointer h-10 w-10 flex items-center justify-center bg-icons-background border border-card-border"
			}
		>
			{icon === "GitHub" && (
				<>
					{/** biome-ignore lint/security/noBlankTarget: <explanation> */}
					<a href="https://github.com/m45marcelo" target="_blank">
						<img
							alt="icon github"
							src={iconGitHub}
							height={heightIcon}
							width={widthIcon}
						/>
					</a>
					<span
						className={`absolute ${stateTooltip} pointer-events-none
 						w-29.5 -top-10 bg-card-background flex text-[14px] text-white font-normal py-1 px-2 rounded border border-card-border`}
					>
						Ir para o GitHub
					</span>
				</>
			)}
			{icon === "Enter" && (
				<>
					{/** biome-ignore lint/security/noBlankTarget: <explanation> */}
					<a href="https://github.com/m45marcelo" target="_blank">
						<img
							alt="icon enter"
							src={iconEnter}
							height={heightIcon}
							width={widthIcon}
						/>
					</a>

					<span
						className={`absolute ${stateTooltip} pointer-events-none
 						w-21.75 -top-10 bg-card-background text-[14px] text-white font-normal py-1 px-2 rounded border border-card-border`}
					>
						Ver Projeto
					</span>
				</>
			)}
			{icon === "Linkedin" && (
				<>
					{/** biome-ignore lint/security/noBlankTarget: <explanation> */}
					<a href="https://github.com/m45marcelo" target="_blank">
						<img
							alt="icon linkedin"
							src={iconLinkedin}
							height={heightIcon}
							width={widthIcon}
						/>
					</a>
					<span
						className={`absolute ${stateTooltip} pointer-events-none
 						w-31.5 -top-10 bg-card-background flex text-[14px] text-white font-normal py-1 px-2 rounded border border-card-border`}
					>
						Ir para o Linkedin
					</span>
				</>
			)}
			{icon === "Instagram" && (
				<>
					{/** biome-ignore lint/security/noBlankTarget: <explanation> */}
					<a href="https://github.com/m45marcelo" target="_blank">
						<img
							alt="icon instagram"
							src={iconInstagram}
							height={heightIcon}
							width={widthIcon}
						/>
					</a>
					<span
						className={`absolute ${stateTooltip} pointer-events-none
 						w-34 -top-10 bg-card-background flex text-[14px] text-white font-normal py-1 px-2 rounded border border-card-border`}
					>
						Ir para o Instagram
					</span>
				</>
			)}
		</button>
	);
};
