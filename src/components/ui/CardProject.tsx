import iconCss from "../../assets/icon-css.png";
import iconExpress from "../../assets/icon-express.png";
import iconHtml from "../../assets/icon-html.png";
import iconMongo from "../../assets/icon-mongodb.png";
import iconNext from "../../assets/icon-next.png";
import iconNode from "../../assets/icon-node.png";
import iconReact from "../../assets/icon-react.png";
import iconRedux from "../../assets/icon-redux.png";
import iconStyledComponents from "../../assets/icon-styled-components.png";
import iconTailwind from "../../assets/icon-Tailwind.png";
import iconTypescript from "../../assets/icon-Typescript.png";

import iconGitHub from "../../assets/icon-github.png";
import iconEnter from "../../assets/icon-enter.png";

import imageProject1 from "../../assets/image-project-1.png";
import { CustomH2 } from "../other/CustomH2";
import { CustomText } from "../other/CustomText";
import { CardIconStack } from "./CardIconStack";
import { CardSkill } from "./CardSkill";

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
                        <div className="rounded-full cursor-pointer h-9.5 w-9.5 flex items-center justify-center bg-icons-background border border-card-border">
                            <img alt="icon github" src={iconGitHub} className="h-5 w-5"/>
                        </div>
                        <div className="rounded-full cursor-pointer h-9.5 w-9.5 flex items-center justify-center bg-icons-background border border-card-border">
                            <img alt="icon Enter Site" src={iconEnter} className="h-5 w-5"/>
                        </div>
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
