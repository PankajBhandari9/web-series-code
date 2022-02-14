import Button from '@material-ui/core/Button';


function Cards(props) {
    return (
        <>
            <a href={props.link} target='_blank'>
                <div className='cards'>
                    <div className='card'>
                        <img src={props.imgsrc} alt='pic' className='cardsImg' />
                        <div className='cardInfo'>
                            <span className='cardCategory'>{props.sname}</span>
                            <h3 className='cardTitle'>{props.ctitle}</h3>
                            <Button color="primary" variant="contained">
                                Watch Now
                            </Button>
                        </div>
                    </div>
                </div>
            </a>
        </>
    );
}

export default Cards;