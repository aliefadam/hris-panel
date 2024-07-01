import React from "react";

function TableLembur() {
    return (
        <div className="">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl poppins-semibold text-gray-900">
                    Riwayat Lembur
                </h1>
                <button
                    data-modal-target="tambah-lembur-modal"
                    data-modal-toggle="tambah-lembur-modal"
                    type="button"
                    className="text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                >
                    <i className="fa-regular fa-plus mr-1.5"></i>
                    Tambah Lembur
                </button>
            </div>

            <table className="w-full text-sm text-left mt-5 shadow-lg">
                <thead className="text-xs text-yellow-300 uppercase bg-gradient-to-r from-gray-900 to-gray-700">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            No
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tanggal Lembur
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Keperluan
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Jam Lembur
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total Jam
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Catatan
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-6 py-4">1</td>
                        <td className="px-6 py-4">1 Januari 2022</td>
                        <td className="px-6 py-4">Lembur</td>
                        <td className="px-6 py-4">08:00 - 10:00</td>
                        <td className="px-6 py-4">1 Jam 30 Menit</td>
                        <td className="px-6 py-4">-</td>
                    </tr>
                </tbody>
            </table>

            <div className="mt-5 justify-end">
                <div className="flex justify-end items-center mt-5">
                    <nav aria-label="Page navigation example">
                        <ul className="flex items-center -space-x-p4 h-10 text-sm">
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
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
                                    className="z-10 flex items-center justify-center px-4 h-10 leading-tight poppins-semibold text-yellow-300 border bg-gray-700"
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
                                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
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
            </div>
        </div>
    );
}

export default TableLembur;
