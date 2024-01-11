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
        <div class="top-events">
            <div class="mt-5 mb-5">
                <div class="fw-bold txt-40 center">À NE PAS RATER</div>
                <div class="fw-light txt-30 center">LES TOP MATCHS</div>
            </div>
            <div>
                <div class="row row-cols-1 row-cols-md-4 g-4">
                    {events.map((event) => (
                        <div class="col">
                            <div class="card event-card">
                                <div class="card-body space-between w-100">
                                    <div class="card-text">{event.date_event}</div>
                                    <div class="card-text">ESCRIME</div>
                                </div>
                                <img src={escrimeImg} class="card-img" alt="..." />
                                <div class="card-img-overlay d-flex flex-column justify-content-end">
                                    <div class="card-text mt-auto position-absolute bottom-0 start-0 end-0 card-img-background txt-20 fw-bold">{event.name}</div>
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
