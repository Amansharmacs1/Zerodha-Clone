import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function OpenAccount() {
   return <>
    <div className="container p-3 mt-3 mb-5 text-center">
   
       <h2 className="mt-5 text-center">Open a Zerodha account</h2>
       <p className="text-center">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.

</p>
      <a href="/signup"><button className="btn m-auto p-2 fs-5 text-center"style={{backgroundColor:"rgba(56, 126, 207, 1)",color:"white"}}>Sign up for free</button></a>
 </div>
    </>
}
export default OpenAccount;
