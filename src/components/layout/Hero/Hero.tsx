import imageUser from "../../../assets/image-user2.png";
import { STACKS } from "../../../constants/stacks";
import { CustomText } from "../../other/CustomText";
import { CardIconStack } from "../../ui/CardIconStack";
import { CustomButton } from "../../ui/CustomButton";

export const Hero = () => {
	return (
		<section
			id="home"
			className="w-full max-w-[74.875rem] flex flex-col mt-25 mb-10 px-5 lg:px-10 xl:h-104.5 xl:px-0 xl:mt-[12.6875rem] xl:mb-15 xl:flex-row xl:justify-between"
		>
			<div className="h-full w-full flex flex-col items-center xl:items-start">
				<h2 className="text-[0.75rem] lg:text-base flex justify-center xl:justify-start xl:text-2xl font-medium font-fira-sans text-white">
					Olá, me chamo Marcelo Augusto
				</h2>

				<div className="flex flex-col items-center w-full xl:max-w-[688px] xl:h-32">
					<div className="flex flex-col">
						<div className="flex w-full items-center justify-center xl:justify-start">
							<h1 className="flex items-center text-2xl lg:text-4xl font-bold text-white  xl:h-16 xl:text-[4rem] xl:tracking-tight xl:w-[220px]">
								Sou um
							</h1>
							<h1 className="flex items-center text-2xl lg:text-4xl font-bold text-secundary ml-1.25  xl:h-16 xl:ml-4 xl:text-[4rem] xl:w-[450px]">
								Desenvolvedor
							</h1>
						</div>

						<div className="flex mb-4 w-full items-center justify-center xl:justify-start xl:mb-0">
							<h1 className="flex items-center  text-2xl lg:text-4xl font-bold text-primary  xl:h-16 xl:text-[4rem] xl:tracking-tight xl:w-[282px]">
								Full Stack
							</h1>
							<h1 className="flex items-center text-2xl lg:text-4xl font-bold text-white ml-1.75 xl:ml-2 xl:h-16 xl:text-[4rem]">
								Node
							</h1>
						</div>
					</div>
					<div className="w-full flex justify-center items-center xl:hidden">
						<div className="relative h-34 w-34">
							<div className="absolute top-0 left-0 h-34 w-34 drop-shadow-[0_0_12px] drop-shadow-primary rounded-full bg-primary" />
							<div className="absolute z-5 -rotate-45 h-29 w-29 top-2.5 left-2.5 drop-shadow-[0px_0px_10px] drop-shadow-[#34276B]/40 rounded-full bg-[#9271FF]" />
							<div className="absolute z-10 border h-29 w-29 top-2.5 left-2.5 -rotate-45 border-[#34276B]/50 drop-shadow-[-12px_8px_10px] drop-shadow-[#34276B] rounded-full bg-[#9271FF]" />

							<img
								alt="imagem usuário"
								src={imageUser}
								className="absolute z-20 h-23.75 w-23.75 top-5.25 left-5.25 bg-[#E3E4E6] border-[3px] border-white rounded-full"
							/>
						</div>
					</div>
				</div>

				<CustomText className="text-[0.75rem] md:text-base leading-4.5 text-center font-normal md:mt-4 w-full lg:max-w-150 xl:max-w-157.75 text-text-light mt-6 xl:text-left xl:mt-6.5 xl:h-18.75 xl:text-[1.125rem] xl:leading-5.5">
					Desenvolvedor apaixonado por tecnologia, com experiência em
					Front-End e Back-End com Node.js. Gosto de criar interfaces
					modernas e soluções escaláveis que unem design, performance
					e boas práticas de código.
				</CustomText>

				{/* ICONS */}
				<div className="flex w-full gap-0.75 mt-3.75 mb-5 justify-center xl:justify-start xl:gap-2.5 xl:mb-10">
					{STACKS.map((item) => (
						<CardIconStack
							key={item.name}
							stackName={item.name}
							imageStack={item.icon}
							heightIcon={"h-4 w-4 md:h-6 md:w-6 xl:h-8 xl:w-8"}
							className="h-6 w-6 md:h-8 md:w-8 xl:h-12 xl:w-12 rounded-lg"
						/>
					))}
				</div>

				<div className="w-full xl:max-w-[436px] flex justify-between xl:gap-4.5">
					<CustomButton
						isPrimary
						className="h-8 w-[49%] "
					>
						<a
							href="#home"
							className="text-white h-full w-full flex items-center justify-center font-fira-sans font-semibold text-[12px] lg:text-base xl:text-[1.25rem] drop-shadow-[0_4px_4px] drop-shadow-black/25"
						>
							Baixar Curriculo
						</a>
					</CustomButton>

					<CustomButton
						isPrimary={false}
						className="h-8 w-[49%]"
					>
						<a
							href="#contacts"
							className="text-white h-full w-full flex items-center justify-center font-fira-sans font-semibold text-[12px] lg:text-base xl:text-[1.25rem] drop-shadow-[0_4px_4px] drop-shadow-black/25"
						>
							Contatos
						</a>
					</CustomButton>
				</div>
			</div>

			{/* Avatar */}
			<div className="relative h-full w-91 hidden xl:flex">
				<div className="absolute top-0 right-0 drop-shadow-[0_0_12px] drop-shadow-primary rounded-full bg-primary xl:h-91 xl:w-91" />
				<div className="absolute  z-5 -rotate-45 drop-shadow-[0px_0px_10px] drop-shadow-[#34276B]/40 top-7 right-7  rounded-full bg-[#9271FF] xl:h-76.5 xl:w-76.5" />
				<div className="absolute  z-10 border -rotate-45 border-[#34276B]/50 drop-shadow-[-32px_8px_10px] drop-shadow-[#34276B] top-7 right-7 rounded-full bg-[#9271FF] xl:h-76.5 xl:w-76.5" />

				<img
					alt="imagem usuário"
					src={imageUser}
					className="absolute z-20 top-15 right-15 bg-[#E3E4E6] border-[3px] border-white rounded-full xl:h-60.5 w-60.5"
				/>
			</div>
		</section>
	);
};
