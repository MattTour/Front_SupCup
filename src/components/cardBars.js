import '../style/cards.css';

const CardBars = ({ bars }) => {

    return (
        <>
            <div className="card-div mb-5">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {bars.length > 0 ?
                        bars.map((bar, index) => (
                            <div key={index} className="card horizontal-scroll-card">
                                <a href={'/bar/' + bar.id}>
                                    <img src={bar.image ? "/image/" + bar.image : "/image/no-image.png"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <div className="card-text fw-medium">{bar.name}</div>
                                        <div className="card-text opacity-75">{bar.address}, {bar.postcode} {bar.city}</div>
                                    </div>
                                </a>
                            </div>
                        )) :
                        <div className="col">
                            <div className="card event-card">
                                <div className="card-body space-between w-100">
                                    <div className="card-text">Aucun bar ne diffuse cet évènement</div>
                                </div>
                                <img src="/image/no-image.png" className="card-img" alt="..." />
                                <div className="card-img-overlay d-flex flex-column justify-content-end">
                                    <div className="card-text mt-auto position-absolute bottom-0 start-0 end-0 card-img-background txt-20 fw-bold">Pas d'évènement</div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default CardBars;
