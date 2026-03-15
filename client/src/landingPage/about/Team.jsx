import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Team() {
    return <>

    <div className="container p-5 text-center text-muted">
            <h3>People</h3>
        <div className="row mt-5">
            <div className="col-6 ">
                <img className="mb-4" src="/media/nithinKamath.jpg" style={{width:"60%",borderRadius:"100%"}}></img>
                <h4>Nithin Kamath</h4>
                <h5>Founder, CEO</h5>

            </div>
            <div className="col-6 p-4 fs-5 text-muted">
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p>Playing basketball is his zen.</p>
                <p>Connect on <a style={{textDecoration:"none"}} href="">Homepage</a> / <a style={{textDecoration:"none"}} href=""> TradingQnA</a> / <a style={{textDecoration:"none"}} href="">Twitter</a></p>
            </div>
        </div>
    </div>
    
    </>
}
export default Team;
