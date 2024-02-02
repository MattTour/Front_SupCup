import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import BarDetailsHeader from "../components/barDetails/barDetailsHeader";
import BarDescription from '../components/barDetails/barDescription';
import CardBars from '../components/cardBars';


const EventDetails = () => {
    const params = useParams();

    const [bars, setBars] = useState([]);
    const [event, setEvent] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/event/details/'+params.id,{
            method: 'GET'
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setBars(data.bars);
            setEvent(data.event);
        });
    }, [params]);

    return (
        <>
        <Navbar />
        <BarDetailsHeader bar={event} />
        <BarDescription bar={event} />
        <CardBars bars={bars} />
        <Footer />
        </>
    )

}

export default EventDetails;
