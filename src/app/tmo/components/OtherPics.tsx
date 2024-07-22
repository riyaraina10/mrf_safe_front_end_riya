import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

const OtherPics = () => {
    const [photos, setphotos] = useState(6);
    return (
        <>
            <div id="other_antena_info">
                <div id="other_antena_info_div">
                    <div className="bg-white p-3">
                        <div>
                            <h4 className="text-center">Other Antennas</h4>
                        </div>
                        <div>
                            <form id="section_28" method="POST">
                                <div>
                                    <div className="border-b border-gray-200 ">
                                        <div className="flex flex-col w-96 mb-6 mt-4 text-xs">
                                            <p>
                                                <strong>
                                                    How Many Other Photos ?
                                                </strong>
                                            </p>
                                            <select
                                                className="select select-bordered select-sm text-xs m w-full rounded-none "
                                                name="other_photos_count"
                                                id="other_photos_count"
                                                value={photos}
                                                onChange={(e) => {
                                                    setphotos(
                                                        parseInt(e.target.value)
                                                    );
                                                }}
                                            >
                                                <option value="1">
                                                    Select
                                                </option>
                                                {Array.from(
                                                    Array(20),
                                                    (e, i) => (
                                                        <>
                                                            <option
                                                                value={i + 1}
                                                            >
                                                                {i + 1}
                                                            </option>
                                                        </>
                                                    )
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        {Array.from(Array(photos), (e, i) => (
                                            <>
                                                <div className="border-b border-gray-200 flex text-xs gap-8 mt-4">
                                                    <div className="flex flex-col w-96 gap-2 mb-8">
                                                        <p>
                                                            <strong>
                                                                Other Photo{" "}
                                                                {i + 1}
                                                            </strong>
                                                        </p>
                                                        <input
                                                            type="file"
                                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                                            id={`other_photos_array_${
                                                                i + 1
                                                            }`}
                                                            name="other_photos_array[]"
                                                        ></input>
                                                        <input
                                                            type="datetime-local"
                                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                                            id={`other_photos_array_${
                                                                i + 1
                                                            }_datepicker`}
                                                            name="other_photos_array_timestamp[]"
                                                        ></input>
                                                        <img
                                                            src="images/cat.jpg"
                                                            id={`other_photos_array_${
                                                                i + 1
                                                            }_img`}
                                                        ></img>
                                                    </div>
                                                    <div className=" flex flex-col gap-2 flex-grow">
                                                        <p>
                                                            <strong>
                                                                Other Remarks
                                                            </strong>
                                                        </p>
                                                        <textarea
                                                            className="textarea textarea-bordered textarea-sm w-full rounded-none"
                                                            name={`other_photos_remarks[${
                                                                i + 1
                                                            }]`}
                                                        ></textarea>
                                                    </div>
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </form>
                        </div>
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

export default OtherPics;
