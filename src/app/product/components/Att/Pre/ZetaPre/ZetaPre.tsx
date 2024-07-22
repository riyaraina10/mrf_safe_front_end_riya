import React from "react";
import Gps from "./Gps";
import Photos from "./Photos";

const ZetaPre = () => {
    return (
        <>
            <div id="gpsZetaSection">
                <Gps />
            </div>
            <div id="zetaPrePhotos">
                <Photos />
            </div>
        </>
    );
};

export default ZetaPre;
