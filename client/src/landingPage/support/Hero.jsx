import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function Hero() {
    return <>

        <div className="p-5 m-0" style={{ backgroundColor: "rgba(56, 126, 209,1)", width: "100%", color: "white" }}>
            <div className="container">
                <div className="row mx-5">
                    <div className="col-10">
                        <h4>Support Portal</h4>
                    </div>
                    <div className="col-2">
                        <a href="" className="fs-5" style={{ color: "White" }}>Track Tickets</a>
                    </div>
                </div>
                <div className="row mt-5 mx-5">
                    <div className="col-8 ">
                        <h4>Search for and answer or browse help topics<br/> to create a ticket</h4>
                        <input type="text" className="p-3" style={{width:"500px",height:"70px",borderRadius:"5px",border:"none"}} placeholder="Eg:how do i activate f&O, why is my order getting rejected.."/>
                        <h6 className="p-2">
                            <a href=""  style={{ color: "White" }}>Track account opening</a> &nbsp; &nbsp;
                            <a href=""  style={{ color: "White" }}>Track segment activation</a>  &nbsp; &nbsp;<br/>
                            <a href=""  style={{ color: "White" }}>Intraday margins</a>  &nbsp; &nbsp;
                            <a href=""  style={{ color: "White" }}>Kite user manual</a>
                        </h6>
                    </div>
                    <div className="col-4">
                        <h4>Featured</h4>
                        <ul>
                            <li style={{listStyle:"number"}}><a href=""style={{ color: "White" }}>Current Takeovers and Delisting - January 2024</a></li>
                             <li className="mt-2" style={{listStyle:"number"}}><a href=""style={{ color: "White" }}>Latest Intraday leverages - MIS & CO</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Hero;
