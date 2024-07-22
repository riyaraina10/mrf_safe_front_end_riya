import { TiTick } from "react-icons/ti";

const ClimateConditions = () => {
    return (
        <>
            {" "}
            <div className="bg-white p-3 mb-4">
                <div>
                    <h4 className="text-center">
                        Climate Conditions at Time of On-Site Audit
                    </h4>
                </div>
                <form id="section_3" method="POST">
                    <div className="mt-6">
                        <button className="p-2 bg-blue-950 text-white text-xs">
                            Get Temperature & Wind Factor
                        </button>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex flex-col flex-grow ">
                            <div>
                                <p>
                                    <strong className="text-xs">
                                        Temperature
                                    </strong>
                                    <span className="text-red-600">*</span>
                                </p>
                                <input
                                    type="number"
                                    name="numeric_37"
                                    id="numeric_37"
                                    value="9"
                                    className="input input-bordered input-sm w-full  rounded-none"
                                />
                                <p className="text-xs  text-red-500 font-bold">
                                    Temperature is required.
                                </p>
                            </div>
                            <div className="flex flex-col">
                                <p>
                                    <strong className="text-xs">
                                        Sky Conditions:
                                    </strong>
                                    <span className="text-red-600">*</span>
                                </p>
                                <select
                                    className="select select-bordered select-sm m rounded-none text-xs"
                                    name="listpicker_38"
                                >
                                    <option>Select</option>
                                    <option value="Cloudy" selected>
                                        Cloudy
                                    </option>
                                    <option value="Overcast">Overcast</option>
                                    <option value="Sunny">Sunny</option>
                                </select>
                                <p className=" text-xs  text-red-500 font-bold">
                                    Sky Conditions is required.
                                </p>
                            </div>
                        </div>
                        <div className="flex-grow">
                            <p>
                                <strong className="text-xs">
                                    Wind factor in mph
                                </strong>
                                <span className="text-red-600">*</span>
                            </p>
                            <input
                                type="number"
                                name="numeric_39"
                                id="numeric_39"
                                value="8"
                                className="input input-bordered input-sm w-full  rounded-none"
                            />
                            <p className=" text-xs  text-red-500 font-bold">
                                Wind factor is required.
                            </p>
                        </div>
                        <div className="flex-grow">
                            <p>
                                <strong className="text-xs">
                                    Is it Raining/Snowing/hail, etc ?
                                </strong>
                                <span className="text-red-600">*</span>
                            </p>
                            <select
                                className="select select-bordered select-sm w-full m rounded-none text-xs"
                                name="tri_40"
                            >
                                <option>Select</option>
                                <option value="Yes" selected>
                                    Yes
                                </option>
                                <option value="No">No</option>
                            </select>
                            <p className=" text-xs  text-red-500 font-bold">
                                Is it Raining/Snowing/hail, etc ? is required.
                            </p>
                        </div>
                    </div>
                </form>
                <div className="text-center mt-10">
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

export default ClimateConditions;
