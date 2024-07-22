import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { TiTick } from "react-icons/ti";
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
            "How many information sign 1 (INFO-1) did I install at this sector ",
    },
    {
        name: "info2",
        heading:
            "How many information sign 2 (INFO-2) did I install at this sector",
    },
    {
        name: "bn1",
        heading: "How many notice sign 1(BN1) were installed at this sector",
    },
    {
        name: "bn2",
        heading: "How many notice sign 2 (BN2) were installed at this sector ",
    },
    {
        name: "bn2d",
        heading: "How many notice sign 2 were (BN2D) installed at this sector ",
    },
    {
        name: "yc1",
        heading: "How many caution sign 1 (YC1) were installed at this sector",
    },
    {
        name: "yc2",
        heading: "How many caution sign 2 (YC2) were installed at this sector",
    },
    {
        name: "yc2a",
        heading:
            "How many caution sign 2A (YC2A) were installed at this sector",
    },
    {
        name: "yc2c",
        heading:
            "How many caution sign 2C (YC2C) were installed at this sector",
    },
    {
        name: "yc2b",
        heading:
            "How many caution sign 2B (YC2B) were installed at this sector",
    },
    {
        name: "yc2d",
        heading:
            "How many caution sign 2D (YC2D) were installed at this sector",
    },
    {
        name: "si",
        heading: "How many caution sign (SI) were installed at this sector",
    },
    {
        name: "rw1",
        heading: "How many warning sign 1 (RW1) were installed at this sector",
    },
    {
        name: "rw1b",
        heading:
            "How many warning sign 1B (RW1B) were installed at this sector",
    },
    {
        name: "rw2a",
        heading:
            "How many warning sign 2A (RW2A) were installed at this sector",
    },
    {
        name: "decal_notice",
        heading: "How many (Decal Notice) were installed at this sector",
    },
    {
        name: "decal_caution",
        heading: "How many (Decal Caution) were installed at this sector",
    },
    {
        name: "notice",
        heading: 'How many (Notice 7"x7") were installed at this sector',
    },
    {
        name: "caution",
        heading: 'How many (Caution 7"x7") were installed at this sector',
    },
    {
        name: "rfed",
        heading: "How many (RFED) were installed at this sector",
    },
];
const removed = [
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
    { value: "rfed", label: "RFED" },
    { value: "caution", label: 'Caution 7"x7"' },
    { value: "notice", label: 'Notice 7"x7"' },
];
const removeHeadings = [
    {
        name: "info1",
        heading:
            "How many information sign 1 (INFO-1) did I remove at this sector ",
    },
    {
        name: "info2",
        heading:
            "How many information sign 2 (INFO-2) did I remove at this sector",
    },
    {
        name: "bn1",
        heading: "How many notice sign 1(BN1) were removed at this sector",
    },
    {
        name: "bn2",
        heading: "How many notice sign 2 (BN2) were removed at this sector ",
    },
    {
        name: "bn2d",
        heading: "How many notice sign 2 were (BN2D) removed at this sector ",
    },
    {
        name: "yc1",
        heading: "How many caution sign 1 (YC1) were removed at this sector",
    },
    {
        name: "yc2",
        heading: "How many caution sign 2 (YC2) were removed at this sector",
    },
    {
        name: "yc2a",
        heading: "How many caution sign 2A (YC2A) were removed at this sector",
    },
    {
        name: "yc2c",
        heading: "How many caution sign 2C (YC2C) were removed at this sector",
    },
    {
        name: "yc2b",
        heading: "How many caution sign 2B (YC2B) were removed at this sector",
    },
    {
        name: "yc2d",
        heading: "How many caution sign 2D (YC2D) were removed at this sector",
    },
    {
        name: "si",
        heading: "How many caution sign (SI) were removed at this sector",
    },
    {
        name: "rw1",
        heading: "How many warning sign 1 (RW1) were removed at this sector",
    },
    {
        name: "rw1b",
        heading: "How many warning sign 1B (RW1B) were removed at this sector",
    },
    {
        name: "rw2a",
        heading: "How many warning sign 2A (RW2A) were removed at this sector",
    },
    {
        name: "decal_notice",
        heading: "How many (Decal Notice) were removed at this sector",
    },
    {
        name: "decal_caution",
        heading: "How many (Decal Caution) were removed at this sector",
    },
    {
        name: "notice",
        heading: 'How many (Notice 7"x7") were removed at this sector',
    },
    {
        name: "caution",
        heading: 'How many (Caution 7"x7") were removed at this sector',
    },
    {
        name: "rfed",
        heading: "How many (RFED) were removed at this sector",
    },
];
const animatedComponents = makeAnimated();
const BetaPost = () => {
    const [status, setstatus] = useState(1);
    return (
        <>
            <div id="betaPostPhotos">
                <div className="bg-white p-3 mb-4">
                    <div>
                        <h4 className="text-center">
                            ATT Beta Sectors Post Photos
                        </h4>
                    </div>
                    <div>
                        <form id="section_20" method="POST">
                            <div className="mt-8 flex text-xs gap-6 mb-4">
                                <div className="flex flex-col gap-3 flex-1">
                                    <div className="flex flex-col gap-1">
                                        <p>
                                            <strong className="text-xs">
                                                Post - ATT Beta Sector Picture
                                                from front
                                            </strong>
                                            <span className="text-xs text-red-600">
                                                *
                                            </span>
                                        </p>
                                        <input
                                            type="file"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            id="photo_picker_38"
                                            name="photo_picker_38"
                                        ></input>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="photo_picker_38_datepicker"
                                            name="photo_picker_38_timestamp"
                                        ></input>
                                        <img
                                            src="images/cat.jpg"
                                            id="photo_picker_38_img"
                                        ></img>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 flex-1">
                                    <div className="flex flex-col gap-1">
                                        <p>
                                            <strong className="text-xs">
                                                Post - ATT Beta Sector Picture
                                                from left
                                            </strong>
                                            <span className="text-xs text-red-600">
                                                *
                                            </span>
                                        </p>
                                        <input
                                            type="file"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            id="photo_picker_39"
                                            name="photo_picker_39"
                                        ></input>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="photo_picker_39_datepicker"
                                            name="photo_picker_39_timestamp"
                                        ></input>
                                        <img
                                            src="images/cat.jpg"
                                            id="photo_picker_39_img"
                                        ></img>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 flex-1">
                                    <div className="flex flex-col gap-1">
                                        <p>
                                            <strong className="text-xs">
                                                Post - ATT Beta Sector Picture
                                                from right
                                            </strong>
                                            <span className="text-xs text-red-600">
                                                *
                                            </span>
                                        </p>
                                        <input
                                            type="file"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            id="photo_picker_40"
                                            name="photo_picker_40"
                                        ></input>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="photo_picker_40_datepicker"
                                            name="photo_picker_40_timestamp"
                                        ></input>
                                        <img
                                            src="images/cat.jpg"
                                            id="photo_picker_40_img"
                                        ></img>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex text-xs gap-6 mb-4">
                                <div className="flex flex-col gap-3 flex-1">
                                    <div className="flex flex-col gap-1">
                                        <p>
                                            <strong className="text-xs">
                                                Post - ATT Beta Sector Picture
                                                from back
                                            </strong>
                                            <span className="text-xs text-red-600">
                                                *
                                            </span>
                                        </p>
                                        <input
                                            type="file"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            id="photo_picker_42"
                                            name="photo_picker_42"
                                        ></input>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="photo_picker_42_datepicker"
                                            name="photo_picker_42_timestamp"
                                        ></input>
                                        <img
                                            src="images/cat.jpg"
                                            id="photo_picker_42_img"
                                        ></img>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 flex-1">
                                    <div className="flex flex-col gap-1">
                                        <p>
                                            <strong className="text-xs">
                                                Post - ATT Beta Sector signage
                                                photo
                                            </strong>
                                            <span className="text-xs text-red-600">
                                                *
                                            </span>
                                        </p>
                                        <input
                                            type="file"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            id="photo_picker_43"
                                            name="photo_picker_43"
                                        ></input>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="photo_picker_43_datepicker"
                                            name="photo_picker_43_timestamp"
                                        ></input>
                                        <img
                                            src="images/cat.jpg"
                                            id="photo_picker_43_img"
                                        ></img>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 flex-1">
                                    <div className="flex flex-col gap-1">
                                        <p>
                                            <strong className="text-xs">
                                                Post - ATT Beta Sector signage
                                                photo - Close-up
                                            </strong>
                                            <span className="text-xs text-red-600">
                                                *
                                            </span>
                                        </p>
                                        <input
                                            type="file"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            id="photo_picker_103"
                                            name="photo_picker_103"
                                        ></input>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="photo_picker_103_datepicker"
                                            name="photo_picker_103_timestamp"
                                        ></input>
                                        <img
                                            src="images/cat.jpg"
                                            id="photo_picker_103_img"
                                        ></img>
                                    </div>
                                </div>
                            </div>
                            <div className="flex mt-2 gap-4">
                                <div className="flex flex-col gap-1 w-1/3">
                                    <p>
                                        <strong className="text-xs">
                                            Picture of HVAC vents within 15 ft
                                            of ATT Beta sector
                                        </strong>
                                        <span className="text-xs text-red-600">
                                            *
                                        </span>
                                    </p>
                                    <input
                                        type="file"
                                        className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                        id="photo_picker_65"
                                        name="photo_picker_65"
                                    ></input>
                                    <div className="text-xs">
                                        <input
                                            type="checkbox"
                                            name="photo_picker_65_checkbox"
                                            id="photo_picker_65_checkbox"
                                        ></input>
                                        <label htmlFor="photo_picker_65_checkbox">
                                            N/A
                                        </label>
                                    </div>

                                    <input
                                        type="datetime-local"
                                        className="input input-bordered input-sm w-full text-xs rounded-none"
                                        id="photo_picker_65_datepicker"
                                        name="photo_picker_65_timestamp"
                                    ></input>
                                    <img
                                        src="images/cat.jpg"
                                        id="photo_picker_65_img"
                                    ></img>
                                </div>
                                <div className="flex flex-col gap-3 w-1/3 text-xs mt-2">
                                    <div className="flex flex-col gap-1 ">
                                        <p>
                                            <strong>
                                                Access To Antenna : Status
                                            </strong>
                                            <span className="text-xs text-red-600">
                                                *
                                            </span>
                                        </p>
                                        <select
                                            className="select select-bordered select-sm text-xs m w-full rounded-none "
                                            name="beta_access_antenna_status"
                                            id="beta_access_antenna_status"
                                            value={status}
                                            onChange={(e) => {
                                                setstatus(
                                                    parseInt(e.target.value)
                                                );
                                            }}
                                        >
                                            <option value="">Select</option>
                                            <option value="1" selected>
                                                Restricted
                                            </option>
                                            <option value="2">
                                                Non-Restricted
                                            </option>
                                        </select>
                                        <p className=" text-red-500 text-xs font-bold">
                                            Status is required.
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-1 text-xs">
                                        <p>
                                            <strong>Comment</strong>
                                        </p>
                                        <textarea
                                            className="textarea textarea-bordered textarea-xs height- w-full rounded-none "
                                            name="beta_access_antenna_comment"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 w-1/3 text-xs mt-2">
                                    <div className="flex flex-col gap-1 ">
                                        <p>
                                            <strong>Access Control Type</strong>
                                        </p>
                                        <select
                                            className="select select-bordered select-sm text-xs m w-full rounded-none "
                                            disabled={
                                                status === 2 ? true : false
                                            }
                                            name="beta_access_antenna_control_type"
                                            id="beta_access_antenna_control_type"
                                        >
                                            <option>Select</option>
                                            <option value="1">
                                                Locked Door
                                            </option>
                                            <option value="2" selected>
                                                Locked Ladder
                                            </option>
                                            <option value="3">
                                                Existing Barriers
                                            </option>
                                            <option value="4">
                                                No Access to Antenna
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-8"></hr>
                            <div>
                                <div className="border-neutral-400 border-2 text-center mt-4 ">
                                    <h4 className="text-sky-800 font-bold ">
                                        Installed Signage & Barrier - Beta
                                    </h4>
                                </div>
                                <div className="flex m-5 gap-6 flex-wrap">
                                    <div className="flex flex-col gap-2 w-96 text-xs relative ">
                                        <p>
                                            <strong>
                                                Select Installed Signage Type ?
                                            </strong>
                                        </p>
                                        <Select
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            isMulti
                                            options={options}
                                            styles={{
                                                control: (
                                                    baseStyles,
                                                    state
                                                ) => ({
                                                    ...baseStyles,
                                                    borderRadius: "0",
                                                    height: "100%",
                                                    borderColor: state.isFocused
                                                        ? "#e5e7eb"
                                                        : "#e5e7eb",
                                                }),
                                            }}
                                            name="parameters_post_beta[]"
                                        />
                                    </div>
                                    {headings.map((e, i) => (
                                        <>
                                            <div id={`beta_post_${e.name}`}>
                                                <div className="flex flex-col text-xs gap-2 flex-grow w-96">
                                                    <p>
                                                        <strong>
                                                            {e.heading}
                                                        </strong>
                                                        <span className="text-red-600">
                                                            *
                                                        </span>
                                                    </p>
                                                    <select
                                                        className="select select-bordered select-sm text-xs m w-full rounded-none "
                                                        id={`${e.name}_post_beta`}
                                                        name={e.name}
                                                    >
                                                        <option>Select</option>
                                                        {Array.from(
                                                            Array(51),
                                                            (e, i) => (
                                                                <>
                                                                    <option
                                                                        selected={
                                                                            i ==
                                                                            0
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
                                <hr className="mt-8"></hr>
                                <div className="border-neutral-400 border-2 text-center mt-4 ">
                                    <h4 className="text-sky-800 font-bold ">
                                        Removed Signage - Beta
                                    </h4>
                                </div>
                                <div className="flex m-5 gap-6 flex-wrap">
                                    <div className="flex flex-col gap-2 w-96 text-xs relative ">
                                        <p>
                                            <strong>
                                                Select Signage to Remove ?
                                            </strong>
                                        </p>
                                        <Select
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            isMulti
                                            options={removed}
                                            styles={{
                                                control: (
                                                    baseStyles,
                                                    state
                                                ) => ({
                                                    ...baseStyles,
                                                    borderRadius: "0",
                                                    height: "100%",
                                                    borderColor: state.isFocused
                                                        ? "#e5e7eb"
                                                        : "#e5e7eb",
                                                }),
                                            }}
                                            name="parameters_remove_beta[]"
                                            id="parameters_remove_beta"
                                        />
                                    </div>
                                    {removeHeadings.map((e, i) => (
                                        <>
                                            <div id={`beta_remove_${e.name}`}>
                                                <div className="flex flex-col text-xs gap-2 flex-grow w-96">
                                                    <p>
                                                        <strong>
                                                            {e.heading}
                                                        </strong>
                                                        <span className="text-red-600">
                                                            *
                                                        </span>
                                                    </p>
                                                    <select
                                                        className="select select-bordered select-sm text-xs m w-full rounded-none "
                                                        id={`remove_${e.name}_beta`}
                                                        name={`remove_${e.name}`}
                                                    >
                                                        <option>Select</option>
                                                        {Array.from(
                                                            Array(51),
                                                            (e, i) => (
                                                                <>
                                                                    <option
                                                                        selected={
                                                                            i ==
                                                                            0
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
                                <hr className="mt-8"></hr>
                                <div className="m-5">
                                    <div className="flex gap-6">
                                        <div className="flex text-xs w-96 flex-col">
                                            <p>
                                                <strong>
                                                    Final Existing Sign Type
                                                </strong>
                                                <span className="text-red-600">
                                                    *
                                                </span>
                                            </p>
                                            <Select
                                                closeMenuOnSelect={false}
                                                components={animatedComponents}
                                                isMulti
                                                options={options}
                                                styles={{
                                                    control: (
                                                        baseStyles,
                                                        state
                                                    ) => ({
                                                        ...baseStyles,
                                                        borderRadius: "0",
                                                        height: "100%",
                                                        borderColor:
                                                            state.isFocused
                                                                ? "#e5e7eb"
                                                                : "#e5e7eb",
                                                    }),
                                                }}
                                                name="final_beta[]"
                                            />
                                        </div>
                                        <div className="flex text-xs w-96 flex-col gap-1">
                                            <p>
                                                <strong>
                                                    What is the final signage
                                                    count at this sector?
                                                </strong>
                                                <span className="text-red-600">
                                                    *
                                                </span>
                                            </p>
                                            <select
                                                className="select select-bordered text-xs w-96 select-sm m rounded-none "
                                                disabled
                                                name="lipsticker_91"
                                                id="summaryBeta"
                                            >
                                                <option value="0" selected>
                                                    0
                                                </option>
                                            </select>
                                        </div>
                                    </div>
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
            </div>
        </>
    );
};

export default BetaPost;
