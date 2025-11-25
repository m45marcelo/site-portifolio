import imageSectionSobreMin from "../../../assets/image-section-sobremin.png";
import imageSectionSobreMinMobile from "../../../assets/section-sobre-min-mobile.png";
import { CustomH2 } from "../../other/CustomH2";
import { CustomText } from "../../other/CustomText";
export const SectionAboutMe = () => {
	return (
		<section
			id="about-me"
			className="w-full lg:px-10 px-5 z-30 flex flex-col items-center max-w-299.5 xl:h-143 mb-10 xl:mb-15 xl:px-0"
		>
			<CustomH2 className="text-[1.125rem] xl:text-[2rem] xl:h-11.5 mb-5 xl:mb-10 relative pb-1 xl:pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] xl:after:h-[2px] after:bg-gradient-to-r after:from-[#7A5DFC] after:to-[#EC6B90]">
				Sobre Min
			</CustomH2>
			<div className="flex flex-col gap-5 w-full xl:flex-row">
				<img
					alt="imagem section"
					src={imageSectionSobreMinMobile}
					className="block sm:hidden w-full xl:h-123.5 xl:w-96.5"
				/>
				<img
					alt="imagem section"
					src={imageSectionSobreMin}
					className="hidden xl:block  w-full xl:h-123.5 xl:w-96.5"
				/>

				<div className="xl:h-123.5 flex flex-col justify-between">
					<CustomText className="text-[0.875rem] xl:text-[1.125rem] font-normal text-text-light">
						Olá! Sou Marcelo Augusto, desenvolvedor Front-End e Full
						Stack (Node.js) júnior, apaixonado por tecnologia e por
						criar interfaces modernas, responsivas e bem
						estruturadas.
					</CustomText>

					<div>
						<CustomText className="text-[0.875rem] mt-3 xl:mt-0 xl:text-[1.125rem] font-bold leading-5 text-text-light">
							Foco Principal:
						</CustomText>
						<CustomText className="text-[0.875rem] xl:text-[1.125rem] font-normal text-text-light">
							Meu objetivo é transformar ideias em aplicações
							funcionais, com foco total em design, usabilidade,
							performance e código limpo.
						</CustomText>
					</div>

					<div>
						<CustomText className="text-[0.875rem] mt-3 xl:mt-0 xl:text-[1.125rem] font-bold text-text-light">
							Habilidades Técnicas:
						</CustomText>

						<ul className="list-disc text-text-light font-inter text-[0.875rem] xl:text-[1.125rem] font-normal">
							<li className="ml-8">
								Front-End: React, TypeScript, Redux, Tailwind
								CSS, Styled-Components e Next.js.
							</li>
							<li className="ml-8">
								Back-End: Node.js, TypeScript, Express e
								MongoDB.
							</li>
							<li className="ml-8">
								Princípios: Boas práticas, componentização e
								compreensão do fluxo completo (full stack) para
								criar soluções integradas.
							</li>
						</ul>
					</div>

					<div>
						<CustomText className="text-[0.875rem] mt-3 xl:mt-0 xl:text-[1.125rem] font-bold text-text-light">
							Como eu trabalho ?
						</CustomText>
						<CustomText className="text-[0.875rem] xl:text-[1.125rem] font-normal text-text-light">
							Sou dedicado, curioso e valorizo o trabalho em
							equipe e a troca de conhecimento. Estou sempre em
							constante aprendizado, buscando projetos que me
							desafiem e me permitam evoluir.
						</CustomText>
					</div>

					<CustomText className="text-[0.875rem] mt-3 xl:mt-0 xl:text-[1.125rem] font-normal text-text-light">
						Vamos trabalhar juntos para transformar suas ideias em
						experiências digitais eficientes e cheias de propósito!
					</CustomText>
				</div>
			</div>
		</section>
	);
};
