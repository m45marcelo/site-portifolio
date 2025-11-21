import { CustomH2 } from "../../other/CustomH2"
import { CardProject } from "../../ui/CardProject"

export const SectionProjects = () => {
    return(
        <section id="projects" className="w-full max-w-299.5 flex flex-col items-center mb-15">
            <CustomH2 className="text-[2rem] h-11.5 mb-10 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#7A5DFC] after:to-[#EC6B90]">
                Projetos
            </CustomH2>
            <div className="grid grid-cols-3 grid-rows-2 gap-5 w-full">
                <CardProject />
                <CardProject />
                <CardProject />
                <CardProject />
                <CardProject />
                <CardProject />
            </div>
        </section>
    )
}