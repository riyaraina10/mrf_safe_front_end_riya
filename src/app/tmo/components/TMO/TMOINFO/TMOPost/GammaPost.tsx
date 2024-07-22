import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { TiTick } from "react-icons/ti";
const options = [
    { value: "0", label: "BN" },
    { value: "1", label: "OW" },
    { value: "2", label: "YC" },
    { value: "NA", label: "NA" },
];

const animatedComponents = makeAnimated();
const GammaPost = () => {
    const [Gamma, setGamma] = useState({
        Status: "2",
        Control: "",
    });
    return (
        <>
            <div id="gammaPostPhotos">
                <div className="bg-white p-3 mb-4">
                    <div>
                        <h4 className="text-center">
                            TMO Gamma Sectors Post Photos
                        </h4>
                    </div>
                    <div>
                        <form id="section_21" method="POST">
                            <div className="mt-8 flex text-xs gap-6 mb-4">
                                <div className="flex flex-col gap-3 flex-1">
                                    <div className="flex flex-col gap-1">
                                        <p>
                                            <strong className="text-xs">
                                                Post - TMO Gamma Sector Picture
                                                from front
                                            </strong>
                                            <span className="text-xs text-red-600">
                                                *
                                            </span>
                                        </p>
                                        <input
                                            type="file"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            id="photo_picker_44"
                                            name="photo_picker_44"
                                        ></input>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="photo_picker_44_datepicker"
                                            name="photo_picker_44_timestamp"
                                        ></input>
                                        <img
                                            src="images/cat.jpg"
                                            id="photo_picker_44_img"
                                        ></img>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 flex-1">
                                    <div className="flex flex-col gap-1">
                                        <p>
                                            <strong className="text-xs">
                                                Post - TMO Gamma Sector Picture
                                                from left
                                            </strong>
                                            <span className="text-xs text-red-600">
                                                *
                                            </span>
                                        </p>
                                        <input
                                            type="file"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            id="photo_picker_45"
                                            name="photo_picker_45"
                                        ></input>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="photo_picker_45_datepicker"
                                            name="photo_picker_45_timestamp"
                                        ></input>
                                        <img
                                            src="images/cat.jpg"
                                            id="photo_picker_45_img"
                                        ></img>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 flex-1">
                                    <div className="flex flex-col gap-1">
                                        <p>
                                            <strong className="text-xs">
                                                Post - TMO Gamma Sector Picture
                                                from right
                                            </strong>
                                            <span className="text-xs text-red-600">
                                                *
                                            </span>
                                        </p>
                                        <input
                                            type="file"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            id="photo_picker_46"
                                            name="photo_picker_46"
                                        ></input>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="photo_picker_46_datepicker"
                                            name="photo_picker_46_timestamp"
                                        ></input>
                                        <img
                                            src="images/cat.jpg"
                                            id="photo_picker_46_img"
                                        ></img>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex text-xs gap-6 mb-4">
                                <div className="flex flex-col gap-3 flex-1">
                                    <div className="flex flex-col gap-1">
                                        <p>
                                            <strong className="text-xs">
                                                Post - TMO Gamma Sector Picture
                                                from back
                                            </strong>
                                            <span className="text-xs text-red-600">
                                                *
                                            </span>
                                        </p>
                                        <input
                                            type="file"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            id="photo_picker_47"
                                            name="photo_picker_47"
                                        ></input>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="photo_picker_47_datepicker"
                                            name="photo_picker_47_timestamp"
                                        ></input>
                                        <img
                                            src="images/cat.jpg"
                                            id="photo_picker_47_img"
                                        ></img>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 flex-1">
                                    <div className="flex flex-col gap-1">
                                        <p>
                                            <strong className="text-xs">
                                                Post - TMO Gamma Sector signage
                                                photo
                                            </strong>
                                            <span className="text-xs text-red-600">
                                                *
                                            </span>
                                        </p>
                                        <input
                                            type="file"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            id="photo_picker_48"
                                            name="photo_picker_48"
                                        ></input>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="photo_picker_48_datepicker"
                                            name="photo_picker_48_timestamp"
                                        ></input>
                                        <img
                                            src="images/cat.jpg"
                                            id="photo_picker_48_img"
                                        ></img>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 flex-1">
                                    <div className="flex flex-col gap-1">
                                        <p>
                                            <strong className="text-xs">
                                                Post - TMO Gamma Sector signage
                                                photo - Close-up
                                            </strong>
                                            <span className="text-xs text-red-600">
                                                *
                                            </span>
                                        </p>
                                        <input
                                            type="file"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            id="photo_picker_104"
                                            name="photo_picker_104"
                                        ></input>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="photo_picker_104_datepicker"
                                            name="photo_picker_104_timestamp"
                                        ></input>
                                        <img
                                            src="images/cat.jpg"
                                            id="photo_picker_104_img"
                                        ></img>
                                    </div>
                                </div>
                            </div>
                            <div className="flex mt-2 gap-4">
                                <div className="flex flex-col gap-1 w-1/3">
                                    <p>
                                        <strong className="text-xs">
                                            Picture of Mechanical Equipment
                                            within 15 ft of TMO alpha sector
                                        </strong>
                                        <span className="text-xs text-red-600">
                                            *
                                        </span>
                                    </p>
                                    <input
                                        type="file"
                                        className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                        id="photo_picker_66"
                                        name="photo_picker_66"
                                    ></input>
                                    <div className="text-xs">
                                        <input
                                            type="checkbox"
                                            name="photo_picker_66_checkbox"
                                            id="photo_picker_66_checkbox"
                                        ></input>
                                        <label htmlFor="photo_picker_66_checkbox">
                                            N/A
                                        </label>
                                    </div>

                                    <input
                                        type="datetime-local"
                                        className="input input-bordered input-sm w-full text-xs rounded-none"
                                        id="photo_picker_66_datepicker"
                                        name="photo_picker_66_timestamp"
                                    ></input>
                                    <img
                                        src="images/cat.jpg"
                                        id="photo_picker_66_img"
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
                                            name="gamma_access_antenna_status"
                                            id="gamma_access_antenna_status"
                                            value={Gamma.Status}
                                            onChange={(e) => {
                                                setGamma({
                                                    ...Gamma,
                                                    Status: e.target.value,
                                                });
                                            }}
                                        >
                                            <option value="">Select</option>
                                            <option value="1">
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
                                            name="gamma_access_antenna_comment"
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
                                            name="gamma_access_antenna_control_type"
                                            id="gamma_access_antenna_control_type"
                                            disabled={Gamma.Status === "2"}
                                            value={Gamma.Control}
                                            onChange={(e) => {
                                                setGamma({
                                                    ...Gamma,
                                                    Control: e.target.value,
                                                });
                                            }}
                                        >
                                            <option value="">Select</option>
                                            <option value="1">Barriers</option>
                                            <option value="2">
                                                No access to antennas
                                            </option>
                                            <option value="3">
                                                Side mounted
                                            </option>
                                            <option value="4">
                                                Locked/Concealed FRP
                                            </option>
                                            <option value="5">Other</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-8"></hr>
                            <div>
                                <div className="border-neutral-400 border-2 text-center mt-4 ">
                                    <h4 className="text-sky-800 font-bold ">
                                        Installed Signage - Gamma
                                    </h4>
                                </div>
                                <div
                                    className="flex gap-3 flex-wrap "
                                    style={{ margin: "15px auto" }}
                                >
                                    <div
                                        className="flex flex-col gap-2 text-xs "
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong>
                                                How many Emergency Contact
                                                Sign(EC) were Installed at this
                                                sector?
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <select
                                            className="select select-bordered select-sm text-xs m w-full rounded-none"
                                            name="safety_instruction_gamma"
                                            id="safety_instruction_gamma"
                                        >
                                            <option>Selected</option>
                                            {Array.from(Array(51), (e, i) => (
                                                <option
                                                    value={i}
                                                    selected={i == 0}
                                                >
                                                    {i}
                                                </option>
                                            ))}
                                        </select>

                                        <p className=" text-xs  text-red-500 font-bold">
                                            Safety Instructions is required.
                                        </p>
                                    </div>

                                    <div
                                        className="flex flex-col gap-2 w-96 text-xs "
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong>
                                                How many Yellow Guidelines Sign
                                                (YG) were Installed at this
                                                sector
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <select
                                            className="select select-bordered select-sm text-xs m w-full rounded-none"
                                            name="listpicker_72"
                                            id="listpicker_72"
                                        >
                                            <option>Selected</option>
                                            {Array.from(Array(51), (e, i) => (
                                                <option
                                                    value={i}
                                                    selected={i == 0}
                                                >
                                                    {i}
                                                </option>
                                            ))}
                                        </select>

                                        <p className=" text-xs  text-red-500 font-bold">
                                            Notice sign 2 is required
                                        </p>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2  text-xs  "
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong>
                                                How many Blue Notice Sign (BN)
                                                were Installed at this sector
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <select
                                            className="select select-bordered select-sm text-xs m w-full rounded-none"
                                            name="listpicker_73"
                                        >
                                            <option>Selected</option>
                                            {Array.from(Array(51), (e, i) => (
                                                <option
                                                    value={i}
                                                    selected={i == 0}
                                                >
                                                    {i}
                                                </option>
                                            ))}
                                        </select>

                                        <p className=" text-xs  text-red-500 font-bold">
                                            Caution sign 2 is required.
                                        </p>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2  text-xs  "
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong>
                                                How many Yellow Caution Sign
                                                (YC) were Installed at this
                                                sector
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <select
                                            className="select select-bordered select-sm text-xs m w-full rounded-none"
                                            name="listpicker_74"
                                        >
                                            <option>Selected</option>
                                            {Array.from(Array(51), (e, i) => (
                                                <option
                                                    value={i}
                                                    selected={i == 0}
                                                >
                                                    {i}
                                                </option>
                                            ))}
                                        </select>

                                        <p className=" text-xs  text-red-500 font-bold">
                                            Caution sign 2C is required.
                                        </p>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2 text-xs  "
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong>
                                                How many Orange Warning Sign
                                                (OW) were Installed at this
                                                sector
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <select
                                            className="select select-bordered select-sm text-xs m w-full rounded-none"
                                            name="listpicker_75"
                                        >
                                            <option>Selected</option>
                                            {Array.from(Array(51), (e, i) => (
                                                <option
                                                    value={i}
                                                    selected={i == 0}
                                                >
                                                    {i}
                                                </option>
                                            ))}
                                        </select>

                                        <p className=" text-xs  text-red-500 font-bold">
                                            Caution sign 2B is required.
                                        </p>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2 text-xs  "
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong>
                                                Did you use any pre Installed
                                                signs at this sector?
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <select
                                            className="select select-bordered select-sm text-xs m w-full rounded-none"
                                            name="tri_14"
                                        >
                                            <option>Selected</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No" selected>
                                                No
                                            </option>
                                        </select>

                                        <p className=" text-xs  text-red-500 font-bold">
                                            Pre Installed signs is required.
                                        </p>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2 text-xs  "
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong>
                                                What is the final signage count
                                                at this sector?
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <select
                                            className="select select-bordered select-sm text-xs m w-full rounded-none"
                                            name="lipsticker_93"
                                        >
                                            <option>Selected</option>
                                            {Array.from(Array(51), (e, i) => (
                                                <option
                                                    value={i}
                                                    selected={i == 0}
                                                >
                                                    {i}
                                                </option>
                                            ))}
                                        </select>

                                        <p className=" text-xs  text-red-500 font-bold">
                                            Final signage count is required.
                                        </p>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2 text-xs  "
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong>
                                                Did you use any pre existing
                                                barriers?
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <select
                                            className="select select-bordered select-sm text-xs m w-full rounded-none"
                                            name="tri_31"
                                        >
                                            <option>Selected</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No" selected>
                                                No
                                            </option>
                                        </select>

                                        <p className=" text-xs  text-red-500 font-bold">
                                            Pre existing barriers is required.
                                        </p>
                                    </div>
                                    <div
                                        className="flex flex-col gap-1 text-xs  "
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong>Sign Type</strong>
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
                                                    borderColor: state.isFocused
                                                        ? "#e5e7eb"
                                                        : "#e5e7eb",
                                                }),
                                            }}
                                            name="listpicker_335[]"
                                            value={options[0]}
                                        />
                                        <p className=" text-xs  text-red-500 font-bold">
                                            Sign Type is required
                                        </p>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2 text-xs  "
                                        style={{ width: "835px" }}
                                    >
                                        <p>
                                            <strong>Recommendations</strong>
                                        </p>

                                        <textarea
                                            className="textarea textarea-bordered textarea-xs height- w-full rounded-none "
                                            name="multiline_3"
                                        ></textarea>
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

export default GammaPost;
