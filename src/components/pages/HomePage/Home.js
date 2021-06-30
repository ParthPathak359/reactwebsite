import React from 'react';
import HeroSection from '../Hero/HeroSection';
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data';
import Pricing from '../Hero/Pricing';
function Home() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjTwo} />
            <Pricing />
            <HeroSection {...homeObjFour} />
        </>
    )
}

export default Home;