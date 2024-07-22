import { TiTick } from "react-icons/ti";

const Gps = () => {
    return (
        <>
            <div className="bg-white p-3 mb-4">
                <div>
                    <h4 className="text-center">
                        GPS Coordinates Sector - Alpha
                    </h4>
                </div>
                <form id="gps_aplha_form" method="POST">
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
                                    name="numeric_17"
                                    value="1"
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
                                    name="numeric_1"
                                    value="2"
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
                                        id="checkboxGps_alpha"
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
                                    name="numeric_7"
                                    value="3"
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
                                    name="numeric_8"
                                    value="4"
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
                                    name="numeric_9"
                                    value="6"
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
                                    name="numeric_10"
                                    value="5"
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
