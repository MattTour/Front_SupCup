async function SubscribeBar(email, password) {
    return fetch('http://localhost:5001/user/login',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        },    
        body: new URLSearchParams({
            'email': email,
            'password': password
        })
    })
    .then(data => {
        if (data.ok) {
            return data.json();
        }

        return null;
    });
}

const Offers = () => {
    const handleSubscribtion = async (e) => {
        
    }

    return (
        <div className="mb-5 offers-title">
            <div className="mt-5 mb-5">
                <div className="title">NOS OFFRES</div>
                <div className="fw-light txt-30">DIFFUSER DE NOUVEAUX SPORTS, <br />COMME VOUS LE SOUHAITEZ.</div>
            </div>
            <div className="offer-body">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card offer-card">
                            <div className="card-body w-100">
                                <div className="txt-30 fw-medium center">Gratuit</div>
                                <div className="txt-20 fw-bold center">ESSAI</div>
                                <div className="offer-title-separator mt-2 mb-3"></div>
                                <div className="mb-4">Pour une durée limitée, découvrez notre plateforme avec cette offre qui comprends les fonctionnalitées suivantes :</div>
                                <div className="mb-3">Création et gestion des informations d'un établissement</div>
                                <div className="mb-3">Accès au planning des évènements à venir</div>
                                <div>Pas de limite sur le nombre d'évènements</div>
                                <div><button className="subscribe-button" onClick={handleSubscribtion}>Je découvre !</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card offer-card">
                            <div className="card-body w-100">
                                <div className="txt-30 fw-medium center">130€ /an</div>
                                <div className="txt-20 fw-bold center">BRONZE</div>
                                <div className="offer-title-separator mt-2 mb-3"></div>
                                <div className="mb-4">Découvrez notre plateforme avec cette offre qui comprends les fonctionnalitées suivantes :</div>
                                <div className="mb-3">Création et gestion des informations d'un établissement</div>
                                <div className="mb-3">Accès au planning des évènements à venir</div>
                                <div>Possibilité de se placer sur deux évènements par semaines.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card offer-card">
                            <div className="card-body w-100">
                                <div className="txt-30 fw-medium center">300€ /an</div>
                                <div className="txt-20 fw-bold center">ARGENT</div>
                                <div className="offer-title-separator mt-2 mb-3"></div>
                                <div className="mb-4">Boostez votre visibilitée avec cette offre qui comprends les fonctionnalitées suivantes :</div>
                                <div className="mb-3">Création et gestion des informations d'un établissement</div>
                                <div className="mb-3">Accès au planning des évènements à venir</div>
                                <div>Pas de limite sur le nombre d'évènements</div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card offer-card">
                            <div className="card-body w-100">
                                <div className="txt-30 fw-medium center">800€ /an</div>
                                <div className="txt-20 fw-bold center">OR</div>
                                <div className="offer-title-separator mt-2 mb-3"></div>
                                <div className="mb-4">Devenez le bar sportif référence grâce à cette offre qui comprends les fonctionnalitées suivantes :</div>
                                <div className="mb-3">Création et gestion des informations d'un établissement</div>
                                <div className="mb-3">Accès au planning des évènements à venir</div>
                                <div className="mb-3">Pas de limite sur le nombre d'évènements</div>
                                <div className="mb-3">Evènements premium</div>
                                <div>Posts et affiches personnalisés pour vos réseaux sociaux</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offers;
