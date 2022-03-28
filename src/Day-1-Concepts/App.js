import React from "react";

import './Style.scss'

function App(){

    const  firstName = 'sujith';
        const  lastName = 'sai';
    return(
        <div>         
            <h1 className="Navbar">we are group of three {firstName + "  " + lastName}</h1>

        <ul>
            <li>sujith</li>
            <li>subramanyam</li>
            <li>ramya</li>
        </ul>

        </div>  
        
    )
}
export default App;