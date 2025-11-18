import { CustomText } from "../../other/CustomText";
import { CardIconStack } from "../../ui/CardIconStack";
import iconHtml from "../../../assets/icon-html.png";
import iconCss from "../../../assets/icon-css.png";
import iconReact from "../../../assets/icon-react.png";
import iconTailwind from "../../../assets/icon-Tailwind.png";
import iconNext from "../../../assets/icon-next.png";
import iconStyledComponents from "../../../assets/icon-styled-components.png";
import iconRedux from "../../../assets/icon-redux.png";
import iconTypescript from "../../../assets/icon-Typescript.png";
import iconNode from "../../../assets/icon-node.png";
import iconExpress from "../../../assets/icon-express.png";
import iconMongo from "../../../assets/icon-mongodb.png";
import { CustomButton } from "../../ui/CustomButton";
import imageUser from "../../../assets/image-user2.png";

export const Hero = () => {
	return (
		<section className="h-104.5 w-full max-w-294.25 flex justify-between mt-33.25 mb-15">
			<div className="h-full w-full max-w-169.75 flex flex-col">
				<h2 className="text-2xl font-medium font-fira-sans text-white">
					Olá, me chamo Marcelo Augusto
				</h2>
				<div className="flex flex-col w-full">
					<h1 className="text-[4rem] font-bold font-fira-sans text-white h-16 flex items-center">
						Sou um
						<span className="text-[4rem] ml-4 flex items-center font-bold font-fira-sans text-secundary h-16">
							Desenvolvedor
						</span>
					</h1>
					<h1 className="text-[4rem] font-bold font-fira-sans text-white h-16 flex items-center">
						<span className="text-[4rem] mr-4 flex items-center font-bold font-fira-sans text-primary h-16">
							Full Stack
						</span>
						Node
					</h1>
				</div>
				<CustomText className="text-[1.125rem] leading-5.5 font-normal mt-6.5 w-full max-w-157.75 text-text-light h-18.75">
					Desenvolvedor apaixonado por tecnologia, com experiência em
					Front-End e Back-End com Node.js, gosto de criar interfaces
					modernas e soluções escaláveis que unem design, performance
					e boas práticas de código.
				</CustomText>
				<div className="flex gap-2.5 mt-3.75 mb-10">
					<CardIconStack stackName="HTML" heightIcon={32} widthIcon={32} imageStack={iconHtml} className="h-12 w-12 rounded-lg"/>
					<CardIconStack stackName="CSS" heightIcon={32} widthIcon={32} imageStack={iconCss} className="h-12 w-12 rounded-lg"/>
					<CardIconStack stackName="React" heightIcon={32} widthIcon={32} imageStack={iconReact} className="h-12 w-12 rounded-lg"/>
					<CardIconStack stackName="Tailwind" heightIcon={32} widthIcon={32} imageStack={iconTailwind} className="h-12 w-12 rounded-lg"/>
					<CardIconStack stackName="Next" heightIcon={32} widthIcon={32} imageStack={iconNext} className="h-12 w-12 rounded-lg"/>
					<CardIconStack stackName="Styled Component" heightIcon={32} widthIcon={32} imageStack={iconStyledComponents} className="h-12 w-12 rounded-lg"/>
					<CardIconStack stackName="Redux" heightIcon={32} widthIcon={32} imageStack={iconRedux} className="h-12 w-12 rounded-lg"/>
					<CardIconStack stackName="Typescript" heightIcon={32} widthIcon={32} imageStack={iconTypescript} className="h-12 w-12 rounded-lg"/>
					<CardIconStack stackName="Node" heightIcon={32} widthIcon={32} imageStack={iconNode} className="h-12 w-12 rounded-lg"/>
					<CardIconStack stackName="Express" heightIcon={32} widthIcon={32} imageStack={iconExpress} className="h-12 w-12 rounded-lg"/>
					<CardIconStack stackName="MongoDB" heightIcon={32} widthIcon={32} imageStack={iconMongo} className="h-12 w-12 rounded-lg"/>
				</div>
				<div className="flex gap-4.5">
					<CustomButton isPrimary >
						<span className="text-white font-fira-sans font-semibold text-[1.25rem] drop-shadow-[0_4px_4px] drop-shadow-black/25">Baixar Curriculo</span>
					</CustomButton>
					<CustomButton isPrimary={false}>
						<span className="text-white font-fira-sans font-semibold text-[1.25rem] drop-shadow-[0_4px_4px] drop-shadow-black/25">Contatos</span>
					</CustomButton>
				</div>
			</div>
			<div className="relative h-full w-91">
				<div className="absolute top-0 right-0  h-91 w-91 drop-shadow-[0_0_12px] drop-shadow-primary rounded-full bg-primary"/>
				<div className="absolute z-5 -rotate-45 drop-shadow-[0px_0px_10px] drop-shadow-[#34276B]/40 top-7 right-7 h-76.5 w-76.5 rounded-full bg-[#9271FF]"/>
				<div className="absolute z-10 border -rotate-45 border-[#34276B]/50 drop-shadow-[-32px_8px_10px] drop-shadow-[#34276B] top-7 right-7 h-76.5 w-76.5 rounded-full bg-[#9271FF]"/>
				<img alt="imagem usuário" src={imageUser} className="absolute z-20 top-15 right-15 bg-[#E3E4E6] border-[3px] border-white rounded-full h-60.5 w-60.5"/>
			</div>
		</section>
	);
};
