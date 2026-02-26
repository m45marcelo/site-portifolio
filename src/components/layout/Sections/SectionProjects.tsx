import { CustomH2 } from "../../other/CustomH2"
import { CardProject } from "../../ui/CardProject"
import imageProject1 from "../../../assets/projeto1.svg"
import imageProject2 from "../../../assets/image-project-5.png"
import imageProject3 from "../../../assets/image-project-2.png"
import imageProject4 from "../../../assets/image-project-3.png"
import imageProject5 from "../../../assets/image-project-4.png"

export const SectionProjects = () => {
    const projects = [
        {
            name: "FinState",
            description: "Projeto Full-Stack de um Gerenciador de despesas pessoal totalmente funcional, onde o usuário poderá registrar suas despesas, receitas e assinaturas.",
            addressSite: "marceloaugustodev.vercel.app",
            gitProject: "https://github.com/m45marcelo/fin-state",
            image: imageProject1,
            stacks: ["HTML", "CSS", "Typescript", "Next", "Tailwind", "Redux","MongoDB", "Express"]
        },
        {
            name: "Game Store",
            description: "Projeto Full-Stack de uma loja de games com multiplas páginas e autenticação, onde o usuário poderá simular a compra de jogos.",
            addressSite: "marceloaugustodev.vercel.app",
            gitProject: "https://github.com/m45marcelo/game-store",
            image: imageProject2,
            stacks: ["Next", "Tailwind", "Postgres", "Redux"]
        },
        {
            name: "The Blog",
            description: "Projeto Front-end com React e Styled Components simulando um blog profissional com a implementação de rotas com React Router.",
            addressSite: "https://the-blog-9f3l.vercel.app/",
            gitProject: "https://github.com/m45marcelo/TheBlog",
            image: imageProject3,
            stacks: ["HTML", "CSS", "React", "Styled Components"]
        },
        {
            name: "Previsão do tempo",
            description: "Projeto simples de uma aplicação que consome uma api que retorna previsões de climas futuros de qualquer cidade.",
            addressSite: "marceloaugustodev.vercel.app",
            gitProject: "https://github.com/m45marcelo/prev-tempo",
            image: imageProject4,
            stacks: ["HTML", "CSS", "React", "Tailwind"]
        },
        {
            name: "Meu Portifolio",
            description: "Projeto Front-end do meu portifólio online onde totalmente responsivo onde éu falo mais sobre as minha habilidades.",
            addressSite: "marceloaugustodev.vercel.app",
            gitProject: "https://github.com/m45marcelo/site-portifolio",
            image: imageProject5,
            stacks: ["HTML", "CSS", "React", "Tailwind"]
        }
    ]
    return(
        <section id="projects" className="w-full max-w-299.5 flex flex-col items-center mb-15 lg:px-10 px-5 xl:px-0">
            <CustomH2 className="text-[1.125rem] xl:text-[2rem] xl:h-11.5 mb-5 xl:mb-10 relative pb-1 xl:pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] xl:after:h-[2px] after:bg-gradient-to-r after:from-[#7A5DFC] after:to-[#EC6B90]">
                Projetos
            </CustomH2>
            <div className="grid sm:grid-cols-3 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2 gap-5 w-full justify-center">
                {
                    projects.map((item) => (
                        <CardProject key={item.name} nameProject={item.name} descriptionProject={item.description} addressSite={item.addressSite} gitProject="" imageProject={item.image} stacksProject={item.stacks}/>
                    ))
                }
            </div>
        </section>
    )
}