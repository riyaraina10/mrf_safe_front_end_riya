import React, { useState } from "react";

import { TiTick } from "react-icons/ti";

const RoofViewPics = () => {
    return (
        <>
            <div className="bg-white p-3 mb-4">
                <div>
                    <h4 className="text-center">Roofview pictures</h4>
                </div>
                <form id="section_85" method="POST">
                    <div className="mt-6 flex text-xs gap-6 mb-4">
                        <div className="flex flex-col gap-3 flex-1">
                            <div className="flex flex-col gap-1">
                                <p>
                                    <strong className="text-xs">
                                        Roofview pictures : North East
                                    </strong>
                                    <span className="text-red-600">*</span>
                                </p>
                                <input
                                    type="file"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    name="photo_picker_287"
                                    id="photo_picker_287"
                                ></input>
                                <input
                                    type="datetime-local"
                                    className="input input-bordered input-sm w-full text-xs rounded-none"
                                    id="photo_picker_287_datepicker"
                                    name="photo_picker_287_timestamp"
                                ></input>
                                <img
                                    src="images/cat.jpg"
                                    id="photo_picker_287_img"
                                ></img>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 flex-1">
                            <div className="flex flex-col gap-1">
                                <p>
                                    <strong className="text-xs">
                                        Roofview pictures : North West
                                    </strong>
                                    <span className="text-red-600">*</span>
                                </p>
                                <input
                                    type="file"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    id="photo_picker_93"
                                    name="photo_picker_93"
                                ></input>
                                <input
                                    type="datetime-local"
                                    className="input input-bordered input-sm w-full text-xs rounded-none"
                                    id="photo_picker_93_datepicker"
                                    name="photo_picker_93_timestamp"
                                ></input>
                                <img
                                    src="images/cat.jpg"
                                    id="photo_picker_93_img"
                                ></img>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 flex-1">
                            <div className="flex flex-col gap-1">
                                <p>
                                    <strong className="text-xs">
                                        Roofview pictures : South East
                                    </strong>
                                    <span className="text-red-600">*</span>
                                </p>
                                <input
                                    type="file"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    id="photo_picker_94"
                                    name="photo_picker_94"
                                ></input>
                                <input
                                    type="datetime-local"
                                    className="input input-bordered input-sm w-full text-xs rounded-none"
                                    id="photo_picker_94_datepicker"
                                    name="photo_picker_94_timestamp"
                                ></input>
                                <img
                                    src="images/cat.jpg"
                                    id="photo_picker_94_img"
                                ></img>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex text-xs mb-4">
                        <div className="flex flex-col gap-3 w-1/3">
                            <div className="flex flex-col gap-1">
                                <p>
                                    <strong className="text-xs">
                                        Roofview pictures : South West
                                    </strong>
                                    <span className="text-red-600">*</span>
                                </p>
                                <input
                                    type="file"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    id="photo_picker_95"
                                    name="photo_picker_95"
                                ></input>
                                <input
                                    type="datetime-local"
                                    className="input input-bordered input-sm w-full text-xs rounded-none"
                                    id="photo_picker_95_datepicker"
                                    name="photo_picker_95_timestamp"
                                ></input>
                                <img
                                    src="images/cat.jpg"
                                    id="photo_picker_95_img"
                                ></img>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="text-center mt-6">
                    <div className="border-t border-gray-100 ">
                        <div
                            className={
                                " text-xs   text-green-600 font-bold flex justify-center"
                            }
                        >
                            <TiTick />
                            <span>Survey updated successfully.</span>
                        </div>

                        <button className=" pl-3 pr-3 pt-2 pb-2 text-xs text-white bg-blue-950">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RoofViewPics;
