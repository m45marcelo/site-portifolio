import { Background } from "./components/layout/Background/Background";
import { Header } from "./components/layout/Header/Header";
import { Hero } from "./components/layout/Hero/Hero";
import { SectionSkills } from "./components/layout/Sections/SectionSkills";
import { SectionAboutMe } from "./components/layout/Sections/SectionAboutMe";
import { SectionProjects } from "./components/layout/Sections/SectionProjects";

function App() {
	return (
        <Background>
            <div className="absolute top-0 left-0 w-full flex flex-col justify-center items-center">
                <Header/>
                <Hero/>
                <SectionAboutMe/>
                <SectionSkills/>
                <SectionProjects/>
            </div>
        </Background>
    );
}

export default App;
