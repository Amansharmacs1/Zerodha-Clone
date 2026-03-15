import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function Hero() {
    return <>
        <div className="container mt-5 mb-5">
            <div className="row">

                <div className="col text-center mt-5">
                    <h3>Charges</h3>
                    <h5 className="text-muted mt-1">List of all charges and taxes</h5>
                </div>

            </div>
            {/* 2nd part */}
            <div className="row mt-5">

                {/* 1st image 0*/}
                <div className="col-4 mt-5">
                    <img src="/media/pricing0.svg"  style={{width:"70%",marginLeft:"75px"}}/>
                    <h2 className="text-center mt-4">Free equity delivery</h2>
                    <p className="text-muted text-center fs-5 mt-4">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>

                {/* 2nd image 20 */}
                <div className="col-4 mt-5">
                    <img  className="" src="/media/intradayTrades.svg" style={{width:"70%",marginLeft:"75px"}}/>
                    <h2 className="text-center mt-4">Intraday and F&O trades</h2>
                    <p className="text-muted text-center fs-5 mt-4">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>

                {/* 1st image 0*/}
                <div className="col-4 mt-5">
                    <img src="/media/pricing0.svg"  style={{width:"70%",marginLeft:"75px"}}/>
                    <h2 className="text-center mt-4">Free direct MF</h2>
                    <p className="text-muted text-center fs-5 mt-4">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
                
            </div>
        </div>
    </>
}
export default Hero;
