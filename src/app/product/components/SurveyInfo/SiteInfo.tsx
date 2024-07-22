import React, { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { TiTick } from "react-icons/ti";
const animatedComponents = makeAnimated();

const SiteInfo = () => {
    const data = [
        { label: "FA#: ", value: "FA_Server1" },
        { label: "Region: ", value: "Region" },
        { label: "USID: ", value: " USID" },
        { label: "Site ID: ", value: " Site_server1" },
        { label: "Lat: ", value: " Latitude" },
        { label: "NAD used: ", value: " NAD Used" },
        { label: "Property Owner: ", value: " Property Owner" },
        { label: "Site Directions: ", value: " Site Directions" },
        { label: " Key Comments: ", value: " Key Comments" },
        { label: "M-RFSC name: ", value: " M-RFSC Name" },
        { label: "Ops Manager: ", value: " OPS Manager Phone #" },
        { label: " Cell Tech: ", value: " Cell tech" },
        { label: " Field Tech Name: ", value: " Developer" },
    ];
    const data2 = [
        { label: "Market: ", value: "Market" },
        { label: " Market Area:", value: "Market Area" },
        { label: "Structure Type: ", value: "Structure Type" },
        { label: "Site Name: ", value: "att_server1" },
        { label: " Long: ", value: "Longitude" },
        { label: "Site Address: ", value: "Site Address,City,State,Zip Code" },
        { label: " Contact Number : ", value: "Property Phone" },
        { label: " Access Details : ", value: "Access details" },
        { label: " Keys/Combo :", value: " Keys/Combo" },
        { label: " M-RFSC Phone # :", value: "  M-RFSC Phone #" },
        { label: "  Ops Manager Phone # :" },
        { label: "Cell Tech Phone # : ", value: "Cell tech Phone #" },
        { label: " Field Tech Email :", value: "devuser@gmail.com" },
    ];
    const [siteinfo, setSiteInfo] = useState({
        notesCorrect: "Yes",
        update: "",
        siteaccess: "Yes",
        siteunable: "",
        combocode: "Yes",
        revisit: "Yes",
        surveydate: "2023-04-30",
        surveytiming: "23:14",
    });
    const [issaved, setissaved] = useState(false);
    const [mandatory, setMandatory] = useState({
        notesCorrectMandatory: false,
        siteAccessMandatory: false,
        surveyDateMandatory: false,
        surveyTimeMandatory: false,
        updateMandatory: false,
        siteUnableMandatory: false,
        ComboCodeMandatory: false,
        img1Mandatory: false,
        img2Mandatory: false,
        img3Mandatory: false,
        RevisitMandatory: false,
        save: true,
    });

    const [img, setimg] = useState({
        photo_picker_st30: "",
        photo_picker_st31: "",
        photo_picker_st32: "",
    });
    const handleSave = () => {
        setissaved(true);

        if (siteinfo.notesCorrect === "No" && siteinfo.siteaccess === "Yes") {
            setMandatory({
                notesCorrectMandatory: false,
                siteAccessMandatory: false,
                surveyDateMandatory: siteinfo.surveydate === "",
                surveyTimeMandatory: siteinfo.surveytiming === "",
                updateMandatory: siteinfo.update === "",
                siteUnableMandatory: false,
                ComboCodeMandatory: false,
                img1Mandatory: false,
                img2Mandatory: false,
                img3Mandatory: false,
                RevisitMandatory: false,
                save:
                    siteinfo.surveydate !== "" &&
                    siteinfo.surveytiming !== "" &&
                    siteinfo.update !== "",
            });
        } else if (
            siteinfo.notesCorrect === "Yes" &&
            siteinfo.siteaccess === "Yes"
        ) {
            setMandatory({
                notesCorrectMandatory: false,
                siteAccessMandatory: false,
                surveyDateMandatory: siteinfo.surveydate === "",
                surveyTimeMandatory: siteinfo.surveytiming === "",
                updateMandatory: false,
                siteUnableMandatory: false,
                ComboCodeMandatory: false,
                img1Mandatory: false,
                img2Mandatory: false,
                img3Mandatory: false,
                RevisitMandatory: false,
                save:
                    siteinfo.surveydate !== "" && siteinfo.surveytiming !== "",
            });
        } else if (
            siteinfo.notesCorrect === "No" &&
            siteinfo.siteaccess === "No"
        ) {
            setMandatory({
                notesCorrectMandatory: false,
                siteAccessMandatory: false,
                surveyDateMandatory: siteinfo.surveydate === "",
                surveyTimeMandatory: siteinfo.surveytiming === "",
                updateMandatory: siteinfo.update === "",
                siteUnableMandatory: siteinfo.siteunable === "",
                ComboCodeMandatory: siteinfo.combocode === "",
                img1Mandatory: img.photo_picker_st30 === "",
                img2Mandatory: img.photo_picker_st31 === "",
                img3Mandatory: img.photo_picker_st32 === "",
                RevisitMandatory: siteinfo.revisit === "",
                save:
                    siteinfo.surveydate !== "" &&
                    siteinfo.surveytiming !== "" &&
                    siteinfo.update !== "" &&
                    siteinfo.siteunable !== "" &&
                    siteinfo.combocode !== "" &&
                    siteinfo.revisit !== "" &&
                    img.photo_picker_st30 !== "" &&
                    img.photo_picker_st31 !== "" &&
                    img.photo_picker_st32 !== "",
            });
        } else if (
            siteinfo.notesCorrect === "Yes" &&
            siteinfo.siteaccess === "No"
        ) {
            setMandatory({
                notesCorrectMandatory: false,
                siteAccessMandatory: false,
                surveyDateMandatory: siteinfo.surveydate === "",
                surveyTimeMandatory: siteinfo.surveytiming === "",
                updateMandatory: false,
                siteUnableMandatory: siteinfo.siteunable === "",
                ComboCodeMandatory: siteinfo.combocode === "",
                img1Mandatory: img.photo_picker_st30 === "",
                img2Mandatory: img.photo_picker_st31 === "",
                img3Mandatory: img.photo_picker_st32 === "",
                RevisitMandatory: siteinfo.revisit === "",
                save:
                    siteinfo.surveydate !== "" &&
                    siteinfo.surveytiming !== "" &&
                    siteinfo.siteunable !== "" &&
                    siteinfo.combocode !== "" &&
                    siteinfo.revisit !== "" &&
                    img.photo_picker_st30 !== "" &&
                    img.photo_picker_st31 !== "" &&
                    img.photo_picker_st32 !== "",
            });
        } else if (
            siteinfo.notesCorrect === "" &&
            siteinfo.siteaccess === "No"
        ) {
            setMandatory({
                notesCorrectMandatory: true,
                siteAccessMandatory: false,
                surveyDateMandatory: siteinfo.surveydate === "",
                surveyTimeMandatory: siteinfo.surveytiming === "",
                updateMandatory: false,
                siteUnableMandatory: siteinfo.siteunable === "",
                ComboCodeMandatory: siteinfo.combocode === "",
                img1Mandatory: img.photo_picker_st30 === "",
                img2Mandatory: img.photo_picker_st31 === "",
                img3Mandatory: img.photo_picker_st32 === "",
                RevisitMandatory: siteinfo.revisit === "",
                save: false,
            });
        } else if (
            siteinfo.notesCorrect === "" &&
            siteinfo.siteaccess === "Yes"
        ) {
            setMandatory({
                notesCorrectMandatory: true,
                siteAccessMandatory: false,
                surveyDateMandatory: siteinfo.surveydate === "",
                surveyTimeMandatory: siteinfo.surveytiming === "",
                updateMandatory: false,
                siteUnableMandatory: false,
                ComboCodeMandatory: false,
                img1Mandatory: false,
                img2Mandatory: false,
                img3Mandatory: false,
                RevisitMandatory: false,
                save: false,
            });
        } else if (
            siteinfo.notesCorrect === "Yes" &&
            siteinfo.siteaccess === ""
        ) {
            setMandatory({
                notesCorrectMandatory: false,
                siteAccessMandatory: true,
                surveyDateMandatory: siteinfo.surveydate === "",
                surveyTimeMandatory: siteinfo.surveytiming === "",
                updateMandatory: false,
                siteUnableMandatory: false,
                ComboCodeMandatory: false,
                img1Mandatory: false,
                img2Mandatory: false,
                img3Mandatory: false,
                RevisitMandatory: false,
                save: false,
            });
        } else if (
            siteinfo.notesCorrect === "No" &&
            siteinfo.siteaccess === ""
        ) {
            setMandatory({
                notesCorrectMandatory: false,
                siteAccessMandatory: true,
                surveyDateMandatory: siteinfo.surveydate === "",
                surveyTimeMandatory: siteinfo.surveytiming === "",
                updateMandatory: siteinfo.update === "",
                siteUnableMandatory: false,
                ComboCodeMandatory: false,
                img1Mandatory: false,
                img2Mandatory: false,
                img3Mandatory: false,
                RevisitMandatory: false,
                save: false,
            });
        } else if (siteinfo.notesCorrect === "" && siteinfo.siteaccess === "") {
            setMandatory({
                notesCorrectMandatory: true,
                siteAccessMandatory: true,
                surveyDateMandatory: siteinfo.surveydate === "",
                surveyTimeMandatory: siteinfo.surveytiming === "",
                updateMandatory: false,
                siteUnableMandatory: false,
                ComboCodeMandatory: false,
                img1Mandatory: false,
                img2Mandatory: false,
                img3Mandatory: false,
                RevisitMandatory: false,
                save: false,
            });
        }
    };
    const handlefileupload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const { name, files } = e.target;
            setimg({
                ...img,
                [name]: URL.createObjectURL(files[0]),
            });
        }
    };

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
                                    <select
                                        className="select select-bordered select-sm m text-xs w-full"
                                        name="alpha_30"
                                        id="alpha_30"
                                        onChange={(e) => {
                                            setSiteInfo({
                                                ...siteinfo,
                                                notesCorrect: e.target.value,
                                            });
                                        }}
                                    >
                                        <option value="">Selected</option>
                                        <option value="Yes" selected>
                                            Yes
                                        </option>
                                        <option value="No">No</option>
                                    </select>
                                    <p
                                        className={
                                            mandatory.notesCorrectMandatory
                                                ? "text-xs  text-red-500 font-bold"
                                                : "hidden"
                                        }
                                    >
                                        Please select site access notes Correct.
                                    </p>
                                </div>
                                <div
                                    className={
                                        siteinfo.notesCorrect == "No"
                                            ? "flex flex-col gap-2 text-xs w-1/2"
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
                                            onChange={(e) => {
                                                setSiteInfo({
                                                    ...siteinfo,
                                                    update: e.target.value,
                                                });
                                            }}
                                        ></textarea>
                                        <p
                                            className={
                                                mandatory.updateMandatory
                                                    ? "text-xs  text-red-500 font-bold"
                                                    : "hidden"
                                            }
                                        >
                                            Update current Site access notes in
                                            detail is required.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-7">
                                <div className="flex  flex-col gap-2 text-xs w-1/2">
                                    <p>
                                        <strong>
                                            Are you able to access the site:
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </strong>
                                    </p>
                                    <select
                                        className="select select-bordered select-sm w-full m text-xs"
                                        name="alpha_31"
                                        id="alpha_31"
                                        onChange={(e) => {
                                            setSiteInfo({
                                                ...siteinfo,
                                                siteaccess: e.target.value,
                                            });
                                        }}
                                    >
                                        <option value="">Selected</option>
                                        <option value="Yes" selected>
                                            Yes
                                        </option>
                                        <option value="No">No</option>
                                    </select>
                                    <p
                                        className={
                                            mandatory.siteAccessMandatory
                                                ? " text-xs text-red-500 font-bold"
                                                : "hidden"
                                        }
                                    >
                                        Please select Are you able to access the
                                        site.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 text-xs w-1/2"></div>
                            </div>
                            <div
                                className={
                                    siteinfo.siteaccess == "No"
                                        ? "show"
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
                                                onChange={(e) => {
                                                    setSiteInfo({
                                                        ...siteinfo,
                                                        siteunable:
                                                            e.target.value,
                                                    });
                                                }}
                                            ></textarea>
                                            <p
                                                className={
                                                    mandatory.siteUnableMandatory
                                                        ? "text-xs text-red-500 font-bold"
                                                        : "hidden"
                                                }
                                            >
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
                                                className="select select-bordered select-sm w-full m text-xs"
                                                name="combo"
                                                id="combo"
                                                onChange={(e) => {
                                                    setSiteInfo({
                                                        ...siteinfo,
                                                        combocode:
                                                            e.target.value,
                                                    });
                                                }}
                                            >
                                                <option value="">
                                                    Selected
                                                </option>
                                                <option value="Yes" selected>
                                                    Yes
                                                </option>
                                                <option value="No">No</option>
                                            </select>
                                            <p
                                                className={
                                                    mandatory.ComboCodeMandatory
                                                        ? "  text-xs  text-red-500 font-bold"
                                                        : "hidden"
                                                }
                                            >
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
                                    <div className="flex flex-1 flex-col gap-2 text-xs mt-2">
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
                                            onChange={handlefileupload}
                                        ></input>

                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="photo_picker_st30_datepicker"
                                            name="photo_picker_st30_timestamp"
                                        ></input>
                                        {img.photo_picker_st30 !== "" && (
                                            <img
                                                src={img.photo_picker_st30}
                                                alt=""
                                            />
                                        )}
                                        <p
                                            className={
                                                mandatory.img1Mandatory
                                                    ? "text-xs text-red-500 font-bold"
                                                    : "hidden"
                                            }
                                        >
                                            Photo documentation of issue 1 is
                                            required
                                        </p>
                                    </div>
                                    <div className="flex flex-1 flex-col gap-2 text-xs mt-2">
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
                                            onChange={handlefileupload}
                                        ></input>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="photo_picker_st31_datepicker"
                                            name="photo_picker_st31_timestamp"
                                        ></input>
                                        {img.photo_picker_st31 !== "" && (
                                            <img
                                                src={img.photo_picker_st31}
                                                alt=""
                                            />
                                        )}
                                        <p
                                            className={
                                                mandatory.img2Mandatory
                                                    ? "text-xs text-red-500 font-bold"
                                                    : "hidden"
                                            }
                                        >
                                            Photo documentation of issue 2 is
                                            required
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="flex gap-7"
                                    id="issuedDocumentDiv2"
                                >
                                    <div className="flex flex-1 flex-col gap-2 text-xs mt-2">
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
                                            onChange={handlefileupload}
                                        ></input>
                                        <input
                                            type="datetime-local"
                                            className="input input-bordered input-sm w-full text-xs rounded-none"
                                            id="photo_picker_st32_datepicker"
                                            name="photo_picker_st32_timestamp"
                                        ></input>
                                        {img.photo_picker_st32 !== "" && (
                                            <img
                                                src={img.photo_picker_st32}
                                                alt=""
                                            />
                                        )}
                                        <p
                                            className={
                                                mandatory.img3Mandatory
                                                    ? "text-xs text-red-500 font-bold"
                                                    : "hidden"
                                            }
                                        >
                                            Photo documentation of issue 3 is
                                            required
                                        </p>
                                    </div>
                                    <div className="flex flex-1 flex-col gap-2 text-xs mt-2">
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
                                                className="select select-bordered select-sm w-full m text-xs"
                                                name="site_visit"
                                                id="site_visit"
                                                onChange={(e) => {
                                                    setSiteInfo({
                                                        ...siteinfo,
                                                        revisit: e.target.value,
                                                    });
                                                }}
                                            >
                                                <option value="">
                                                    Selected
                                                </option>
                                                <option value="Yes" selected>
                                                    Yes
                                                </option>
                                                <option value="No">No</option>
                                            </select>
                                            <p
                                                className={
                                                    mandatory.RevisitMandatory
                                                        ? "  text-xs  text-red-500 font-bold"
                                                        : "hidden"
                                                }
                                            >
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
                                        className="select select-bordered select-sm w-full m text-xs "
                                        value={siteinfo.surveydate}
                                        onChange={(e) => {
                                            setSiteInfo({
                                                ...siteinfo,
                                                surveydate: e.target.value,
                                            });
                                        }}
                                    ></input>
                                    <p
                                        className={
                                            mandatory.surveyDateMandatory
                                                ? "text-xs  text-red-500 font-bold"
                                                : "hidden"
                                        }
                                    >
                                        Please select Survey Date
                                    </p>
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
                                        className="select select-bordered select-sm w-full m text-xs"
                                        value={siteinfo.surveytiming}
                                        onChange={(e) => {
                                            setSiteInfo({
                                                ...siteinfo,
                                                surveytiming: e.target.value,
                                            });
                                        }}
                                    ></input>
                                    <p
                                        className={
                                            mandatory.surveyTimeMandatory
                                                ? "  text-xs  text-red-500 font-bold"
                                                : "hidden"
                                        }
                                    >
                                        Please select Survey Timing
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="text-center mt-7">
                        <p
                            className={
                                mandatory.save
                                    ? "hidden"
                                    : "text-xs flex  justify-center  text-red-500 font-bold"
                            }
                        >
                            Please check manadatory fields.
                        </p>
                        <div
                            className={
                                mandatory.save && issaved
                                    ? "text-xs flex  justify-center  text-green-500 font-bold "
                                    : "hidden"
                            }
                        >
                            <TiTick />
                            <span>Survey updated successfully.</span>
                        </div>

                        <button
                            className=" pl-3 pr-3 pt-2 pb-2 text-xs text-white bg-blue-950"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SiteInfo;
