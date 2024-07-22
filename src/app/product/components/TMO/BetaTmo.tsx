import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
const BetaTmo = () => {
    const [azimuth, setazimuth] = useState("");
    const [click, setclick] = useState(false);
    const handlesave = () => {
        setclick(true);
    };
    return (
        <>
            <div className="bg-white p-3 mb-4">
                <div>
                    <h4 className="text-center">T-Mobile Beta Sector</h4>
                </div>
                <form id="section_25_beta" method="POST">
                    <div className="mt-6 flex text-xs gap-6 mb-4">
                        <div className="flex flex-col gap-3 flex-1">
                            <div className="flex flex-col gap-1">
                                <p>
                                    <strong className="text-xs">
                                        T-Mobile Beta sector
                                    </strong>
                                </p>
                                <input
                                    type="file"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    id="photo_picker_76"
                                    name="photo_picker_76"
                                ></input>
                                <input
                                    type="datetime-local"
                                    className="input input-bordered input-sm w-full text-xs rounded-none"
                                    id="photo_picker_76_datepicker"
                                    name="photo_picker_76_timestamp"
                                ></input>
                                <img
                                    src="images/cat.jpg"
                                    id="photo_picker_76_img"
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
                                    id="tmobile_antenna_available_beta"
                                    name="tmobile_antenna_available_beta"
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
                            </div>
                            <div className="flex flex-col gap-1">
                                <p>
                                    <strong className="text-xs">
                                        Is Azimuth as per Visio?
                                    </strong>
                                </p>
                                <select
                                    className="select select-bordered text-xs w-full select-sm m rounded-none "
                                    name="tmobile_azimuth_beta"
                                    id="tmobile_azimuth_beta"
                                    onChange={(e) => setazimuth(e.target.value)}
                                    value={azimuth}
                                >
                                    <option value="">Select</option>
                                    <option value="Yes" selected>
                                        Yes
                                    </option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 flex-1">
                            <div className="flex flex-col gap-1">
                                <p>
                                    <strong className="text-xs">
                                        T-Mobile Beta sector 2
                                    </strong>
                                </p>
                                <input
                                    type="file"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    id="tmobile_photo2_Beta"
                                    name="tmobile_photo2_Beta"
                                ></input>
                                <input
                                    type="datetime-local"
                                    className="input input-bordered input-sm w-full text-xs rounded-none"
                                    id="tmobile_photo2_Beta_datepicker"
                                    name="tmobile_photo2_Beta_timestamp"
                                ></input>
                                <img
                                    src="images/cat.jpg"
                                    id="tmobile_photo2_Beta_img"
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
                                    name="tmobile_antenna_bottom_tip_height_beta"
                                    id="tmobile_antenna_bottom_tip_height_beta"
                                    value="1"
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
                                    name="tmobile_azimuth_comment_beta"
                                    id="tmobile_azimuth_comment_beta"
                                ></textarea>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 flex-1">
                            <div className="flex flex-col gap-1">
                                <p>
                                    <strong className="text-xs">
                                        T-Mobile Beta sector 3
                                    </strong>
                                </p>
                                <input
                                    type="file"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    id="tmobile_photo3_Beta"
                                    name="tmobile_photo3_Beta"
                                ></input>
                                <input
                                    type="datetime-local"
                                    className="input input-bordered input-sm w-full text-xs rounded-none"
                                    id="tmobile_photo3_Beta_datepicker"
                                    name="tmobile_photo3_Beta_timestamp"
                                ></input>
                                <img
                                    src="images/cat.jpg"
                                    id="tmobile_photo3_Beta_img"
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

export default BetaTmo;
