import supporters from "../../img/supporters.png"

const Description = () => {
    return (
        <div class="about-us-zone space-between mb-5">
            <div class="description-text">
                <div class="mb-5 txt-40 fw-bold">
                    Notre objectif
                </div>
                <div class="mt-5 mb-4">
                    SUP'CUP a pour objectif de vous proposer un panel 
                    d'événements sportifs très divers à proximité de vous.
                </div>
                <div class="mb-4">
                    Nous souhaitons permettre aux fans de sports en tout genre, 
                    et surtout de sport peu ou pas diffusés en public, d'identifier 
                    des endroits proches de chez eux dans lesquels ils pourront se réunir 
                    pour célébrer ensemble.
                </div>
                <div class="mb-4">
                    Notre but est de mettre en relation les supporters et les établissements 
                    organisateurs d'évènements, aujourd'hui des bars, avec la philosophie 
                    d'offrir une fan expérience sportive, festive et unique entouré d'une vraie communauté.
                </div>
            </div>
            <div class="description-img">
                <img src={supporters} alt="Photo de fans sportifs" />
            </div>
        </div>
    )
}

export default Description;
