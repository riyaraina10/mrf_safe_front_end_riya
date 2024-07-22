import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

const SitePics = () => {
    return (
        <>
            <div className="bg-white p-3 mb-4">
                <div>
                    <h4 className="text-center">Site Photographs Pre</h4>
                </div>
                <div>
                    <form id="general_site_view" method="POST">
                        <div className="mt-6 flex gap-8">
                            <div className="flex flex-col text-xs w-1/3 gap-1">
                                <p>
                                    <strong>General Site View - 1 </strong>
                                    <span className="text-red-600">*</span>
                                </p>
                                <input
                                    type="file"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    id="photo_picker_41"
                                    name="photo_picker_41"
                                ></input>
                                <input
                                    type="datetime-local"
                                    className="input input-bordered input-sm w-full text-xs rounded-none"
                                    id="photo_picker_41_datepicker"
                                    name="photo_picker_41_timestamp"
                                ></input>
                                <img
                                    src="images/cat.jpg"
                                    id="photo_picker_41_img"
                                ></img>
                                <p className=" text-xs  text-red-500 font-bold">
                                    General Site View - 1 is required
                                </p>
                            </div>
                            <div className="flex flex-col gap-1 w-1/3 text-xs">
                                <p>
                                    <strong>General Site View - 2</strong>
                                    <span className="text-red-600">*</span>
                                </p>
                                <input
                                    type="file"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    id="photo_picker_1"
                                    name="photo_picker_1"
                                ></input>
                                <input
                                    type="datetime-local"
                                    className="input input-bordered input-sm w-full text-xs rounded-none"
                                    id="photo_picker_1_datepicker"
                                    name="photo_picker_1_timestamp"
                                ></input>
                                <img
                                    src="images/cat.jpg"
                                    id="photo_picker_1_img"
                                ></img>
                                <p className=" text-xs  text-red-500 font-bold">
                                    General Site View - 2 is required
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
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

export default SitePics;
