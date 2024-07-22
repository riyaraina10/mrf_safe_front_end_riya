import React, { useState } from "react";

import { TiTick } from "react-icons/ti";
import AccessPost from "./AccessPost";
import RoofViewPics from "@/app/product/components/BuildingInfoPost/RoofViewPics";
import SiteVideo from "./SiteVideo";

const BuildingInfoPost = () => {
    return (
        <>
            <div id="building_info_post">
                <div id="building_info_div_post">
                    <AccessPost />
                    <RoofViewPics />
                    <SiteVideo />
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

export default BuildingInfoPost;
