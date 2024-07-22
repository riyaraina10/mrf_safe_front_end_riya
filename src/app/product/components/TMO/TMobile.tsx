import React from "react";
import { TiTick } from "react-icons/ti";
import AlphaTmo from "./AlphaTmo";
import BetaTmo from "./BetaTmo";
import GamaTmo from "./GamaTmo";
import DeltaTmo from "./DeltaTmo";
import EpsilonTmo from "./EpsilonTmo";
import ZetaTmo from "./ZetaTmo";

const TMobile = () => {
    return (
        <>
            <div id="tmobile_info">
                <div id="tmobile_info_div">
                    <AlphaTmo />
                    <BetaTmo />
                    <GamaTmo />
                    <DeltaTmo />
                    <EpsilonTmo />
                    <ZetaTmo />
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

export default TMobile;
