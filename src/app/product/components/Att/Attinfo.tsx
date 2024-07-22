"use client";
import { useState } from "react";
import Info from "./Info/Info";
import Pre from "./Pre";
import Post from "./Post";

export default function Attinfo() {
    const headers = ["AT&T Info", "AT&T Pre", "AT&T Post"];

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
                                className="tab-content border-base-300 rounded-box bg-slate-200  text-black"
                            >
                                {flags == 1 && <Info />}
                                {flags == 2 && <Pre />}
                                {flags == 3 && <Post />}
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
