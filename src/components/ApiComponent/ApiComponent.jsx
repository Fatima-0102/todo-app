import { useState } from 'react';
import '../ApiComponent/ApiComponent.css'

const ApiComponent = () => {

    const [catFact, setCatFact] = useState("");

    const getCatFact = async () => {
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        setCatFact(data.fact);
    };
    return(
        <div className="api">
            <h2 className="api-title"> Cat Fact</h2>
            <p className="api-text">{catFact ? catFact : "Click the button to get a cat fact!"}</p>
            <button className="api-btn" onClick={getCatFact}>Fact!</button>
        </div>
    )

}
export default ApiComponent;