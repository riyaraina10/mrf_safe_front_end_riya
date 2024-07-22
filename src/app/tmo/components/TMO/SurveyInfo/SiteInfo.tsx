import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

const data = [
    { label: "Site ID # : ", value: "DIV1001" },
    { label: "Region: ", value: "Region" },
    { label: "Lat: ", value: " Latitude" },
    { label: "NAD used: ", value: " NAD Used" },
    { label: "City :", value: " City" },
    { label: "State :", value: " State" },
    { label: "Site Directions: ", value: " Site Directions" },
    { label: " Key Comments: ", value: " Key Comments" },
    { label: " FOPS Tech : ", value: " FOPS tech" },
    { label: " Field Tech Name: ", value: " Developer" },
];
const data2 = [
    { label: "Market: ", value: "Market" },
    { label: "Site Type : ", value: "Site Type" },
    { label: "Site Name: ", value: " DIV1001" },
    { label: " Long: ", value: "Longitude" },
    { label: "Site Address: ", value: "Site Address" },
    { label: " Zip : ", value: " Zip Code" },
    { label: " Access Details : ", value: "Access details" },
    { label: " Keys/Combo :", value: " Keys/Combo" },
    { label: " FOPS Phone # :", value: "FOPS Phone #" },
    { label: " Field Tech Email :", value: "devuser@gmail.com" },
];
interface SiteInfoProps {
    Factor: string;
    setFactor: Function;
}
const SiteInfo: React.FC<SiteInfoProps> = ({ Factor, setFactor }) => {
    const [siteinfo, setsiteinfo] = useState({
        notesCorrect: "Yes",
        siteAccess: "Yes",
    });
    return (
        <>
            <div className="bg-white p-3 mb-4">
                <div className="text-center">
                    <h4>Site Information</h4>
                </div>
                <br></br>
                <div>
                    <form id="sit_info_form" method="POST">
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-7">
                                <div className="flex flex-1 flex-col gap-2 text-xs">
                                    {data.map((e) => (
                                        <p>
                                            <strong>{e.label}</strong>
                                            {e.value}
                                        </p>
                                    ))}{" "}
                                </div>
                                <div className="flex flex-1 flex-col gap-2 text-xs">
                                    {data2.map((e) => (
                                        <p>
                                            <strong>{e.label}</strong>
                                            {e.value}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-7">
                                <div
                                    className="flex flex-col gap-2 text-xs "
                                    style={{ width: "633px" }}
                                >
                                    <p>
                                        <strong>
                                            Are the above site access notes
                                            Correct:
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </strong>
                                    </p>
                                    <div>
                                        <select
                                            className="select select-bordered select-sm w-full m text-xs rounded-none"
                                            name="alpha_30"
                                            id="alpha_30"
                                            value={siteinfo.notesCorrect}
                                            onChange={(e) => {
                                                setsiteinfo({
                                                    ...siteinfo,
                                                    notesCorrect:
                                                        e.target.value,
                                                });
                                            }}
                                        >
                                            <option value="">Selected</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No" selected>
                                                No
                                            </option>
                                        </select>
                                        <p className="  text-xs  text-red-500 font-bold">
                                            Please select site access notes
                                            Correct.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className={
                                        siteinfo.notesCorrect === "No"
                                            ? "flex flex-1 flex-col gap-2 text-xs"
                                            : "hidden"
                                    }
                                    id="siteAccessNote"
                                >
                                    <p>
                                        <strong>
                                            Update current Site access notes in
                                            detail:
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </strong>
                                    </p>
                                    <div>
                                        <textarea
                                            className="textarea textarea-bordered textarea-xs height- w-full rounded-none "
                                            name="multiline_e1"
                                            id="multiline_e1"
                                        >
                                            yes
                                        </textarea>
                                        <p className="  text-xs  text-red-500 font-bold">
                                            Update current Site access notes in
                                            detail is required.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-7">
                                <div className="flex flex-1 flex-col gap-2 text-xs">
                                    <p>
                                        <strong>
                                            Are you able to access the site:
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </strong>
                                    </p>
                                    <div>
                                        <select
                                            className="select select-bordered select-sm w-full m text-xs rounded-none"
                                            name="alpha_31"
                                            id="alpha_31"
                                            value={siteinfo.siteAccess}
                                            onChange={(e) => {
                                                setsiteinfo({
                                                    ...siteinfo,
                                                    siteAccess: e.target.value,
                                                });
                                                setFactor(e.target.value);
                                            }}
                                        >
                                            <option value="">Selected</option>
                                            <option value="Yes" selected>
                                                Yes
                                            </option>
                                            <option value="No">No</option>
                                        </select>
                                        <p className="  text-xs text-red-500 font-bold">
                                            Please select Are you able to access
                                            the site.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col gap-2 text-xs"></div>
                            </div>
                            <div
                                className={
                                    siteinfo.siteAccess === "No"
                                        ? "block"
                                        : "hidden"
                                }
                            >
                                <div className="flex gap-7" id="siteAccessDiv">
                                    <div className="flex flex-1 flex-col gap-2 text-xs">
                                        <p>
                                            <strong>
                                                Why were you unable to access
                                                site?:
                                                <span className="text-red-600">
                                                    *
                                                </span>
                                            </strong>
                                        </p>
                                        <div>
                                            <textarea
                                                className="textarea textarea-bordered textarea-xs height- w-full rounded-none "
                                                id="multiline_e2"
                                                name="multiline_e2"
                                            ></textarea>
                                            <p className="  text-xs text-red-500 font-bold">
                                                Why were you unable to access
                                                site is required.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col gap-2 text-xs">
                                        <p>
                                            <strong>
                                                Was combo code correct?:
                                                <span className="text-red-600">
                                                    *
                                                </span>
                                            </strong>
                                        </p>
                                        <div>
                                            <select
                                                className="select select-bordered select-sm w-full m text-xs rounded-none"
                                                name="combo"
                                                id="combo"
                                            >
                                                <option value="">
                                                    Selected
                                                </option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                            <p className="  text-xs  text-red-500 font-bold">
                                                Was combo code correct is
                                                required.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex gap-7"
                                    id="issuedDocumentDiv1"
                                >
                                    <div className="flex flex-1 flex-col gap-2 text-xs">
                                        <p>
                                            <strong>
                                                Provide photo documentation of
                                                issue 1
                                                <span className="text-red-600">
                                                    *
                                                </span>
                                            </strong>
                                        </p>
                                        <input
                                            type="file"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            name="photo_picker_st30"
                                            id="photo_picker_st30"
                                        ></input>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="photo_picker_st30_datepicker"
                                            name="photo_picker_st30_timestamp"
                                        ></input>
                                        <img
                                            src="images/cat.jpg"
                                            id="photo_picker_st30_img"
                                        ></img>
                                        <p className="  text-xs text-red-500 font-bold">
                                            Photo documentation of issue 1 is
                                            required
                                        </p>
                                    </div>
                                    <div className="flex flex-1 flex-col gap-2 text-xs">
                                        <p>
                                            <strong>
                                                Provide photo documentation of
                                                issue 2
                                                <span className="text-red-600">
                                                    *
                                                </span>
                                            </strong>
                                        </p>
                                        <input
                                            type="file"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            id="photo_picker_st31"
                                            name="photo_picker_st31"
                                        ></input>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="photo_picker_st31_datepicker"
                                            name="photo_picker_st31_timestamp"
                                        ></input>
                                        <img
                                            src="images/cat.jpg"
                                            id="photo_picker_st31_img"
                                        ></img>
                                        <p className="  text-xs text-red-500 font-bold">
                                            Photo documentation of issue 2 is
                                            required
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="flex gap-7"
                                    id="issuedDocumentDiv2"
                                >
                                    <div className="flex flex-1 flex-col gap-2 text-xs">
                                        <p>
                                            <strong>
                                                Provide photo documentation of
                                                issue 3
                                                <span className="text-red-600">
                                                    *
                                                </span>
                                            </strong>
                                        </p>
                                        <input
                                            type="file"
                                            className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                            id="photo_picker_st32"
                                            name="photo_picker_st32"
                                        ></input>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="photo_picker_st32_datepicker"
                                            name="photo_picker_st32_timestamp"
                                        ></input>
                                        <img
                                            src="images/cat.jpg"
                                            id="photo_picker_st32_img"
                                        ></img>
                                        <p className="  text-xs text-red-500 font-bold">
                                            Photo documentation of issue 3 is
                                            required
                                        </p>
                                    </div>
                                    <div className="flex flex-1 flex-col gap-2 text-xs">
                                        <p>
                                            <strong>
                                                Is site Re-visit requires? :
                                                <span className="text-red-600">
                                                    *
                                                </span>
                                            </strong>
                                        </p>
                                        <div>
                                            <select
                                                className="select select-bordered select-sm w-full m text-xs rounded-none"
                                                name="site_visit"
                                                id="site_visit"
                                            >
                                                <option value="">
                                                    Selected
                                                </option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                            <p className="  text-xs  text-red-500 font-bold">
                                                Please select site Re-visit ?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 flex text-xs gap-4 ">
                                <div className="flex-1">
                                    <p>
                                        <strong>Survey Date</strong>
                                        <span className="text-red-600">*</span>
                                    </p>
                                    <input
                                        type="date"
                                        name="datepicker_29"
                                        id="datepicker_29"
                                        className="select select-bordered select-sm w-full m text-xs rounded-none"
                                        value="2023-02-04"
                                    ></input>
                                </div>
                                <div className="flex-1">
                                    <p>
                                        <strong>Survey Timing</strong>
                                        <span className="text-red-600">*</span>
                                    </p>
                                    <input
                                        type="time"
                                        name="datepicker_1"
                                        id="datepicker_1"
                                        className="select select-bordered select-sm w-full m text-xs rounded-none"
                                        value="00:43"
                                    ></input>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="text-center mt-7">
                        <p className="    text-red-500 text-xs font-bold">
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

                        <button className=" pl-3 pr-3 pt-2 pb-2 text-xs text-white bg-blue-950">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SiteInfo;
