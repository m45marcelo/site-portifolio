import { useSectionObserver } from "../../../hooks/useSectionObserver";

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
		<header className="fixed z-40 h-17.5 w-full px-20  backdrop-blur-xl border-b border-b-border-header flex items-center justify-between">
			<h2 className="text-white w-[220px] font-fira-sans font-bold text-[1.25rem]">
				Marcelo Augusto.dev
			</h2>
			<nav className="h-full flex items-center justify-between">
				{menuItems.map((item) => (
					<a
						key={item.id}
						href={`#${item.id}`}
						className={`text-white font-fira-sans font-normal flex items-center justify-center rounded-[1.25rem] h-7.5 px-7.5 ${
							activeSection === item.id
								? "drop-shadow-[0_0_4px] drop-shadow-primary bg-primary text-[1rem]"
								: ""
						}`}
					>
						{item.label}
					</a>
				))}
			</nav>
		</header>
	);
};
