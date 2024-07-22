import React from "react";
import { TiTick } from "react-icons/ti";
import Alpha from "../CLRWR/Alpha";
import AlphaSprint from "./AlphaSprint";
import BetaSprint from "./BetaSprint";
import GammaSprint from "./GammaSprint";
import DeltaSprint from "./DeltaSprint";
import EpsilonSprint from "./EpsilonSprint";
import ZetaSprint from "./ZetaSprint";
const Sprint = () => {
    return (
        <>
            <div id="sprint_info">
                <div id="sprint_info_div">
                    <AlphaSprint />
                    <BetaSprint />
                    <GammaSprint />
                    <DeltaSprint />
                    <EpsilonSprint />
                    <ZetaSprint />
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

export default Sprint;
