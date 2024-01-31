import escrimeImg from "../../img/escrime.jpeg"
import { useState, useEffect } from 'react';

const TopSports = () => {
    const [sports, setSports] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/sport/top-sports')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setSports(data);
        });
    }, []);
    return (
        <div className="top-events mb-5">
            <div className="mt-5 mb-5">
                <div className="fw-bold txt-40 center">LES TOPS SPORTS</div>
                <div className="fw-light txt-30 center">DU MOMENT</div>
            </div>
            <div className="inline-flex bar-list">
                {sports.map((sport) => (
                    <div className="card horizontal-scroll-card">
                        <a href="#">
                            <img src={escrimeImg} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="card-text fw-medium">{sport.name}</div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopSports;
