import { useState } from "react";
import iconMenu from "../../../assets/icon-hamburger.png";
import { useSectionObserver } from "../../../hooks/useSectionObserver";

export const Header = () => {
	const [stateMenu, setStateMenu] = useState("hidden");

	const activeSection = useSectionObserver([
		"home",
		"about-me",
		"skills",
		"projects",
		"contacts",
	]);

	const menuItems = [
		{ id: "home", label: "Home" },
		{ id: "about-me", label: "Sobre Min" },
		{ id: "skills", label: "Habilidades" },
		{ id: "projects", label: "Projetos" },
		{ id: "contacts", label: "Contatos" },
	];

	function handleStateMenu(){
		setStateMenu(prev => prev === "hidden" ? "flex" : "hidden")
	}

	return (
		<header className="fixed top-0 z-50 min-h-[50px] lg:top-0 lg:h-[4.375rem] w-full bg-black/10 backdrop-blur-xl border-b border-white/10 flex flex-col items-center justify-center">
			<div className="flex h-[50px] justify-between w-full max-w-299.5 items-center px-5 lg:px-10  xl:px-0">
				<h2
					className="text-white font-fira-sans font-bold text-[1.125rem] text-[0.875rem] lg:text-[1.125rem] leading-[1.4] min-h-[1.6rem]"
				>
					Marcelo Augusto.dev
				</h2>
				<nav className="hidden h-full items-center justify-between xl:flex">
					{menuItems.map((item) => (
						<a
							key={item.id}
							href={`#${item.id}`}
							className={`text-white font-fira-sans font-normal leading-[1.4] min-h-[1.6rem] flex items-center justify-center rounded-[1.25rem] h-7.5 px-5 ${activeSection === item.id
								? "drop-shadow-[0_0_4px] drop-shadow-primary bg-primary text-[1rem]"
								: ""
					}`}
						>
							{item.label}
						</a>
					))}
				</nav>
				<button onClick={() =>handleStateMenu()} type="button" className="block xl:hidden">
					<img alt="menu" src={iconMenu} height={30} width={30} />
				</button>
			</div>

			<nav className={`${stateMenu} flex-col h-full gap-[3px] items-center justify-between xl:hidden`}>
					{menuItems.map((item) => (
						<a
							key={item.id}
							href={`#${item.id}`}
							className={`text-white font-fira-sans font-normal text-[13px] leading-[1.4] h-[1.4rem] flex items-center justify-center rounded-[1.25rem] h-7.5 px-5 ${activeSection === item.id
								? "drop-shadow-[0_0_4px] drop-shadow-primary bg-primary text-[14px]"
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
