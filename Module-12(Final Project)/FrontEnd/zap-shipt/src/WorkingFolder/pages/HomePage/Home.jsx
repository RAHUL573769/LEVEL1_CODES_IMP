import Banner from "./Banner/Banner";
import ClientLogoSlider from "./ComapnySection/Company";
import OurServices from "./Services/Services";


const Home = () => {
    return (
        <div>
            <h1>This is Home</h1>
            <Banner></Banner>
            <OurServices></OurServices>
            <ClientLogoSlider></ClientLogoSlider>
        </div>
    );
};

export default Home;