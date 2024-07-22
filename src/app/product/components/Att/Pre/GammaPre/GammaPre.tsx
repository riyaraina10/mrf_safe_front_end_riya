import React, { useState } from "react";

import Gps from "./Gps";
import Photos from "./Photos";

const GammaPre = () => {
    return (
        <>
            <div id="gpsGammaSection">
                <Gps />
            </div>
            <div id="gammaPrePhotos">
                <Photos />
            </div>
        </>
    );
};

export default GammaPre;
