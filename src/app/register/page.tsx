export default function details() {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="h-30 w-80 flex  flex-col  justify-items-center items-center">
                    <h1 className="text-2xl">Enter Your details</h1>
                    <label className="input input-bordered flex items-center gap-2 m-5">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Enter Name"
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 m-5">
                        <input
                            type="text"
                            className="grow"
                            placeholder=" Enter Email"
                        />
                    </label>
                    <label className="input input-bordered flex items-center  m-5 gap-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder=" Create Username"
                        />
                    </label>
                    <label className="input input-bordered flex items-center  m-5 gap-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder=" Create Password"
                        />
                    </label>
                    <button className="btn m-5 btn-info">Register</button>
                </div>
            </div>
        </>
    );
}
