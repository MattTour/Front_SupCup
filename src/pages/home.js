import Navbar from '../components/navbar';
import SliderHeader from '../components/home/sliderHeader';
import SearchZone from '../components/home/searchZone';
import TopEvents from '../components/home/topEvents';
import TopBars from '../components/home/topBars';
import Footer from '../components/footer';
import '../style/home.css';

const Home = () => {
    return (<>
        <Navbar />
        <SliderHeader />
        <SearchZone />
        <TopEvents />
        <TopBars />
        <Footer />
    </>
    )
}

export default Home;
