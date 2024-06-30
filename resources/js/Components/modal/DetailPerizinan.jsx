import React from "react";

const boxTanggapan = () => {
    return (
        <div className="border p-4">
            <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Berikan Balasan
            </label>
            <textarea
                id="message"
                rows={4}
                className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                defaultValue={""}
            />
            <div className="mt-4 flex gap-3">
                <button
                    type="button"
                    className="flex-[1] text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                >
                    Setujui
                </button>
                <button
                    type="button"
                    className="flex-[1] text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                >
                    Tolak
                </button>
            </div>
        </div>
    );
};

function DetailPerizinan({ role }) {
    return (
        <div
            id="default-modal"
            tabIndex={-1}
            aria-hidden="true"
            className="animate__animated animate__fadeInDown hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
            <div className="relative p-4 w-1/2 max-h-full">
                {/* Modal content */}
                <div className="relative bg-white rounded-lg shadow">
                    {/* Modal header */}
                    <div className="bg-gradient-to-r from-indigo-900 to-indigo-700 flex items-center justify-between p-4 border-b rounded-t">
                        <h3 className="text-lg font-semibold text-yellow-300">
                            Detail Perizinan
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                            data-modal-hide="default-modal"
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* Modal body */}
                    <div className="p-4 flex">
                        <div className="flex-[1] space-y-3">
                            <div className="">
                                <h1 className="text-sm text-indigo-900">
                                    Nama
                                </h1>
                                <span className="poppins-medium text-lg">
                                    Alief Adam
                                </span>
                            </div>
                            <div className="">
                                <h1 className="text-sm text-indigo-900">
                                    Jenis Izin
                                </h1>
                                <span className="poppins-medium text-lg">
                                    Sakit
                                </span>
                            </div>
                            <div className="">
                                <h1 className="text-sm text-indigo-900">
                                    Tanggal Izin
                                </h1>
                                <span className="poppins-medium text-lg">
                                    12 Juni 2024 - 13 Juni 2024
                                </span>
                            </div>
                            <div className="">
                                <h1 className="text-sm text-indigo-900">
                                    Catatan
                                </h1>
                                <span className="poppins-medium text-lg">
                                    Demam
                                </span>
                            </div>
                        </div>
                        <div className="flex-[1] space-y-3">
                            <div className="">
                                <h1 className="text-sm text-indigo-900">
                                    Diajukan Pada
                                </h1>
                                <span className="poppins-medium text-lg">
                                    12 Juni 2024
                                </span>
                            </div>
                            <div className="">
                                <h1 className="text-sm text-indigo-900">
                                    File Pendukung
                                </h1>
                                <span className="underline cursor-pointer poppins-medium text-lg">
                                    abc.pdf
                                </span>
                            </div>
                            <div className="">
                                <h1 className="text-sm text-indigo-900">
                                    Status
                                </h1>
                                <span className="poppins-medium text-lg">
                                    <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                                        Disetujui
                                    </span>
                                </span>
                            </div>
                            <div className="">
                                <h1 className="text-sm text-indigo-900">
                                    Feedback/Balasan
                                </h1>
                                <span className="poppins-medium text-lg">
                                    -
                                </span>
                            </div>
                        </div>
                    </div>
                    {role == "hr" ? boxTanggapan() : ""}
                </div>
            </div>
        </div>
    );
}

export default DetailPerizinan;
