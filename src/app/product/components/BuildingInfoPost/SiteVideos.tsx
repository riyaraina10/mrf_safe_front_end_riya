import React, { useState } from "react";

import { TiTick } from "react-icons/ti";

const SiteVideos = () => {
    return (
        <>
            {" "}
            <div className="bg-white p-3 mb-4">
                <div>
                    <h4 className="text-center">Site Video</h4>
                </div>
                <form id="site_video" method="POST">
                    <div className="mt-6 flex text-xs gap-6 mb-4">
                        <div className="flex flex-col gap-3 w-1/3">
                            <div className="flex flex-col gap-1 text-xs ">
                                <p>
                                    <strong className="text-xs">
                                        Site roof video Post
                                    </strong>
                                    <span className="text-red-600">*</span>
                                </p>
                                <input
                                    type="file"
                                    name="videopicker_1"
                                    id="videopicker_1"
                                />
                            </div>
                        </div>
                        <div>
                            <video
                                className=" w-full rounded-lg h-full"
                                controls
                            >
                                <source
                                    src="images/videoss.mp4"
                                    type="video/mp4"
                                    id="surveyVideo"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </form>

                <div className="text-center mt-7">
                    <p className="text-xs flex  justify-center  text-red-500 font-bold">
                        Please check manadatory fields.
                    </p>
                    <div className="text-xs flex  justify-center  text-green-500 font-bold ">
                        <TiTick />
                        <span>Survey updated successfully.</span>
                    </div>

                    <button className=" pl-3 pr-3 pt-2 pb-2 text-xs text-white bg-blue-950">
                        Save
                    </button>
                </div>
            </div>
        </>
    );
};

export default SiteVideos;
