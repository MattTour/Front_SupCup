import Navbar from '../components/navbar';
import ProfilHeader from '../components/profil/profilHeader';
import FavoriteEquipes from '../components/profil/favoriteEquipes';
import FavoriteSports from '../components/profil/favoriteSports';
import Footer from '../components/footer';
import '../style/profil.css';
import UserInfo from '../components/profil/userInfo';
import useToken from '../services/useToken';
import Login from './login';

const Profil = () => {
    const {token, setToken} = useToken();

    if(!token){
        {return <Login setToken={setToken}/>}
    }

    return (<>
        <Navbar />
        <ProfilHeader />
        <UserInfo token={token}/>
        <FavoriteEquipes token={token}/>
        <FavoriteSports token={token}/>
        <Footer />
    </>
    )
}

export default Profil;
