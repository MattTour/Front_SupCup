import bar_supporters from "../../img/bars_supporters.png";
import useToken from '../../services/useToken';

const BarSubscription = () => {
    const {token} = useToken();
    let urlSubscription = "/login";

    if(token){
        urlSubscription = "/subscribe";
    }

    return (
        <div className="top-events mb-5">
            <div className="mt-5">
                <div className="fw-bold txt-40 center">VOUS ÊTES UN BAR ?</div>
                <div className="fw-light txt-30 center">INSCRIVEZ-VOUS</div>
            </div>
            <div className="subscription-zone space-between mb-5">
                <div className="subscription-text txt-20">
                    <div className="mt-5 mb-4">
                        Rejoignez notre liste de bars partenaires, et vivez l'expérience SUP'CUP
                        avec des supporters de tout horizons.
                    </div>
                    <div className="mb-4">
                        Étayez votre éventail de sports, et recevez une communauté nouvelle !
                    </div>
                    <div className="mb-4 subscription-link subscription-button">
                        <a href={urlSubscription}>JE SUIS UN GERANT DE BAR</a>
                    </div>
                </div>
                <div className="subscription-img">
                    <img src={bar_supporters} alt="Fans sportifs" />
                </div>
            </div>
        </div>
    )
}

export default BarSubscription;
