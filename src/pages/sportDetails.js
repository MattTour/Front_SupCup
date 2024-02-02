import { useParams } from "react-router-dom";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import SportsHeader from '../components/sports/sportsHeader';
import EventSport from '../components/eventSport';
import { useState, useEffect } from 'react';

const SportDetails = () => {
    const params = useParams();

    const [sport, setSport] = useState([]);
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/event/events-sport/'+params.id,{
            method: 'GET'
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setSport(data.sport);
            setEvents(data.events);
        });
    }, [params]);

    return (
        <>
        <Navbar />
        <SportsHeader title={sport.name} />
        <EventSport events={events}/>
        <Footer />
        </>
    )
}

export default SportDetails;