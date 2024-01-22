import logo from '../img/logo_small.png';
import '../style/navbar.css';
import useToken from '../services/useToken';

const Navbar = () => {
    let button;
    const {token, setToken} = useToken();
    if(!token){
        button = <a className="nav-link nav-button" href="/login">SE CONNECTER</a>;
    } else {
        button = <a className="nav-link nav-button" href="/profil">MON PROFIL</a>;
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
                        {button}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
