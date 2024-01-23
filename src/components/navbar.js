import logo from '../img/logo_small.png';
import logout from '../img/logout.svg';
import '../style/navbar.css';
import useToken from '../services/useToken';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    let buttonLogin;
    let disconnect;

    const {token, unsetToken} = useToken();

    const handleDisconnect = async (e) => {
        unsetToken(null);
        navigate('/');
    }

    if(!token){
        buttonLogin = <a className="nav-link nav-button" href="/login">SE CONNECTER</a>;
        disconnect = "";
    } else {
        buttonLogin = <a className="nav-link nav-button" href="/profil">MON PROFIL</a>;
        disconnect = <button className="nav-link" onClick={handleDisconnect}><img src={logout} alt='Logout'></img></button>;
    }
    return (
        <nav className="navbar fixed-top navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Supcup" />
                </a>
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav">
                        <a className="nav-link" href="/">ACCEUIL</a>
                        <a className="nav-link" href="/">SPORTS</a>
                        <a className="nav-link" href="/bars">BARS</a>
                        <a className="nav-link" href="/about-us">A PROPOS</a>
                    </div>
                    <div className="navbar-nav ms-auto">
                        {disconnect}
                        {buttonLogin}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
