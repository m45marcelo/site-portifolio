import { useSectionObserver } from "../../../hooks/useSectionObserver";
import iconMenu from "../../../assets/icon-hamburger.png";

export const Header = () => {
	const activeSection = useSectionObserver(["home", "about-me", "skills", "projects", "contacts"]);

	const menuItems = [
		{ id: "home", label: "Home" },
		{ id: "about-me", label: "Sobre Min" },
		{ id: "skills", label: "Habilidades" },
		{ id: "projects", label: "Projetos" },
		{ id: "contacts", label: "Contatos" },
	];
	return (
		<header className="fixed z-40 h-17.5 w-screen  backdrop-blur-xl border-b border-b-border-header flex items-center justify-center">
			<div className="flex justify-between w-full max-w-299.5 items-center  px-5  xl:px-0">
			<h2 className="text-white  font-fira-sans font-bold text-[1.125rem] ">
				Marcelo Augusto.dev
			</h2>
			<nav className="hidden h-full items-center justify-between xl:flex">
				{menuItems.map((item) => (
					<a
						key={item.id}
						href={`#${item.id}`}
						className={`text-white font-fira-sans font-normal flex items-center justify-center rounded-[1.25rem] h-7.5 px-5 ${
							activeSection === item.id
								? "drop-shadow-[0_0_4px] drop-shadow-primary bg-primary text-[1rem]"
								: ""
						}`}
					>
						{item.label}
					</a>
				))}
			</nav>
			<button type="button" className="block xl:hidden">
				<img alt="menu" src={iconMenu} height={30} width={30}/>
			</button>
			</div>
		</header>
	);
};
