import React, { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { TiTick } from "react-icons/ti";
import SiteInfo from "./SiteInfo";
import ClimateConditions from "./ClimateConditions";
import PrePostSurvey from "./PrePostSurvey";
import CollocationStatus from "./CollocationStatus";
import CategoryExclusion from "./CategoryExclusion";
const animatedComponents = makeAnimated();

export default function SurveyInfo() {
    return (
        <>
            <div id="survey_info">
                <SiteInfo />
                <div id="survey_info_div">
                    <ClimateConditions />
                    <PrePostSurvey />
                    <CollocationStatus />
                    <CategoryExclusion />
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
}
