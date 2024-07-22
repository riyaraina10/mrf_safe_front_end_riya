export default function UploadDownloadReports() {
    return (
        <>
            <div>
                <div className="text-black mt-4">
                    Upload & Download Report and Data
                </div>
                <div className="flex  gap-28 mt-4">
                    <div className="flex items-center ">
                        <button className="text-black bg-slate-100 p-2.5 rounded-l ml-2 border-2">
                            Reports & Package
                        </button>
                        <div className="dropdown dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn bg-blue-600 hover:bg-blue-600 rounded-none rounded-r"
                            >
                                C
                            </div>
                            <ul
                                tabIndex={0}
                                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black"
                            >
                                <li>
                                    <a>Item 1</a>
                                </li>
                                <li>
                                    <a>Item 2</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button className="text-black bg-blue-600 p-2 rounded-md">
                        Submittal
                    </button>
                </div>
            </div>
        </>
    );
}
