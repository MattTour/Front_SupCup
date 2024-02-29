import escrimeImg from "../../img/escrime.jpeg"
import { useState, useEffect } from 'react';

const FavoriteEquipes = ({token}) => {
    const [equipes, setEquipes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/user/fav-equipes',{
            method: 'GET',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
                'token': token
            }
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setEquipes(data);
        });
    }, [token]);
    return (
        <div className="top-events mb-5">
            <div className="mb-4 subscription-link subscription-button">
                <a href="/subscribe">JE SUIS UN GERANT DE BAR</a>
            </div>
            <div className="mt-5 mb-2">
                <div className="txt-30">EQUIPES FAVORITES</div>
            </div>
            <div className="inline-flex bar-list">
                {equipes.length > 0 ? 
                equipes.map((equipe) => (
                    <div className="card horizontal-scroll-card">
                        <a href="#">
                            <img src={escrimeImg} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="card-text fw-medium">{equipe.name}</div>
                                <div className="card-text opacity-75">{equipe.logo}</div>
                            </div>
                        </a>
                    </div>
                ))
                :(  <div className="card horizontal-scroll-card">
                        <img src={escrimeImg} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text fw-medium">Pas de favoris</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FavoriteEquipes;
