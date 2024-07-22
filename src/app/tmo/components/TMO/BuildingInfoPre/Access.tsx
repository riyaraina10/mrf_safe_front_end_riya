import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

import { ImPlus } from "react-icons/im";
interface FirstState {
    [key: number]: string;
}
interface ControlState {
    [key: number]: string;
}
interface ImageUpload {
    [key: string]: boolean;
}

const Access = () => {
    const [multiple, setMultiple] = useState("No");
    const [accesspoints, setaccesspoints] = useState(0);
    const [first, setFirst] = useState<FirstState>({});
    const [Control, setControl] = useState<ControlState>({});
    const [disableCheck, setdisableCheck] = useState(true);
    const [ImageUpload, setImageUpload] = useState<ImageUpload>({});
    const handleaccess = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMultiple(e.target.value);
        e.target.value === "Yes" && setaccesspoints(0);
    };
    const handleChange = (
        e: React.ChangeEvent<HTMLSelectElement>,
        i: number
    ) => {
        setFirst({
            ...first,
            [i]: e.target.value,
        });
        e.target.value !== "2" && setdisableCheck(false);
    };
    const handleControl = (
        e: React.ChangeEvent<HTMLSelectElement>,
        i: number
    ) => {
        setControl({
            ...first,
            [i]: e.target.value,
        });
    };
    const handleImageUpload = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        id: string
    ) => {
        setImageUpload({
            ...ImageUpload,
            [id]: true,
        });
    };
    const handleImageHide = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        id: string
    ) => {
        setImageUpload({
            ...ImageUpload,
            [id]: false,
        });
    };

    return (
        <>
            <div className="bg-white p-3 mb-4">
                <div>
                    <h4 className="text-center">Access</h4>
                </div>
                <div>
                    <form id="section_4" method="POST">
                        <div className="flex gap-6 mt-6">
                            <div className="flex flex-col text-xs gap-1 w-1/3">
                                <p>
                                    <strong>
                                        Do you have multiple access points?
                                    </strong>
                                </p>
                                <select
                                    className="select select-bordered text-xs w-full select-sm m rounded-none"
                                    id="multiple_access_points"
                                    name="multiple_access_points"
                                    value={multiple}
                                    onChange={handleaccess}
                                >
                                    <option value="">Select</option>
                                    <option value="Yes" selected>
                                        Yes
                                    </option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="flex flex-col text-xs gap-1 w-1/3">
                                <p>
                                    <strong>How many access points?</strong>
                                </p>
                                <div
                                    className={
                                        multiple == "Yes" ? "display" : "hidden"
                                    }
                                >
                                    <select
                                        className="select select-bordered select-sm text-xs m w-full rounded-none "
                                        id="multiple_access_points_counter"
                                        name="multiple_access_points_counter"
                                        value={accesspoints}
                                        onChange={(e) => {
                                            setaccesspoints(
                                                parseInt(e.target.value)
                                            );
                                        }}
                                    >
                                        <option value="0">Select</option>
                                        {Array.from(Array(9), (e, i) => (
                                            <>
                                                <option value={i + 1}>
                                                    {i + 2}
                                                </option>
                                            </>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div id="pre_access_div">
                            {Array.from(Array(accesspoints + 1), (e, i) => (
                                <>
                                    <div className="border-neutral-400 border-2 text-center mt-6 ">
                                        <h4 className="text-sky-800 font-bold ">
                                            Access-{i + 1}
                                        </h4>
                                    </div>
                                    <div className="flex gap-5 mt-4">
                                        <div className="flex flex-col gap-1 text-xs w-1/3">
                                            <p>
                                                <strong>Status</strong>
                                                <span className="text-red-600">
                                                    *
                                                </span>
                                            </p>

                                            <select
                                                className="select select-bordered select-sm text-xs m w-full rounded-none"
                                                name="main_roof_access_antenna_status[]"
                                                id={`main_roof_access_antenna_status${
                                                    i + 1
                                                }`}
                                                value={first[i] || "2"}
                                                onChange={(e) =>
                                                    handleChange(e, i)
                                                }
                                            >
                                                <option value="0">
                                                    Select
                                                </option>
                                                <option value="1">
                                                    Restricted
                                                </option>
                                                <option value="2">
                                                    Non-Restricted
                                                </option>
                                            </select>
                                            <p className=" text-red-500 text-xs font-bold ">
                                                Status is Required
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-1 text-xs w-1/3">
                                            <p>
                                                <strong>Control Type</strong>
                                            </p>
                                            <select
                                                className="select select-bordered select-sm text-xs m w-full rounded-none "
                                                name="main_roof_access_antenna_control_type[]"
                                                id={`main_roof_access_antenna_control_type${
                                                    i + 1
                                                }`}
                                                disabled={disableCheck}
                                                value={Control[i] || ""}
                                                onChange={(e) =>
                                                    handleControl(e, i)
                                                }
                                            >
                                                <option value="0">
                                                    Select
                                                </option>
                                                <option value="1">
                                                    Stairs to Roof
                                                </option>
                                                <option value="2">
                                                    Hatch to Roof
                                                </option>
                                                <option value="3">
                                                    Hatch to Penthouse
                                                </option>
                                                <option value="4">
                                                    Ladder to Roof
                                                </option>
                                                <option value="5">
                                                    Drive to Site
                                                </option>
                                            </select>
                                        </div>

                                        <div className="flex flex-col text-xs gap-1 w-1/3">
                                            <p>
                                                <strong>Comment</strong>
                                            </p>
                                            <textarea
                                                className="textarea textarea-bordered textarea-xs height- w-full rounded-none "
                                                id={`main_roof_access_antenna_comment${
                                                    i + 1
                                                }`}
                                                name="main_roof_access_antenna_comment[]"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="flex gap-5 mt-2">
                                        <div className="flex flex-col gap-1 text-xs w-1/3">
                                            <p>
                                                <strong>
                                                    {" "}
                                                    Access Photo {i + 1}{" "}
                                                </strong>
                                                <span className="text-red-600">
                                                    *
                                                </span>
                                            </p>
                                            <input
                                                type="file"
                                                className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                                id={`main_roof_access_pre_photo_${
                                                    i + 1
                                                }`}
                                                name={`main_roof_access_pre_photo_${
                                                    i + 1
                                                }`}
                                            ></input>
                                            <input
                                                type="datetime-local"
                                                className="input input-bordered input-sm w-full text-xs rounded-none"
                                                id={`main_roof_access_pre_photo_${
                                                    i + 1
                                                }_datepicker`}
                                                name={`main_roof_access_pre_photo_${
                                                    i + 1
                                                }_timestamp`}
                                            ></input>
                                            <img
                                                src="images/cat.jpg"
                                                id="main_roof_access_pre_photo_1_img"
                                            ></img>
                                            <p className=" text-xs  text-red-500 font-bold">
                                                Access Photo {i + 1} is required
                                            </p>
                                        </div>
                                        <div className="text-xs w-1/3">
                                            <button
                                                className=" pl-3 pr-3 pt-2 pb-2 text-xs text-white bg-blue-950 "
                                                id={`main_roof_access_pre_button_show_${
                                                    i + 1
                                                }`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleImageUpload(
                                                        e,
                                                        `main_roof_access_pre_button_show_${
                                                            i + 1
                                                        }`
                                                    );
                                                }}
                                            >
                                                <div className="flex gap-1">
                                                    <ImPlus />
                                                    <span>Add Image</span>
                                                </div>
                                            </button>
                                            <div
                                                className={
                                                    ImageUpload[
                                                        `main_roof_access_pre_button_show_${
                                                            i + 1
                                                        }`
                                                    ]
                                                        ? "text-xs flex flex-col gap-1"
                                                        : "hidden"
                                                }
                                                id={`main_roof_access_pre_div_${
                                                    i + 1
                                                }`}
                                            >
                                                <p>
                                                    <strong>
                                                        Addon Photo {i + 1}-1{" "}
                                                    </strong>
                                                    <button
                                                        className="text-blue-600 font-bold"
                                                        id={`main_roof_access_pre_button_hide_${
                                                            i + 1
                                                        }`}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleImageHide(
                                                                e,
                                                                `main_roof_access_pre_button_show_${
                                                                    i + 1
                                                                }`
                                                            );
                                                        }}
                                                    >
                                                        Click to Hide
                                                    </button>
                                                </p>
                                                <input
                                                    type="file"
                                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                                    id={`main_roof_access_pre_addon_photo_${
                                                        i + 1
                                                    }`}
                                                    name={`main_roof_access_pre_addon_photo_${
                                                        i + 1
                                                    }`}
                                                ></input>
                                                <input
                                                    type="datetime-local"
                                                    className="input input-bordered input-sm w-full text-xs rounded-none"
                                                    id={`main_roof_access_pre_addon_photo_${
                                                        i + 1
                                                    }_datepicker`}
                                                    name={`main_roof_access_pre_addon_photo_${
                                                        i + 1
                                                    }_timestamp`}
                                                ></input>
                                            </div>
                                        </div>

                                        <div className=" text-xs w-1/3">
                                            <button
                                                className=" pl-3 pr-3 pt-2 pb-2 text-xs text-white bg-blue-950"
                                                id={`main_roof_access_pre_second_button_show_${
                                                    i + 1
                                                }`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleImageUpload(
                                                        e,
                                                        `main_roof_access_pre_second_button_show_${
                                                            i + 1
                                                        }`
                                                    );
                                                }}
                                            >
                                                <div className="flex gap-1">
                                                    <ImPlus />
                                                    <span>Add Image</span>
                                                </div>
                                            </button>
                                            <div
                                                className={
                                                    ImageUpload[
                                                        `main_roof_access_pre_second_button_show_${
                                                            i + 1
                                                        }`
                                                    ]
                                                        ? "text-xs flex flex-col gap-1"
                                                        : "hidden"
                                                }
                                            >
                                                <p>
                                                    <strong>
                                                        Addon Photo {i + 1}-2
                                                    </strong>
                                                    <button
                                                        className="text-blue-600 font-bold"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleImageHide(
                                                                e,
                                                                `main_roof_access_pre_second_button_show_${
                                                                    i + 1
                                                                }`
                                                            );
                                                        }}
                                                    >
                                                        Click to Hide
                                                    </button>
                                                </p>
                                                <input
                                                    type="file"
                                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                                    id={`main_roof_access_pre_addon_second_photo_${
                                                        i + 1
                                                    }`}
                                                    name={`main_roof_access_pre_addon_second_photo_${
                                                        i + 1
                                                    }`}
                                                ></input>
                                                <input
                                                    type="datetime-local"
                                                    className="input input-bordered input-sm w-full text-xs rounded-none"
                                                    id={`main_roof_access_pre_addon_second_photo_${
                                                        i + 1
                                                    }_datepicker`}
                                                    name={`main_roof_access_pre_addon_second_photo_${
                                                        i + 1
                                                    }_timestamp`}
                                                ></input>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}

                            {/* <div className="border-neutral-400 border-2 text-center mt-6 ">
                                <h4 className="text-sky-800 font-bold ">
                                    Access-2
                                </h4>
                            </div>
                            <div className="flex gap-5 mt-4">
                                <div className="flex flex-col gap-1 text-xs w-1/3">
                                    <p>
                                        <strong>Status</strong>
                                        <span className="text-red-600">*</span>
                                    </p>

                                    <select
                                        className="select select-bordered select-sm text-xs m w-full rounded-none "
                                        id="main_roof_access_antenna_status2"
                                        name="main_roof_access_antenna_status[]"
                                    >
                                        <option>Select</option>
                                        <option value="1" selected>
                                            Restricted
                                        </option>
                                        <option value="2">
                                            Non-Restricted
                                        </option>
                                    </select>
                                    <p className=" text-red-500 text-xs font-bold ">
                                        Status is Required
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1 text-xs w-1/3">
                                    <p>
                                        <strong>Control Type</strong>
                                    </p>
                                    <select
                                        className="select select-bordered select-sm text-xs m w-full rounded-none "
                                        id="main_roof_access_antenna_control_type2"
                                        name="main_roof_access_antenna_control_type[]"
                                    >
                                        <option value="1">Select</option>
                                        <option value="2" selected>
                                            Locked Door
                                        </option>
                                        <option value="3">Locked Ladder</option>
                                        <option>Existing Barriers</option>
                                        <option value="4">
                                            No Access To Antenna
                                        </option>
                                    </select>
                                </div>

                                <div className="flex flex-col text-xs gap-1 w-1/3">
                                    <p>
                                        <strong>Comment</strong>
                                    </p>
                                    <textarea
                                        className="textarea textarea-bordered textarea-xs height- w-full rounded-none"
                                        id="main_roof_access_antenna_comment2"
                                        name="main_roof_access_antenna_comment[]"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="flex gap-5 mt-2">
                                <div className="flex flex-col gap-1 text-xs w-1/3">
                                    <p>
                                        <strong>Access Photo 2 </strong>
                                        <span className="text-red-600">*</span>
                                    </p>
                                    <input
                                        type="file"
                                        className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                        id="main_roof_access_pre_photo_2"
                                        name="main_roof_access_pre_photo_2"
                                    ></input>
                                    <input
                                        type="datetime-local"
                                        className="input input-bordered input-sm w-full text-xs rounded-none"
                                        id="main_roof_access_pre_photo_2_datepicker"
                                        name="main_roof_access_pre_photo_2_timestamp"
                                    ></input>
                                    <img
                                        src="images/cat.jpg"
                                        id="main_roof_access_pre_photo_2_img"
                                    ></img>
                                </div>
                                <div className="text-xs w-1/3">
                                    <button
                                        className=" pl-3 pr-3 pt-2 pb-2 text-xs text-white bg-blue-950 hidden "
                                        id="main_roof_access_pre_button_show_2"
                                    >
                                        Add Image
                                    </button>
                                    <div className="text-xs flex flex-col gap-1">
                                        <p>
                                            <strong>Addon Photo 2-1 </strong>
                                            <a className="text-blue-600 font-bold">
                                                {" "}
                                                Click to Hide
                                            </a>{" "}
                                        </p>
                                        <input
                                            type="file"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            id="main_roof_access_pre_addon_photo_2"
                                            name="main_roof_access_pre_addon_photo_2"
                                        ></input>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="main_roof_access_pre_addon_photo_2_datepicker"
                                            name="main_roof_access_pre_addon_photo_2_timestamp"
                                        ></input>
                                    </div>
                                </div>

                                <div className=" text-xs w-1/3">
                                    <button
                                        className="hidden pl-3 pr-3 pt-2 pb-2 text-xs text-white bg-blue-950"
                                        id="main_roof_access_pre_second_button_show_2"
                                    >
                                        Add Image
                                    </button>
                                    <div className="text-xs flex flex-col gap-1">
                                        <p>
                                            <strong>Addon Photo 2-2 </strong>
                                            <a className="text-blue-600 font-bold">
                                                {" "}
                                                Click to Hide
                                            </a>
                                        </p>
                                        <input
                                            type="file"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            id="main_roof_access_pre_addon_second_photo_2"
                                            name="main_roof_access_pre_addon_second_photo_2"
                                        ></input>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="main_roof_access_pre_addon_second_photo_2_datepicker"
                                            name="main_roof_access_pre_addon_second_photo_2_timestamp"
                                        ></input>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <hr className="mt-8"></hr>
                        <div>
                            <div className="border-neutral-400 border-2 text-center mt-4 ">
                                <h4 className="text-sky-800 font-bold ">
                                    Existing Signage - Access
                                </h4>
                            </div>
                            <div
                                className="flex gap-4 flex-wrap "
                                style={{ margin: "15px auto" }}
                            >
                                <div className="flex flex-col gap-2 text-xs relative ">
                                    <p>
                                        <strong>
                                            How many Emergency Contact Sign were
                                            existing at access point ?
                                        </strong>
                                        <span className="text-red-600">*</span>
                                    </p>

                                    <select
                                        className="select select-bordered select-sm text-xs m w-full rounded-none"
                                        name="listpicker_97"
                                    >
                                        <option>Selected</option>
                                        {Array.from(Array(51), (e, i) => (
                                            <option>{i}</option>
                                        ))}
                                    </select>

                                    <p className=" text-xs  text-red-500 font-bold">
                                        How many information sign 1 were
                                        existing at access point is required.
                                    </p>
                                </div>

                                <div
                                    className="flex flex-col gap-2 w-96 text-xs "
                                    style={{ width: "418px" }}
                                >
                                    <p>
                                        <strong>
                                            How many Yellow Guidelines Sign (YG)
                                            were existing at access point?
                                        </strong>
                                        <span className="text-red-600">*</span>
                                    </p>

                                    <select
                                        className="select select-bordered select-sm text-xs m w-full rounded-none"
                                        name="listpicker_98"
                                    >
                                        <option>Selected</option>
                                        {Array.from(Array(51), (e, i) => (
                                            <option>{i}</option>
                                        ))}
                                    </select>

                                    <p className=" text-xs  text-red-500 font-bold">
                                        How many information sign 2 were
                                        existing at access point is required.
                                    </p>
                                </div>
                                <div
                                    className="flex flex-col gap-2  text-xs  "
                                    style={{ width: "418px" }}
                                >
                                    <p>
                                        <strong>
                                            How many Blue Notice Sign (BN) were
                                            existing at access point ?
                                        </strong>
                                        <span className="text-red-600">*</span>
                                    </p>

                                    <select
                                        className="select select-bordered select-sm text-xs m w-full rounded-none"
                                        name="listpicker_99"
                                    >
                                        <option>Selected</option>
                                        {Array.from(Array(51), (e, i) => (
                                            <option>{i}</option>
                                        ))}
                                    </select>

                                    <p className=" text-xs  text-red-500 font-bold">
                                        How many notice sign 1 were existing at
                                        access point is required.
                                    </p>
                                </div>
                                <div
                                    className="flex flex-col gap-2  text-xs  "
                                    style={{ width: "410px" }}
                                >
                                    <p>
                                        <strong>
                                            How many Yellow Caution Sign (YC)
                                            were existing at access point ?
                                        </strong>
                                        <span className="text-red-600">*</span>
                                    </p>

                                    <select
                                        className="select select-bordered select-sm text-xs m w-full rounded-none"
                                        name="listpicker_102"
                                    >
                                        <option>Selected</option>
                                        {Array.from(Array(51), (e, i) => (
                                            <option>{i}</option>
                                        ))}
                                    </select>

                                    <p className=" text-xs  text-red-500 font-bold">
                                        How many caution sign 1 were existing at
                                        access point is required.
                                    </p>
                                </div>
                                <div
                                    className="flex flex-col gap-2 text-xs  "
                                    style={{ width: "418px" }}
                                >
                                    <p>
                                        <strong>
                                            How many Orange Warning Sign (OW)
                                            were existing at access point ?
                                        </strong>
                                        <span className="text-red-600">*</span>
                                    </p>

                                    <select
                                        className="select select-bordered select-sm text-xs m w-full rounded-none"
                                        name="listpicker_105"
                                    >
                                        <option>Selected</option>
                                        {Array.from(Array(51), (e, i) => (
                                            <option>{i}</option>
                                        ))}
                                    </select>

                                    <p className=" text-xs  text-red-500 font-bold">
                                        How many Warning 1 were existing at
                                        access point is required.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="text-center mt-7">
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

export default Access;
