import React from "react";

function FilterKPIDrawer() {
    return (
        <div
            id="drawer-right-example"
            className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800"
            tabIndex={-1}
            aria-labelledby="drawer-right-label"
        >
            <h5
                id="drawer-right-label"
                className="inline-flex items-center mb-4 gap-2 text-base font-semibold text-gray-500 dark:text-gray-400"
            >
                <i className="fa-regular fa-filter"></i>
                Filter
            </h5>
            <button
                type="button"
                data-drawer-hide="drawer-right-example"
                aria-controls="drawer-right-example"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
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
                <span className="sr-only">Close menu</span>
            </button>
            <div className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                <form action="">
                    <div className="mb-5">
                        <label
                            htmlFor="tanggal_mulai_izin"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Periode
                        </label>
                        <input
                            type="month"
                            id="tanggal_mulai_izin"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name@flowbite.com"
                            required=""
                        />
                    </div>
                </form>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <a
                    href="#"
                    className="px-4 py-2 text-sm font-medium text-center text-red-700 bg-white border border-red-200 rounded-lg focus:outline-none hover:bg-red-100 focus:z-10 focus:ring-4 focus:ring-gray-100"
                >
                    Reset Filter
                </a>
                <a
                    href="#"
                    className="inline-flex justify-center items-center px-4 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300"
                >
                    Terapkan
                </a>
            </div>
        </div>
    );
}

export default FilterKPIDrawer;
