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
		<div className="flex flex-col text-center items-center justify-items-start  w-full max-w-96.5 xl:h-62.5 p-5 border border-card-border bg-card-background rounded-lg">
			<div className="bg-primary h-9 w-9 xl:h-11.5 xl:w-11.5 mb-3 flex items-center justify-center rounded-md drop-shadow-[0_0px_6px] border border-blue-950/80 drop-shadow-primary ">
				<img alt="icon skill" src={icon} className="h-5  xl:h-7.5 xl:w-7.5" />
			</div>

			<CustomH2 className="text-[15px] xl:text-[1.125rem] w-full xl:w-86.25 font-medium mb-3 xl:h-5.5">
				{skilName}
			</CustomH2>
			<CustomText className="text-[13px] xl:text-base font-normal text-text-gray xl:leading-4.75">
				{skillDescription}
			</CustomText>
		</div>
	);
};
