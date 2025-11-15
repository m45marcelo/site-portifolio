import { Background } from "./components/layout/Background/Background";
import { Header } from "./components/layout/Header/Header";
import { Hero } from "./components/layout/Hero/Hero";

function App() {
	return (
        <Background>
            <div className="absolute top-0 w-full flex flex-col justify-center items-center">
                <Header/>
                <Hero/>
            </div>
        </Background>
    );
}

export default App;
