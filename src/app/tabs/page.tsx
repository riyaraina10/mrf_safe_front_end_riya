"use client";

import { useState } from "react";
import ViewGenerateReport from "./components/ViewGenerateReport";
import UploadDownloadReports from "./components/UploadDownloadReports";
import RfDump from "./components/RfDump";
import BuildingHeights from "./components/BuildingHeights";
import OtherAntennas from "./components/OtherAntennas";

export default function Tabs() {
    const [flag, setflag] = useState(1);
    const Menu = [
        "View and Generate Report",
        "Upload and Download Reports",
        "RF Dump",
        "Building Heights",
        "Other Antennas",
    ];
    return (
        <>
            <div className="bg-white">
                <div role="tablist" className="tabs tabs-boxed">
                    {Menu.map((e, i) => (
                        <button
                            className={
                                flag == i + 1 ? "bg-blue-600 tab" : "tab"
                            }
                            onClick={() => setflag(i + 1)}
                        >
                            {e}
                        </button>
                    ))}
                </div>
                {flag === 1 && <ViewGenerateReport />}
                {flag === 2 && <UploadDownloadReports />}
                {flag === 3 && <RfDump />}
                {flag === 4 && <BuildingHeights />}
                {flag === 5 && <OtherAntennas />}
            </div>
        </>
    );
}
