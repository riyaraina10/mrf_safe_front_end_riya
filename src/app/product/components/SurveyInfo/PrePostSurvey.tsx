import React, { useEffect, useState } from "react";

import { TiTick } from "react-icons/ti";

const PrePostSurvey = () => {
    const [prepost, setprepost] = useState("Pre and Post");
    const [isclicked, setisclicked] = useState(false);
    const [mandatory, setMandatory] = useState(false);

    const handlesave = () => {
        setisclicked(true);
        if (prepost == "") {
            setMandatory(true);
        } else {
            setMandatory(false);
        }
    };

    return (
        <>
            <div className="bg-white p-3 mb-4">
                <div>
                    <h4 className="text-center ">Pre And Post Survey</h4>
                </div>

                <form id="section_40" method="POST">
                    <div className="flex mt-4">
                        <div className="flex flex-col flex-1">
                            <p>
                                <strong className="text-xs">
                                    If you are here for a pre visit, select only
                                    the pre option. If here for the post visit,
                                    select only the post option. If for pre and
                                    post, please select both the pre and the
                                    post option
                                </strong>
                                <span className="text-red-600">*</span>
                            </p>
                            <select
                                className="select select-bordered select-sm w-full m rounded-none text-xs"
                                name="listpicker_296"
                                value={prepost}
                                onChange={(e) => {
                                    setprepost(e.target.value);
                                }}
                            >
                                <option value="">Select</option>
                                <option value="Pre">Pre</option>
                                <option value="Post">Post</option>
                                <option value="Pre and Post">
                                    Pre and Post
                                </option>
                            </select>
                            <p
                                className={
                                    mandatory
                                        ? " text-xs  text-red-500 font-bold"
                                        : "hidden"
                                }
                            >
                                Pre and Post Options is required.
                            </p>
                        </div>
                        <div className="flex-1"></div>
                    </div>
                </form>
                <div className="text-center mt-7">
                    <div className="border-t border-grey ">
                        <p
                            className={
                                mandatory
                                    ? "mt-2  text-red-500 text-xs font-bold"
                                    : "hidden"
                            }
                        >
                            Please check manadatory fields.
                        </p>
                        <div
                            className={
                                !mandatory && isclicked
                                    ? " text-xs   text-green-600 font-bold flex justify-center"
                                    : "hidden"
                            }
                        >
                            <TiTick />
                            <span>Survey updated successfully.</span>
                        </div>
                        <button
                            className="mt-3 pl-3 pr-3 pt-2 pb-2 text-xs text-white bg-blue-950"
                            onClick={handlesave}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrePostSurvey;
