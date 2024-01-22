const SearchZone = () => {
    return (
        <div className='search-zone'>
            <div className='search-params'>
                <div className='search-item'>
                    Sport
                </div>
                <div className='search-item'>
                    Date du match
                </div>
                <div className='search-item'>
                    Heure
                </div>
                <div className='search-item'>
                    Equipe
                </div>
                <div className='search-item search-btn'>
                    <a href='/'>RECHERCHER</a>
                </div>
            </div>
        </div>
    )
}

export default SearchZone;
