import escrimeImg from "../../img/escrime.jpeg"
import { useState, useEffect } from 'react';

const FavBars = ({token}) => {
    const [bars, setBars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/user/fav-bars',{
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
            setBars(data);
        });
    }, [token]);
    return (
        <div className="top-events mb-5">
            <div className="mt-5 mb-5">
                <div className="fw-bold txt-40 center">VOS FAVORIS</div>
                <div className="fw-light txt-30 center">L'AMBIANCE DU STADE</div>
            </div>
            <div className="inline-flex bar-list">
                {bars.map((bars) => (
                    <div className="card bar-card">
                        <img src={escrimeImg} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text fw-medium">{bars.name}</div>
                            <div className="card-text opacity-75">{bars.address}, {bars.postcode} {bars.city}</div>
                        </div>
                    </div>
                ))}
                {bars.length > 0 ? 
                bars.map((bar) => (
                    <div className="card bar-card">
                        <img src={escrimeImg} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text fw-medium">{bar.name}</div>
                            <div className="card-text opacity-75">{bar.address}, {bar.postcode} {bar.city}</div>
                        </div>
                    </div>
                ))
                :(  <div className="card bar-card">
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

export default FavBars;
