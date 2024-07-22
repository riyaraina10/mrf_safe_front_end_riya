"use client";
import { useRouter } from "next/navigation";
import { root } from "postcss";
export default function plan() {
    const router = useRouter();
    return (
        <>
            <div className="flex flex-col items-center justify-center justify-items-center gap-4 overflow-x-auto mt-2 h-screen">
                <span className="text-2xl bg-slate-600 text-center text-black font-bold mt-2 p-2 rounded-2xl">
                    Choose Your Plan
                </span>
                <table className="table table-xl ">
                    <thead>
                        <tr className="text-white">
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Company</th>
                            <th>location</th>
                            <th>Last Login</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>12</th>
                            <td>Sophi Biles</td>
                            <td>Recruiting Manager</td>
                            <td>Gutmann Inc</td>
                            <td>Indonesia</td>
                            <td>2/12/2021</td>
                            <td>Maroon</td>
                        </tr>
                        <tr>
                            <th>13</th>
                            <td>Florida Garces</td>
                            <td>Web Developer IV</td>
                            <td>Gaylord, Pacocha and Baumbach</td>
                            <td>Poland</td>
                            <td>5/31/2020</td>
                            <td>Purple</td>
                        </tr>
                        <tr>
                            <th>14</th>
                            <td>Maribeth Popping</td>
                            <td>Analyst Programmer</td>
                            <td>Deckow-Pouros</td>
                            <td>Portugal</td>
                            <td>4/27/2021</td>
                            <td>Aquamarine</td>
                        </tr>
                        <tr>
                            <th>15</th>
                            <td>Moritz Dryburgh</td>
                            <td>Dental Hygienist</td>
                            <td>Schiller, Cole and Hackett</td>
                            <td>Sri Lanka</td>
                            <td>8/8/2020</td>
                            <td>Crimson</td>
                        </tr>
                        <tr>
                            <th>16</th>
                            <td>Reid Semiras</td>
                            <td>Teacher</td>
                            <td>Sporer, Sipes and Rogahn</td>
                            <td>Poland</td>
                            <td>7/30/2020</td>
                            <td>Green</td>
                        </tr>
                        <tr>
                            <th>17</th>
                            <td>Alec Lethby</td>
                            <td>Teacher</td>
                            <td>Reichel, Glover and Hamill</td>
                            <td>China</td>
                            <td>2/28/2021</td>
                            <td>Khaki</td>
                        </tr>
                        <tr>
                            <th>18</th>
                            <td>Aland Wilber</td>
                            <td>Quality Control Specialist</td>
                            <td>Kshlerin, Rogahn and Swaniawski</td>
                            <td>Czech Republic</td>
                            <td>9/29/2020</td>
                            <td>Purple</td>
                        </tr>
                        <tr>
                            <th>19</th>
                            <td>Teddie Duerden</td>
                            <td>Staff Accountant III</td>
                            <td>Pouros, Ullrich and Windler</td>
                            <td>France</td>
                            <td>10/27/2020</td>
                            <td>Aquamarine</td>
                        </tr>
                        <tr>
                            <th>20</th>
                            <td>Lorelei Blackstone</td>
                            <td>Data Coordiator</td>
                            <td>Witting, Kutch and Greenfelder</td>
                            <td>Kazakhstan</td>
                            <td>6/3/2020</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
                <div className="join">
                    <button
                        onClick={() => router.push("/plan")}
                        className="join-item btn"
                    >
                        1
                    </button>
                    <button
                        onClick={() => router.push("/plan2")}
                        className="join-item btn"
                    >
                        2
                    </button>
                </div>
            </div>
        </>
    );
}
