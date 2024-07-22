import React, { useState } from "react";
import Select from "react-select";
import { TiTick } from "react-icons/ti";
import makeAnimated from "react-select/animated";
import ATTINFO from "./ATTINFO";
import MPEMeasurements from "./MPEMeasurements";
const animatedComponents = makeAnimated();

const Info = () => {
    return (
        <>
            <div id="att_sector_info">
                <ATTINFO />
                <MPEMeasurements />
            </div>
        </>
    );
};

export default Info;
