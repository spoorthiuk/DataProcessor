import React from "react";
import ReacDOM from "react-dom";
import "../src/App.css"
import "../src/HomePage.css"
import "../src/assets/visualiseHomePage.svg"
function HomePage(){
    return(
        <div>
            <div className="homePageCard1">
                <img src="../src/assets/visualiseHomePage.svg"></img>
            </div>
            <div className="homePageCard2">
                <img src="../src/assets/processHomePage.svg"></img>
            </div>
        </div>
    )
}

export default HomePage