import React from "react";

import Gps from "./Gps";
import Photos from "./Photos";

const DeltaPre = () => {
    return (
        <>
            <div id="gpsDeltaSection">
                <Gps />
            </div>
            <div id="deltaPrePhotos">
                <Photos />
            </div>
        </>
    );
};

export default DeltaPre;
