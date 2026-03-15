import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function RightSection({ imgURL, name, desc, learnMore }) {
    return (
        <div className="container" style={{ marginTop: "100px" }}>
            <div className="row align-items-center">

                
                <div className="col-md-5 offset-md-1 p-4">
                    <h3>{name}</h3>
                    <p className="fs-5 text-muted">{desc}</p>
                    <a
                        href={learnMore}
                        className="text-decoration-none"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn More →
                    </a>
                </div>

               
                <div className="col-md-5">
                    <img
                        src={imgURL}
                        alt={name}
                        className="img-fluid"
                    />
                </div>

            </div>
        </div>
    );
}

export default RightSection;
