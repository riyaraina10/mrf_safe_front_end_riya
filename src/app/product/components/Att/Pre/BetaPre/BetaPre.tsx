import React from "react";
import Gps from "./Gps";
import Photos from "./Photos";

const BetaPre = () => {
    return (
        <>
            <div id="gpsBetaSection">
                <Gps />
            </div>
            <div id="betaPrePhotos">
                <Photos />
            </div>
        </>
    );
};

export default BetaPre;
