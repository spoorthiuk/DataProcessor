import React from "react";
import ReacDOM from "react-dom";
import "../src/App.css"
import "../src/HomePage.css"
import "../src/assets/dataProcessor.svg"

function NavBar(){
    return(
        <div className="navBar">
            <img src="../src/assets/dataProcessor.svg"></img>
            <button>Visualize</button>
            <button>Process</button>
            <button>Help</button>
        </div>
    )
}

export default NavBar