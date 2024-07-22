import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
const EpsilonVerizon = () => {
    const [azimuth, setazimuth] = useState("");
    const [click, setclick] = useState(false);
    const handlesave = () => {
        setclick(true);
    };
    return (
        <>
            {" "}
            <div className="bg-white p-3 mb-4">
                <div>
                    <h4 className="text-center">Verizon Epsilon Sector</h4>
                </div>
                <form id="section_26_epsilon" method="POST">
                    <div className="mt-6 flex text-xs gap-6 mb-4">
                        <div className="flex flex-col gap-3 flex-1">
                            <div className="flex flex-col gap-1">
                                <p>
                                    <strong className="text-xs">
                                        Verizon Epsilon sector
                                    </strong>
                                </p>
                                <input
                                    type="file"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    id="photo_picker_85"
                                    name="photo_picker_85"
                                ></input>
                                <input
                                    type="datetime-local"
                                    className="input input-bordered input-sm w-full text-xs rounded-none"
                                    id="photo_picker_85_datepicker"
                                    name="photo_picker_85_timestamp"
                                ></input>
                                <img
                                    src="images/cat.jpg"
                                    id="photo_picker_85_img"
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
                                    name="verizon_antenna_available_epsilon"
                                    id="verizon_antenna_available_epsilon"
                                >
                                    <option>Select</option>
                                    {Array.from(Array(10), (e, i) => (
                                        <>
                                            <option
                                                value={i + 1}
                                                selected={i == 0}
                                            >
                                                {i}
                                            </option>
                                        </>
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
                                    name="verizon_azimuth_epsilon"
                                    id="verizon_azimuth_epsilon"
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
                                        verizon Epsilon sector 2
                                    </strong>
                                </p>
                                <input
                                    type="file"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    id="verizon_photo2_Epsilon"
                                    name="verizon_photo2_Epsilon"
                                ></input>
                                <input
                                    type="datetime-local"
                                    className="input input-bordered input-sm w-full text-xs rounded-none"
                                    id="verizon_photo2_Epsilon_datepicker"
                                    name="verizon_photo2_Epsilon_timestamp"
                                ></input>
                                <img
                                    src="images/cat.jpg"
                                    id="verizon_photo2_Epsilon_img"
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
                                    name="verizon_antenna_bottom_tip_height_epsilon"
                                    id="verizon_antenna_bottom_tip_height_epsilon"
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
                                    name="verizon_azimuth_comment_epsilon"
                                    id="verizon_azimuth_comment_epsilon"
                                ></textarea>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 flex-1">
                            <div className="flex flex-col gap-1">
                                <p>
                                    <strong className="text-xs">
                                        verizon Epsilon sector 3
                                    </strong>
                                </p>
                                <input
                                    type="file"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    id="verizon_photo3_Epsilon"
                                    name="verizon_photo3_Epsilon"
                                ></input>
                                <input
                                    type="datetime-local"
                                    className="input input-bordered input-sm w-full text-xs rounded-none"
                                    id="verizon_photo3_Epsilon_datepicker"
                                    name="verizon_photo3_Epsilon_timestamp"
                                ></input>
                                <img
                                    src="images/cat.jpg"
                                    id="verizon_photo3_Epsilon_img"
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

export default EpsilonVerizon;
