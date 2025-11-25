import React, { useState } from "react";

interface CardIconStackProps {
	stackName: string;
	className: string;
	imageStack: string;
	heightIcon: string;
}

export const CardIconStack = React.memo(function CardIconStack({
	stackName,
	className,
	imageStack,
	heightIcon,
}: CardIconStackProps) {
	const [stateTooltip, setStateTooltip] = useState<"hidden" | "flex">(
		"hidden",
	);
	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: <explanation>
		<div
			onMouseEnter={() => setStateTooltip("flex")}
			onMouseLeave={() => setStateTooltip("hidden")}
			className={`${className} relative cursor-pointer flex bg-transparent items-center justify-center border border-card-border`}
		>
			<img	
				className={`${heightIcon} absolute`}
				alt="icon stack"
				src={imageStack}
			/>
			<span
				className={`absolute ${stateTooltip} pointer-events-none
 						items-center justify-center -top-10 bg-card-background text-[14px] text-white font-normal py-1 px-2 rounded border border-card-border`
					}
			>
				{stackName}
			</span>
		</div>
	);
});
