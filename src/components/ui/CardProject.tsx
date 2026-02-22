import { v4 as uuidv4 } from "uuid";
import iconCss from "../../assets/icon-css.png";
import iconHtml from "../../assets/icon-html.png";
import iconReact from "../../assets/icon-react.png";
import iconTailwind from "../../assets/icon-tailwind.png";
import { STACKS } from "../../constants/stacks";
import { CustomH2 } from "../other/CustomH2";
import { CustomText } from "../other/CustomText";
import { CardIconStack } from "./CardIconStack";
import { CustomButtonAction } from "./CustomButonAction";

interface CardProjectProps {
	nameProject: string;
	imageProject: string;
	stacksProject: string[];
	addressSite: string;
}

export const CardProject = ({
	nameProject,
	imageProject,
	stacksProject,
	addressSite
}: CardProjectProps) => {
	return (
		<div className="xl:h-105.5 w-full max-w-72 md:max-w-96.5 flex flex-col rounded-lg border border-card-border bg-card-background">
			<img
				// biome-ignore lint/a11y/noRedundantAlt: <explanation>
				alt="image project"
				src={imageProject}
				className="w-fit md:h-45 xl:h-55  rounded-t-lg "
			/>

			<div className="w-full flex flex-col p-3.5">
				<div className="flex justify-between">
					<div className="flex flex-col w-full">
						<div className="flex justify-between">
						<CustomH2 className="text-[1.125rem] sm:w-[15rem] sm:text-[14px] xl:text-2xl mb-1.5 h-7.25">
							{nameProject}
						</CustomH2>
						<div className="flex gap-2">
						<CustomButtonAction
							icon="GitHub"
							heightButton="small"
							heightIcon={24}
							widthIcon={24}
						/>
						<CustomButtonAction
							icon="Enter"
							heightButton="small"
							heightIcon={24}
							widthIcon={24}
							addressSite={addressSite}
						/>
					</div>
						</div>
						<div className="flex gap-1.5 mb-2.5">

							{STACKS.map((item) =>
								stacksProject.includes(item.name) ? (
									<CardIconStack
										key={item.name}
										stackName={item.name}
										imageStack={item.icon}
										className="h-8 w-8 rounded-lg"
										heightIcon="h-5.5"
									/>
								) : null,
							)}
						</div>
					</div>
					
				</div>
				<CustomText className="text-[13px] xl:text-base font-light text-text-light leading-4.75">
					Projeto Full-Stack de um Gerenciador de despesas pessoal
					totalmente funcional, onde o usuário poderá registrar suas
					despesas, receitas, assinaturas e criar orçamentos de
					gastos.
				</CustomText>
			</div>
		</div>
	);
};
