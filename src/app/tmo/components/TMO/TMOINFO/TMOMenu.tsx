"use client";
import { useState } from "react";
import TMOInfo from "./Info/TMOInfo";
import TMOEquipment from "./TMOEquipment/TMOEquipment";
import TMOPre from "./TMOPre/TMOPre";
import TMOPost from "./TMOPost/TMOPost";

export default function TMOMenu() {
    const headers = ["TMO Info", "TMO Equipment", "TMO Pre", "TMO Post"];

    const [flags, setflags] = useState(1);
    return (
        <>
            <div>
                <div role="tablist" className="m-2 tabs tabs-lifted">
                    {headers.map((e, i) => (
                        <>
                            <input
                                type="radio"
                                role="tab"
                                className={
                                    flags === i + 1
                                        ? "tab text-xs whitespace-nowrap"
                                        : "tab text-xs whitespace-nowrap"
                                }
                                aria-label={e}
                                onChange={() => {
                                    setflags(i + 1);
                                }}
                                checked={flags === i + 1}
                            />
                            <div
                                role="tabpanel"
                                className="tab-content border-base-300 rounded-box bg-slate-200  text-black  overflow-y-scroll "
                                style={{ height: "600px" }}
                            >
                                {flags == 1 && <TMOInfo />}
                                {flags == 2 && <TMOEquipment />}
                                {flags == 3 && <TMOPre />}
                                {flags == 4 && <TMOPost />}
                            </div>
                        </>
                    ))}
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
