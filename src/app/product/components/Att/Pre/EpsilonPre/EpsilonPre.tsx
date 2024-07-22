import React from "react";
import Gps from "./Gps";
import Photos from "./Photos";

const EpsilonPre = () => {
    return (
        <>
            <div id="gpsEpsilonSection">
                <Gps />
            </div>
            <div id="epsilonPrePhotos">
                <Photos />
            </div>
        </>
    );
};

export default EpsilonPre;
