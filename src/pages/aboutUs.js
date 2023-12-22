import Navbar from '../components/navbar';
import Footer from '../components/footer';
import AboutUsHeader from '../components/aboutUs/aboutUsHeader';
import Description from '../components/aboutUs/description';
import NavbarFiller from '../components/aboutUs/navbarFiller';
import '../style/aboutUs.css';
import Portrait from '../components/aboutUs/portrait';

const AboutUs = () => {
    return (<>
        <Navbar />
        <NavbarFiller />
        <AboutUsHeader />
        <Description />
        <Portrait />
        <Footer />
    </>
    )
}

export default AboutUs;
