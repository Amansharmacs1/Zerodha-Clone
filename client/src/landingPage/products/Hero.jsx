import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function Hero() {
    return <>
    <div className="container text-center" style={{marginBottom:"100px"}}>
        <div className="row">
            <div className="col">
                <h2 className="mt-5">Zerodha Products</h2>
                <h4 className="text-muted mt-4">Sleek, modern, and intuitive trading platforms</h4>
                <h5 className="text-muted mt-4">Check out our <a href=" " style={{textDecoration:"none"}}>investment offerings →</a></h5>
            </div>
        </div>
    </div>
    </>
}
export default Hero;
