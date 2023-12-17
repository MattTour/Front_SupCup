import '../style/footer.css';

const Footer = () => {
    return (
        <div class="footer">
            <footer>
                <div class="row">
                    <div class="col-6 col-md-2">
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="/" class="p-0">Confidentialité et cookies </a></li>
                            <li class="nav-item mb-2"><a href="/" class="p-0">Conditions générales</a></li>
                            <li class="nav-item mb-2"><a href="/" class="p-0">Accessibilité</a></li>
                        </ul>
                    </div>

                    <div class="col-6 col-md-2">
                        <h5>MES SPORTS</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="/" class="p-0">Liste de sports favoris</a></li>
                            <li class="nav-item mb-2"><a href="/" class="p-0">Liste d’équipes favoris</a></li>
                            <li class="nav-item mb-2"><a href="/" class="p-0">Évènements</a></li>
                        </ul>
                    </div>

                    <div class="col-6 col-md-2">
                        <h5>MES BARS</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="/" class="p-0">Liste de bars favoris</a></li>
                            <li class="nav-item mb-2"><a href="/" class="p-0">Historique de bars visités</a></li>
                        </ul>
                    </div>

                    <div class="col-md-5 offset-md-1">
                        <h5>A PROPOS</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="/" class="p-0">Qui sommes-nous ?</a></li>
                        </ul>
                    </div>
                </div>

                <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4">
                    <p>2023 SUP'CUP</p>
                    <ul class="list-unstyled d-flex">
                        <li class="ms-3"><a class="link-body-emphasis" href="/"><svg class="bi" width="24" height="24"><use href="#twitter"></use></svg></a></li>
                        <li class="ms-3"><a class="link-body-emphasis" href="/"><svg class="bi" width="24" height="24"><use href="#instagram"></use></svg></a></li>
                        <li class="ms-3"><a class="link-body-emphasis" href="/"><svg class="bi" width="24" height="24"><use href="#facebook"></use></svg></a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer;