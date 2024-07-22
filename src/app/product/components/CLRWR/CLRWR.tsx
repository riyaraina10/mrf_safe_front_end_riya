import React from "react";
import { TiTick } from "react-icons/ti";
import Alpha from "./Alpha";
import Beta from "./Beta";
import Gamma from "./Gamma";
import Delta from "./Delta";
import Epsilon from "./Epsilon";
import Zeta from "./Zeta";

const CLRWR = () => {
    return (
        <>
            <div id="clrwr_info">
                <div id="clrwr_info_div">
                    <Alpha />
                    <Beta />
                    <Gamma />
                    <Delta />
                    <Epsilon />
                    <Zeta />
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

export default CLRWR;
