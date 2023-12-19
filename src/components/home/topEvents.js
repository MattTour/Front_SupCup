import escrimeImg from "../../img/escrime.jpeg"

const TopEvents = () => {
    return (
        <div class="top-events">
            <div class="mt-5 mb-5">
                <div class="fw-bold txt-40 center">À NE PAS RATER</div>
                <div class="fw-light txt-30 center">LES TOP MATCHS</div>
            </div>
            <div>
                <div class="row row-cols-1 row-cols-md-4 g-4">
                    <div class="col">
                        <div class="card event-card">
                            <div class="card-body space-between w-100">
                                <div class="card-text">20 AVRIL - 20H30</div>
                                <div class="card-text">ESCRIME</div>
                            </div>
                            <img src={escrimeImg} class="card-img" alt="..." />
                            <div class="card-img-overlay d-flex flex-column justify-content-end">
                                <div class="card-text mt-auto position-absolute bottom-0 start-0 end-0 card-img-background txt-20 fw-bold">ITALIE - ALLEMAGNE</div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card event-card">
                            <div class="card-body space-between w-100">
                                <div class="card-text">20 AVRIL - 20H30</div>
                                <div class="card-text">ESCRIME</div>
                            </div>
                            <img src={escrimeImg} class="card-img" alt="..." />
                            <div class="card-img-overlay d-flex flex-column justify-content-end">
                                <div class="card-text mt-auto position-absolute bottom-0 start-0 end-0 card-img-background txt-20 fw-bold">ITALIE - ALLEMAGNE</div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card event-card">
                            <div class="card-body space-between w-100">
                                <div class="card-text">20 AVRIL - 20H30</div>
                                <div class="card-text">ESCRIME</div>
                            </div>
                            <img src={escrimeImg} class="card-img" alt="..." />
                            <div class="card-img-overlay d-flex flex-column justify-content-end">
                                <div class="card-text mt-auto position-absolute bottom-0 start-0 end-0 card-img-background txt-20 fw-bold">ITALIE - ALLEMAGNE</div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card event-card">
                            <div class="card-body space-between w-100">
                                <div class="card-text">20 AVRIL - 20H30</div>
                                <div class="card-text">ESCRIME</div>
                            </div>
                            <img src={escrimeImg} class="card-img" alt="..." />
                            <div class="card-img-overlay d-flex flex-column justify-content-end">
                                <div class="card-text mt-auto position-absolute bottom-0 start-0 end-0 card-img-background txt-20 fw-bold">ITALIE - ALLEMAGNE</div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card event-card">
                            <div class="card-body space-between w-100">
                                <div class="card-text">20 AVRIL - 20H30</div>
                                <div class="card-text">ESCRIME</div>
                            </div>
                            <img src={escrimeImg} class="card-img" alt="..." />
                            <div class="card-img-overlay d-flex flex-column justify-content-end">
                                <div class="card-text mt-auto position-absolute bottom-0 start-0 end-0 card-img-background txt-20 fw-bold">ITALIE - ALLEMAGNE</div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card event-card">
                            <div class="card-body space-between w-100">
                                <div class="card-text">20 AVRIL - 20H30</div>
                                <div class="card-text">ESCRIME</div>
                            </div>
                            <img src={escrimeImg} class="card-img" alt="..." />
                            <div class="card-img-overlay d-flex flex-column justify-content-end">
                                <div class="card-text mt-auto position-absolute bottom-0 start-0 end-0 card-img-background txt-20 fw-bold">ITALIE - ALLEMAGNE</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopEvents;
