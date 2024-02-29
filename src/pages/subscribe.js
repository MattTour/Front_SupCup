import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Offers from '../components/subscribe/offers';
import NavbarFiller from '../components/navbar/navbarFiller';
import '../style/subscribe.css';

const Subscribe = () => {
    return (<>
        <Navbar />
        <NavbarFiller />
        <Offers />
        <Footer />
    </>
    )
}

export default Subscribe;
