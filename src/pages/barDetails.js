import Navbar from '../components/navbar';
import Footer from '../components/footer';
import BarDetailsHeader from '../components/barDetails/barDetailsHeader';
import BarDescription from '../components/barDetails/barDescription';
import BarEvents from '../components/barDetails/barEvents';
import '../style/bars.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

const BarDetails = () => {
    const params = useParams();

    const [bar, setBar] = useState([]);
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/bar/details/' + params.id, {
            method: 'GET'
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setBar(data.bar);
                setEvents(data.events);
            });
    }, [params]);

    return (<>
        <Navbar />
        <BarDetailsHeader bar={bar} />
        <BarDescription bar={bar} />
        <BarEvents events={events} />
        <Footer />
    </>
    )
}

export default BarDetails;
