import iconCss from "../../assets/icon-css.png";

import iconHtml from "../../assets/icon-html.png";

import iconReact from "../../assets/icon-react.png";

import iconTailwind from "../../assets/icon-tailwind.png";


import imageProject1 from "../../assets/image-project-1.png";
import { CustomH2 } from "../other/CustomH2";
import { CustomText } from "../other/CustomText";
import { CardIconStack } from "./CardIconStack";

import { CustomButtonAction } from "./CustomButonAction";

export const CardProject = () => {
	return (
		<div className="h-105.5 w-full max-w-96.5 flex flex-col rounded-lg border border-card-border bg-card-background">
			<img
				// biome-ignore lint/a11y/noRedundantAlt: <explanation>
				alt="image project"
				src={imageProject1}
				className="h-55 w-full rounded-t-lg "
			/>

			<div className="w-full flex flex-col p-3.5">
				<div className="flex justify-between">
					<div className="flex flex-col">
						<CustomH2 className="text-2xl mb-1.5 h-7.25">
							Webportifolios
						</CustomH2>
						<div className="flex gap-1.5 mb-2.5">
							<CardIconStack
								stackName="HTML"
								imageStack={iconHtml}
								className="h-8 w-8 rounded-lg"
								heightIcon={22}
								widthIcon={22}
							/>
							<CardIconStack
								stackName="CSS"
								imageStack={iconCss}
								className="h-8 w-8 rounded-lg"
								heightIcon={22}
								widthIcon={22}
							/>
							<CardIconStack
								stackName="React"
								imageStack={iconReact}
								className="h-8 w-8 rounded-lg"
								heightIcon={22}
								widthIcon={22}
							/>
							<CardIconStack
								stackName="Tailwind"
								imageStack={iconTailwind}
								className="h-8 w-8 rounded-lg"
								heightIcon={22}
								widthIcon={22}
							/>
						</div>
					</div>
					<div className="flex gap-2">
						<CustomButtonAction icon="GitHub" heightButton="small" heightIcon={20} widthIcon={20}/>
						<CustomButtonAction icon="Enter" heightButton="small" heightIcon={20} widthIcon={20}/>
					</div>
				</div>
				<CustomText className="text-base font-light text-text-light leading-4.75">
					Projeto Full-Stack de um Gerenciador de despesas pessoal
					totalmente funcional, onde o usuário poderá registrar suas
					despesas, receitas, assinaturas e criar orçamentos de
					gastos.
				</CustomText>
			</div>
		</div>
	);
};
