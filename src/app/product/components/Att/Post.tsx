import React, { useState } from "react";
import AlphaPost from "./Post/AlphaPost";
import BetaPost from "./Post/BetaPost";
import GammaPost from "./Post/GammaPost";
import DeltaPost from "./Post/DeltaPost";
import EpsilonPost from "./Post/EpsilonPost";
import ZetaPost from "./Post/ZetaPost";

const Post = () => {
    return (
        <>
            <AlphaPost />
            <BetaPost />
            <GammaPost />
            <DeltaPost />
            <EpsilonPost />
            <ZetaPost />
        </>
    );
};

export default Post;
