import { STACKS } from "../../../constants/stacks";
import { CustomText } from "../../other/CustomText";
import { CardIconStack } from "../../ui/CardIconStack";
import { CustomButton } from "../../ui/CustomButton";
import imageUser from "../../../assets/image-user2.png";

export const Hero = () => {
	return (
		<section
			id="home"
			className="h-104.5 w-full max-w-[74.875rem] flex flex-col mt-30 mb-5 px-5 xl:px-0 xl:mt-[12.6875rem] xl:mb-15 xl:flex-row xl:justify-between"
		>
			<div className="h-full w-full max-w-176 flex flex-col">
				<h2 className="text-[12px] flex justify-center xl:justify-start xl:text-2xl font-medium font-fira-sans text-white">
					Olá, me chamo Marcelo Augusto
				</h2>

				<div className="flex flex-col w-full max-w-[688px] h-32">
					<div className="flex w-full items-center justify-center xl:justify-start">
						<h1 className="flex items-center text-2xl font-bold text-white  xl:h-16 xl:text-[4rem] xl:tracking-tight xl:w-[220px]">
							Sou um
						</h1>
						<h1 className="flex items-center text-2xl font-bold text-secundary ml-1.25  xl:h-16 xl:ml-4 xl:text-[4rem] xl:w-[450px]">
							Desenvolvedor
						</h1>
					</div>

					<div className="flex w-full items-center justify-center xl:justify-start">
						<h1 className="flex items-center   text-2xl font-bold text-primary  xl:h-16 xl:text-[4rem] xl:tracking-tight xl:w-[282px]">
							Full Stack
						</h1>
						<h1 className="flex items-center text-2xl font-bold text-white ml-1.75 xl:ml-2 xl:h-16 xl:text-[4rem]">
							Node
						</h1>
					</div>

					<div className="relative h-full w-91 flex xl:hidden">
						<div className="absolute top-0 right-0 h-50 w-50 drop-shadow-[0_0_12px] drop-shadow-primary rounded-full bg-primary" />
						<div className="absolute z-5 -rotate-45 h-40.5 w-40.5 drop-shadow-[0px_0px_10px] drop-shadow-[#34276B]/40 top-7 right-7 rounded-full bg-[#9271FF]" />
						<div className="absolute z-10 border -rotate-45 border-[#34276B]/50 drop-shadow-[-32px_8px_10px] drop-shadow-[#34276B] top-7 right-7 h-40.5 w-40.5 rounded-full bg-[#9271FF]" />

						<img
							alt="imagem usuário"
							src={imageUser}
							className="absolute z-20 top-15 right-15 bg-[#E3E4E6] border-[3px] border-white rounded-full h-30.5 w-30.5"
						/>
					</div>
				</div>

				<CustomText className="text-[12px] font-normal w-full max-w-157.75 text-text-light xl:mt-6.5 xl:h-18.75 xl:text-[1.125rem] xl:leading-5.5">
					Desenvolvedor apaixonado por tecnologia, com experiência em
					Front-End e Back-End com Node.js. Gosto de criar interfaces
					modernas e soluções escaláveis que unem design, performance
					e boas práticas de código.
				</CustomText>

				{/* ICONS */}
				<div className="flex gap-2.5 mt-3.75  xl:mb-10">
					{STACKS.map((item) => (
						<CardIconStack
							key={item.name}
							stackName={item.name}
							heightIcon={32}
							widthIcon={32}
							imageStack={item.icon}
							className="h-5 w-10 xl:h-12 xl:w-12 rounded-lg"
						/>
					))}
				</div>

				<div className="flex gap-2.5 xl:gap-4.5">
					<CustomButton isPrimary className="h-8 w-[47%] xl:w-auto xl:h-12.5 xl:px-11.5">
						<a
							href="#home"
							className="text-white h-full w-full flex items-center justify-center font-fira-sans font-semibold text-[12px] xl:text-[1.25rem] drop-shadow-[0_4px_4px] drop-shadow-black/25"
						>
							Baixar Curriculo
						</a>
					</CustomButton>

					<CustomButton isPrimary={false} className="h-8 w-[47%] xl:w-auto xl:h-12.5 xl:px-11.5">
						<a
							href="#contacts"
							className="text-white h-full w-full flex items-center justify-center font-fira-sans font-semibold text-[12px] xl:text-[1.25rem] drop-shadow-[0_4px_4px] drop-shadow-black/25"
						>
							Contatos
						</a>
					</CustomButton>
				</div>
			</div>

			{/* Avatar */}
			<div className="relative h-full w-91 hidden xl:flex">
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
