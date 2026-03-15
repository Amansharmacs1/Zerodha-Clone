import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function LeftSection({imgURL,name,desc,tryDemo,learnMore,googlePlayStore,appStore}) {
    return <>
   <div className="container" style={{marginTop:"100px"}}>
    <div className="row">
        <div className="col-1"></div>
        <div className="col-4">
            <img src={imgURL}></img>
        </div>
        <div className="col-2"></div>
        <div className="col-4 p-4">
            <h3>{name}</h3>
            <p className="fs-5 text-muted mt-3">{desc}</p>
            <div className="mb-4">
            <a href={tryDemo} className="mx-5" style={{textDecoration:"none"}}>Try demo→</a>
            <a href={learnMore}  className="mx-5" style={{textDecoration:"none"}}> Learn More→</a>
            </div>
            <div className="mb-4">
                <a href={googlePlayStore} className="mx-4"><img src="/media/googlePlayBadge.svg"/></a>
                <a href={appStore} className="mx-4"><img src="/media/appstoreBadge.svg"/></a>
            </div>
        </div>
        <div className="col-1"></div>
    </div>
   </div>
    </>
}
export default LeftSection;
