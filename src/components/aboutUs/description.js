import supporters from "../../img/supporters.png"

const Description = () => {
    return (
        <div className="about-us-zone space-between mb-5">
            <div className="description-text">
                <div className="mb-5 txt-40 fw-bold">
                    Notre objectif
                </div>
                <div className="mt-5 mb-4">
                    SUP'CUP a pour objectif de vous proposer un panel 
                    d'événements sportifs très divers à proximité de vous.
                </div>
                <div className="mb-4">
                    Nous souhaitons permettre aux fans de sports en tout genre, 
                    et surtout de sport peu ou pas diffusés en public, d'identifier 
                    des endroits proches de chez eux dans lesquels ils pourront se réunir 
                    pour célébrer ensemble.
                </div>
                <div className="mb-4">
                    Notre but est de mettre en relation les supporters et les établissements 
                    organisateurs d'évènements, aujourd'hui des bars, avec la philosophie 
                    d'offrir une fan expérience sportive, festive et unique entouré d'une vraie communauté.
                </div>
            </div>
            <div className="description-img">
                <img src={supporters} alt="Fans sportifs" />
            </div>
        </div>
    )
}

export default Description;
