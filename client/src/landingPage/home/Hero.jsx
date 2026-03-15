import React from "react";
import "./Hero.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function Hero() {
   return <>
    <div className="container p-3 mt-3 mb-5 text-center">
    <div className="row text-center mb-5">
        <img src="/public/media/homeHero.png" alt="Hero Image"></img>
 </div>
       <h1 className="mt-5 text-center">Invest in everything</h1>
       <p className="text-center">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.

</p> 
       <a href="/signup"><button className="btn m-auto p-2 fs-5 text-center" style={{backgroundColor:"rgba(56, 126, 207, 1)",color:"white"}}>Sign up for free</button></a>
 </div>
    </>
}
export default Hero;
