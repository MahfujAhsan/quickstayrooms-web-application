import "../styles/index.css";
import Recipes from "./Recipes";
import heroBackground from "../assets/hero-background.png";

const App = () => {
    return (
        <>
            <section>
                <img src={heroBackground} alt="" />
            </section>
            <main>
                <section>
                    <h1>This is Mahfujur Rahman</h1>
                </section>
            </main>
            <Recipes />
        </>
    );
};

export default App;