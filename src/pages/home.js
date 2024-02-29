import Navbar from '../components/navbar';
import SliderHeader from '../components/home/sliderHeader';
import SearchZone from '../components/home/searchZone';
import TopEvents from '../components/home/topEvents';
import TopBars from '../components/home/topBars';
import BarSubscription from '../components/home/barSubscription';
import Footer from '../components/footer';
import '../style/home.css';

const Home = () => {
    return (<>
        <Navbar />
        <SliderHeader />
        <SearchZone />
        <TopEvents />
        <TopBars />
        <BarSubscription />
        <Footer />
    </>
    )
}

export default Home;
