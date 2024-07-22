"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation"; // Notice the correct import is 'next/router', not 'next/navigation'
import { getServerSession } from "next-auth";
import { useEffect } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default function DashboardPage() {
    const router = useRouter();

    const handleSignOut = async () => {
        // The `signOut` method can take options, one of which is a redirect callback
        await signOut({ redirect: false });
        router.push("/");
    };

    // const session = getServerSession();

    // useEffect(() => {
    //   console.log("Session:", session);
    // }, [session]);

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1 space-x-3">
                    <a className="text-2xl text-black">Welcome Kamal</a>
                    <button
                        className=" text-xs p-2 bg-black rounded-xl"
                        onClick={handleSignOut}
                    >
                        Click here to Sign Out
                    </button>
                </div>

                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered w-24 md:w-auto"
                        />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <a>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer lg:drawer-open">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col items-center justify-center space-y-15">
                    <h1>Follow these simple steps </h1>
                    <ul className="steps">
                        <li className="step step-primary">Register</li>
                        <li className="step ">Choose plan</li>
                        <li className="step">Purchase</li>
                        <li className="step">Receive Product</li>
                    </ul>
                    <label
                        htmlFor="my-drawer-2"
                        className="btn btn-primary drawer-button lg:hidden"
                    >
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-2"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li>
                            <button onClick={() => router.push("/register")}>
                                Register
                            </button>
                        </li>
                        <li>
                            <button onClick={() => router.push("/plan")}>
                                Choose plan
                            </button>
                        </li>
                        <li>
                            <button onClick={() => router.push("/tabs")}>
                                Purchase
                            </button>
                        </li>
                        <li>
                            <button onClick={() => router.push("/product")}>
                                ATT
                            </button>
                        </li>
                        <li>
                            <button onClick={() => router.push("/tmo")}>
                                TMO
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

// export async function getServerSideProps(context: any) {
//   const session = await getServerSession(context);
//   if (!session) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: { session },
//   };
// }

// export async function loader({ request }) {
//   const session = await getServerSession({ req: request }, authOptions);
// }
