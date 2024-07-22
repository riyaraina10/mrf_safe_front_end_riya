import React from "react";
import AlphaPre from "./Pre/AlphaPre/AlphaPre";
import GammaPre from "./Pre/GammaPre/GammaPre";
import DeltaPre from "./Pre/DeltaPre/DeltaPre";
import EpsilonPre from "./Pre/EpsilonPre/EpsilonPre";
import ZetaPre from "./Pre/ZetaPre/ZetaPre";
import BetaPre from "./Pre/BetaPre/BetaPre";

const Pre = () => {
    return (
        <>
            <AlphaPre />
            <BetaPre />
            <GammaPre />
            <DeltaPre />
            <EpsilonPre />
            <ZetaPre />
        </>
    );
};

export default Pre;
