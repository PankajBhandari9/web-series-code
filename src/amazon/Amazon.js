import Data from './Data';
import Cards from './Cards';
const Amazon = () => {
    
    return (
        <>
        <h1 className='hd'>Amazon most Watched Series</h1>
        <Cards
            imgsrc={Data[0].imgsrc}
            ctitle={Data[0].ctitle}
            sname={Data[0].sname}
            link={Data[0].link}
        />
        <Cards
            imgsrc={Data[1].imgsrc}
            ctitle={Data[1].ctitle}
            sname={Data[1].sname}
            link={Data[1].link}
        />
        <Cards
            imgsrc={Data[2].imgsrc}
            ctitle={Data[2].ctitle}
            sname={Data[2].sname}
            link={Data[2].link}
        />
        <Cards
            imgsrc={Data[3].imgsrc}
            ctitle={Data[3].ctitle}
            sname={Data[3].sname}
            link={Data[3].link}
        />
        <Cards
            imgsrc={Data[4].imgsrc}
            ctitle={Data[4].ctitle}
            sname={Data[4].sname}
            link={Data[4].link}
        />
        <Cards
            imgsrc={Data[5].imgsrc}
            ctitle={Data[5].ctitle}
            sname={Data[5].sname}
            link={Data[5].link}
        />
        <Cards
            imgsrc={Data[6].imgsrc}
            ctitle={Data[6].ctitle}
            sname={Data[6].sname}
            link={Data[6].link}
        />
        <Cards
            imgsrc={Data[7].imgsrc}
            ctitle={Data[7].ctitle}
            sname={Data[7].sname}
            link={Data[7].link}
        />
        <Cards
            imgsrc={Data[8].imgsrc}
            ctitle={Data[8].ctitle}
            sname={Data[8].sname}
            link={Data[8].link}
        />
        <Cards
            imgsrc={Data[9].imgsrc}
            ctitle={Data[9].ctitle}
            sname={Data[9].sname}
            link={Data[9].link}
        />
        </>
    );
}

export default Amazon;