import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { TiTick } from "react-icons/ti";
const animatedComponents = makeAnimated();
const options = [
    { value: "Sprint", label: "Sprint" },
    { value: "ATT", label: "ATT" },
    { value: "Verizon", label: "Verizon" },
    { value: "CLRWR", label: "CLRWR" },
];
const Collocation = () => {
    const [collocation, setCollocation] = useState({
        collocated: "Yes",
        operators: options,
    });
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
                            <p className=" text-xs  text-red-500 font-bold">
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
                                value={options}
                                name="listpicker_113[]"
                            />
                            <p className=" text-xs  text-red-500 font-bold">
                                Please select Operator.
                            </p>
                        </form>
                    </div>
                </div>
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

export default Collocation;
