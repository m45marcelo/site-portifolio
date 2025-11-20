import { CustomH2 } from "../other/CustomH2";
import { CustomText } from "../other/CustomText";

interface CardSkillProps {
	icon: string;
	skilName: string;
	skillDescription: string;
}

export const CardSkill: React.FC<CardSkillProps> = ({
	icon,
	skilName,
	skillDescription,
}) => {
	return (
		<div className="flex flex-col text-center items-center justify-items-start  w-full max-w-96.5 h-62.5 px-5 pt-5 pb-5 border border-card-border bg-card-background rounded-lg">
			<div className="bg-primary h-11.5 w-11.5 mb-3 flex items-center justify-center rounded-md drop-shadow-[0_0px_6px] border border-blue-950/80 drop-shadow-primary ">
				<img alt="icon skill" src={icon} className="h-7.5 w-7.5" />
			</div>
			<CustomH2 className="text-[1.125rem] w-86.25 font-medium mb-3 h-5.5">
				{skilName}
			</CustomH2>
			<CustomText className="text-base font-normal text-text-gray leading-4.75">
				{skillDescription}
			</CustomText>
		</div>
	);
};
