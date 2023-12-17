import Navbar from '../components/navbar';
import Footer from '../components/footer';
import LoginHeader from '../components/login/loginHeader';
import AccountTab from '../components/login/accountTab';
import '../style/login.css';

const Login = () => {
    return (<>
        <Navbar />
        <LoginHeader />
        <AccountTab />
        <Footer />
    </>
    )
}

export default Login;
