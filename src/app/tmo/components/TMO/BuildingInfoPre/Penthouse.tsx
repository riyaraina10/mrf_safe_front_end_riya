import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

const Penthouse = () => {
    const [penthouse, setpenthouse] = useState(0);
    const [values, setvalues] = useState({
        h1yds: "0",
        h2yds: "0",
        h3yds: "0",
    });
    return (
        <>
            <div className="bg-white p-3 mb-4">
                <div>
                    <h4 className="text-center">Penthouse</h4>
                </div>
                <form id="section_11" method="POST">
                    <div className="flex  gap-4 flex-wrap mt-4">
                        <div
                            className="flex flex-col gap-2 text-xs relative "
                            style={{ width: "418px" }}
                        >
                            <p>
                                <strong>
                                    How many penthouses are present ?
                                </strong>
                                <span className="text-red-600">*</span>
                            </p>
                            <div>
                                <select
                                    className="select select-bordered select-sm text-xs m w-full rounded-none "
                                    name="listpicker_89"
                                    value={penthouse}
                                    onChange={(e) =>
                                        setpenthouse(parseInt(e.target.value))
                                    }
                                >
                                    <option value="">Select</option>
                                    <option value="0" selected>
                                        0
                                    </option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <p className=" text-xs  text-red-500 font-bold">
                                    Penthouses is required.
                                </p>
                            </div>
                        </div>

                        <div
                            id="p1htyds"
                            className={
                                penthouse > 0 && penthouse <= 3
                                    ? "show"
                                    : "hidden"
                            }
                        >
                            <div
                                className="flex flex-col gap-2 w-96 text-xs relative  "
                                style={{ width: "418px" }}
                            >
                                <p>
                                    <strong>
                                        Penthouse 1 height in yds from
                                        rangefinder
                                    </strong>
                                    <span className="text-red-600">*</span>
                                </p>
                                <input
                                    type="number"
                                    className="input input-bordered input-sm w-full  rounded-none"
                                    name="p1htyds"
                                    value={values.h1yds}
                                    onChange={(e) => {
                                        setvalues({
                                            ...values,
                                            h1yds: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                            <p className=" text-xs  text-red-500 font-bold">
                                Penthouse 1 height in yds is required.
                            </p>
                        </div>
                        <div
                            id="computedlabel_91"
                            className={
                                penthouse > 0 && penthouse <= 3
                                    ? "show"
                                    : "hidden"
                            }
                        >
                            <div
                                className="flex flex-col gap-2  text-xs relative "
                                style={{ width: "418px" }}
                            >
                                <p>
                                    <strong>
                                        Penthouse 1 height in ft from
                                        rangefinder
                                    </strong>
                                    <span className="text-red-600">*</span>
                                </p>
                                <input
                                    type="number"
                                    className="input input-bordered input-sm w-full  rounded-none bg-slate-200"
                                    value="0"
                                    name="computedlabel_91"
                                />
                            </div>
                        </div>
                        <div
                            id="p2htyds_1"
                            className={
                                penthouse > 1 && penthouse <= 3
                                    ? "show"
                                    : "hidden"
                            }
                        >
                            <div
                                className="flex flex-col gap-2  text-xs relative  "
                                style={{ width: "418px" }}
                            >
                                <p>
                                    <strong>
                                        Penthouse 2 height in yds from
                                        rangefinder
                                    </strong>
                                    <span className="text-red-600">*</span>
                                </p>
                                <input
                                    type="number"
                                    className="input input-bordered input-sm w-full  rounded-none"
                                    name="p2htyds_1"
                                    value={values.h2yds}
                                    onChange={(e) => {
                                        setvalues({
                                            ...values,
                                            h2yds: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                            <p className=" text-xs  text-red-500 font-bold">
                                Penthouse 2 height in yds is required.
                            </p>
                        </div>
                        <div
                            id="computedlabel_3"
                            className={
                                penthouse > 1 && penthouse <= 3
                                    ? "show"
                                    : "hidden"
                            }
                        >
                            <div
                                className="flex flex-col gap-2  text-xs "
                                style={{ width: "418px" }}
                            >
                                <p>
                                    <strong>
                                        Penthouse 2 height in ft from
                                        rangefinder
                                    </strong>
                                    <span className="text-red-600">*</span>
                                </p>
                                <input
                                    type="number"
                                    className="input input-bordered input-sm w-full  rounded-none bg-slate-200"
                                    value="0"
                                    name="computedlabel_3"
                                />
                            </div>
                        </div>
                        <div
                            id="p2htyds_2"
                            className={penthouse == 3 ? "show" : "hidden"}
                        >
                            <div
                                className="flex flex-col gap-2 text-xs "
                                style={{ width: "418px" }}
                            >
                                <p>
                                    <strong>
                                        Penthouse 3 height in yds from
                                        rangefinder
                                    </strong>
                                    <span className="text-red-600">*</span>
                                </p>
                                <input
                                    type="number"
                                    className="input input-bordered input-sm w-full  rounded-none"
                                    name="p1htyds_2"
                                    value={values.h3yds}
                                    onChange={(e) => {
                                        setvalues({
                                            ...values,
                                            h3yds: e.target.value,
                                        });
                                    }}
                                />
                            </div>{" "}
                            <p className=" text-xs  text-red-500 font-bold">
                                Penthouse 3 height in yds is required.
                            </p>
                        </div>
                        <div
                            id="computedlabel_6"
                            className={penthouse == 3 ? "show" : "hidden"}
                        >
                            <div
                                className="flex flex-col gap-2 text-xs  "
                                style={{ width: "418px" }}
                            >
                                <p>
                                    <strong>
                                        Penthouse 3 height in ft from
                                        rangefinder
                                    </strong>
                                    <span className="text-red-600">*</span>
                                </p>
                                <input
                                    type="number"
                                    className="input input-bordered input-sm w-full  rounded-none bg-slate-200"
                                    value="0"
                                    name="computedlabel_6"
                                />
                            </div>
                        </div>
                        <div
                            id="photo_picker_148_div"
                            className={
                                penthouse > 0 && penthouse <= 3
                                    ? "show"
                                    : "hidden"
                            }
                        >
                            <div
                                className="flex flex-col gap-2  text-xs "
                                style={{ width: "418px" }}
                            >
                                <p>
                                    <strong>Photos of Penthouse - 1</strong>
                                    <span className="text-red-600">*</span>
                                </p>
                                <input
                                    type="file"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    id="photo_picker_148"
                                    name="photo_picker_148"
                                ></input>
                                <input
                                    type="datetime-local"
                                    className="input input-bordered input-sm w-full text-xs rounded-none"
                                    id="photo_picker_148_datepicker"
                                    name="photo_picker_148_timestamp"
                                ></input>
                                <img
                                    src="images/cat.jpg"
                                    id="photo_picker_148_img"
                                ></img>{" "}
                                <p className=" text-xs  text-red-500 font-bold">
                                    Photos of Penthouse - 1 is required
                                </p>
                            </div>
                        </div>
                        <div
                            id="photo_picker_149_div"
                            className={
                                penthouse > 1 && penthouse <= 3
                                    ? "show"
                                    : "hidden"
                            }
                        >
                            <div
                                className="flex flex-col gap-2 text-xs"
                                style={{ width: "418px" }}
                            >
                                <p>
                                    <strong>Photos of Penthouse - 2</strong>
                                    <span className="text-red-600">*</span>
                                </p>
                                <input
                                    type="file"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    id="photo_picker_149"
                                    name="photo_picker_149"
                                ></input>
                                <input
                                    type="datetime-local"
                                    className="input input-bordered input-sm w-full text-xs rounded-none"
                                    id="photo_picker_149_datepicker"
                                    name="photo_picker_149_timestamp"
                                ></input>
                                <img
                                    src="images/cat.jpg"
                                    id="photo_picker_149_img"
                                ></img>{" "}
                                <p className=" text-xs  text-red-500 font-bold">
                                    Photos of Penthouse - 2 is required
                                </p>
                            </div>
                        </div>
                        <div
                            id="photo_picker_150_div"
                            className={penthouse == 3 ? "show" : "hidden"}
                        >
                            <div
                                className="flex flex-col gap-2  text-xs  "
                                style={{ width: "418px" }}
                            >
                                <p>
                                    <strong>Photos of Penthouse - 3</strong>
                                    <span className="text-red-600">*</span>
                                </p>
                                <input
                                    type="file"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    id="photo_picker_150"
                                    name="photo_picker_150"
                                ></input>
                                <input
                                    type="datetime-local"
                                    className="input input-bordered input-sm w-full text-xs rounded-none"
                                    id="photo_picker_150_datepicker"
                                    name="photo_picker_150_timestamp"
                                ></input>
                                <img
                                    src="images/cat.jpg"
                                    id="photo_picker_150_img"
                                ></img>{" "}
                                <p className=" text-xs  text-red-500 font-bold">
                                    Photos of Penthouse - 3 is required
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="text-center mt-7">
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
        </>
    );
};

export default Penthouse;
