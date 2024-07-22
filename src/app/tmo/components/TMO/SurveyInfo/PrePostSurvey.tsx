import { TiTick } from "react-icons/ti";

const PrePostSurvey = () => {
    return (
        <>
            {" "}
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
                            >
                                <option>Select</option>
                                <option value="Pre" selected>
                                    Pre
                                </option>
                                <option value="Post">Post</option>
                                <option value="Pre and Post">
                                    Pre and Post
                                </option>
                            </select>
                            <p className=" text-xs  text-red-500 font-bold">
                                Pre and Post Options is required.
                            </p>
                        </div>
                        <div className="flex-1"></div>
                    </div>
                </form>
                <div className="text-center mt-7">
                    <div className="border-t border-grey ">
                        <p className="    text-red-500 text-xs font-bold mt-2">
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
        </>
    );
};

export default PrePostSurvey;
