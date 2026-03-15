import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function Awards() {
    return <>
        <div className="container mt-5 mb-5">
            <div className="row mt-5">
                <div className="col-4">
                    <img src="/media/largestBroker.svg"></img>
                </div>
                <div className="col-2"></div>
                <div className="col-6" >
                    <h1 className="text-center">Largest stock broker in India</h1>
                    <p className="text-center">2+ million Zerodha Clients contribute to over 10% of all 
                    retail order volumes in India daily by trading and investing in:</p>
                    <div className="row">
                        <div className="col">
                    <ul className="m-4">
                        <li className="mb-3">Futures and Options</li>
                        <li className="mb-3">Commodity derivatives</li>
                        <li className="mb-3">Currency derivatives</li>
                    </ul>
                        </div>
                        <div className="col">
                            <ul className="m-4">
                        <li className="mb-3">Stocks & IPOs</li>
                        <li className="mb-3">Direct mutual funds</li>
                        <li className="mb-3">Bonds and Govt. Securites</li>
                    </ul>
                        </div>
                    </div>
                    <img className="w-20 mt-5 mr-4" src="/media/pressLogos.png" alt="Image"></img>
                    
                </div>
            </div>
        </div>
    </>
}
export default Awards;
