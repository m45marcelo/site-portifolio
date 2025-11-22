import { useEffect, useState } from "react";
import { Loader } from "./components/layout/Loader/Loader";

import { Background } from "./components/layout/Background/Background";
import { Header } from "./components/layout/Header/Header";
import { Hero } from "./components/layout/Hero/Hero";
import { SectionSkills } from "./components/layout/Sections/SectionSkills";
import { SectionAboutMe } from "./components/layout/Sections/SectionAboutMe";
import { SectionProjects } from "./components/layout/Sections/SectionProjects";
import { SectionContacts } from "./components/layout/Sections/SectionContacts";
import { Footer } from "./components/layout/Footer/footer";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setLoading(false);
        };

        window.addEventListener("load", handleLoad);

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    

    return (
        <div className="flex flex-col w-full justify-center items-center">
            <Background>
            <Header />
            <div className="absolute top-0 left-0 w-full flex flex-col justify-center items-center">
                <Hero />
                <SectionAboutMe />
                <SectionSkills />
                <SectionProjects />
                <SectionContacts />
                <Footer />
            </div>
        </Background>
        </div>
    );
}

export default App;
