import escrimeImg from "../img/escrime.jpeg";
import '../style/eventSport.css';

const EventSport = ({ events }) => {

    return (
        <>
            <div className="card-div mb-5 mt-5">
                <div className="inline-flex bar-list">
                    {events.length > 0 ?
                        events.map((event, index) => (
                            <div className="card horizontal-scroll-card">
                                <a key={index} href={'/event/' + event.id}>
                                    <img src={escrimeImg} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <div className="card-text fw-medium">{event.name}</div>
                                    </div>
                                </a>
                            </div>
                        )) :
                        <div className="card horizontal-scroll-card">
                            <img src={escrimeImg} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="card-text fw-medium">Aucun évènement pour ce sport</div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default EventSport;
