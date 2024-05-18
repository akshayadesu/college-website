import '/public/svesimg.jpg';
import { MdOutlineEngineering } from "react-icons/md";
import { SiHtmlacademy } from "react-icons/si";
export default function Home() {
    return (
        <>
            <div className="home-page">
                {/* <div style={{backgroundColor:'violet'}} className='user-details'>User details</div> */}
                <div><img src="svesimg.jpg" alt="clg-image" style={{ width: '900px', height: '500px' }} /></div>
                <div className='side-content1'>
                    <div className='one' style={{ backgroundColor: 'orange', }}>
                        <div><MdOutlineEngineering style={{ color: 'white', fontSize: '80px', }} /></div>
                        <div style={{ color: 'white', fontSize: '40px', marginLeft: '10px' }}>13100+</div>
                        <p style={{ color: 'white', fontSize: '20px', marginLeft: '10px', marginTop: '10px' }}>Engineers graduated so far</p>
                    </div>
                    <div className='two' style={{ backgroundColor: 'purple', }}>
                        <div><SiHtmlacademy style={{ color: 'white', fontSize: '80px', marginTop: '10px' }} /></div>
                        <div style={{ color: 'white', fontSize: '40px', marginLeft: '10px' }}>20+</div>
                        <p style={{ color: 'white', fontSize: '20px', marginLeft: '10px', marginTop: '10px' }}>Years of academic excellence</p>
                    </div>
                </div>
            </div>
        </>
    )
}