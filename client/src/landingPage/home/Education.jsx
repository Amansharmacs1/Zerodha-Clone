import React from "react";
 import 'bootstrap/dist/css/bootstrap.min.css';
function Education() {
   return <>
    <div className="container mb-5 my-4 ">
        <div className="row p-5">
            <div className="col-6">
                <img src="/media/education.svg"></img>
            </div>
            <div className="col-6 p-4">
                <h3 className="mt-2">Free and open market education</h3>
                <p className="mt-5">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a  className="text-decoration-none" href="#">Varsity<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                <p className="mt-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a  className="text-decoration-none" href="#">TradingQ&A <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                
            </div>
        </div>
    </div>
    </>
}
export default Education;
