import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { ImPlus } from "react-icons/im";

const animatedComponents = makeAnimated();
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
    const [multiple, setMultiple] = useState("");
    const [accesspoints, setaccesspoints] = useState(0);
    const [first, setFirst] = useState<FirstState>({});
    const [Control, setControl] = useState<ControlState>({});
    const [ImageUpload, setImageUpload] = useState<ImageUpload>({});
    const options = [
        { value: "info1", label: "INFO-1" },
        { value: "info2", label: "INFO-2" },
        { value: "bn1", label: "BN1" },
        { value: "bn2", label: "BN2" },
        { value: "bn2d", label: "BN2D" },
        { value: "yc1", label: "YC1" },
        { value: "yc2", label: "YC2" },
        { value: "yc2a", label: "YC2A" },
        { value: "yc2c", label: "YC2C" },
        { value: "yc2d", label: "YC2D" },
        { value: "yc2b", label: "YC2B" },
        { value: "si", label: "SI" },
        { value: "rw1b", label: "RW1B" },
        { value: "rw1", label: "RW1" },
        { value: "rw2a", label: "RW2A" },
        { value: "decal_notice", label: "Decal Notice" },
        { value: "decal_caution", label: "Decal Caution" },
        { value: "rfed", label: "REFD" },
        { value: "caution", label: 'Caution 7"x7"' },
        { value: "notice", label: 'Notice 7"x7"' },
    ];
    const headings = [
        {
            name: "info1",
            heading:
                "How many information sign 1 (INFO-1) were existing at this sector",
            show: false,
        },
        {
            name: "info2",
            heading:
                "How many information sign 2 (INFO-2) were existing at this sector",
            show: false,
        },
        {
            name: "bn1",
            heading:
                "How many notice sign 1 were (BN1) existing at this sector",
            show: false,
        },
        {
            name: "bn2",
            heading:
                "How many notice sign 2 were (BN2) existing at this sector",
            show: false,
        },
        {
            name: "bn2d",
            heading:
                "How many notice sign 2 were (BN2D) existing at this sector ",
            show: false,
        },
        {
            name: "yc1",
            heading:
                "How many caution sign 1 (YC1) were existing at this sector",
            show: false,
        },
        {
            name: "yc2",
            heading:
                "How many caution sign 2 (YC2) were existing at this sector",
            show: false,
        },
        {
            name: "yc2a",
            heading:
                "How many caution sign 2A (YC2A) were existing at this sector",
            show: false,
        },
        {
            name: "yc2c",
            heading:
                "How many caution sign 2C (YC2C) were existing at this sector",
            show: false,
        },
        {
            name: "yc2b",
            heading:
                "How many caution sign 2B (YC2B) were existing at this sector",
            show: false,
        },
        {
            name: "yc2d",
            heading:
                "How many caution sign 2D (YC2D) were existing at this sector",
            show: false,
        },
        {
            name: "si",
            heading: "How many caution sign (SI) were existing at this sector",
            show: false,
        },
        {
            name: "rw1",
            heading:
                "How many warning sign 1 (RW1) were existing at this sector",
            show: false,
        },
        {
            name: "rw1b",
            heading:
                "How many warning sign 1B (RW1B) were existing at this sector",
            show: false,
        },
        {
            name: "rw2a",
            heading:
                "How many warning sign 2A (RW2A) were existing at this sector",
            show: false,
        },
        {
            name: "decal_notice",
            heading: "How many (Decal Notice) were existing at this sector",
            show: false,
        },
        {
            name: "decal_caution",
            heading: "How many (Decal Caution) were existing at this sector",
            show: false,
        },
        {
            name: "notice",
            heading: 'How many (Notice 7"x7") were existing at this sector',
            show: false,
        },
        {
            name: "caution",
            heading: 'How many (Caution 7"x7") were existing at this sector',
            show: false,
        },
        {
            name: "rfed",
            heading: "How many (RFED) were existing at this sector",
            show: false,
        },
    ];
    const handleaccess = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMultiple(e.target.value);
        e.target.value === "Yes" ? setaccesspoints(1) : setaccesspoints(0);
    };
    const handleChange = (
        e: React.ChangeEvent<HTMLSelectElement>,
        i: number
    ) => {
        setFirst({
            ...first,
            [i]: e.target.value,
        });
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

    // interface OptionType {
    //     value: string;
    //     label: string;
    // }

    // const handleSelectChange = (e: props) => {
    //     e.map((elem: OptionType) => {
    //         headings.map((el) => {
    //             if (elem.value === el.name) {
    //                 el.show = true;
    //             }
    //         });
    //     });
    // };
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
                                                value={first[i] || "1"}
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
                                                disabled={first[i] == "2"}
                                                name="main_roof_access_antenna_control_type[]"
                                                id={`main_roof_access_antenna_control_type${
                                                    i + 1
                                                }`}
                                                value={Control[i] || "2"}
                                                onChange={(e) =>
                                                    handleControl(e, i)
                                                }
                                            >
                                                <option value="0">
                                                    Select
                                                </option>
                                                <option value="1">
                                                    Locked Door
                                                </option>
                                                <option value="2">
                                                    Locked Ladder
                                                </option>
                                                <option value="3">
                                                    Existing Barriers
                                                </option>
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
                            <div className="flex m-5 gap-8 flex-wrap">
                                <div className="flex flex-col gap-2 w-96 text-xs relative ">
                                    <p>
                                        <strong>
                                            Select Existing Signange Type
                                        </strong>
                                    </p>
                                    <Select
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        isMulti
                                        options={options}
                                        styles={{
                                            control: (baseStyles, state) => ({
                                                ...baseStyles,
                                                borderRadius: "0",
                                                height: "100%",
                                                borderColor: state.isFocused
                                                    ? "#e5e7eb"
                                                    : "#e5e7eb",
                                            }),
                                        }}
                                        name="parameters_pre_building[]"
                                        // onChange={handleSelectChange}
                                    />{" "}
                                    <p className=" text-xs  text-red-500 font-bold">
                                        Please select Existing Signange Type
                                    </p>
                                </div>
                                {headings.map((e, i) => (
                                    <>
                                        <div id={`building_pre_${e.name}`}>
                                            <div className="flex flex-col text-xs gap-2 flex-grow w-96">
                                                <p>
                                                    <strong>{e.heading}</strong>
                                                    <span className="text-red-600">
                                                        *
                                                    </span>
                                                </p>
                                                <select
                                                    className="select select-bordered select-sm text-xs m w-full rounded-none "
                                                    id={`${e.name}_pre_building`}
                                                    name={e.name}
                                                >
                                                    <option>Select</option>
                                                    {Array.from(
                                                        Array(51),
                                                        (e, i) => (
                                                            <>
                                                                <option
                                                                    selected={
                                                                        i == 0
                                                                    }
                                                                >
                                                                    {i}
                                                                </option>
                                                            </>
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                    </>
                                ))}
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
