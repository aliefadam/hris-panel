import React from "react";
import FilterDrawer from "./modal/FilterDrawer";
import DetailPerizinan from "./modal/DetailPerizinan";

function TablePerizinan() {
    return (
        <div className="overflow-x-auto shadow-lg">
            <table className="w-full text-sm text-left">
                <thead className="text-xs text-yellow-300 uppercase bg-gradient-to-r from-indigo-900 to-indigo-700">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            No
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Jenis Izin
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tanggal Izin
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Catatan
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Diajukan Pada
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        data-modal-target="default-modal"
                        data-modal-toggle="default-modal"
                        className="hover:bg-gray-100 cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                        <td className="px-6 py-4">1</td>
                        <td className="px-6 py-4">Sakit</td>
                        <td className="px-6 py-4">
                            12 Juni 2024 - 13 Juni 2024
                        </td>
                        <td className="px-6 py-4">Demam</td>
                        <td className="px-6 py-4">12 Juni 2024</td>
                        <td className="px-6 py-4">
                            <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                                Disetujui
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* Modal Detail Perizinan */}
            <DetailPerizinan />

            {/* Filter Drawer */}
            <FilterDrawer />
        </div>
    );
}

export default TablePerizinan;
