import '../style/footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <footer>
                <div className="row">
                    <div className="col-6 col-md-2">
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="p-0">Confidentialité et cookies </a></li>
                            <li className="nav-item mb-2"><a href="/" className="p-0">Conditions générales</a></li>
                            <li className="nav-item mb-2"><a href="/" className="p-0">Accessibilité</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2">
                        <h5>MES SPORTS</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="p-0">Liste de sports favoris</a></li>
                            <li className="nav-item mb-2"><a href="/" className="p-0">Liste d’équipes favoris</a></li>
                            <li className="nav-item mb-2"><a href="/" className="p-0">Évènements</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2">
                        <h5>MES BARS</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="p-0">Liste de bars favoris</a></li>
                            <li className="nav-item mb-2"><a href="/" className="p-0">Historique de bars visités</a></li>
                        </ul>
                    </div>

                    <div className="col-md-5 offset-md-1">
                        <h5>A PROPOS</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="p-0">Qui sommes-nous ?</a></li>
                        </ul>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4">
                    <p>2023 SUP'CUP</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="link-body-emphasis" href="/"><svg className="bi" width="24" height="24"><use href="#twitter"></use></svg></a></li>
                        <li className="ms-3"><a className="link-body-emphasis" href="/"><svg className="bi" width="24" height="24"><use href="#instagram"></use></svg></a></li>
                        <li className="ms-3"><a className="link-body-emphasis" href="/"><svg className="bi" width="24" height="24"><use href="#facebook"></use></svg></a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer;