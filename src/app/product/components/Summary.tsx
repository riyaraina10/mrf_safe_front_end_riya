import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

const Summary = () => {
    const headings = [
        { label: "Information Sign 1", id: "info1_summary" },
        { label: "Information Sign 2 ", id: "info2_summary" },
        { label: "Notice Sign 1 ", id: "bn1_summary" },
        { label: "Notice Sign 2", id: "listpicker_1" },
        { label: "Notice Sign 2D", id: "bn2d_summary" },
        { label: "Caution Sign 1", id: "yc1_summary" },
        { label: "Caution Sign 2", id: "listpicker_292" },
        { label: "Caution Sign 2A", id: "yc2a_summary" },
        { label: "Caution Sign 2C", id: "listpicker_3" },
        { label: "Caution Sign 2B", id: "listpicker_2" },
        { label: "Caution Sign 2D", id: "yc2d_summary" },
        { label: "Safety Instructions", id: "si_summary" },
        { label: "Warning sign 1", id: "rw1_summary" },
        { label: "Warning sign 1B", id: "listpicker_4" },
        { label: "Warning sign 2A", id: "rw2a_summary" },
        { label: "Decal Notice", id: "decal_notice_summary" },
        { label: "Decal Caution", id: "decal_caution_summary" },
        { label: 'Notice 7"x7"', id: "notice_summary" },
        { label: 'Caution 7"x7"', id: "caution_summary" },
        { label: "RFED", id: "rfed_summary" },
    ];
    const [pre, setpre] = useState(4);
    const [revisited, setrevisited] = useState("Yes");
    const [mandatory, setmandatory] = useState({
        preMandatory: false,
        revisitedMandatory: false,
        save: true,
    });
    const [isclicked, setisclicked] = useState(false);
    const handleSave = () => {
        setisclicked(true);
        setmandatory({
            preMandatory: pre === 0,
            revisitedMandatory: revisited === "",
            save: pre !== 0 && revisited !== "",
        });
    };

    return (
        <>
            <div className="bg-white p-2 mb-4 ">
                <div>
                    <h4 className="text-center">Summary</h4>
                </div>
                <div className="p-6">
                    <div className="mt-6 flex text-xs gap-6 mb-4 flex-wrap">
                        {headings.map((e, i) => (
                            <>
                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-col gap-2 w-96">
                                        <p>
                                            <strong>{e.label}</strong>
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </p>
                                        <input
                                            type="text"
                                            className="input text-xs input-bordered input-sm w-full bg-gray-100 rounded-none"
                                            value="0"
                                            id={e.id}
                                            name={e.id}
                                        />
                                    </div>
                                </div>
                            </>
                        ))}

                        <div className="flex flex-col gap-2 w-96">
                            <p>
                                <strong>
                                    How many pre existing signs are left behind
                                    on site ?
                                </strong>
                                <span className="text-red-600">*</span>
                            </p>
                            <select
                                className="select select-bordered  select-sm text-xs m w-full rounded-none "
                                name="listpicker_13"
                                id="listpicker_13_summary"
                                value={pre}
                                onChange={(e) =>
                                    setpre(parseInt(e.target.value))
                                }
                            >
                                <option value="0">Select</option>
                                {Array.from(Array(100), (e, i) => (
                                    <>
                                        <option value={i + 1}>{i}</option>
                                    </>
                                ))}
                            </select>
                            <p
                                className={
                                    mandatory.preMandatory
                                        ? "  text-xs  text-red-500 font-bold"
                                        : "hidden"
                                }
                            >
                                Pre existing signs is required.
                            </p>
                        </div>
                        <div className="flex flex-col text-xs w-96">
                            <p>
                                <strong>
                                    Does the site need to be revisited to
                                    complete signage installation ?{" "}
                                </strong>
                                <span className="text-red-600">*</span>
                            </p>
                            <select
                                className="select select-bordered select-sm text-xs m w-full rounded-none "
                                name="tri_291"
                                value={revisited}
                                onChange={(e) => setrevisited(e.target.value)}
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <p
                                className={
                                    mandatory.revisitedMandatory
                                        ? "  text-xs  text-red-500 font-bold"
                                        : "hidden"
                                }
                            >
                                Site need to be revisited to complete signage
                                installation is required.
                            </p>
                        </div>
                        <div className="flex flex-col text-xs w-96 gap-3">
                            <p>
                                <strong>
                                    Total Existing Aluminum Signage Replaced
                                    On-Site
                                </strong>
                                <span className="text-red-600">*</span>
                            </p>

                            <select
                                className="select select-bordered  select-sm text-xs m w-full rounded-none "
                                name="existing_alumium_signage"
                            >
                                <option>Select</option>
                                {Array.from(Array(30), (e, i) => (
                                    <>
                                        <option value={i + 1} selected={i == 0}>
                                            {i}
                                        </option>
                                    </>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col text-xs  w-96 gap-3">
                            <p>
                                <strong>Comment</strong>{" "}
                            </p>

                            <textarea
                                className="textarea textarea-bordered textarea-xs height- w-full rounded-none "
                                name="summary_comment"
                                id="summary_comment"
                            ></textarea>
                        </div>
                    </div>

                    <div className="w-96 flex flex-col gap-2 mt-6">
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
                <div className="text-center mt-7">
                    <div className="border-t border-grey ">
                        <p
                            className={
                                mandatory.save
                                    ? "hidden"
                                    : "mt-2  text-red-500 text-xs font-bold"
                            }
                        >
                            Please check manadatory fields.
                        </p>
                        <div
                            className={
                                mandatory.save && isclicked
                                    ? " text-xs   text-green-600 font-bold flex justify-center"
                                    : "hidden"
                            }
                        >
                            <TiTick />
                            <span>Survey updated successfully.</span>
                        </div>
                        <button
                            className="mt-3 pl-3 pr-3 pt-2 pb-2 text-xs text-white bg-blue-950"
                            onClick={handleSave}
                        >
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
