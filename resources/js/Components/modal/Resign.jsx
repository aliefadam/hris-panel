import React from "react";

function Resign() {
    return (
        <div
            id="resign-modal"
            tabIndex={-1}
            aria-hidden="true"
            className="animate__animated animate__fadeInDown hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
            <div className="relative p-4 w-[40%] max-h-full">
                {/* Modal content */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* Modal header */}
                    <div className="bg-gradient-to-r from-indigo-900 to-indigo-700 flex items-center justify-between p-4 border-b rounded-t">
                        <h3 className="text-lg font-semibold text-yellow-300">
                            Resign
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                            data-modal-hide="resign-modal"
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
                    <form className="p-4 md:p-5">
                        <div className="mb-4">
                            <label
                                htmlFor="tanggal-resign"
                                className="block mb-1 text-sm font-medium text-indigo-900 dark:text-white"
                            >
                                Tanggal Resign
                            </label>
                            <input
                                type="date"
                                id="tanggal-resign"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium text-indigo-900 dark:text-white">
                                Catatan
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                                defaultValue={""}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                htmlFor="surat-resign"
                            >
                                File Surat
                            </label>
                            <input
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                                id="surat-resign"
                                type="file"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="text-white inline-flex items-center bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                            >
                                Simpan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Resign;
