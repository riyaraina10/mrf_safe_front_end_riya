import React from "react";
import { TiTick } from "react-icons/ti";

const Gps = () => {
    return (
        <>
            <div className="bg-white p-3 mb-4">
                <div>
                    <h4 className="text-center">
                        GPS Coordinates Sector - Gamma
                    </h4>
                </div>
                <form id="gps_gamma_form" method="POST">
                    <div>
                        <div className="mt-6 flex text-xs gap-8 mb-4">
                            <div className="flex flex-col text-xs gap-1 w-1/3">
                                <p>
                                    <strong>Latitude</strong>
                                    <span className="text-xs text-red-600">
                                        *
                                    </span>
                                </p>

                                <input
                                    type="text"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    name="numeric_223"
                                    value="13"
                                ></input>

                                <p className=" text-red-500 text-xs font-bold">
                                    Latitude is required.
                                </p>
                            </div>
                            <div className="flex flex-col text-xs gap-1 w-1/3">
                                <p>
                                    <strong>Longitude</strong>
                                    <span className="text-xs text-red-600">
                                        *
                                    </span>
                                </p>
                                <input
                                    type="text"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    name="numeric_3"
                                    value="14"
                                ></input>
                                <p className=" text-red-500 text-xs font-bold">
                                    Longitude is required.
                                </p>
                            </div>
                            <div className="flex flex-col gap-1 text-xs w-1/3">
                                <div>
                                    <input
                                        type="checkbox"
                                        name="loc"
                                        id="checkboxGps_gamma"
                                    />
                                    <label htmlFor="loc">
                                        <strong>
                                            Check to fetch all location
                                        </strong>
                                    </label>
                                </div>
                                <div>
                                    <button className=" pl-3 pr-3 pt-2 pb-2 text-xs text-white bg-blue-950">
                                        Get
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex text-xs gap-8 mb-4">
                            <div className="flex flex-col text-xs gap-1 w-1/3">
                                <p>
                                    <strong>Latitude</strong>
                                    <span className="text-xs text-red-600">
                                        *
                                    </span>
                                </p>
                                <input
                                    type="text"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    name="numeric_13"
                                    value="15"
                                ></input>
                                <p className=" text-red-500 text-xs font-bold">
                                    Latitude is required.
                                </p>
                            </div>
                            <div className="flex flex-col text-xs gap-1 w-1/3">
                                <p>
                                    <strong>Longitude</strong>
                                    <span className="text-xs text-red-600">
                                        *
                                    </span>
                                </p>
                                <input
                                    type="text"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    name="numeric_14"
                                    value="16"
                                ></input>
                                <p className=" text-red-500 text-xs font-bold">
                                    Longitude is required.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 text-xs w-1/3">
                                <p>
                                    <strong></strong>
                                    <span className="text-xs text-red-600"></span>
                                </p>
                                <div>
                                    <button className=" pl-3 pr-3 pt-2 pb-2 text-xs text-white bg-blue-950">
                                        Get
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex text-xs gap-8 mb-4">
                            <div className="flex flex-col text-xs gap-1 w-1/3">
                                <p>
                                    <strong>Latitude</strong>
                                    <span className="text-xs text-red-600">
                                        *
                                    </span>
                                </p>
                                <input
                                    type="text"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    name="numeric_15"
                                    value="17"
                                ></input>
                                <p className=" text-red-500 text-xs font-bold">
                                    Latitude is required.
                                </p>
                            </div>
                            <div className="flex flex-col text-xs gap-1 w-1/3">
                                <p>
                                    <strong>Longitude</strong>
                                    <span className="text-xs text-red-600">
                                        *
                                    </span>
                                </p>
                                <input
                                    type="text"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    name="numeric_16"
                                    value="18"
                                ></input>
                                <p className=" text-red-500 text-xs font-bold">
                                    Longitude is required.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 text-xs w-1/3">
                                <p>
                                    <strong></strong>
                                    <span className="text-xs text-red-600"></span>
                                </p>
                                <div>
                                    <button className=" pl-3 pr-3 pt-2 pb-2 text-xs text-white bg-blue-950">
                                        Get
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

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
        </>
    );
};

export default Gps;
