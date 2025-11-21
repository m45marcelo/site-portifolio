import { STACKS } from "../../../constants/stacks";
import { CustomText } from "../../other/CustomText";
import { CardIconStack } from "../../ui/CardIconStack";
import { CustomButton } from "../../ui/CustomButton";
import imageUser from "../../../assets/image-user2.png";

export const Hero = () => {
	return (
		<section id="home" className="h-104.5 w-full max-w-294.25 flex justify-between mt-[12.6875rem] mb-15">
			<div className="h-full w-full max-w-176 flex flex-col">
				
				<h2 className="text-2xl font-medium font-fira-sans text-white">
					Olá, me chamo Marcelo Augusto
				</h2>

				<div className="flex flex-col w-full max-w-[688px] h-32">
					
					<div className="flex w-full items-center">
						<h1 className="flex  tracking-tight items-center w-[220px] text-[4rem] font-bold text-white h-16">
							Sou um
						</h1>
						<h1 className="flex ml-4 items-center w-[450px] text-[4rem] h-16 font-bold text-secundary">Desenvolvedor</h1>
					</div>

					<div className="flex w-full items-center">
						<h1 className="flex tracking-tight items-center w-[282px] text-[4rem] font-bold text-primary h-16">
							Full Stack
						</h1>
						<h1 className="flex items-center text-[4rem] font-bold text-white h-16">
							Node
						</h1>
					</div>


					
				</div>

				<CustomText className="text-[1.125rem] leading-5.5 font-normal mt-6.5 w-full max-w-157.75 text-text-light h-18.75">
					Desenvolvedor apaixonado por tecnologia, com experiência em
					Front-End e Back-End com Node.js. Gosto de criar interfaces
					modernas e soluções escaláveis que unem design, performance
					e boas práticas de código.
				</CustomText>

				{/* ICONS */}
				<div className="flex gap-2.5 mt-3.75 mb-10">
					{STACKS.map((item) => (
						<CardIconStack
							key={item.name}
							stackName={item.name}
							heightIcon={32}
							widthIcon={32}
							imageStack={item.icon}
							className="h-12 w-12 rounded-lg"
						/>
					))}
				</div>

				<div className="flex gap-4.5">
					<CustomButton isPrimary>
						<a href="#home"  className="text-white h-full w-full font-fira-sans font-semibold text-[1.25rem] drop-shadow-[0_4px_4px] drop-shadow-black/25">
							Baixar Curriculo
						</a>
					</CustomButton>

					<CustomButton isPrimary={false}>
						<a href="#contacts" className="text-white h-full w-full font-fira-sans font-semibold text-[1.25rem] drop-shadow-[0_4px_4px] drop-shadow-black/25">
							Contatos
						</a>
					</CustomButton>
				</div>
			</div>

			{/* Avatar */}
			<div className="relative h-full w-91">
				<div className="absolute top-0 right-0 h-91 w-91 drop-shadow-[0_0_12px] drop-shadow-primary rounded-full bg-primary" />
				<div className="absolute z-5 -rotate-45 drop-shadow-[0px_0px_10px] drop-shadow-[#34276B]/40 top-7 right-7 h-76.5 w-76.5 rounded-full bg-[#9271FF]" />
				<div className="absolute z-10 border -rotate-45 border-[#34276B]/50 drop-shadow-[-32px_8px_10px] drop-shadow-[#34276B] top-7 right-7 h-76.5 w-76.5 rounded-full bg-[#9271FF]" />

				<img
					alt="imagem usuário"
					src={imageUser}
					className="absolute z-20 top-15 right-15 bg-[#E3E4E6] border-[3px] border-white rounded-full h-60.5 w-60.5"
				/>
			</div>
		</section>
	);
};
