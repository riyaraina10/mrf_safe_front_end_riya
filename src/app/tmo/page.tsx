"use client";
import { useState } from "react";
import SurveyInfo from "./components/TMO/SurveyInfo/SurveyInfo";
import TMOInfo from "./components/TMO/TMOINFO/TMOMenu";
import Verizon from "./components/TMO/Verizon/Verizon";
import CLRWR from "./components/TMO/CLRWR/CLRWR";
import OtherPics from "./components/OtherPics";
import Summary from "./components/Summary";
import BuildingInfoPost from "./components/TMO/BuildingInfoPost/BuildingInfoPost";
import Sprint from "./components/TMO/Sprint/Sprint";
import BuildingInfoPre from "./components/TMO/BuildingInfoPre/BuildingInfoPre";
import Att from "./components/TMO/ATT/Att";

export default function product() {
    const headers = [
        { heading: "Survey Info", id: "survey_nav" },
        { heading: "Building Info Pre", id: "building_nav" },
        { heading: "TMO Info", id: "att_nav" },
        { heading: "ATT", id: "ATTS_Section" },
        { heading: "Verizon", id: "Verizon_Section" },
        { heading: "CLRWR", id: "CLRWR_Section" },
        { heading: "Sprint", id: "Sprint_Section" },
        { heading: "Other Photos", id: "other_antena_section" },
        { heading: "Building Info Post", id: "building_nav_post" },
        { heading: "Summary", id: "summary_section" },
    ];

    const [flag, setflag] = useState(1);

    return (
        <>
            <div className="bg-slate-200 ">
                <div
                    role="tablist"
                    className="m-2 tabs tabs-lifted sticky top-0 z-50"
                >
                    {headers.map((e, i) => (
                        <>
                            <input
                                type="radio"
                                name="my_tabs_2"
                                role="tab"
                                className="tab text-xs whitespace-nowrap"
                                aria-label={e.heading}
                                id={e.id}
                                onChange={() => {
                                    setflag(i + 1);
                                }}
                                checked={flag === i + 1}
                            />
                            <div
                                role="tabpanel"
                                className="tab-content border-base-300 rounded-box bg-slate-200  text-black  overflow-y-scroll 
                                "
                                style={{ height: "600px" }}
                            >
                                {flag == 1 && <SurveyInfo />}
                                {flag == 2 && <BuildingInfoPre />}
                                {flag == 3 && <TMOInfo />}
                                {flag == 4 && <Att />}
                                {flag == 5 && <Verizon />}
                                {flag == 6 && <CLRWR />}
                                {flag == 7 && <Sprint />}
                                {flag == 8 && <OtherPics />}
                                {flag == 9 && <BuildingInfoPost />}
                                {flag == 10 && <Summary />}
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}
