import React, { useState } from "react";

import { TiTick } from "react-icons/ti";

const AccessPost = () => {
    return (
        <>
            {" "}
            <div className="bg-white p-3 mb-4">
                <div>
                    <h4 className="text-center">Access Post</h4>
                </div>
                <form id="section_41" method="POST">
                    <div>
                        <div className="mt-6 flex gap-8">
                            <div
                                className="flex flex-col gap-1"
                                style={{ width: "410px" }}
                            >
                                <p>
                                    <strong className="text-xs">
                                        Access Photo 1
                                    </strong>
                                    <span className="text-red-600">*</span>
                                </p>
                                <input
                                    type="file"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    id="main_roof_access_post_photo_1"
                                    name="main_roof_access_post_photo_1"
                                ></input>
                                <input
                                    type="datetime-local"
                                    className="input input-bordered input-sm w-full text-xs rounded-none"
                                    id="main_roof_access_post_photo_1_datepicker"
                                    name="main_roof_access_post_photo_1_timestamp"
                                ></input>
                                <img
                                    src="images/cat.jpg"
                                    id="main_roof_access_post_photo_1_img"
                                ></img>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-8"></hr>
                    <div>
                        <div className="border-neutral-400 border-2 text-center mt-4 ">
                            <h4 className="text-sky-800 font-bold ">
                                Installed Signage - Access
                            </h4>
                        </div>
                        <div
                            className="flex gap-6 flex-wrap "
                            style={{ margin: "15px auto" }}
                        >
                            <div
                                className="flex flex-col gap-2 text-xs "
                                style={{ width: "410px" }}
                            >
                                <p>
                                    <strong>
                                        How many Emergency Contact Sign (EC)
                                        were Installed at access point?
                                    </strong>
                                    <span className="text-red-600">*</span>
                                </p>

                                <select
                                    className="select select-bordered select-sm text-xs m w-full rounded-none"
                                    name="listpicker_101"
                                >
                                    <option>Selected</option>
                                    {Array.from(Array(51), (e, i) => (
                                        <option value={i} selected={i == 0}>
                                            {i}
                                        </option>
                                    ))}
                                </select>

                                <p className=" text-xs  text-red-500 font-bold">
                                    How many notice sign 2 were Installed at
                                    access point is required
                                </p>
                            </div>

                            <div
                                className="flex flex-col gap-2 w-96 text-xs "
                                style={{ width: "410px" }}
                            >
                                <p>
                                    <strong>
                                        How many Yellow Guidelines Sign (YG)
                                        were Installed at access point?
                                    </strong>
                                    <span className="text-red-600">*</span>
                                </p>

                                <select
                                    className="select select-bordered select-sm text-xs m w-full rounded-none"
                                    name="listpicker_104"
                                >
                                    <option>Selected</option>
                                    {Array.from(Array(51), (e, i) => (
                                        <option value={i} selected={i == 0}>
                                            {i}
                                        </option>
                                    ))}
                                </select>

                                <p className=" text-xs  text-red-500 font-bold">
                                    How many caution sign 2 were Installed at
                                    access point is required.
                                </p>
                            </div>
                            <div
                                className="flex flex-col gap-5  text-xs  "
                                style={{ width: "410px" }}
                            >
                                <p>
                                    <strong>
                                        How many Blue Notice sign (BN) were
                                        Installed at access point ?
                                    </strong>
                                    <span className="text-red-600">*</span>
                                </p>

                                <select
                                    className="select select-bordered select-sm text-xs m w-full rounded-none"
                                    name="safety_instructions_site_post"
                                >
                                    <option>Selected</option>
                                    {Array.from(Array(51), (e, i) => (
                                        <option value={i} selected={i == 0}>
                                            {i}
                                        </option>
                                    ))}
                                </select>

                                <p className=" text-xs  text-red-500 font-bold">
                                    How many Safety Instructions sign did i
                                    install on the site is required.
                                </p>
                            </div>
                            <div
                                className="flex flex-col gap-2  text-xs  "
                                style={{ width: "410px" }}
                            >
                                <p>
                                    <strong>
                                        How many Yellow Caution Sign (YC) were
                                        Installed at access point?
                                    </strong>
                                    <span className="text-red-600">*</span>
                                </p>

                                <select
                                    className="select select-bordered select-sm text-xs m w-full rounded-none"
                                    name="yc_sign_site_post"
                                >
                                    <option>Selected</option>
                                    {Array.from(Array(51), (e, i) => (
                                        <option value={i} selected={i == 0}>
                                            {i}
                                        </option>
                                    ))}
                                </select>

                                <p className=" text-xs  text-red-500 font-bold">
                                    How many caution sign 1 were installed at
                                    access point is required.
                                </p>
                            </div>
                            <div
                                className="flex flex-col gap-2 text-xs  "
                                style={{ width: "410px" }}
                            >
                                <p>
                                    <strong>
                                        How many Orange Warning Sign (OW) were
                                        Installed at access point?
                                    </strong>
                                    <span className="text-red-600">*</span>
                                </p>

                                <select
                                    className="select select-bordered select-sm text-xs m w-full rounded-none"
                                    name="ow_sign_site_post"
                                >
                                    <option>Selected</option>
                                    {Array.from(Array(51), (e, i) => (
                                        <option value={i} selected={i == 0}>
                                            {i}
                                        </option>
                                    ))}
                                </select>

                                <p className=" text-xs  text-red-500 font-bold">
                                    How many Warning 1 were installed at access
                                    point is required.
                                </p>
                            </div>
                        </div>
                    </div>
                </form>

                <div className="text-center mt-6">
                    <div className="border-t border-grey ">
                        <p className=" mt-2  text-red-500 text-xs font-bold">
                            Please check manadatory fields.
                        </p>
                        <div
                            className={
                                " text-xs   text-green-600 font-bold flex justify-center"
                            }
                        >
                            <TiTick />
                            <span>Survey updated successfully.</span>
                        </div>

                        <button className="mt-3 pl-3 pr-3 pt-2 pb-2 text-xs text-white bg-blue-950">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccessPost;
