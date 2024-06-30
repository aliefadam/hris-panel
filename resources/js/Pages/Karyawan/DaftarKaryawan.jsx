import TableDaftarKaryawan from "@/Components/TableDaftarKaryawan";
import MainLayout from "@/Layouts/MainLayout";
import React from "react";

function DaftarKaryawan({ title, user, auth }) {
    return (
        <MainLayout title={title} user={auth.user}>
            <div className="flex justify-between items-center mb-5">
                <div className="">
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <i className="fa-regular fa-magnifying-glass"></i>
                        </div>
                        <input
                            type="text"
                            id="simple-search"
                            className="bg-white border-transparent shadow text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full ps-10 p-2.5"
                            placeholder="Cari"
                        />
                    </div>
                </div>
            </div>
            <TableDaftarKaryawan user={user} />

            <div className="flex justify-end items-center mt-5">
                <nav aria-label="Page navigation example">
                    <ul className="flex items-center -space-x-p4 h-10 text-sm">
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                <span className="sr-only">Previous</span>
                                <svg
                                    className="w-2.5 h-2.5 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 1 1 5l4 4"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                aria-current="page"
                                className="z-10 flex items-center justify-center px-4 h-10 leading-tight poppins-semibold text-yellow-300 border border-indigo-300 bg-indigo-900"
                            >
                                1
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                            >
                                2
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                <span className="sr-only">Next</span>
                                <svg
                                    className="w-2.5 h-2.5 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 9 4-4-4-4"
                                    />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </MainLayout>
    );
}

export default DaftarKaryawan;
