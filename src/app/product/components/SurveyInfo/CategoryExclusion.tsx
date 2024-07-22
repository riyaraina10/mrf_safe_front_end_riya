import React, { useEffect, useState } from "react";

import { TiTick } from "react-icons/ti";

const CategoryExclusion = () => {
    const [category, setcategory] = useState({
        towersite: "Yes",
        height: "9",
        building: "Yes",
    });
    const [isclicked, setisclicked] = useState(false);
    const [mandatory, setMandatory] = useState({
        towerMandatory: false,
        heightMandatory: false,
        buildingMandatory: false,
        save: true,
    });

    const handleSave = () => {
        setisclicked(true);
        setMandatory({
            towerMandatory: category.towersite === "",
            heightMandatory: category.height === "",
            buildingMandatory: category.building === "",
            save:
                category.towersite !== "" &&
                category.height !== "" &&
                category.building !== "",
        });
    };

    return (
        <>
            <div className="bg-white p-3 mb-4">
                <div>
                    <h4 className="text-center">Category Exclusion</h4>
                </div>

                <form id="section_35" method="POST">
                    <div className="flex flex-col gap-3 mt-6">
                        <div>
                            <p>
                                <strong className="text-xs">
                                    is this a tower site ?
                                </strong>
                            </p>
                            <p>
                                <strong className="text-xs">
                                    (Monopole, Self Support, Guyed, Stealth Pole
                                    Internal & External Array)
                                </strong>
                                <span className="text-red-600">*</span>
                            </p>
                            <select
                                className="select select-bordered select-sm w-full m rounded-none text-xs"
                                name="tri_272"
                                value={category.towersite}
                                onChange={(e) => {
                                    setcategory({
                                        ...category,
                                        towersite: e.target.value,
                                    });
                                }}
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <p
                                className={
                                    mandatory.towerMandatory
                                        ? " text-xs  text-red-500 font-bold"
                                        : "hidden"
                                }
                            >
                                Is this a tower site required.
                            </p>
                        </div>
                        <div>
                            <p>
                                <strong className="text-xs">
                                    Height of ATT Lowest Antenna
                                </strong>
                                <span className="text-red-600">*</span>
                            </p>
                            <input
                                type="number"
                                className="input input-bordered input-sm w-full  rounded-none"
                                name="numeric_273"
                                id="numeric_273"
                                value={category.height}
                                onChange={(e) => {
                                    setcategory({
                                        ...category,
                                        height: e.target.value,
                                    });
                                }}
                            />
                            <p
                                className={
                                    mandatory.heightMandatory
                                        ? " text-xs  text-red-500 font-bold"
                                        : "hidden"
                                }
                            >
                                Height of Antenna is required.
                            </p>
                        </div>
                        <div>
                            <p>
                                <strong className="text-xs">
                                    Is there any building closer than 100 ft to
                                    the tower and any antennas that are lower
                                    than 40ft from the roof of this building
                                    (within 100 ft) *
                                </strong>
                                <span className="text-red-600">*</span>
                            </p>
                            <select
                                className="select select-bordered select-sm w-full m rounded-none text-xs"
                                name="tri_274"
                                id="tri_274"
                                value={category.building}
                                onChange={(e) => {
                                    setcategory({
                                        ...category,
                                        building: e.target.value,
                                    });
                                }}
                            >
                                <option value="">Select</option>
                                <option value="Yes" selected>
                                    Yes
                                </option>
                                <option value="No">No</option>
                            </select>
                            <p
                                className={
                                    mandatory.buildingMandatory
                                        ? " text-xs  text-red-500 font-bold"
                                        : "hidden"
                                }
                            >
                                This is required field. Please choose.
                            </p>
                        </div>
                    </div>
                </form>
                <div className="text-center mt-7">
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

export default CategoryExclusion;
