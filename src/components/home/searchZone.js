import { useState, useEffect } from 'react';

const SearchZone = () => {
    const [sports, setSports] = useState([]);
    const [equipes, setEquipes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/sport/',{
            method: 'GET'
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setSports(data);
        });
    }, []);
    useEffect(() => {
        fetch('http://localhost:5001/equipe/',{
            method: 'GET'
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setEquipes(data);
        });
    }, []);
    return (
        <form>
            <div className='search-zone'>
                <div className='search-params'>
                    <div className='search-item'>
                        <select className='select-search' name="sport" id="sport">
                            <option value='0'>Quel sport ?</option>
                            {sports.map((sport) => (
                                <option value={sport.id}>{sport.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='vertical-separator'></div>
                    <div className='search-item date-search'>
                        <div>Date du match</div>
                        <input className='date-input' step='900' type='date' name='date' id='date'></input>
                    </div>
                    <div className='vertical-separator'></div>
                    <div className='search-item time-search'>
                        <div>Heure</div>
                        <input className='date-input' type='time' name='hour' id='hour'></input>
                    </div>
                    <div className='vertical-separator'></div>
                    <div className='search-item'>
                        <select className='select-search-equipe' name="equipe" id="equipe">
                            {/* TO-DO : Ajouter des champs input avec recherche dynamique */}
                            <option value='0'>Quelle équipe ?</option>
                            {equipes.map((equipe) => (
                                <option value={equipe.id}>{equipe.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='vertical-separator'></div>
                    <div className='search-item search-btn'>
                        <input className='search-btn-txt' type="submit" value="RECHERCHER" />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SearchZone;
