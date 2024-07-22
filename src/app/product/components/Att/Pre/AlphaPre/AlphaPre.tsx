import React from "react";
import Gps from "./Gps";
import Photos from "./Photos";

const AlphaPre = () => {
    return (
        <>
            <div id="gpsAlphaSection">
                <Gps />
            </div>
            <div id="alphaPrePhotos">
                <Photos />
            </div>
        </>
    );
};

export default AlphaPre;
