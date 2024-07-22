import React, { useState } from "react";

import SiteInfo from "./SiteInfo";
import ClimateConditions from "./ClimateConditions";
import PrePostSurvey from "./PrePostSurvey";
import Collocation from "./Collocation";

export default function SurveyInfo() {
    const [factor, setfactor] = useState("");
    console.log(factor);
    return (
        <>
            <div id="survey_info">
                <SiteInfo Factor={factor} setFactor={setfactor} />
                <div id="survey_info_div">
                    {(factor === "Yes" || factor === "") && (
                        <ClimateConditions />
                    )}
                    {(factor === "Yes" || factor === "") && <PrePostSurvey />}
                    {(factor === "Yes" || factor === "") && <Collocation />}
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
