import logo from '../img/logo_small.png';
import '../style/navbar.css';
import useToken from '../services/useToken';

const Navbar = () => {
    let button;
    const {token, setToken} = useToken();
    if(!token){
        button = <a class="nav-link nav-button" href="/login">SE CONNECTER</a>;
    } else {
        button = <a class="nav-link nav-button" href="/profil">MON PROFIL</a>;
    }
    return (
        <nav class="navbar fixed-top navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src={logo} alt="Supcup" />
                </a>
                <div class="collapse navbar-collapse">
                    <div class="navbar-nav">
                        <a class="nav-link" href="/">ACCEUIL</a>
                        <a class="nav-link" href="/">SPORTS</a>
                        <a class="nav-link" href="/bars">BARS</a>
                        <a class="nav-link" href="/about-us">A PROPOS</a>
                    </div>
                    <div class="navbar-nav ms-auto">
                        {button}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
