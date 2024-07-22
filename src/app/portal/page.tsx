"use client";
import { useRouter } from "next/navigation";
export default function age() {
    const router = useRouter();
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-white">
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-slate-900">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="join flex justify-center space-x-2">
                <button className="join-item btn">1</button>
                <button className="join-item btn ">2</button>
                <button className="join-item btn">3</button>
            </div>
        </>
    );
}
