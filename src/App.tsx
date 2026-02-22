import { lazy } from "react";
import { Footer } from "./components/layout/Footer/Footer";
import { Header } from "./components/layout/Header/Header";
import { Hero } from "./components/layout/Hero/Hero";
import { SectionContacts } from "./components/layout/Sections/SectionContacts";
import { SectionSkills } from "./components/layout/Sections/SectionSkills";

const SectionAboutMe = lazy(() =>
	import("./components/layout/Sections/SectionAboutMe").then((module) => ({
		default: module.SectionAboutMe,
	})),
);
const SectionProjects = lazy(() =>
	import("./components/layout/Sections/SectionProjects").then((module) => ({
		default: module.SectionProjects,
	})),
);

function App() {
	return (
		<div className="w-full flex flex-col justify-center items-center bg-[url(./assets/backgroundImage.png)] bg-cover bg-center">
			<Header />
			<Hero />
			<SectionAboutMe />
			<SectionSkills />
			<SectionProjects />
			<SectionContacts />
			<Footer />
		</div>
	);
}

export default App;
