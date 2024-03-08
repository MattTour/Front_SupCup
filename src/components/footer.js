import '../style/footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <footer>
                <div className="row">
                    {/* <div className="col-6 col-md-2">
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="p-0">Conditions générales</a></li>
                            <li className="nav-item mb-2"><a href="/" className="p-0">Accessibilité</a></li>
                        </ul>
                    </div> */}

                    <div className="col-6 col-md-2">
                        <h5>MES SPORTS</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/profil" className="p-0">Liste de sports favoris</a></li>
                            <li className="nav-item mb-2"><a href="/profil" className="p-0">Liste d’équipes favoris</a></li>
                            <li className="nav-item mb-2"><a href="/sports" className="p-0">Évènements</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2">
                        <h5>MES BARS</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/bars" className="p-0">Liste de bars favoris</a></li>
                        </ul>
                    </div>

                    <div className="col-md-5 offset-md-1">
                        <h5>A PROPOS</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/about-us" className="p-0">Qui sommes-nous ?</a></li>
                            <li className="nav-item mb-2"><a href="https://www.instagram.com/supcup75/" className="p-0">Instagram</a></li>
                        </ul>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4">
                    <p>2023 SUP'CUP</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
