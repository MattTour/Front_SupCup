import Navbar from '../components/navbar';
import Footer from '../components/footer';
import useToken from '../services/useToken';
import TopSports from '../components/sports/topSports';
import FavSports from '../components/sports/favSports';
import '../style/sports.css';
import SportsHeader from '../components/sports/sportsHeader';

const Sports = () => {
    const {token} = useToken();
    let favSports = "";

    if(token){
        favSports = <FavSports token={token}/>
    }

    return (<>
        <Navbar />
        <SportsHeader />
        <TopSports />
        {favSports}
        <Footer />
    </>
    )
}

export default Sports;
