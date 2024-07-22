import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();
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
    },
    {
        name: "info2",
        heading:
            "How many information sign 2 (INFO-2) were existing at this sector",
    },
    {
        name: "bn1",
        heading: "How many notice sign 1 were (BN1) existing at this sector",
    },
    {
        name: "bn2",
        heading: "How many notice sign 2 were (BN2) existing at this sector",
    },
    {
        name: "bn2d",
        heading: "How many notice sign 2 were (BN2D) existing at this sector ",
    },
    {
        name: "yc1",
        heading: "How many caution sign 1 (YC1) were existing at this sector",
    },
    {
        name: "yc2",
        heading: "How many caution sign 2 (YC2) were existing at this sector",
    },
    {
        name: "yc2a",
        heading: "How many caution sign 2A (YC2A) were existing at this sector",
    },
    {
        name: "yc2c",
        heading: "How many caution sign 2C (YC2C) were existing at this sector",
    },
    {
        name: "yc2b",
        heading: "How many caution sign 2B (YC2B) were existing at this sector",
    },
    {
        name: "yc2d",
        heading: "How many caution sign 2D (YC2D) were existing at this sector",
    },
    {
        name: "si",
        heading: "How many caution sign (SI) were existing at this sector",
    },
    {
        name: "rw1",
        heading: "How many warning sign 1 (RW1) were existing at this sector",
    },
    {
        name: "rw1b",
        heading: "How many warning sign 1B (RW1B) were existing at this sector",
    },
    {
        name: "rw2a",
        heading: "How many warning sign 2A (RW2A) were existing at this sector",
    },
    {
        name: "decal_notice",
        heading: "How many (Decal Notice) were existing at this sector",
    },
    {
        name: "decal_caution",
        heading: "How many (Decal Caution) were existing at this sector",
    },
    {
        name: "notice",
        heading: 'How many (Notice 7"x7") were existing at this sector',
    },
    {
        name: "caution",
        heading: 'How many (Caution 7"x7") were existing at this sector',
    },
    {
        name: "rfed",
        heading: "How many (RFED) were existing at this sector",
    },
];

const Photos = () => {
    const [antenna, setantenna] = useState({
        connected: "Yes",
        azimuth: "Yes",
        antenna_number: 1,
    });
    return (
        <>
            <div className="bg-white p-3 mb-4">
                <div>
                    <h4 className="text-center">ATT Beta Sectors Pre Photos</h4>
                </div>
                <div>
                    <form id="section_6" method="POST">
                        <div>
                            <div className="mt-6 flex gap-8">
                                <div className="flex flex-col text-xs w-1/3 gap-1">
                                    <p>
                                        <strong>
                                            Pre - ATT Beta Sector Picture from
                                            front
                                        </strong>
                                        <span className="text-red-600">*</span>
                                    </p>
                                    <input
                                        type="file"
                                        className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                        id="photo_picker_3"
                                        name="photo_picker_3"
                                    ></input>
                                    <input
                                        type="datetime-local"
                                        className="input input-bordered input-sm w-full text-xs rounded-none"
                                        id="photo_picker_3_datepicker"
                                        name="photo_picker_3_timestamp"
                                    ></input>
                                    <img
                                        src="images/cat.jpg"
                                        id="photo_picker_3_img"
                                    ></img>
                                </div>
                                <div className="flex flex-col gap-1 w-1/3 text-xs">
                                    <p>
                                        <strong>
                                            Pre - ATT Beta Sector Picture from
                                            left
                                        </strong>
                                        <span className="text-red-600">*</span>
                                    </p>
                                    <input
                                        type="file"
                                        className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                        id="photo_picker_11"
                                        name="photo_picker_11"
                                    ></input>
                                    <input
                                        type="datetime-local"
                                        className="input input-bordered input-sm w-full text-xs rounded-none"
                                        id="photo_picker_11_datepicker"
                                        name="photo_picker_11_timestamp"
                                    ></input>
                                    <img
                                        src="images/cat.jpg"
                                        id="photo_picker_11_img"
                                    ></img>
                                </div>
                                <div className="flex flex-col text-xs w-1/3 gap-1">
                                    <p>
                                        <strong>
                                            Pre - ATT Beta Sector Picture from
                                            right
                                        </strong>
                                        <span className="text-red-600">*</span>
                                    </p>
                                    <input
                                        type="file"
                                        className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                        id="photo_picker_12"
                                        name="photo_picker_12"
                                    ></input>
                                    <input
                                        type="datetime-local"
                                        className="input input-bordered input-sm w-full text-xs rounded-none"
                                        id="photo_picker_12_datepicker"
                                        name="photo_picker_12_timestamp"
                                    ></input>
                                    <img
                                        src="images/cat.jpg"
                                        id="photo_picker_12_img"
                                    ></img>
                                </div>
                            </div>
                            <div className="mt-6 flex gap-8">
                                <div className="flex flex-col text-xs w-1/3 gap-1">
                                    <p>
                                        <strong>
                                            Pre - ATT Beta Sector Picture from
                                            back
                                        </strong>
                                        <span className="text-red-600">*</span>
                                    </p>
                                    <input
                                        type="file"
                                        className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                        id="photo_picker_13"
                                        name="photo_picker_13"
                                    ></input>
                                    <input
                                        type="datetime-local"
                                        className="input input-bordered input-sm w-full text-xs rounded-none"
                                        id="photo_picker_13_datepicker"
                                        name="photo_picker_13_timestamp"
                                    ></input>
                                    <img
                                        src="images/cat.jpg"
                                        id="photo_picker_13_img"
                                    ></img>
                                </div>
                                <div className="flex flex-col gap-1 w-1/3 text-xs">
                                    <p>
                                        <strong>
                                            Pre - ATT Beta Sector signage photo
                                        </strong>
                                        <span className="text-red-600">*</span>
                                    </p>
                                    <input
                                        type="file"
                                        className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                        id="photo_picker_8"
                                        name="photo_picker_8"
                                    ></input>
                                    <input
                                        type="datetime-local"
                                        className="input input-bordered input-sm w-full text-xs rounded-none"
                                        id="photo_picker_8_datepicker"
                                        name="photo_picker_8_timestamp"
                                    ></input>
                                    <img
                                        src="images/cat.jpg"
                                        id="photo_picker_8_img"
                                    ></img>
                                </div>
                                <div className="flex flex-col text-xs w-1/3 gap-1">
                                    <p>
                                        <strong>
                                            Pre - ATT Beta Sector signage photo
                                            - Close-up
                                        </strong>
                                        <span className="text-red-600">*</span>
                                    </p>
                                    <input
                                        type="file"
                                        className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                        id="photo_picker_97"
                                        name="photo_picker_97"
                                    ></input>
                                    <input
                                        type="datetime-local"
                                        className="input input-bordered input-sm w-full text-xs rounded-none"
                                        id="photo_picker_97_datepicker"
                                        name="photo_picker_97_timestamp"
                                    ></input>
                                    <img
                                        src="images/cat.jpg"
                                        id="photo_picker_97_img"
                                    ></img>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-14"></hr>
                        <div>
                            <div className="border-neutral-400 border-2 text-center mt-4 ">
                                <h4 className="text-sky-800 font-bold ">
                                    AT&T Beta - Antenna Array Info
                                </h4>
                            </div>
                            <div className="flex mt-2 gap-4">
                                <div className="flex flex-col gap-1 text-xs w-1/3">
                                    <p>
                                        <strong>
                                            Are all Antennas connected?
                                        </strong>
                                        <span className="text-red-600">*</span>
                                    </p>

                                    <select
                                        className="select select-bordered select-sm text-xs m w-full rounded-none "
                                        name="beta_all_antenna"
                                        id="beta_all_antenna"
                                        value={antenna.connected}
                                        onChange={(e) => {
                                            setantenna({
                                                ...antenna,
                                                connected: e.target.value,
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
                                        Are all Antennas connected is required.
                                    </p>
                                </div>

                                <div
                                    className={
                                        antenna.connected === "No"
                                            ? "flex flex-col text-xs gap-1 w-1/3"
                                            : "hidden"
                                    }
                                >
                                    <p>
                                        <strong>Comment</strong>
                                    </p>
                                    <textarea
                                        className="textarea textarea-bordered textarea-xs height- w-full rounded-none "
                                        name="beta_all_antenna_comment"
                                        id="beta_all_antenna_comment"
                                    ></textarea>
                                    <p className=" text-red-500 text-xs font-bold">
                                        Comment is required
                                    </p>
                                </div>
                                <div
                                    className={
                                        antenna.connected === "No"
                                            ? "flex flex-col text-xs gap-1 w-1/3"
                                            : "hidden"
                                    }
                                >
                                    <p>
                                        <strong>Antenna Port Photo</strong>
                                        <span className="text-red-600">*</span>
                                    </p>

                                    <input
                                        type="file"
                                        className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                        id="beta_all_antenna_photo"
                                        name="beta_all_antenna_photo"
                                    ></input>
                                    <p className=" text-red-500 text-xs font-bold">
                                        Photo is required.
                                    </p>
                                    <input
                                        type="datetime-local"
                                        className="input input-bordered input-sm w-full text-xs rounded-none"
                                        id="beta_all_antenna_photo_datepicker"
                                        name="beta_all_antenna_photo_timestamp"
                                    ></input>
                                    <img
                                        src="images/cat.jpg"
                                        id="beta_all_antenna_photo_img"
                                    ></img>
                                </div>
                            </div>
                            <div className="flex mt-2 gap-4">
                                <div className="flex flex-col gap-1 text-xs w-1/3">
                                    <p>
                                        <strong>
                                            Is Azimuth as per Visio?
                                        </strong>
                                        <span className="text-red-600">*</span>
                                    </p>

                                    <select
                                        className="select select-bordered select-sm text-xs m w-full rounded-none "
                                        name="beta_azimuth"
                                        id="beta_azimuth"
                                        value={antenna.azimuth}
                                        onChange={(e) => {
                                            setantenna({
                                                ...antenna,
                                                azimuth: e.target.value,
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
                                        Is Azimuth as per Visio is required
                                    </p>
                                </div>
                                <div
                                    className={
                                        antenna.azimuth === "No"
                                            ? "flex flex-col text-xs gap-1 w-1/3"
                                            : "hidden"
                                    }
                                >
                                    <p>
                                        <strong>Comment</strong>
                                    </p>
                                    <textarea
                                        className="textarea textarea-bordered textarea-xs height- w-full rounded-none "
                                        name="beta_azimuth_comment"
                                        id="beta_azimuth_comment"
                                    ></textarea>
                                    <p className=" text-red-500 text-xs font-bold">
                                        Comment is required
                                    </p>
                                </div>
                                <div className="w-1/3"></div>
                            </div>
                            <div className="flex mt-2 flex-wrap gap-4">
                                <div
                                    className="flex flex-col text-xs gap-1"
                                    style={{ width: "410px" }}
                                >
                                    <p>
                                        <strong>
                                            How many no. of Antennas available
                                            in array?
                                        </strong>
                                        <span className="text-red-600">*</span>
                                    </p>
                                    <select
                                        className="select select-bordered select-sm text-xs m rounded-none "
                                        name="beta_antenna_array"
                                        id="beta_antenna_array"
                                        value={antenna.antenna_number}
                                        onChange={(e) => {
                                            setantenna({
                                                ...antenna,
                                                antenna_number: parseInt(
                                                    e.target.value
                                                ),
                                            });
                                        }}
                                    >
                                        <option value="">Select</option>
                                        {Array.from(Array(50), (e, i) => (
                                            <>
                                                <option
                                                    value={i + 1}
                                                    selected={i == 1}
                                                >
                                                    {i + 1}
                                                </option>
                                            </>
                                        ))}
                                    </select>
                                    <p className=" text-red-500 text-xs font-bold">
                                        Number of Antennas available in array is
                                        required
                                    </p>
                                </div>

                                {antenna.antenna_number >= 3 &&
                                    Array.from(
                                        Array(antenna.antenna_number),
                                        (e, i) => (
                                            <>
                                                {i <
                                                    antenna.antenna_number -
                                                        1 && (
                                                    <>
                                                        <div
                                                            className="flex flex-col text-xs gap-1 "
                                                            style={{
                                                                width: "410px",
                                                            }}
                                                        >
                                                            <p>
                                                                <strong>
                                                                    Gap b/w
                                                                    Antenna{" "}
                                                                    {i + 1}&{" "}
                                                                    {i + 2}
                                                                    in feet
                                                                </strong>{" "}
                                                                <span className="text-red-600">
                                                                    *
                                                                </span>{" "}
                                                                <input
                                                                    type="number"
                                                                    className="input input-bordered input-sm w-full  rounded-none"
                                                                    name="alpha_antenna_gap[]"
                                                                />
                                                            </p>{" "}
                                                            <p className=" text-red-500 text-xs font-bold">
                                                                Gap b/w Antenna{" "}
                                                                {i + 1} &{" "}
                                                                {i + 2}
                                                                in feet is
                                                                required
                                                            </p>
                                                        </div>
                                                    </>
                                                )}
                                            </>
                                        )
                                    )}

                                <div
                                    className="flex flex-col text-xs gap-1"
                                    style={{ width: "410px" }}
                                >
                                    <p>
                                        <strong>
                                            Distance between 1st & last antenna
                                            in feet
                                        </strong>
                                        <span className="text-red-600">*</span>
                                    </p>
                                    <input
                                        type="number"
                                        className="input input-bordered input-sm w-full  rounded-none"
                                        name="beta_distance_first_last"
                                        id="beta_distance_first_last"
                                    />
                                    <p className=" text-red-500 text-xs font-bold">
                                        Distance between 1st & last antenna is
                                        required
                                    </p>
                                </div>
                            </div>
                            <div className="flex mt-2 gap-4">
                                <div className="flex flex-col gap-1 w-1/3">
                                    <p>
                                        <strong className="text-xs">
                                            Pre - ATT Beta Sector lowest antenna
                                            height verification picture
                                        </strong>
                                        <span className="text-xs text-red-600">
                                            *
                                        </span>
                                    </p>
                                    <input
                                        type="file"
                                        className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                        id="beta_lowest_antenna_pic"
                                        name="beta_lowest_antenna_pic"
                                    ></input>
                                    <div className="text-xs">
                                        <input
                                            type="checkbox"
                                            id="beta_lowest_antenna_pic_checkbox"
                                            name="beta_lowest_antenna_pic_checkbox"
                                        ></input>
                                        <label htmlFor="beta_lowest_antenna_pic_checkbox">
                                            N/A
                                        </label>
                                    </div>

                                    <input
                                        type="datetime-local"
                                        className="input input-bordered input-sm w-full text-xs rounded-none"
                                        id="beta_lowest_antenna_pic_datepicker"
                                        name="beta_lowest_antenna_pic_datepicker"
                                    ></input>
                                    <img
                                        src="images/cat.jpg"
                                        id="beta_lowest_antenna_pic_img"
                                    ></img>
                                </div>
                                <div className="flex flex-col gap-1 w-1/3">
                                    <p>
                                        <strong className="text-xs">
                                            Pre - ATT Beta Sector Lowest Antenna
                                            Bottom tip height (inches)
                                        </strong>
                                        <span className="text-xs text-red-600">
                                            *
                                        </span>
                                    </p>
                                    <input
                                        type="Number"
                                        className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                        name="beta_lowest_antenna_height"
                                        id="beta_lowest_antenna_height"
                                        value="1"
                                    ></input>
                                    <p className=" text-red-500 text-xs font-bold">
                                        Pre - ATT Beta Sector Lowest Antenna
                                        Bottom tip height (inches) is required
                                    </p>
                                </div>
                                <div className="w-1/3"></div>
                            </div>
                        </div>

                        <hr className="mt-8"></hr>
                        <div>
                            <div className="border-neutral-400 border-2 text-center mt-4 ">
                                <h4 className="text-sky-800 font-bold ">
                                    Existing Signage & Barriers - Beta
                                </h4>
                            </div>
                            <div className="flex m-5 gap-6 flex-wrap">
                                <div className="flex flex-col gap-3 w-96 text-xs relative ">
                                    <p className="mt-2">
                                        <strong>
                                            Select Existing Signage Type ?
                                        </strong>
                                        <span className="text-xs text-red-600">
                                            *
                                        </span>
                                    </p>

                                    <Select
                                        name="parameters_pre_beta[]"
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
                                    />
                                </div>
                                {headings.map((e, i) => (
                                    <>
                                        <div id={`beta_pre_${e.name}`}>
                                            <div className="flex flex-col text-xs gap-2 flex-grow w-96">
                                                <p>
                                                    <strong>{e.heading}</strong>
                                                    <span className="text-red-600">
                                                        *
                                                    </span>
                                                </p>
                                                <select
                                                    className="select select-bordered select-sm text-xs m w-full rounded-none "
                                                    id={`${e.name}_pre_beta`}
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
                        <p className=" text-red-500 text-xs font-bold mt-2">
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

export default Photos;
