export default function ViewGenerateReport() {
    return (
        <>
            <div className=" flex flex-col">
                <div className="text-black mt-4">View &Generate Report</div>
                <div className="flex gap-6 mt-3">
                    <button className="bg-green-700 p-2">
                        Generated RFSSR Report
                    </button>
                    <button className="bg-orange-500 p-2">
                        Re-generate Report
                    </button>
                </div>
            </div>
            ;
        </>
    );
}
