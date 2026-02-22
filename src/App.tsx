import { lazy, Suspense } from "react";
import { Background } from "./components/layout/Background/Background";
import { Footer } from "./components/layout/Footer/Footer";
// Mantenha os essenciais (Hero e Header) com import normal
import { Header } from "./components/layout/Header/Header";
import { Hero } from "./components/layout/Hero/Hero";
import { Loader } from "./components/layout/Loader/Loader";
import { SectionContacts } from "./components/layout/Sections/SectionContacts";
import { SectionSkills } from "./components/layout/Sections/SectionSkills";

// Carregue o resto "sob demanda"
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
// ... outros imports
function App() {
	// const [loading, setLoading] = useState(true);

	// useEffect(() => {
	//     // Função para encerrar o loading
	//     const stopLoading = () => {
	//         setTimeout(() => {
	//             setLoading(false);
	//         }, 0000);
	//     };

	//     // Se o documento já terminou de carregar, cancelamos o loader imediatamente
	//     if (document.readyState === "complete") {
	//         stopLoading();
	//     } else {
	//         window.addEventListener("load", stopLoading);
	//         return () => window.removeEventListener("load", stopLoading);
	//     }
	// }, []);

	// if (loading) {
	//     return <Loader />;
	// }

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
