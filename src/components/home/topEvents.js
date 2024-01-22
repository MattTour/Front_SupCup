import escrimeImg from "../../img/escrime.jpeg"
import { useState, useEffect } from 'react';

const TopEvents = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/event/next-events')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setEvents(data);
        });
    }, []);
    return (
        <div className="top-events">
            <div className="mt-5 mb-5">
                <div className="fw-bold txt-40 center">À NE PAS RATER</div>
                <div className="fw-light txt-30 center">LES TOP MATCHS</div>
            </div>
            <div>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {events.map((event) => (
                        <div className="col">
                            <div className="card event-card">
                                <div className="card-body space-between w-100">
                                    <div className="card-text">{event.date_event}</div>
                                    <div className="card-text">ESCRIME</div>
                                </div>
                                <img src={escrimeImg} className="card-img" alt="..." />
                                <div className="card-img-overlay d-flex flex-column justify-content-end">
                                    <div className="card-text mt-auto position-absolute bottom-0 start-0 end-0 card-img-background txt-20 fw-bold">{event.name}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopEvents;
