import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

const AttDelta = () => {
    const [azimuth, setazimuth] = useState("");
    return (
        <>
            {" "}
            <div className="bg-white p-3 mb-4">
                <div>
                    <h4 className="text-center">ATT Delta Sector</h4>
                </div>
                <form id="section_25_delta" method="POST">
                    <div className="mt-6 flex text-xs gap-6 mb-4 flex-wrap">
                        <div
                            className="flex flex-col gap-1"
                            style={{ width: "410px" }}
                        >
                            <p>
                                <strong className="text-xs">
                                    ATT Delta sector
                                </strong>
                            </p>
                            <input
                                type="file"
                                className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                id="photo_picker_78"
                                name="photo_picker_78"
                            ></input>
                            <input
                                type="datetime-local"
                                className="input input-bordered input-sm w-full text-xs rounded-none"
                                id="photo_picker_78_datepicker"
                                name="photo_picker_78_timestamp"
                            ></input>
                            <img
                                src="images/cat.jpg"
                                id="photo_picker_78_img"
                            ></img>
                        </div>
                        <div
                            className="flex flex-col gap-1"
                            style={{ width: "410px" }}
                        >
                            <p>
                                <strong className="text-xs">
                                    How many number of Antennas available in
                                    array?
                                </strong>
                            </p>
                            <select
                                className="select select-bordered select-sm text-xs m w-full rounded-none "
                                id="tmobile_antenna_available_delta"
                                name="tmobile_antenna_available_delta"
                            >
                                <option>Select</option>
                                {Array.from(Array(10), (e, i) => (
                                    <>
                                        <option value={i} selected={i == 0}>
                                            {i}
                                        </option>
                                    </>
                                ))}
                            </select>
                        </div>{" "}
                        <div
                            className="flex flex-col gap-1"
                            style={{ width: "410px" }}
                        >
                            <p>
                                <strong className="text-xs">
                                    Antenna bottom tip height (inches)
                                </strong>
                            </p>
                            <input
                                type="number "
                                className="input input-bordered rounded-none input-sm w-full "
                                name="tmobile_antenna_bottom_tip_height_delta"
                                id="tmobile_antenna_bottom_tip_height_delta"
                                value="1"
                            />
                        </div>
                        <div
                            className="flex flex-col gap-1"
                            style={{ width: "410px" }}
                        >
                            <p>
                                <strong className="text-xs">
                                    Is Azimuth as per Visio?
                                </strong>
                            </p>
                            <select
                                className="select select-bordered text-xs w-full select-sm m rounded-none "
                                name="tmobile_azimuth_delta"
                                id="tmobile_azimuth_delta"
                                value={azimuth}
                                onChange={(e) => setazimuth(e.target.value)}
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>{" "}
                        <div
                            className={
                                azimuth === "No"
                                    ? "flex flex-col gap-1"
                                    : "hidden"
                            }
                            style={{ width: "410px" }}
                        >
                            <p>
                                <strong className="text-xs">Comment</strong>
                            </p>
                            <textarea
                                className="textarea textarea-bordered textarea-xs height- w-full rounded-none "
                                name="tmobile_azimuth_comment_delta"
                                id="tmobile_azimuth_comment_delta"
                            ></textarea>
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

export default AttDelta;
