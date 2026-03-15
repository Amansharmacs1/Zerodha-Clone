import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function Pricing() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">

        
        <div className="col-12 col-md-4">
          <h2>Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a href="#" className="text-decoration-none">
            See pricing{" "}
            <i className="fa fa-arrow-right ms-1" aria-hidden="true"></i>
          </a>
        </div>

       
        <div className="col-12 col-md-8">
          <div className="row g-4 text-center">

           
            <div className="col-12 col-md-4">
              <div className="card p-4 h-100 shadow-sm">
                <h1 className="fs-1 fw-bold" style={{ color: "#D4AF37" }}>₹0</h1>
                <p className="fs-6 mt-2">Free account opening</p>
              </div>
            </div>

           
            <div className="col-12 col-md-4">
              <div className="card p-4 h-100 shadow-sm">
                <h1 className="fs-1 fw-bold" style={{ color: "#D4AF37" }}>₹0</h1>
                <p className="fs-6 mt-2">
                  Free equity delivery and direct mutual funds
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card p-4 h-100 shadow-sm">
                <h1 className="fs-1 fw-bold" style={{ color: "#D4AF37" }}>₹20</h1>
                <p className="fs-6 mt-2">Intraday and F&O</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
