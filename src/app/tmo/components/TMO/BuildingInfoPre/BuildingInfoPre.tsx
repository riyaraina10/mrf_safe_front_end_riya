import React, { useState } from "react";
import SitePics from "./SitePics";
import Access from "./Access";
import Penthouse from "./Penthouse";
import Parapet from "./Parapet";

const BuildingInfoPre = () => {
    return (
        <>
            <div id="building_info">
                <div id="building_info_div">
                    <SitePics />
                    <Access />
                    <Penthouse />
                    <Parapet />
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

export default BuildingInfoPre;
