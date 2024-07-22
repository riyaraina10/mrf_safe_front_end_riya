import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

const EpsilonPre = () => {
    const [antenna, setantenna] = useState({
        connected: "Yes",
        azimuth: "Yes",
        antenna_number: 2,
    });
    const [barriers, setbarriers] = useState("No");
    return (
        <>
            <div id="gpsEpsilonSection"></div>
            <div id="epsilonPrePhotos">
                <div className="bg-white p-3 mb-4">
                    <div>
                        <h4 className="text-center">
                            TMO Epsilon Sectors Pre Photos
                        </h4>
                    </div>
                    <div>
                        <form id="section_9" method="POST">
                            <div>
                                <div className="mt-6 flex gap-8">
                                    <div className="flex flex-col text-xs w-1/3 gap-1">
                                        <p>
                                            <strong>
                                                Pre - TMO Epsilon Sector Picture
                                                from front
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>
                                        <input
                                            type="file"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            id="photo_picker_6"
                                            name="photo_picker_6"
                                        ></input>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="photo_picker_6_datepicker"
                                            name="photo_picker_6_timestamp"
                                        ></input>
                                        <img
                                            src="images/cat.jpg"
                                            id="photo_picker_6_img"
                                        ></img>
                                    </div>
                                    <div className="flex flex-col gap-1 w-1/3 text-xs">
                                        <p>
                                            <strong>
                                                Pre - TMO Epsilon Sector Picture
                                                from left
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>
                                        <input
                                            type="file"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            id="photo_picker_20"
                                            name="photo_picker_20"
                                        ></input>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="photo_picker_20_datepicker"
                                            name="photo_picker_20_datepicker"
                                        ></input>
                                        <img
                                            src="images/cat.jpg"
                                            id="photo_picker_20_img"
                                        ></img>
                                    </div>
                                    <div className="flex flex-col text-xs w-1/3 gap-1">
                                        <p>
                                            <strong>
                                                Pre - TMO Epsilon Sector Picture
                                                from right
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>
                                        <input
                                            type="file"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            id="photo_picker_21"
                                            name="photo_picker_21"
                                        ></input>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="photo_picker_21_datepicker"
                                            name="photo_picker_21_timestamp"
                                        ></input>
                                        <img
                                            src="images/cat.jpg"
                                            id="photo_picker_21_img"
                                        ></img>
                                    </div>
                                </div>
                                <div className="mt-6 flex gap-8">
                                    <div className="flex flex-col text-xs w-1/3 gap-1">
                                        <p>
                                            <strong>
                                                Pre - TMO Epsilon Sector Picture
                                                from back
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>
                                        <input
                                            type="file"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            id="photo_picker_22"
                                            name="photo_picker_22"
                                        ></input>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="photo_picker_22_datepicker"
                                            name="photo_picker_22_timestamp"
                                        ></input>
                                        <img
                                            src="images/cat.jpg"
                                            id="photo_picker_22_img"
                                        ></img>
                                    </div>
                                    <div className="flex flex-col gap-1 w-1/3 text-xs">
                                        <p>
                                            <strong>
                                                Pre - TMO Epsilon Sector signage
                                                photo
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>
                                        <input
                                            type="file"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            id="photo_picker_26"
                                            name="photo_picker_26"
                                        ></input>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="photo_picker_26_datepicker"
                                            name="photo_picker_26_timestamp"
                                        ></input>
                                        <img
                                            src="images/cat.jpg"
                                            id="photo_picker_26_img"
                                        ></img>
                                    </div>
                                    <div className="flex flex-col text-xs w-1/3 gap-1">
                                        <p>
                                            <strong>
                                                Pre - TMO Epsilon Sector signage
                                                photo - Close-up
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>
                                        <input
                                            type="file"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            id="photo_picker_100"
                                            name="photo_picker_100"
                                        ></input>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="photo_picker_100_datepicker"
                                            name="photo_picker_100_timestamp"
                                        ></input>
                                        <img
                                            src="images/cat.jpg"
                                            id="photo_picker_100_img"
                                        ></img>
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-14"></hr>
                            <div>
                                <div className="border-neutral-400 border-2 text-center mt-4 ">
                                    <h4 className="text-sky-800 font-bold ">
                                        TMO Epsilon - Antenna Array Info
                                    </h4>
                                </div>
                                <div className="flex mt-2 gap-4">
                                    <div className="flex flex-col gap-1 text-xs w-1/3">
                                        <p>
                                            <strong>
                                                Are all Antennas connected?
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <select
                                            className="select select-bordered select-sm text-xs m w-full rounded-none "
                                            name="epsilon_all_antenna"
                                            id="epsilon_all_antenna"
                                            value={antenna.connected}
                                            onChange={(e) => {
                                                setantenna({
                                                    ...antenna,
                                                    connected: e.target.value,
                                                });
                                            }}
                                        >
                                            <option value="">Select</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                        <p className=" text-red-500 text-xs font-bold ">
                                            Are all Antennas connected is
                                            required.
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
                                            name="epsilon_all_antenna_comment"
                                            id="epsilon_all_antenna_comment"
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
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <input
                                            type="file"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            id="epsilon_all_antenna_photo"
                                            name="epsilon_all_antenna_photo"
                                        ></input>
                                        <p className=" text-red-500 text-xs font-bold">
                                            Photo is required.
                                        </p>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="epsilon_all_antenna_photo_datepicker"
                                            name="epsilon_all_antenna_photo_timestamp"
                                        ></input>
                                        <img
                                            src="images/cat.jpg"
                                            id="epsilon_all_antenna_photo_img"
                                        ></img>
                                    </div>
                                </div>
                                <div className="flex mt-2 gap-4">
                                    <div className="flex flex-col gap-1 text-xs w-1/3">
                                        <p>
                                            <strong>
                                                Is Azimuth as per Visio?
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <select
                                            className="select select-bordered select-sm text-xs m w-full rounded-none "
                                            name="epsilon_azimuth"
                                            id="epsilon_azimuth"
                                            value={antenna.azimuth}
                                            onChange={(e) => {
                                                setantenna({
                                                    ...antenna,
                                                    azimuth: e.target.value,
                                                });
                                            }}
                                        >
                                            <option value="">Select</option>
                                            <option value="Yes">Yes</option>
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
                                            name="epsilon_azimuth_comment"
                                            id="epsilon_azimuth_comment"
                                        ></textarea>
                                        <p className=" text-red-500 text-xs font-bold">
                                            Comment is required
                                        </p>
                                    </div>
                                    <div className="w-1/3"></div>
                                </div>
                                <div className="flex mt-2 flex-wrap gap-3">
                                    <div
                                        className="flex flex-col text-xs gap-1"
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong>
                                                How many no. of Antennas
                                                available in array?
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>
                                        <select
                                            className="select select-bordered select-sm text-xs m rounded-none "
                                            name="epsilon_antenna_array"
                                            id="epsilon_antenna_array"
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
                                                    <option value={i + 1}>
                                                        {i + 1}
                                                    </option>
                                                </>
                                            ))}
                                        </select>
                                        <p className=" text-red-500 text-xs font-bold">
                                            Number of Antennas available in
                                            array is required
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
                                                                </p>{" "}
                                                                <input
                                                                    type="number"
                                                                    className="input input-bordered input-sm w-full  rounded-none"
                                                                    name="alpha_antenna_gap[]"
                                                                />
                                                                <p className=" text-red-500 text-xs font-bold">
                                                                    Gap b/w
                                                                    Antenna{" "}
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
                                                Distance between 1st & last
                                                antenna in feet
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>
                                        <input
                                            type="number"
                                            className="input input-bordered input-sm w-full  rounded-none"
                                            name="epsilon_distance_first_last"
                                            id="epsilon_distance_first_last"
                                        />
                                        <p className=" text-red-500 text-xs font-bold">
                                            Distance between 1st & last antenna
                                            is required
                                        </p>
                                    </div>
                                </div>
                                <div className="flex mt-2 gap-4">
                                    <div className="flex flex-col gap-1 w-1/3">
                                        <p>
                                            <strong className="text-xs">
                                                Pre - TMO Epsilon Sector lowest
                                                antenna height verification
                                                picture
                                            </strong>
                                            <span className="text-xs text-red-600">
                                                *
                                            </span>
                                        </p>
                                        <input
                                            type="file"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            id="epsilon_lowest_antenna_pic"
                                            name="epsilon_lowest_antenna_pic"
                                        ></input>
                                        <div className="text-xs">
                                            <input
                                                type="checkbox"
                                                id="epsilon_lowest_antenna_pic_checkbox"
                                                name="epsilon_lowest_antenna_pic_checkbox"
                                            ></input>
                                            <label htmlFor="epsilon_lowest_antenna_pic_checkbox">
                                                N/A
                                            </label>
                                        </div>

                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="epsilon_lowest_antenna_pic_datepicker"
                                            name="epsilon_lowest_antenna_pic_datepicker"
                                        ></input>
                                        <img
                                            src="images/cat.jpg"
                                            id="epsilon_lowest_antenna_pic_img"
                                        ></img>
                                    </div>
                                    <div className="flex flex-col gap-1 w-1/3">
                                        <p>
                                            <strong className="text-xs">
                                                Pre - TMO Epsilon Sector Lowest
                                                Antenna Bottom tip height
                                                (inches)
                                            </strong>
                                            <span className="text-xs text-red-600">
                                                *
                                            </span>
                                        </p>
                                        <input
                                            type="Number"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            name="epsilon_lowest_antenna_height"
                                            id="epsilon_lowest_antenna_height"
                                            value="1"
                                        ></input>
                                        <p className=" text-red-500 text-xs font-bold">
                                            Pre - TMO Epsilon Sector Lowest
                                            Antenna Bottom tip height (inches)
                                            is required
                                        </p>
                                    </div>
                                    <div className="w-1/3"></div>
                                </div>
                            </div>

                            <hr className="mt-8"></hr>
                            <div>
                                <div className="border-neutral-400 border-2 text-center mt-4 ">
                                    <h4 className="text-sky-800 font-bold ">
                                        Existing Signage & Barriers - Epsilon
                                    </h4>
                                </div>
                                <div
                                    className="flex gap-3 flex-wrap "
                                    style={{ margin: "15px auto" }}
                                >
                                    <div
                                        className="flex flex-col gap-2 text-xs relative "
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong>
                                                How many Emergency Contact Sign
                                                (EC) were existing at this
                                                sector?
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <select
                                            className="select select-bordered select-sm text-xs m w-full rounded-none"
                                            name="listpicker_12"
                                            id="listpicker_12"
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
                                            Information sign 1 is required.
                                        </p>
                                    </div>

                                    <div
                                        className="flex flex-col gap-2 w-96 text-xs "
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong>
                                                How many Yellow Guidelines Sign
                                                (YG) were existing at this
                                                sector?
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <select
                                            className="select select-bordered select-sm text-xs m w-full rounded-none"
                                            name="listpicker_54"
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
                                            Information sign 2 is required.
                                        </p>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2  text-xs  "
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong>
                                                How many Blue Notice Sign (BN)
                                                were existing at this sector?
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <select
                                            className="select select-bordered select-sm text-xs m w-full rounded-none"
                                            name="listpicker_14"
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
                                            Notice sign 1 is required.
                                        </p>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2  text-xs  "
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong>
                                                How many Yellow Caution Sign
                                                (YC) were existing at this
                                                sector ?
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <select
                                            className="select select-bordered select-sm text-xs m w-full rounded-none"
                                            name="listpicker_22"
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
                                            Caution sign 1 is required.
                                        </p>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2 text-xs  "
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong>
                                                How many Orange Warning Sign
                                                (OW) were existing at this
                                                sector?
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <select
                                            className="select select-bordered select-sm text-xs m w-full rounded-none"
                                            name="listpicker_25"
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
                                            Warning sign 1 is required.
                                        </p>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2 text-xs  "
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong>
                                                Does this sector has existing
                                                barriers?
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <select
                                            className="select select-bordered select-sm text-xs m w-full rounded-none"
                                            name="tri_27"
                                            id="tri_27"
                                            value={barriers}
                                            onChange={(e) => {
                                                setbarriers(e.target.value);
                                            }}
                                        >
                                            <option value="">Selected</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>

                                        <p className=" text-xs  text-red-500 font-bold">
                                            Existing barriers is required.
                                        </p>
                                    </div>
                                    <div
                                        className={
                                            barriers === "Yes"
                                                ? "flex flex-col gap-2 text-xs  "
                                                : "hidden"
                                        }
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong>
                                                Existing barriers comments?
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <textarea
                                            className="textarea textarea-bordered textarea-xs height- w-full rounded-none "
                                            name="tri_27_comments"
                                            id="tri_27_comments"
                                        ></textarea>
                                        <p className=" text-xs  text-red-500 font-bold">
                                            Existing barriers comment is
                                            required.
                                        </p>
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

export default EpsilonPre;
