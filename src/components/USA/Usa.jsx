import React from 'react';
import './Usa.css'; /* optional for styling like the :hover pseudo-class */
import USAMap from "react-usa-map";

function Usa() {
    const mapHandler = (event) => {
        // alert(event.target.dataset.name);
    };

    /* optional customization of filling per state and calling custom callbacks per state */
    // const statesCustomConfig = () => {
    //     return {
    //         "NJ": {
    //             fill: "navy",
    //             clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
    //         },
    //         "NY": {
    //             fill: "#CC0000"
    //         }
    //     };
    // };

    return (
        <div className="usa">
            <USAMap />
            {/* customize={statesCustomConfig()} */}
            {/* onClick={mapHandler()} */}
        </div>
    );
}

export default Usa;