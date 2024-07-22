export default function OtherAntennas() {
    const tableheader2 = [
        "Ant ID",
        "Operator",
        "Antenna Radiation Centerline(ft)",
        "Antenna Aperture (ft)",
        "Z-Height from Ground (ft)",
    ];
    return (
        <>
            <div className={"flex flex-col"}>
                <div className="flex flex-col text-black m-3">
                    <div className="flex justify-between">
                        <h2>Building Heights List</h2>
                        <button className="bg-blue-600">Plus</button>
                    </div>

                    <table className="border-2 border-slate-500 text-sm font-extralight mt-6">
                        <tbody>
                            <tr>
                                <th className="border-2 border-slate-600">
                                    Z-Levels
                                </th>
                                <th className="border-2 border-slate-600">
                                    Height From Ground(AGL)Ft
                                </th>
                                <th className="border-2 border-slate-600">
                                    Action
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col text-black m-3">
                    <div className="flex justify-between">
                        <h2> Z-Heights</h2>
                    </div>

                    <table className="  text-sm font-extralight mt-6">
                        <tbody>
                            <tr>
                                {tableheader2.map((e) => (
                                    <th className="border-2 border-slate-600">
                                        {e}
                                    </th>
                                ))}
                            </tr>
                            <tr>
                                <td
                                    className="text-center border-2 border-slate-600"
                                    colSpan={4}
                                >
                                    No more records
                                </td>
                                <td className="border-2 border-slate-600"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
