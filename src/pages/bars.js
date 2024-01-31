import Navbar from '../components/navbar';
import Footer from '../components/footer';
import useToken from '../services/useToken';
import TopBars from '../components/home/topBars';
import FavBars from '../components/bars/favBars';
import '../style/bars.css';
import BarsHeader from '../components/bars/barsHeader';

const Bars = () => {
    const {token} = useToken();
    let favBars = "";

    if(token){
        favBars = <FavBars token={token}/>
    }

    return (<>
        <Navbar />
        <BarsHeader />
        <TopBars />
        {favBars}
        <Footer />
    </>
    )
}

export default Bars;
