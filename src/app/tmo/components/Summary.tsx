import React from "react";
import { TiTick } from "react-icons/ti";

const Summary = () => {
    return (
        <>
            <div className="bg-white p-2 mb-4 ">
                <div>
                    <h4 className="text-center">Summary</h4>
                </div>
                <div>
                    <div className="mt-6 flex text-xs gap-6 mb-4 flex-wrap">
                        <div
                            className="flex flex-col gap-2 text-xs "
                            style={{ width: "410px" }}
                        >
                            <p>
                                <strong>
                                    How many Emergency Contact Sign (EC) were
                                    Installed at this site ?
                                </strong>
                                <span className="text-red-600">*</span>
                            </p>

                            <select
                                className="select select-bordered select-sm text-xs m w-full rounded-none"
                                name="safety_instructions"
                                id="safety_instructions_summary"
                            >
                                <option>Selected</option>
                                {Array.from(Array(51), (e, i) => (
                                    <option value={i} selected={i == 0}>
                                        {i}
                                    </option>
                                ))}
                            </select>

                            <p className=" text-xs  text-red-500 font-bold">
                                Safety Instructions sign is required.
                            </p>
                        </div>
                        <div
                            className="flex flex-col gap-2 text-xs"
                            style={{ width: "410px" }}
                        >
                            <p>
                                <strong>
                                    How many Yellow Guidelines Sign (YG) were
                                    Installed at this site ?
                                </strong>
                                <span className="text-red-600">*</span>
                            </p>

                            <select
                                className="select select-bordered select-sm text-xs m w-full rounded-none"
                                name="listpicker_1"
                                id="listpicker_1_summary"
                                value="0"
                            >
                                <option>Selected</option>
                                {Array.from(Array(51), (e, i) => (
                                    <option value={i}>{i}</option>
                                ))}
                            </select>

                            <p className=" text-xs  text-red-500 font-bold">
                                Notice Sign Type 2 is required.
                            </p>
                        </div>
                        <div
                            className="flex flex-col gap-2 text-xs"
                            style={{ width: "410px" }}
                        >
                            <p>
                                <strong>
                                    How many Blue Notice Sign (BN) were
                                    Installed at this site ?
                                </strong>
                                <span className="text-red-600">*</span>
                            </p>

                            <select
                                className="select select-bordered select-sm text-xs m w-full rounded-none"
                                name="listpicker_292"
                                value="0"
                            >
                                <option value="">Selected</option>
                                {Array.from(Array(51), (e, i) => (
                                    <option value={i}>{i}</option>
                                ))}
                            </select>

                            <p className=" text-xs  text-red-500 font-bold">
                                Caution Sign Type 2 is required.
                            </p>
                        </div>
                        <div
                            className="flex flex-col gap-2 text-xs "
                            style={{ width: "410px" }}
                        >
                            <p>
                                <strong>
                                    How many Yellow Caution Sign (YC) were
                                    Installed at this site ?
                                </strong>
                                <span className="text-red-600">*</span>
                            </p>

                            <select
                                className="select select-bordered select-sm text-xs m w-full rounded-none"
                                name="listpicker_3"
                                value="0"
                            >
                                <option value="">Selected</option>
                                {Array.from(Array(51), (e, i) => (
                                    <option value={i}>{i}</option>
                                ))}
                            </select>

                            <p className=" text-xs  text-red-500 font-bold">
                                Caution Sign Type 2C is required.
                            </p>
                        </div>
                        <div
                            className="flex flex-col gap-2 text-xs "
                            style={{ width: "410px" }}
                        >
                            <p>
                                <strong>
                                    How many Orange Warning Sign (OW) were
                                    Installed at this site ?
                                </strong>
                                <span className="text-red-600">*</span>
                            </p>

                            <select
                                className="select select-bordered select-sm text-xs m w-full rounded-none"
                                name="listpicker_2"
                                value="1"
                            >
                                <option value="">Selected</option>
                                {Array.from(Array(51), (e, i) => (
                                    <option value={i}>{i}</option>
                                ))}
                            </select>

                            <p className=" text-xs  text-red-500 font-bold">
                                Caution sign Type 2B Tower is required.
                            </p>
                        </div>
                        <div
                            className="flex flex-col gap-2 text-xs "
                            style={{ width: "410px" }}
                        >
                            <p>
                                <strong>
                                    How many pre existing signs are left behind
                                    on site ?
                                </strong>
                                <span className="text-red-600">*</span>
                            </p>

                            <select
                                className="select select-bordered select-sm text-xs m w-full rounded-none"
                                name="listpicker_13"
                                value="0"
                            >
                                <option value="">Selected</option>
                                {Array.from(Array(51), (e, i) => (
                                    <option value={i}>{i}</option>
                                ))}
                            </select>

                            <p className=" text-xs  text-red-500 font-bold">
                                Pre existing signs is required
                            </p>
                        </div>
                        <div
                            className="flex flex-col gap-2 text-xs "
                            style={{ width: "410px" }}
                        >
                            <p>
                                <strong>
                                    Does the site need to be revisited to
                                    complete signage installation ?
                                </strong>
                                <span className="text-red-600">*</span>
                            </p>

                            <select
                                className="select select-bordered select-sm text-xs m w-full rounded-none"
                                name="tri_291"
                                value="No"
                            >
                                <option value="">Selected</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>

                            <p className=" text-xs  text-red-500 font-bold">
                                Site need to be revisited to complete signage
                                installation is required.
                            </p>
                        </div>
                        <div
                            className="flex flex-col text-xs gap-3"
                            style={{ width: "410px" }}
                        >
                            <p>
                                <strong>Comment</strong>{" "}
                            </p>

                            <textarea
                                className="textarea textarea-bordered textarea-xs  rounded-none "
                                name="summary_comment"
                                id="summary_comment"
                            ></textarea>
                        </div>{" "}
                        <div
                            className=" flex flex-col gap-2 "
                            style={{ width: "410px" }}
                        >
                            <p className="text-xs">
                                <strong>Trash Signage</strong>
                            </p>
                            <input
                                type="file"
                                className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                id="trash_signage_photo"
                                name="trash_signage_photo"
                            ></input>
                            <input
                                type="datetime-local"
                                className="input input-bordered input-sm w-full text-xs rounded-none"
                                id="trash_signage_photo_datepicker"
                                name="trash_signage_photo_timestamp"
                            ></input>
                            <img
                                src="images/cat.jpg"
                                id="trash_signage_photo_img"
                            ></img>
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
                            <span>Survey updated successfully.</span>
                        </div>

                        <button className="mt-3 pl-3 pr-3 pt-2 pb-2 text-xs text-white bg-blue-950">
                            Save
                        </button>
                    </div>
                </div>
            </div>
            <footer className="footer mt-3 p-3 bg-white text-base-content">
                <div className="flex justify-between w-full text-xs">
                    <div>
                        <strong>Copyright</strong> ©{" "}
                        <strong>2019 - 2024 </strong>
                        <a className="text-blue-500 font-bold">
                            MobileComm.
                        </a>{" "}
                        All rights reserved.
                    </div>
                    <div>
                        <strong>MobileComm</strong> MPE Project Tool
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Summary;
