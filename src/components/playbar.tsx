import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardStep, faForwardStep, faMusic, faPause } from "@fortawesome/free-solid-svg-icons";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";


export default function playbar() {

    const playbarStyle = {
        width:'98vw',
        height:'6vh',
        display: 'flex',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'pink',
        };

    return (
        <div style={playbarStyle}>
            <div style={{display:'flex', alignItems:'center', width :'15'}}>
                <Image src='next.svg' alt="Music-Image"  width={100} height={100} style={{display:'inline', margin: '5px'}}></Image>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <p style={{margin: '0px'}}>Title</p>
                    <p style={{margin: '0px'}}>Artist Name</p>
                </div>
            </div>

            

            <div style={{width:'70%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <FontAwesomeIcon icon={faBackwardStep}  />
                <FontAwesomeIcon icon={faPause} style={{margin: '5px'}} />
                <FontAwesomeIcon icon={faForwardStep} />
            </div>


            <div style={{width:'15%'}}>
                <FontAwesomeIcon icon={faMusic} />
                <FontAwesomeIcon icon={faMusic} />
                <FontAwesomeIcon icon={faMusic} />
                <FontAwesomeIcon icon={faMusic} />
            </div>
        </div>
    )
}