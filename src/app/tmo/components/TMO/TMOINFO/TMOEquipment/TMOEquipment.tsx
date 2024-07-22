import React from "react";
import { TiTick } from "react-icons/ti";

const TMOEquipment = () => {
    return (
        <>
            <div id="att_sector_equipment">
                <div className="bg-white p-3 mb-4">
                    <div>
                        <h4 className="text-center">TMO Equipment Pre</h4>
                    </div>
                    <div>
                        <form id="tmo_equipment_pre" method="POST">
                            <div className="flex flex-col gap-6 mt-4">
                                <div className="flex gap-8">
                                    <div
                                        className="flex flex-col gap-1"
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong className="text-xs">
                                                Pre TMO Equipment Photo-1
                                            </strong>{" "}
                                            <span className="text-xs text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <input
                                            type="file"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            id="tmo_equipment_pre"
                                            name="equipment_photo_pre_1"
                                        ></input>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="equipment_photo_pre_1_datepicker"
                                            name="equipment_photo_pre_1_timestamp"
                                        ></input>
                                        <img
                                            src="images/cat.jpg"
                                            id="equipment_photo_pre_1_img"
                                        ></img>
                                    </div>
                                    <div
                                        className="flex flex-col gap-1"
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong className="text-xs">
                                                Pre TMO Equipment Photo-2
                                            </strong>{" "}
                                            <span className="text-xs text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <input
                                            type="file"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            id="equipment_photo_pre_2"
                                            name="equipment_photo_pre_2"
                                        ></input>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="equipment_photo_pre_2_datepicker"
                                            name="equipment_photo_pre_2_timestamp"
                                        ></input>
                                        <img
                                            src="images/cat.jpg"
                                            id="equipment_photo_pre_2_img"
                                        ></img>
                                    </div>
                                </div>
                                <div className="flex gap-8">
                                    <div style={{ width: "410px" }}>
                                        <p>
                                            <strong className="text-xs">
                                                Location of TMO Equipment - Q&A
                                            </strong>
                                            <span className="text-xs text-red-600">
                                                *
                                            </span>
                                        </p>
                                        <select
                                            className="select select-bordered select-sm text-xs m w-full rounded-none "
                                            id="equipment_location_pre"
                                            name="equipment_location_pre"
                                        >
                                            <option>Select</option>
                                            <option value="PentHouse">
                                                PentHouse
                                            </option>
                                            <option value="MainRoof" selected>
                                                MainRoof
                                            </option>
                                            <option value="Roof">Roof</option>
                                            <option value="Inside Building">
                                                Inside Building
                                            </option>
                                            <option value="Ground">
                                                Ground
                                            </option>
                                        </select>
                                    </div>
                                    <div style={{ width: "410px" }}>
                                        <p>
                                            <strong className="text-xs">
                                                Location of TMO Equipment -
                                                Comments
                                            </strong>
                                            <span className="text-xs text-red-600">
                                                *
                                            </span>
                                        </p>
                                        <textarea
                                            className="textarea textarea-bordered textarea-xs height- w-full rounded-none"
                                            id="equipment_comment_pre"
                                            name="equipment_comment_pre"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-8"></hr>
                            <div>
                                <div className="border-neutral-400 border-2 text-center mt-4 ">
                                    <h4 className="text-sky-800 font-bold ">
                                        TMO Equipment existing Signage
                                        questionnaire
                                    </h4>
                                </div>{" "}
                                <div
                                    className="flex gap-3 flex-wrap"
                                    style={{ margin: "15px auto" }}
                                >
                                    <div
                                        className="flex flex-col gap-2 text-xs relative "
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong>
                                                How many Emergency Contact Sign
                                                (EC) were existing at access
                                                point ?
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <select
                                            className="select select-bordered select-sm text-xs m w-full rounded-none"
                                            name="tmo_equipment_pre_EC"
                                            id="tmo_equipment_pre_EC"
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
                                            Emergency Contact Sign (EC) is
                                            required.
                                        </p>
                                    </div>

                                    <div
                                        className="flex flex-col gap-2 w-96 text-xs "
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong>
                                                How many Yellow Guidelines Sign
                                                (YG) were existing at access
                                                point?
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <select
                                            className="select select-bordered select-sm text-xs m w-full rounded-none"
                                            name="tmo_equipment_pre_YG"
                                            id="tmo_equipment_pre_YG"
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
                                            Yellow Guidelines Sign (YG) is
                                            required.
                                        </p>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2  text-xs  "
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong>
                                                How many Blue Notice Sign (BN)
                                                were existing at access point ?
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <select
                                            className="select select-bordered select-sm text-xs m w-full rounded-none"
                                            name="tmo_equipment_pre_BN"
                                            id="tmo_equipment_pre_BN"
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
                                            Blue Notice Sign (BN) is required.
                                        </p>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2  text-xs  "
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong>
                                                How many Yellow Caution Sign
                                                (YC) were existing at access
                                                point ?
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <select
                                            className="select select-bordered select-sm text-xs m w-full rounded-none"
                                            name="tmo_equipment_pre_YC"
                                            id="tmo_equipment_pre_YC"
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
                                            Yellow Caution Sign (YC) is
                                            required.
                                        </p>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2 text-xs  "
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong>
                                                How many Orange Warning Sign
                                                (OW) were existing at access
                                                point ?
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <select
                                            className="select select-bordered select-sm text-xs m w-full rounded-none"
                                            name="tmo_equipment_pre_OW"
                                            id="tmo_equipment_pre_OW"
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
                                            Orange Warning Sign (OW) is
                                            required.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-6">
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
                                        <span>
                                            Survey updated successfully.
                                        </span>
                                    </div>

                                    <button className="mt-3 pl-3 pr-3 pt-2 pb-2 text-xs text-white bg-blue-950">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="bg-white p-3 mb-4">
                    <div>
                        <h4 className="text-center">TMO Equipment Post</h4>
                    </div>
                    <div>
                        <form id="tmo_equipment_post" method="POST">
                            <div className="flex flex-col gap-6 mt-4">
                                <div className="flex gap-8">
                                    <div
                                        className="flex flex-col gap-1"
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong className="text-xs">
                                                Post TMO Equipment Photo-1
                                            </strong>{" "}
                                            <span className="text-xs text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <input
                                            type="file"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            id="equipment_photo_post_1"
                                            name="equipment_photo_post_1"
                                        ></input>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="equipment_photo_post_1_datepicker"
                                            name="equipment_photo_post_1_timestamp"
                                        ></input>
                                        <img
                                            src="images/cat.jpg"
                                            id="equipment_photo_post_1_img"
                                        ></img>
                                    </div>
                                    <div
                                        className="flex flex-col gap-1"
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong className="text-xs">
                                                Post TMO Equipment Photo-2
                                            </strong>{" "}
                                            <span className="text-xs text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <input
                                            type="file"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            id="equipment_photo_post_2"
                                            name="equipment_photo_post_2"
                                        ></input>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="equipment_photo_post_2_datepicker"
                                            name="equipment_photo_post_2_timestamp"
                                        ></input>
                                        <img
                                            src="images/cat.jpg"
                                            id="equipment_photo_post_2_img"
                                        ></img>
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-8"></hr>
                            <div>
                                <div className="border-neutral-400 border-2 text-center mt-4 ">
                                    <h4 className="text-sky-800 font-bold ">
                                        TMO Equipment existing Signage
                                        questionnaire
                                    </h4>
                                </div>{" "}
                                <div
                                    className="flex gap-3 flex-wrap"
                                    style={{ margin: "15px auto" }}
                                >
                                    <div
                                        className="flex flex-col gap-2 text-xs relative "
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong>
                                                How many Emergency Contact Sign
                                                (EC) were installed?
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <select
                                            className="select select-bordered select-sm text-xs m w-full rounded-none"
                                            name="tmo_equipment_post_EC"
                                            id="tmo_equipment_post_EC"
                                        >
                                            <option>Selected</option>
                                            {Array.from(Array(51), (e, i) => (
                                                <option>{i}</option>
                                            ))}
                                        </select>

                                        <p className=" text-xs  text-red-500 font-bold">
                                            Emergency Contact Sign (EC) is
                                            required.
                                        </p>
                                    </div>

                                    <div
                                        className="flex flex-col gap-2 w-96 text-xs "
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong>
                                                How many Yellow Guidelines Sign
                                                (YG) were installed ?
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <select
                                            className="select select-bordered select-sm text-xs m w-full rounded-none"
                                            name="tmo_equipment_post_YG"
                                            id="tmo_equipment_post_YG"
                                        >
                                            <option>Selected</option>
                                            {Array.from(Array(51), (e, i) => (
                                                <option>{i}</option>
                                            ))}
                                        </select>

                                        <p className=" text-xs  text-red-500 font-bold">
                                            Yellow Guidelines Sign (YG) is
                                            required.
                                        </p>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2  text-xs  "
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong>
                                                How many Blue Notice Sign (BN)
                                                were installed ?
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <select
                                            className="select select-bordered select-sm text-xs m w-full rounded-none"
                                            name="tmo_equipment_post_BN"
                                            id="tmo_equipment_post_BN"
                                        >
                                            <option>Selected</option>
                                            {Array.from(Array(51), (e, i) => (
                                                <option>{i}</option>
                                            ))}
                                        </select>

                                        <p className=" text-xs  text-red-500 font-bold">
                                            Blue Notice Sign (BN) is required.
                                        </p>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2  text-xs  "
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong>
                                                How many Yellow Caution Sign
                                                (YC) were installed?
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <select
                                            className="select select-bordered select-sm text-xs m w-full rounded-none"
                                            name="tmo_equipment_post_YC"
                                            id="tmo_equipment_post_YC"
                                        >
                                            <option>Selected</option>
                                            {Array.from(Array(51), (e, i) => (
                                                <option>{i}</option>
                                            ))}
                                        </select>

                                        <p className=" text-xs  text-red-500 font-bold">
                                            Yellow Caution Sign (YC) is
                                            required.
                                        </p>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2 text-xs  "
                                        style={{ width: "410px" }}
                                    >
                                        <p>
                                            <strong>
                                                How many Orange Warning Sign
                                                (OW) were installed ?
                                            </strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>

                                        <select
                                            className="select select-bordered select-sm text-xs m w-full rounded-none"
                                            name="tmo_equipment_post_OW"
                                            id="tmo_equipment_post_OW"
                                        >
                                            <option>Selected</option>
                                            {Array.from(Array(51), (e, i) => (
                                                <option>{i}</option>
                                            ))}
                                        </select>

                                        <p className=" text-xs  text-red-500 font-bold">
                                            Orange Warning Sign (OW) is
                                            required.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-6">
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
                                        <span>
                                            Survey updated successfully.
                                        </span>
                                    </div>

                                    <button className="mt-3 pl-3 pr-3 pt-2 pb-2 text-xs text-white bg-blue-950">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TMOEquipment;
