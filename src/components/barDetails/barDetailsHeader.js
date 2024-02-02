const BarDetailsHeader = ({bar}) => {
    return (
        <div className='bars-header'>
            <div className='bars-textzone mt-5'>
                <div className='title center'>{bar.name}</div>
            </div>
        </div>
    )
}

export default BarDetailsHeader;