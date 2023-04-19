import React, {useEffect} from 'react'
import Section1 from './section1';
import Section2 from './about_us/section2';
import Section3 from './section3';
import Section4 from './how_to_do/section4';
import Section5 from './discover/section5';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration : 1000
        });
    }, [])
    return (
        <div className="container" id="home_page">
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
        </div>
    )
}

export default Home;