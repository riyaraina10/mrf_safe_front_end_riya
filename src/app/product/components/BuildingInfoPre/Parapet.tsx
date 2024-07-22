import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

const Parapet = () => {
    const [parapet, setparapet] = useState({
        Parapet_Available: "Yes",
        Multi_Parapet: "Yes",
        Fall_Arrest_Anchors: "Yes",
        height: "",
        height_picture: "",
    });
    const [issaved, setissaved] = useState(false);
    const [mandatory, setMandatory] = useState({
        ParapetMandatory: false,
        Multi_Parapet_Mandatory: false,
        Fall_Mandatory: false,
        heightMandatory: false,
        height_picture_Mandatory: false,
        save: true,
    });
    const handleSave = () => {
        setissaved(true);
        if (
            parapet.Parapet_Available === "Yes" &&
            parapet.Multi_Parapet == "Yes"
        ) {
            setMandatory({
                ParapetMandatory: false,
                Multi_Parapet_Mandatory: false,
                Fall_Mandatory: parapet.Fall_Arrest_Anchors === "",
                heightMandatory: false,
                height_picture_Mandatory: false,
                save: parapet.Fall_Arrest_Anchors !== "",
            });
        } else if (
            parapet.Parapet_Available === "Yes" &&
            parapet.Multi_Parapet == "No"
        ) {
            setMandatory({
                ParapetMandatory: false,
                Multi_Parapet_Mandatory: false,
                Fall_Mandatory: parapet.Fall_Arrest_Anchors === "",
                heightMandatory: parapet.height === "",
                height_picture_Mandatory: false,
                save:
                    parapet.Fall_Arrest_Anchors !== "" && parapet.height !== "",
            });
        } else if (
            parapet.Parapet_Available === "Yes" &&
            parapet.Multi_Parapet == ""
        ) {
            setMandatory({
                ParapetMandatory: false,
                Multi_Parapet_Mandatory: true,
                Fall_Mandatory: parapet.Fall_Arrest_Anchors === "",
                heightMandatory: false,
                height_picture_Mandatory: false,
                save: false,
            });
        } else if (parapet.Parapet_Available === "No") {
            setMandatory({
                ParapetMandatory: false,
                Multi_Parapet_Mandatory: false,
                Fall_Mandatory: parapet.Fall_Arrest_Anchors === "",
                heightMandatory: false,
                height_picture_Mandatory: false,
                save: parapet.Fall_Arrest_Anchors !== "",
            });
        } else if (
            parapet.Parapet_Available === "" &&
            (parapet.Fall_Arrest_Anchors == "Yes" ||
                parapet.Fall_Arrest_Anchors == "No")
        ) {
            setMandatory({
                ParapetMandatory: true,
                Multi_Parapet_Mandatory: false,
                Fall_Mandatory: false,
                heightMandatory: false,
                height_picture_Mandatory: false,
                save: false,
            });
        } else if (
            (parapet.Parapet_Available === "Yes" ||
                parapet.Parapet_Available === "No") &&
            parapet.Fall_Arrest_Anchors == ""
        ) {
            setMandatory({
                ParapetMandatory: false,
                Multi_Parapet_Mandatory: false,
                Fall_Mandatory: true,
                heightMandatory: false,
                height_picture_Mandatory: false,
                save: false,
            });
        } else if (
            parapet.Parapet_Available === "" &&
            parapet.Fall_Arrest_Anchors == ""
        ) {
            setMandatory({
                ParapetMandatory: true,
                Multi_Parapet_Mandatory: false,
                Fall_Mandatory: true,
                heightMandatory: false,
                height_picture_Mandatory: false,
                save: false,
            });
        }
    };

    return (
        <>
            <div className="bg-white p-3 mb-4">
                <div>
                    <h4 className="text-center">Parapet</h4>
                </div>
                <form id="section_2" method="POST">
                    <div className="flex text-xs gap-4 mt-6">
                        <div className="flex flex-col gap-1 w-1/3">
                            <p>
                                <strong>Parapet Available</strong>
                                <span className="text-red-600">*</span>
                            </p>

                            <select
                                className="select select-bordered select-sm text-xs m w-full rounded-none "
                                name="tri_33"
                                id="isParpetAvailable"
                                value={parapet.Parapet_Available}
                                onChange={(e) =>
                                    setparapet({
                                        ...parapet,
                                        Parapet_Available: e.target.value,
                                    })
                                }
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <p
                                className={
                                    mandatory.ParapetMandatory
                                        ? " text-red-500  text-xs font-bold "
                                        : "hidden"
                                }
                            >
                                Parapet Available is required.
                            </p>
                        </div>
                        <div
                            className={
                                parapet.Parapet_Available === "Yes"
                                    ? "flex flex-col gap-1 w-1/3"
                                    : "hidden"
                            }
                        >
                            <p>
                                <strong>Is Multiple Parapet Available ?</strong>
                            </p>
                            <select
                                className="select select-bordered select-sm text-xs m w-full rounded-none "
                                name="is_multiple_parapet"
                                id="is_multiple_parapet"
                                value={parapet.Multi_Parapet}
                                onChange={(e) =>
                                    setparapet({
                                        ...parapet,
                                        Multi_Parapet: e.target.value,
                                    })
                                }
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1 w-1/3">
                            <p>
                                <strong>Fall Arrest Anchors Available ?</strong>
                                <span className="text-red-600">*</span>
                            </p>
                            <select
                                className="select select-bordered select-sm text-xs m w-full rounded-none "
                                name="tri_1"
                                value={parapet.Fall_Arrest_Anchors}
                                onChange={(e) =>
                                    setparapet({
                                        ...parapet,
                                        Fall_Arrest_Anchors: e.target.value,
                                    })
                                }
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <p
                                className={
                                    mandatory.Fall_Mandatory
                                        ? " text-red-500  text-xs font-bold "
                                        : "hidden"
                                }
                            >
                                Fall Arrest Anchors Available is required.
                            </p>
                        </div>
                    </div>
                    <div
                        className={
                            parapet.Multi_Parapet === "No"
                                ? "flex text-xs gap-4 mt-6"
                                : "hidden"
                        }
                    >
                        <div
                            className="flex flex-col gap-1 w-1/3"
                            id="parphetHeight"
                        >
                            <p>
                                <strong>Parapet height in inches</strong>
                                <span className="text-red-600">*</span>
                            </p>

                            <input
                                type="number"
                                className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                name="numeric_35"
                                value={parapet.height}
                                onChange={(e) =>
                                    setparapet({
                                        ...parapet,
                                        height: e.target.value,
                                    })
                                }
                            ></input>
                            <p
                                className={
                                    mandatory.heightMandatory
                                        ? " text-red-500  text-xs font-bold "
                                        : "hidden"
                                }
                            >
                                Parapet height in inches is required
                            </p>
                        </div>

                        <div
                            className="flex flex-col gap-1 w-1/3"
                            id="parphetPicture"
                        >
                            <p>
                                <strong className="text-xs">
                                    Parapet height picture
                                </strong>
                                <span className="text-xs text-red-600">*</span>
                            </p>
                            <input
                                type="file"
                                className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                id="parpet_height_picture"
                                name="parpet_height_picture"
                            ></input>
                            <p
                                className={
                                    mandatory.height_picture_Mandatory
                                        ? " text-red-500  text-xs font-bold "
                                        : "hidden"
                                }
                            >
                                Parapet height picture is required.
                            </p>
                            <input
                                type="datetime-local"
                                className="input input-bordered input-sm w-full text-xs rounded-none"
                                id="parpet_height_picture_datepicker"
                                name="parpet_height_picture_timestamp"
                            ></input>
                        </div>

                        <div className="flex flex-col gap-1 w-1/3"></div>
                    </div>
                </form>
                <div className="text-center mt-7">
                    <div className="border-t border-grey ">
                        <p
                            className={
                                mandatory.save
                                    ? "hidden"
                                    : " mt-2  text-red-500 text-xs font-bold"
                            }
                        >
                            Please check manadatory fields.
                        </p>
                        <div
                            className={
                                mandatory.save && issaved
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
        </>
    );
};

export default Parapet;
