import { useState, useEffect } from 'react';

const FavSports = ({token}) => {
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
            <div className="mt-5 mb-5">
                <div className="fw-bold txt-40 center">VOS FAVORIS</div>
                <div className="fw-light txt-30 center">SPORTS D'EXCEPTION</div>
            </div>
            <div className="inline-flex bar-list">
                {sports.length > 0 ?
                sports.map((sport) => (
                    <div className="card horizontal-scroll-card">
                        <a href="#">
                            <img src={sport.image ? "/image/" + sport.image : "/image/no-image.png"} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="card-text fw-medium">{sport.name}</div>
                                <div className="card-text opacity-75">{sport.address}, {sport.postcode} {sport.city}</div>
                            </div>
                        </a>
                    </div>
                ))
                :(  <div className="card horizontal-scroll-card">
                        <img src="/image/no-image.png" className="card-img-top" alt="Placeholder, pas de photo disponible" />
                        <div className="card-body">
                            <div className="card-text fw-medium">Pas de favoris</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FavSports;
