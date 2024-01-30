import Navbar from '../components/navbar';
import Footer from '../components/footer';
import BarDetailsHeader from '../components/barDetails/barDetailsHeader';
import BarDescription from '../components/barDetails/barDescription';
import '../style/bars.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

const BarDetails = () => {
    const params = useParams();

    const [bar, setBar] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/bar/find-one/'+params.id,{
            method: 'GET'
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setBar(data);
        });
    }, [params]);

    return (<>
        <Navbar />
        <BarDetailsHeader bar={bar} />
        <BarDescription bar={bar} />
        <Footer />
    </>
    )
}

export default BarDetails;
