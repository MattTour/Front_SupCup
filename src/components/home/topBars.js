import escrimeImg from "../../img/escrime.jpeg"
import { useState, useEffect } from 'react';

const TopBars = () => {
    const [bars, setBars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/bar/top-pubs')
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
                {bars.map((bars) => (
                    <div className="card bar-card">
                        <img src={escrimeImg} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text fw-medium">{bars.name}</div>
                            <div className="card-text opacity-75">{bars.address}, {bars.postcode} {bars.city}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopBars;
