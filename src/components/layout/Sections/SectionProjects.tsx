import { CustomH2 } from "../../other/CustomH2"
import { CardProject } from "../../ui/CardProject"
import imageProject1 from "../../../assets/projeto1.svg"
import imageProject2 from "../../../assets/image-project-2.png"
import imageProject3 from "../../../assets/image-project-3.png"
import imageProject4 from "../../../assets/image-project-4.png"
export const SectionProjects = () => {
    return(
        <section id="projects" className="w-full max-w-299.5 flex flex-col items-center mb-15 lg:px-10 px-5 xl:px-0">
            <CustomH2 className="text-[1.125rem] xl:text-[2rem] xl:h-11.5 mb-5 xl:mb-10 relative pb-1 xl:pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] xl:after:h-[2px] after:bg-gradient-to-r after:from-[#7A5DFC] after:to-[#EC6B90]">
                Projetos
            </CustomH2>
            <div className="grid sm:grid-cols-3 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2 gap-5 w-full justify-center">
                <CardProject nameProject="FinState" addressSite="marceloaugustodev.vercel.app" imageProject={imageProject1} stacksProject={["HTML", "CSS", "Typescript", "Next", "Tailwind", "Redux","MongoDB", "Express"]}/>
                <CardProject nameProject="The Blog" addressSite="marceloaugustodev.vercel.app" imageProject={imageProject2} stacksProject={["HTML", "CSS", "React", "Styled Components"]}/>
                <CardProject nameProject="Previsão do tempo" addressSite="marceloaugustodev.vercel.app" imageProject={imageProject3} stacksProject={["HTML", "CSS", "React", "Tailwind"]}/>
                <CardProject nameProject="Meu Portifolio" addressSite="https://marceloaugustodev.vercel.app/" imageProject={imageProject4} stacksProject={["HTML","CSS", "React", "Tailwind"]}/>
                <CardProject nameProject="FinState" addressSite="marceloaugustodev.vercel.app" imageProject={imageProject1} stacksProject={["React", "Next", "MongoDb"]}/>
                <CardProject nameProject="FinState" addressSite="marceloaugustodev.vercel.app" imageProject={imageProject1} stacksProject={["React", "Next", "MongoDb"]}/>
            </div>
        </section>
    )
}