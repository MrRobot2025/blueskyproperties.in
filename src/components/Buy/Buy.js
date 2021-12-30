import Property from "./Property/Property";
import sudama from "../../static/images/sudama.jpeg";
import land from "../../static/images/land.jpeg";
import krishna from "../../static/images/krishna.webp";
import "./Buy.css";
const Buy =()=>{

    return(
        <>
            <div className="Buy" id="buy">
                 <Property name="Sudama nagar" image={sudama}/>
                 <Property name="Krishna nagar" image={krishna}/>
                 <Property name="Kabir nagar" image={land}/>
            </div>
           
        </>

    );
}

export default Buy;