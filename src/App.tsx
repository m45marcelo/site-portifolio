import { Background } from "./components/layout/Background/Background";
import { Header } from "./components/layout/Header/Header";
import { Hero } from "./components/layout/Hero/Hero";
import { SectionSkills } from "./components/layout/Sections/SectionSkills";
import { SectionAboutMe } from "./components/layout/Sections/SectionAboutMe";
import { SectionProjects } from "./components/layout/Sections/SectionProjects";
import { SectionContacts } from "./components/layout/Sections/SectionContacts";
import { Footer } from "./components/layout/Footer/footer";

function App() {
	return (
        <Background>
            <Header/>
            <div className="absolute top-0 left-0 w-full flex flex-col justify-center items-center">
                
                <Hero/>
                <SectionAboutMe/>
                <SectionSkills/>
                <SectionProjects/>
                <SectionContacts/>
                <Footer/>
            </div>
        </Background>
    );
}

export default App;
