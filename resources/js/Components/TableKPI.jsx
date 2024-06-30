import React from "react";

function TableKPI() {
    return (
        <div className="overflow-x-auto shadow-lg">
            <table className="w-full text-sm text-left">
                <thead className="text-xs text-yellow-300 uppercase bg-gradient-to-r from-indigo-900 to-indigo-700">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            No
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nama
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Divisi
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nilai
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Apresiasi Dari Head
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Kedisiplinan
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Periode
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4">1</td>
                        <td className="px-6 py-4">Alief Adam</td>
                        <td className="px-6 py-4">IT - Developer</td>
                        <td className="px-6 py-4">A</td>
                        <td className="px-6 py-4">
                            <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                                Dapat
                            </span>
                        </td>
                        <td className="px-6 py-4">100%</td>
                        <td className="px-6 py-4">Juni 2024</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TableKPI;
