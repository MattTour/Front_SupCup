import logo from '../img/logo_small.png';
import '../style/navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar fixed-top navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src={logo} alt="Supcup" />
                </a>
                <div class="collapse navbar-collapse">
                    <div class="navbar-nav">
                        <a class="nav-link" href="/">ACCEUIL</a>
                        <a class="nav-link" href="/">MES SPORTS</a>
                        <a class="nav-link" href="/">MES BARS</a>
                        <a class="nav-link" href="/">A PROPOS</a>
                    </div>
                    <div class="navbar-nav ms-auto">
                        <a class="nav-link nav-button" href="/profil">MON COMPTE</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
