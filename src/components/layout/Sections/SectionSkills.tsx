import { CustomH2 } from "../../other/CustomH2";
import { CardSkill } from "../../ui/CardSkill";
import iconResponsive from "../../../assets/icon-responsive.png";
import iconUi from "../../../assets/icon-ui.png";
import iconUx from "../../../assets/icon-ux.png";
import iconDesign from "../../../assets/icon-web-design.png";
import iconWireframing from "../../../assets/icon-wireframe.png";
import iconMoveis from "../../../assets/icon-moveis.png";

export const SectionSkills = () => {
	return (
		<section id="skills" className="h-150 w-full max-w-299.5 flex flex-col items-center mb-275 xl:mb-15 px-5 xl:px-0">
			<CustomH2 className="text-[1.125rem] xl:text-[2rem] xl:h-11.5 mb-5 xl:mb-10 relative pb-1 xl:pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] xl:after:h-[2px] after:bg-gradient-to-r after:from-[#7A5DFC] after:to-[#EC6B90]">
				Habilidades
			</CustomH2>
            <div className="xl:h-130 w-fit xl:w-full grid xl:grid-cols-3 xl:grid-rows-2 gap-5 ">
                <CardSkill icon={iconResponsive} skilName="Design Web Responsivo" skillDescription="Desenvolvimento de interfaces que se adaptam automaticamente a diferentes tamanhos de tela, utilizando técnicas de CSS Flexbox, Grid e media queries para garantir uma ótima experiência em qualquer dispositivo."/>
                <CardSkill icon={iconUi} skilName="Design de Interface do Usuário (UI Design)" skillDescription="Criação de interfaces visuais modernas e funcionais, aplicando boas práticas de front-end, cores, espaçamento e componentes reutilizáveis em frameworks como React e Tailwind CSS."/>
                <CardSkill icon={iconUx} skilName="Experiência do Usuário (UX Design)" skillDescription="Aplicação de conceitos de usabilidade e acessibilidade no desenvolvimento de páginas web, com foco em fluxos intuitivos, feedbacks visuais e interações agradáveis ao usuário."/>
                <CardSkill icon={iconDesign} skilName="Princípios de Web Design" skillDescription="Implementação de layouts seguindo fundamentos como hierarquia visual, contraste e tipografia, sempre alinhados às boas práticas de desenvolvimento front-end e performance."/>
                <CardSkill icon={iconWireframing} skilName="Wireframing e Prototipagem" skillDescription="Criação e validação de estruturas de páginas e fluxos de navegação usando ferramentas como Figma, transformando protótipos em componentes funcionais no ambiente de desenvolvimento."/>
                <CardSkill icon={iconMoveis} skilName="Otimização para Dispositivos Móveis" skillDescription="Desenvolvimento de aplicações leves e responsivas com foco em performance mobile, garantindo carregamento rápido, navegação fluida e adaptação eficiente em telas menores."/>
            </div>
		</section>
	);
};
