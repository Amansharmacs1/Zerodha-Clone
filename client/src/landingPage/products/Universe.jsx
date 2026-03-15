import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function Universe() {
    return (
        <>
            <div className="container mt-5">

                {/* Tech Blog */}
                <div className="row">
                    <div className="col text-center text-muted">
                        <h4>
                            Want to know more about our technology stack? Check out the{" "}
                            <a
                                href="https://zerodha.tech"
                                style={{ textDecoration: "none" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Zerodha.tech
                            </a>{" "}
                            blog.
                        </h4>
                    </div>
                </div>

                {/* Heading */}
                <div className="row mt-5">
                    <div className="col text-center mt-5">
                        <h4 style={{ opacity: "0.9" }}>The Zerodha Universe</h4>
                        <h5 className="text-muted mt-4">
                            Extend your trading and investment experience even further with our partner platforms
                        </h5>
                    </div>
                </div>

                {/* Cards / Logos */}
                <div className="row text-center mt-5">

                    <div className="col-md-4">
                        <a href="#" className="d-block mb-3">
                            <img
                                src="/media/zerodhaFundhouse.png"
                                alt="Zerodha Fund House"
                                className="img-fluid"
                                style={{ width: "60%" }}
                            />
                        </a>
                        <p className="text-muted mt-4" style={{ opacity: "0.5" }}>
                            Our asset management venture<br /> that is creating simple and transparent index<br />
                            funds to help you save for your goals.
                        </p>
                    </div>

                    <div className="col-md-4">
                        <a href="#">
                            <img
                                src="/media/streak-logo.png"
                                alt="Partner Platform"
                                className="img-fluid"
                                style={{ width: "47%" }}
                            />
                        </a>
                        <p className="text-muted mt-4" style={{ opacity: "0.5" }}>
                            Systematic trading platform<br /> that allows you to create and backtest<br />
                            strategies without coding.
                        </p>
                    </div>

                    <div className="col-md-4">
                        <a href="#">
                            <img
                                src="/media/sensibullLogo.svg"
                                alt="Partner Platform"
                                className="img-fluid"
                                style={{ width: "60%" }}
                            />
                        </a>
                        <p className="text-muted mt-4" style={{ opacity: "0.5" }}>
                            Options trading platform that lets you<br /> create strategies analyze positions, and examine<br />
                            data points like open interest, FII/DII and more.
                        </p>
                    </div>

                </div>
                {/* Cards / Logos */}
                <div className="row text-center mt-5">

                    <div className="col-md-4">
                        <a href="#" className="d-block mb-3">
                            <img
                                src="/media/smallcase.png"
                                alt="Zerodha Fund House"
                                className="img-fluid"
                                style={{ width: "70%" }}
                            />
                        </a>
                        <p className="text-muted mt-4" style={{ opacity: "0.5" }}>
                           Thematic investing platform<br /> that helps you to invest diversified<br />
                            baskets of stocks on ETFs.
                        </p>
                    </div>

                    <div className="col-md-4">
                        <a href="#">
                            <img
                                src="/media/tijori.svg"
                                alt="Partner Platform"
                                className="img-fluid"
                                style={{ width: "60%" }}
                            />
                        </a>
                        <p className="text-muted mt-3" style={{ opacity: "0.5" }}>
                           Investment research platform<br /> that offers detailed insights on stocks,<br />
                           sectors, supply chains, and more.
                        </p>
                    </div>

                    <div className="col-md-4">
                        <a href="#">
                            <img
                                src="/media/diito.png"
                                alt="Partner Platform"
                                className="img-fluid"
                                style={{ width: "50%" }}
                            />
                        </a>
                        <p className="text-muted mt-4" style={{ opacity: "0.5" }}>
                          Personalized advice on life <br />and health insurance. No spam<br />
                            and no mis-selling.
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Universe;
