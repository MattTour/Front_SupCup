import portraits from "../../img/portraits.png"

const Portrait = () => {
    return (
        <div className="about-us-zone center mt-5 mb-5">
            <br />
            <div className="mb-5">
                <div className="fw-bold txt-40 center">NOTRE BELLE</div>
                <div className="fw-light txt-30 center">EQUIPE</div>
            </div>
            <div>
                <img className="team-img" src={portraits} alt="Tous les membres de l'équipe de SUPCUP" />
            </div>
            <br />
        </div>
    )
}

export default Portrait;
