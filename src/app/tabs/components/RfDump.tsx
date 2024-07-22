export default function RfDump() {
    const tableheader = [
        "ANT ID",
        "Operator",
        "Antenna Mfg",
        "Antenna Model",
        "Antenna Type",
        "Freq (MHz)",
        "Tech",
        "Az(°)",
        "EDT(°)",
        "EDT Range For Analysis (°)",
        "MDT(°)",
        "HBW(°)",
        "Antenna Gain (dBd)",
        "Antenna Aperture (ft)",
        "Transmetter Power (Watts)",
        "Total Loss (dB)",
        "Total ERP (Watts)",
        "Total EIRP (Watts)",
        "Antenna Radiation Centerline",
        "Action",
    ];
    return (
        <>
            <div className="flex flex-col">
                <div className="flex text-black justify-between mt-6">
                    <h2>Antenna List</h2>
                    <div className="flex gap-1">
                        <button className="bg-blue-600 p-2 rounded-md">
                            Add
                        </button>
                        <button className="bg-cyan-400 p-2 rounded-md">
                            Export RFDump
                        </button>
                        <button className="bg-blue-600 p-2 rounded-xl">
                            IXUX
                        </button>
                        <button className="bg-slate-200 p-2 rounded-xl">
                            RoofMaster
                        </button>
                        <button className="bg-green-600 p-2 rounded-s">
                            Export IXUX/RoofMaster
                        </button>
                    </div>
                </div>
                <table className="m-2 mt-4">
                    <tbody>
                        <tr className="text-black ">
                            {tableheader.map((e) => (
                                <th className="border-2 border-slate-600 font-medium text-sm">
                                    {e}
                                </th>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
