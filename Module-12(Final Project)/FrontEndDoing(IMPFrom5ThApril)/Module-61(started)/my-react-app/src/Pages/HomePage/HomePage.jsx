
import { useEffect, useState } from 'react';
import LogoSlider from '../CompanyLogoSSection/CompanyLogoSection';
import Reviews from '../Reviews/Reviews';
import Banner from './Banner/Banner';
import HowItWorks from './HowItWorks/HowItWorks';
import CoveragePage from './Coverage/CoveragePage';




const HomePage = () => {


    const [reviews, setReviews] = useState()
    useEffect(() => {
        fetch("../../../public/reviews.json").then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>

            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <LogoSlider></LogoSlider>
            <Reviews reviews={reviews}></Reviews>
            {/* <CoveragePage></CoveragePage> */}
        </div>
    );
};

export default HomePage;