import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

const SitePics = () => {
    const [img, setimg] = useState({
        photo_picker_41: "",
        photo_picker_1: "",
    });
    const [issave, setissave] = useState(false);
    const [mandatory, setMandatory] = useState({
        img1: false,
        img2: false,
        save: true,
    });
    const handlesSave = () => {
        setissave(true);
        setMandatory({
            img1: img.photo_picker_41 === "",
            img2: img.photo_picker_1 === "",
            save: img.photo_picker_41 !== "" && img.photo_picker_1 !== "",
        });
    };
    const handlefileupload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const { name, files } = e.target;
            setimg({
                ...img,
                [name]: URL.createObjectURL(files[0]),
            });
        }
    };
    return (
        <>
            <div className="bg-white p-3 mb-4">
                <div>
                    <h4 className="text-center">Site Photographs Pre</h4>
                </div>
                <div>
                    <form id="general_site_view" method="POST">
                        <div className="mt-6 flex gap-8">
                            <div className="flex flex-col text-xs w-1/3 gap-1">
                                <p>
                                    <strong>General Site View - 1 </strong>
                                    <span className="text-red-600">*</span>
                                </p>
                                <input
                                    type="file"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    id="photo_picker_41"
                                    name="photo_picker_41"
                                    onChange={handlefileupload}
                                ></input>
                                <input
                                    type="datetime-local"
                                    className="input input-bordered input-sm w-full text-xs rounded-none"
                                    id="photo_picker_41_datepicker"
                                    name="photo_picker_41_timestamp"
                                ></input>
                                {img.photo_picker_41 !== "" && (
                                    <img src={img.photo_picker_41} alt="" />
                                )}
                                <p
                                    className={
                                        mandatory.img1
                                            ? " text-xs  text-red-500 font-bold"
                                            : "hidden"
                                    }
                                >
                                    General Site View - 1 is required
                                </p>
                            </div>
                            <div className="flex flex-col gap-1 w-1/3 text-xs">
                                <p>
                                    <strong>General Site View - 2</strong>
                                    <span className="text-red-600">*</span>
                                </p>
                                <input
                                    type="file"
                                    className="input input-bordered p-1 input-sm w-full text-xs rounded-none"
                                    id="photo_picker_1"
                                    name="photo_picker_1"
                                    onChange={handlefileupload}
                                ></input>
                                <input
                                    type="datetime-local"
                                    className="input input-bordered input-sm w-full text-xs rounded-none"
                                    id="photo_picker_1_datepicker"
                                    name="photo_picker_1_timestamp"
                                ></input>
                                {img.photo_picker_1 !== "" && (
                                    <img src={img.photo_picker_1} alt="" />
                                )}
                                <p
                                    className={
                                        mandatory.img2
                                            ? " text-xs  text-red-500 font-bold"
                                            : "hidden"
                                    }
                                >
                                    General Site View - 2 is required
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="text-center mt-6">
                    <div className="border-t border-grey ">
                        <p
                            className={
                                mandatory.save
                                    ? "hidden"
                                    : " mt-2  text-red-500 text-xs font-bold"
                            }
                        >
                            Please check manadatory fields.
                        </p>
                        <div
                            className={
                                mandatory.save && issave
                                    ? " text-xs   text-green-600 font-bold flex justify-center"
                                    : "hidden"
                            }
                        >
                            <TiTick />
                            <span>Survey updated successfully.</span>
                        </div>

                        <button
                            className="mt-3 pl-3 pr-3 pt-2 pb-2 text-xs text-white bg-blue-950"
                            onClick={handlesSave}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SitePics;
