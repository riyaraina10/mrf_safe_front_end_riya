import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

const MPE = () => {
    const [MPE, setMPE] = useState({
        viso: "No",
        Measurements: "No",
        Meter: 65,
    });
    return (
        <>
            <div className="bg-white p-3 mb-4" id="mpe_measurement_section">
                <div>
                    <h4 className="text-center">MPE Measurements</h4>
                </div>
                <form id="section_19" method="POST">
                    <div className="mt-6 flex text-xs gap-3 mb-4 flex-wrap">
                        <div
                            className="flex flex-col gap-1 "
                            style={{ width: "410px" }}
                        >
                            <p>
                                <strong className="text-xs">
                                    Is provided Visio as per the site
                                    conditions.
                                </strong>
                                <span className="text-xs text-red-600">*</span>
                            </p>
                            <select
                                className="select select-bordered select-sm text-xs m w-full rounded-none "
                                name="tri_8"
                                id="tri_8"
                                value={MPE.viso}
                                onChange={(e) => {
                                    setMPE({
                                        ...MPE,
                                        viso: e.target.value,
                                    });
                                }}
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <p className=" text-red-500 text-xs font-bold ">
                                Is provided Visio as per the site conditions is
                                required.
                            </p>
                        </div>

                        <div
                            className="flex flex-col gap-1"
                            style={{ width: "410px" }}
                        >
                            <p>
                                <strong className="text-xs">
                                    MPE Measurements Done ?
                                </strong>
                                <span className="text-xs text-red-600">*</span>
                            </p>
                            <select
                                className="select select-bordered select-sm text-xs m w-full rounded-none "
                                name="tri_10"
                                id="tri_10"
                                value={MPE.Measurements}
                                onChange={(e) => {
                                    setMPE({
                                        ...MPE,
                                        Measurements: e.target.value,
                                    });
                                }}
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <p className=" text-red-500 text-xs font-bold ">
                                MPE Measurements Done is required.
                            </p>
                        </div>

                        <div
                            className="flex flex-col gap-1"
                            style={{ width: "410px" }}
                        >
                            <p>
                                <strong className="text-xs">
                                    Meter Reading Points
                                </strong>
                                <span className="text-xs text-red-600">*</span>
                            </p>
                            <input
                                type="number"
                                className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                name="meterreading_points"
                                value={MPE.Meter}
                                onChange={(e) => {
                                    setMPE({
                                        ...MPE,
                                        Meter: parseInt(e.target.value),
                                    });
                                }}
                            ></input>
                            <p className=" text-red-500 text-xs font-bold ">
                                Meter Reading Points is required.
                            </p>
                        </div>

                        <div
                            className="flex flex-col gap-1 "
                            style={{ width: "410px" }}
                        >
                            <p>
                                <strong className="text-xs">
                                    Survey Sheet Photo
                                </strong>
                                <span className="text-xs text-red-600">*</span>
                            </p>
                            <input
                                type="file"
                                className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                id="photo_picker_317"
                                name="photo_picker_317"
                            ></input>
                            <input
                                type="datetime-local"
                                className="input input-bordered input-sm w-full text-xs rounded-none"
                                id="photo_picker_317_datepicker"
                                name="photo_picker_317_timestamp"
                            ></input>
                            <img
                                src="images/cat.jpg"
                                id="photo_picker_317_img"
                            ></img>
                        </div>

                        <div
                            className="flex flex-col gap-1 "
                            style={{ width: "410px" }}
                        >
                            <p>
                                <strong className="text-xs">
                                    Collocation/ Others Survey Sheet Photo
                                </strong>
                                <span className="text-xs text-red-600">*</span>
                            </p>
                            <input
                                type="file"
                                className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                id="photo_picker_114"
                                name="photo_picker_114"
                            ></input>
                            <input
                                type="datetime-local"
                                className="input input-bordered input-sm w-full text-xs rounded-none"
                                id="photo_picker_114_datepicker"
                                name="photo_picker_114_timestamp"
                            ></input>
                            <img
                                src="images/cat.jpg"
                                id="photo_picker_114_img"
                            ></img>
                        </div>

                        <div
                            className={
                                MPE.viso === "No"
                                    ? "flex flex-col gap-1"
                                    : "hidden"
                            }
                            style={{ width: "410px" }}
                        >
                            <p>
                                <strong className="text-xs">
                                    Updated Layout Diagram Photo
                                </strong>
                                <span className="text-xs text-red-600">*</span>
                            </p>
                            <input
                                type="file"
                                className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                id="photo_picker_115"
                                name="photo_picker_115"
                            ></input>
                            <input
                                type="datetime-local"
                                className="input input-bordered input-sm w-full text-xs rounded-none"
                                id="photo_picker_115_datepicker"
                                name="photo_picker_115_timestamp"
                            ></input>{" "}
                            <img
                                src="images/cat.jpg"
                                id="photo_picker_115_img"
                            ></img>
                        </div>

                        <div
                            className={
                                MPE.Measurements === "Yes"
                                    ? "flex flex-col gap-1"
                                    : "hidden"
                            }
                            style={{ width: "410px" }}
                        >
                            <p>
                                <strong className="text-xs">
                                    MPE Point Diagram Photo
                                </strong>
                                <span className="text-xs text-red-600">*</span>
                            </p>
                            <input
                                type="file"
                                className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                id="photo_picker_121"
                                name="photo_picker_121"
                            ></input>
                            <input
                                type="datetime-local"
                                className="input input-bordered input-sm w-full text-xs rounded-none"
                                id="photo_picker_121_datepicker"
                                name="photo_picker_121_timestamp"
                            ></input>
                            <img
                                src="images/cat.jpg"
                                id="photo_picker_121_img"
                            ></img>
                        </div>
                    </div>
                </form>
                <div className="text-center mt-32">
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

export default MPE;
