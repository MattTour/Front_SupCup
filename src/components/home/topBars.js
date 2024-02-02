import escrimeImg from "../../img/escrime.jpeg"
import { useState, useEffect } from 'react';

const TopBars = () => {
    const [bars, setBars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/bar/top-bars')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setBars(data);
        });
    }, []);
    return (
        <div className="top-events mb-5">
            <div className="mt-5 mb-5">
                <div className="fw-bold txt-40 center">LES TOPS BARS</div>
                <div className="fw-light txt-30 center">DU MOMENT</div>
            </div>
            <div className="inline-flex bar-list">
                {bars.map((bar, index) => (
                    <div key={index} className="card horizontal-scroll-card">
                        <a href={'/bar/' + bar.id}>
                            <img src={escrimeImg} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="card-text fw-medium">{bar.name}</div>
                                <div className="card-text opacity-75">{bar.address}, {bar.postcode} {bar.city}</div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopBars;
