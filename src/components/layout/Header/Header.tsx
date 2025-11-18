export const Header = () => {
    return(
        <header className="h-17.5 w-full px-20 border-b border-b-border-header flex items-center justify-between">
            <h2 className="text-white font-fira-sans font-bold text-[1.25rem]">Marcelo Augusto.dev</h2>
            <nav className="h-full flex items-center justify-between">
                <a href="#g" className="text-white font-fira-sans font-normal flex items-center justify-center drop-shadow-[0_0_4px] drop-shadow-primary text-[1rem] bg-primary rounded-[1.25rem] h-7.5 px-7.5">Home</a>
                <a href="#g" className="text-white font-fira-sans font-medium flex items-center justify-center   h-7.5 px-7.5">Sobre Mim</a>
                <a href="#g" className="text-white font-fira-sans font-medium flex items-center justify-center  text-[1rem] h-7.5 px-7.5">Habilidades</a>
                <a href="#g" className="text-white font-fira-sans font-medium flex items-center justify-center  text-[1rem] h-7.5 px-7.5">Projetos</a>
                <a href="#g" className="text-white font-fira-sans font-medium flex items-center justify-center  text-[1rem] h-7.5 px-7.5">Contatos</a>
            </nav>
        </header>
    )
}