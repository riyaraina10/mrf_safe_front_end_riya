import React, { useState } from "react";
import Select from "react-select";
import { TiTick } from "react-icons/ti";
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();
const options = [
    { value: "Alpha", label: "Alpha" },
    { value: "Beta", label: "Beta" },
    { value: "Gamma", label: "Gamma" },
    { value: "Delta", label: "Delta" },
    { value: "Epsilon", label: "Epsilon" },
];
const ATTINFO = () => {
    return (
        <>
            <div className="bg-white p-3 mb-4">
                <div>
                    <h4 className="text-center">AT&T Information</h4>
                </div>
                <form id="att_info_section" method="POST">
                    <div className="mt-6 flex text-xs mb-4">
                        <div className="flex flex-col gap-1 w-96">
                            <p>
                                <strong className="text-xs">
                                    Available AT&T sector?
                                </strong>
                                <span className="text-red-600 text-xs">*</span>
                            </p>
                            <p className=" text-red-500 text-xs font-bold ">
                                Available AT&T sector is required.
                            </p>
                            <Select
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                isMulti
                                options={options}
                                styles={{
                                    control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        borderRadius: "0",
                                        height: "100%",
                                        borderColor: state.isFocused
                                            ? "#e5e7eb"
                                            : "#e5e7eb",
                                    }),
                                }}
                                value={options}
                            />
                        </div>
                    </div>
                </form>
                <div className="text-center mt-6">
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

export default ATTINFO;
