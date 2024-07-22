import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
const Zeta = () => {
    const [azimuth, setazimuth] = useState("");
    const [click, setclick] = useState(false);
    const handlesave = () => {
        setclick(true);
    };
    return (
        <>
            <div className="bg-white p-3 mb-4">
                <div>
                    <h4 className="text-center">CLRWR Zeta Sector</h4>
                </div>
                <form id="section_27_zeta" method="POST">
                    <div className="mt-6 flex text-xs gap-6 mb-4">
                        <div className="flex flex-col gap-3 flex-1">
                            <div className="flex flex-col gap-1">
                                <p>
                                    <strong className="text-xs">
                                        CLRWR Zeta sector
                                    </strong>
                                </p>
                                <input
                                    type="file"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    id="photo_picker_92"
                                    name="photo_picker_92"
                                ></input>
                                <input
                                    type="datetime-local"
                                    className="input input-bordered input-sm w-full text-xs rounded-none"
                                    id="photo_picker_92_datepicker"
                                    name="photo_picker_92_timestamp"
                                ></input>
                                <img
                                    src="images/cat.jpg"
                                    id="photo_picker_92_img"
                                ></img>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p>
                                    <strong className="text-xs">
                                        How many number of Antennas available in
                                        array?
                                    </strong>
                                </p>
                                <select
                                    className="select select-bordered select-sm text-xs m w-full rounded-none "
                                    name="clrwr_antenna_available_zeta"
                                    id="clrwr_antenna_available_zeta"
                                >
                                    <option>Select</option>
                                    {Array.from(Array(10), (e, i) => (
                                        <option value={i + 1} selected={i == 0}>
                                            {i}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p>
                                    <strong className="text-xs">
                                        Is Azimuth as per Visio?
                                    </strong>
                                </p>
                                <select
                                    className="select select-bordered text-xs w-full select-sm m rounded-none "
                                    name="clrwr_azimuth_zeta"
                                    id="clrwr_azimuth_zeta"
                                    value={azimuth}
                                    onChange={(e) => setazimuth(e.target.value)}
                                >
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 flex-1">
                            <div className="flex flex-col gap-1">
                                <p>
                                    <strong className="text-xs">
                                        clwr Zeta sector 2
                                    </strong>
                                </p>
                                <input
                                    type="file"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    id="clwr_photo2_Zeta"
                                    name="clwr_photo2_Zeta"
                                ></input>
                                <input
                                    type="datetime-local"
                                    className="input input-bordered input-sm w-full text-xs rounded-none"
                                    id="clwr_photo2_Zeta_datepicker"
                                    name="clwr_photo2_Zeta_timestamp"
                                ></input>
                                <img
                                    src="images/cat.jpg"
                                    id="clwr_photo2_Zeta_img"
                                ></img>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p>
                                    <strong className="text-xs">
                                        Antenna bottom tip height (inches)
                                    </strong>
                                </p>
                                <input
                                    type="number "
                                    className="input input-bordered rounded-none input-sm w-full "
                                    name="clrwr_antenna_bottom_tip_height_zeta"
                                    id="clrwr_antenna_bottom_tip_height_zeta"
                                />
                            </div>
                            <div
                                className={
                                    azimuth === "No"
                                        ? "flex flex-col gap-1"
                                        : "hidden"
                                }
                            >
                                <p>
                                    <strong className="text-xs">Comment</strong>
                                </p>
                                <textarea
                                    className="textarea textarea-bordered textarea-xs height- w-full rounded-none "
                                    name="clrwr_azimuth_comment_zeta"
                                    id="clrwr_azimuth_comment_zeta"
                                ></textarea>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 flex-1">
                            <div className="flex flex-col gap-1">
                                <p>
                                    <strong className="text-xs">
                                        clwr Alpha sector 3
                                    </strong>
                                </p>
                                <input
                                    type="file"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    id="clwr_photo3_Zeta"
                                    name="clwr_photo3_Zeta"
                                ></input>
                                <input
                                    type="datetime-local"
                                    className="input input-bordered input-sm w-full text-xs rounded-none"
                                    id="clwr_photo3_Zeta_datepicker"
                                    name="clwr_photo3_Zeta_timestamp"
                                ></input>
                                <img
                                    src="images/cat.jpg"
                                    id="clwr_photo3_Zeta_img"
                                ></img>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="text-center mt-6">
                    <div className="border-t border-gray-100 ">
                        <div
                            className={
                                click
                                    ? " text-xs   text-green-600 font-bold flex justify-center"
                                    : "hidden"
                            }
                        >
                            <TiTick />
                            <span>Survey updated successfully.</span>
                        </div>

                        <button
                            className=" pl-3 pr-3 pt-2 pb-2 text-xs text-white bg-blue-950"
                            onClick={handlesave}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Zeta;