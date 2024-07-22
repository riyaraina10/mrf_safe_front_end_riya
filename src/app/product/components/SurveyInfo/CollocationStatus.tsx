import React, { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { TiTick } from "react-icons/ti";

const animatedComponents = makeAnimated();

const CollocationStatus = () => {
    const options = [
        { value: "Sprint", label: "Sprint" },
        { value: "T-Mobile", label: "T-Mobile" },
        { value: "Verizon", label: "Verizon" },
        { value: "CLRWR", label: "CLRWR" },
    ];
    const [collocation, setCollocation] = useState({
        collocated: "Yes",
        operators: options,
    });
    const [issaved, setissaved] = useState(false);
    const [mandatory, setMandatory] = useState(true);
    const handleSave = () => {
        setissaved(true);
        if (
            collocation.collocated != "" &&
            collocation.operators.length !== 0
        ) {
            setMandatory(true);
        } else {
            setMandatory(false);
        }
    };
    useEffect(() => {
        setissaved(false);
        setMandatory(true);
    }, [collocation]);
    return (
        <>
            <div className="bg-white p-3 mb-4">
                <div>
                    <h4 className="text-center">Collocation Status</h4>
                </div>

                <div className="flex gap-5 mt-6">
                    <div
                        className="flex flex-col gap-2 text-xs "
                        style={{ width: "633px" }}
                    >
                        <p>
                            <strong className="text-xs">
                                Is this site collocated ?
                            </strong>
                            <span className="text-red-600">*</span>
                        </p>
                        <div>
                            <select
                                className="select select-bordered select-sm w-full m rounded-none text-xs"
                                name="tri_112"
                                id="site_allocated_id"
                                onChange={(e) => {
                                    setCollocation({
                                        ...collocation,
                                        collocated: e.target.value,
                                    });
                                }}
                                value={collocation.collocated}
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <p
                                className={
                                    issaved && collocation.collocated == ""
                                        ? " text-xs  text-red-500 font-bold"
                                        : "hidden"
                                }
                            >
                                Is this site collocated is required.
                            </p>
                        </div>
                    </div>

                    <div
                        className={
                            collocation.collocated === "Yes"
                                ? "flex flex-col gap-2 text-xs flex-1 "
                                : "hidden"
                        }
                    >
                        <form id="section_18" method="POST">
                            <p>
                                <strong>
                                    Which other operators are present on this
                                    site ?
                                </strong>
                                <span className="text-red-600">*</span>
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
                                value={collocation.operators}
                                // onChange={(choice) =>
                                //     setCollocation({
                                //         ...collocation,
                                //         operators: choice,
                                //     })
                                // }
                                name="listpicker_113[]"
                            />
                            <p
                                className={
                                    issaved && collocation.operators.length == 0
                                        ? " text-xs  text-red-500 font-bold"
                                        : "hidden"
                                }
                            >
                                Please select Operator.
                            </p>
                        </form>
                    </div>
                </div>
                <div className="text-center mt-7">
                    <div className="border-t border-grey ">
                        <p
                            className={
                                mandatory
                                    ? "hidden"
                                    : "mt-2  text-red-500 text-xs font-bold"
                            }
                        >
                            Please check manadatory fields.
                        </p>
                        <div
                            className={
                                mandatory && issaved
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

export default CollocationStatus;
