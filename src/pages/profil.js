import Navbar from '../components/navbar';
import ProfilHeader from '../components/profil/profilHeader';
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
        <UserInfo />
        <Footer />
    </>
    )
}

export default Profil;
