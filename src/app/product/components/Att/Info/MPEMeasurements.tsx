import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

const MPEMeasurements = () => {
    const [MPE, setMPE] = useState({
        viso: "Yes",
        Measurements: "Yes",
        Meter: 1,
        Survey_Sheet_Photo: "",
        Collocation: "",
        Updated_Layout: "",
        Diagram: "",
    });

    const [mandatory, setMandatory] = useState({
        visoMandatory: false,
        Measurements_mandatory: false,
        MeterMandatory: false,
        Survey_Sheet_Photo_mandatory: false,
        Collocation_mandatory: false,
        Updated_Layout_mandatory: false,
        Diagram_mandatory: false,
        save: true,
    });

    return (
        <>
            <div className="bg-white p-3 mb-4" id="mpe_measurement_section">
                <div>
                    <h4 className="text-center">MPE Measurements</h4>
                </div>
                <form id="section_19" method="POST">
                    <div className="mt-6 flex text-xs gap-5 mb-4">
                        <div className="flex flex-col gap-4 w-1/3">
                            <div className="flex flex-col gap-1 ">
                                <p>
                                    <strong className="text-xs">
                                        Is provided Visio as per the site
                                        conditions.
                                    </strong>
                                    <span className="text-xs text-red-600">
                                        *
                                    </span>
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
                                    <option value="Yes" selected>
                                        Yes
                                    </option>
                                    <option value="No">No</option>
                                </select>
                                <p className=" text-red-500 text-xs font-bold ">
                                    Is provided Visio as per the site conditions
                                    is required.
                                </p>
                            </div>

                            <div className="flex flex-col gap-1 ">
                                <p>
                                    <strong className="text-xs">
                                        Survey Sheet Photo
                                    </strong>
                                    <span className="text-xs text-red-600">
                                        *
                                    </span>
                                </p>
                                <input
                                    type="file"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    id="photo_picker_317"
                                    name="photo_picker_317"
                                    value={MPE.Survey_Sheet_Photo}
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
                        </div>

                        <div className="flex flex-col gap-4 w-1/3">
                            <div className="flex flex-col gap-1">
                                <p>
                                    <strong className="text-xs">
                                        MPE Measurements Done ?
                                    </strong>
                                    <span className="text-xs text-red-600">
                                        *
                                    </span>
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
                                    <option value="Yes" selected>
                                        Yes
                                    </option>
                                    <option value="No">No</option>
                                </select>
                                <p className=" text-red-500 text-xs font-bold ">
                                    MPE Measurements Done is required.
                                </p>
                            </div>
                            <div className="flex flex-col gap-1 ">
                                <p>
                                    <strong className="text-xs">
                                        Collocation/ Others Survey Sheet Photo
                                    </strong>
                                    <span className="text-xs text-red-600">
                                        *
                                    </span>
                                </p>
                                <input
                                    type="file"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    id="photo_picker_114"
                                    name="photo_picker_114"
                                    value={MPE.Collocation}
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
                        </div>

                        <div className="flex flex-col gap-4 w-1/3">
                            <div className="flex flex-col gap-1">
                                <p>
                                    <strong className="text-xs">
                                        Meter Reading Points
                                    </strong>
                                    <span className="text-xs text-red-600">
                                        *
                                    </span>
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
                                className={
                                    MPE.viso === "No"
                                        ? "flex flex-col gap-1"
                                        : "hidden"
                                }
                            >
                                <p>
                                    <strong className="text-xs">
                                        Updated Layout Diagram Photo
                                    </strong>
                                    <span className="text-xs text-red-600">
                                        *
                                    </span>
                                </p>
                                <input
                                    type="file"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    id="photo_picker_115"
                                    name="photo_picker_115"
                                    value={MPE.Updated_Layout}
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
                            >
                                <p>
                                    <strong className="text-xs">
                                        MPE Point Diagram Photo
                                    </strong>
                                    <span className="text-xs text-red-600">
                                        *
                                    </span>
                                </p>
                                <input
                                    type="file"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    id="photo_picker_121"
                                    name="photo_picker_121"
                                    value={MPE.Diagram}
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

export default MPEMeasurements;
