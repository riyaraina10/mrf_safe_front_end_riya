import React, { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { TiTick } from "react-icons/ti";

const ClimateConditions = () => {
    const [climate, setclimate] = useState({
        temp: "9",
        wind: "8",
        raining: "Yes",
        sky: "Cloudy",
    });
    const [mandatory, setMandatory] = useState({
        tempmandatory: false,
        windmandatory: false,
        rainingmandatory: false,
        skymandatory: false,
        save: true,
    });
    const [isclicked, setisclicked] = useState(false);

    const handleSave = () => {
        setisclicked(true);
        setMandatory({
            tempmandatory: climate.temp === "",
            windmandatory: climate.wind === "",
            rainingmandatory: climate.raining === "",
            skymandatory: climate.sky === "",
            save:
                climate.temp !== "" &&
                climate.wind !== "" &&
                climate.raining !== "" &&
                climate.sky !== "",
        });
    };

    return (
        <>
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
                                    value={climate.temp}
                                    className="input input-bordered input-sm w-full  rounded-none"
                                    onChange={(e) => {
                                        setclimate({
                                            ...climate,
                                            temp: e.target.value,
                                        });
                                    }}
                                />
                                <p
                                    className={
                                        mandatory.tempmandatory
                                            ? "text-xs  text-red-500 font-bold"
                                            : "hidden"
                                    }
                                >
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
                                    value={climate.sky}
                                    onChange={(e) => {
                                        setclimate({
                                            ...climate,
                                            sky: e.target.value,
                                        });
                                    }}
                                >
                                    <option value="">Select</option>
                                    <option value="Cloudy">Cloudy</option>
                                    <option value="Overcast">Overcast</option>
                                    <option value="Sunny">Sunny</option>
                                </select>
                                <p
                                    className={
                                        mandatory.skymandatory
                                            ? "text-xs  text-red-500 font-bold"
                                            : "hidden"
                                    }
                                >
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
                                value={climate.wind}
                                className="input input-bordered input-sm w-full  rounded-none"
                                onChange={(e) => {
                                    setclimate({
                                        ...climate,
                                        wind: e.target.value,
                                    });
                                }}
                            />
                            <p
                                className={
                                    mandatory.windmandatory
                                        ? "text-xs  text-red-500 font-bold"
                                        : "hidden"
                                }
                            >
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
                                onChange={(e) => {
                                    setclimate({
                                        ...climate,
                                        raining: e.target.value,
                                    });
                                }}
                                value={climate.raining}
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <p
                                className={
                                    mandatory.rainingmandatory
                                        ? "text-xs  text-red-500 font-bold"
                                        : "hidden"
                                }
                            >
                                Is it Raining/Snowing/hail, etc ? is required.
                            </p>
                        </div>
                    </div>
                </form>
                <div className="text-center mt-10">
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
        </>
    );
};

export default ClimateConditions;
