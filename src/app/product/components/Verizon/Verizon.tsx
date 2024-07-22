import React from "react";
import { TiTick } from "react-icons/ti";
import AlphaVerizon from "./AlphaVerizon";
import BetaVerizon from "./BetaVerizon";
import GammaVerizon from "./GammaVerizon";
import DeltaVerizon from "./DeltaVerizon";
import EpsilonPost from "../Att/Post/EpsilonPost";
import EpsilonVerizon from "./EpsilonVerizon";
import ZetaVerizon from "./ZetaVerizon";

const Verizon = () => {
    return (
        <>
            <div id="verizon_info">
                <div id="verizon_info_div">
                    <AlphaVerizon />
                    <BetaVerizon />
                    <GammaVerizon />
                    <DeltaVerizon />
                    <EpsilonVerizon />
                    <ZetaVerizon />
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

export default Verizon;
