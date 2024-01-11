import portraits from "../../img/portraits.png"

const Portrait = () => {
    return (
        <div class="about-us-zone center mt-5 mb-5">
            <br />
            <div class="mb-5">
                <div class="fw-bold txt-40 center">NOTRE BELLE</div>
                <div class="fw-light txt-30 center">EQUIPE</div>
            </div>
            <div>
                <img src={portraits} alt="Tous les membres de l'équipe de SUPCUP" />
            </div>
            <br />
        </div>
    )
}

export default Portrait;
