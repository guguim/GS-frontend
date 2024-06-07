import "./Home.scss";
import Navbar from "../components/Navbar";
import Forms from "../components/Forms";
import Footer from "../components/Footer";

import background from "../../assets/backgroung.jpeg";
import logo from "../../assets/logo.png";

const Home = () => {
    const images = {
        "logo.png": logo,
        "background.jpeg": background, 
};

return  (
    <>
    <Navbar />
    </>
)

}

export default Home;