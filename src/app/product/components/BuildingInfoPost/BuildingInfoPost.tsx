import React, { useState } from "react";

import Select from "react-select";
import { TiTick } from "react-icons/ti";
import makeAnimated from "react-select/animated";
import AccessPost from "./AccessPost";
import RoofViewPics from "./RoofViewPics";
import SiteVideos from "./SiteVideos";

const animatedComponents = makeAnimated();

const BuildingInfoPost = () => {
    return (
        <>
            <div id="building_info_post">
                <div id="building_info_div_post">
                    <AccessPost />
                    <RoofViewPics />
                    <SiteVideos />
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
