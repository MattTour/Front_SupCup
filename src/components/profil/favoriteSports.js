import escrimeImg from "../../img/escrime.jpeg"
import { useState, useEffect } from 'react';

const FavoriteSports = ({token}) => {
    const [sports, setSports] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/user/fav-sports',{
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
            setSports(data);
        });
    }, [token]);
    return (
        <div className="top-events mb-5">
            <div className="mt-5 mb-2">
                <div className="txt-30">SPORTS FAVORIS</div>
            </div>
            <div className="inline-flex bar-list">
                {sports.length > 0 ? 
                sports.map((sport) => (
                    <div className="card horizontal-scroll-card">
                        <a href="#">
                            <img src={escrimeImg} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="card-text fw-medium">{sport.name}</div>
                                <div className="card-text opacity-75">{sport.logo}</div>
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

export default FavoriteSports;
