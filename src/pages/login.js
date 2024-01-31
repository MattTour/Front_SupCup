import Navbar from '../components/navbar';
import Footer from '../components/footer';
import LoginHeader from '../components/login/loginHeader';
import AccountTab from '../components/login/accountTab';
import useToken from '../services/useToken';
import  { Navigate } from 'react-router-dom'
import '../style/login.css';

const Login = () => {
    const {token, setToken} = useToken();

    if(token){
        {return <Navigate to='/profil' />}
    }

    return (<>
        <Navbar />
        <LoginHeader />
        <AccountTab />
        <Footer />
    </>
    )
}

export default Login;
