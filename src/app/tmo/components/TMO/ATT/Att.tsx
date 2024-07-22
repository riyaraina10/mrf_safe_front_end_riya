import React from "react";
import { TiTick } from "react-icons/ti";
import AttAlpha from "./AttAlpha";
import AttBeta from "./AttBeta";
import AttGamma from "./AttGamma";
import AttDelta from "./AttDelta";
import AttEpsilon from "./AttEpsilon";
import AttZeta from "./AttZeta";

const TMobile = () => {
    return (
        <>
            <div id="ATTS_info">
                <div id="ATTS_info_div">
                    <AttAlpha />
                    <AttBeta />
                    <AttGamma />
                    <AttDelta />
                    <AttEpsilon />
                    <AttZeta />
                </div>
            </div>
            <footer className="footer mt-3 p-3 bg-white text-base-content">
                <div className="flex justify-between w-full text-xs">
                    <div>
                        <strong>Copyright</strong> ©{" "}
                        <strong>2019 - 2024 </strong>
                        <a className="text-blue-500 font-bold">
                            MobileComm.
                        </a>{" "}
                        All rights reserved.
                    </div>
                    <div>
                        <strong>MobileComm</strong> MPE Project Tool
                    </div>
                </div>
            </footer>
        </>
    );
};

export default TMobile;
