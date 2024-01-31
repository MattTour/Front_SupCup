import escrimeImg from "../../img/profil_pic.png"

const BarDescription = ({bar}) => {
    return (
        <div className="bar-description mt-4 mb-4">
            <div className="inline-flex bar-description-info">
                <div className="bar-description-info-text">
                    <div className="title">{bar.name}</div>
                    <div className="txt-20 mb-2">{bar.description}</div>
                    <div className="txt-20">{bar.address}, {bar.postcode} {bar.city}</div>
                </div>
                <div className="bar-description-info-picture">
                    <img src={escrimeImg} alt={'Bar '+bar.name}></img>
                </div>
            </div>
        </div>
    )
}

export default BarDescription;
