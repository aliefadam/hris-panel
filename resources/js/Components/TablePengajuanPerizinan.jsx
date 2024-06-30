import React from "react";
import DetailPerizinan from "./modal/DetailPerizinan";

const getRole = (employee) => {
    let role = "";
    if (employee.position.position_name == "Manager") {
        if (employee.division.division_name == "HR") {
            role = "hr";
        } else {
            role = "manager";
        }
    } else {
        role = employee.position.position_name;
    }
    return role.toLowerCase();
};

function TablePengajuanPerizinan({ user }) {
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
                        <td className="px-6 py-4">Alief Adam</td>
                        <td className="px-6 py-4">IT - Developer</td>
                        <td className="px-6 py-4">Sakit</td>
                        <td className="px-6 py-4">
                            12 Juni 2024 - 13 Juni 2024
                        </td>
                        <td className="px-6 py-4">Demam</td>
                        <td className="px-6 py-4">12 Juni 2024</td>
                        <td className="px-6 py-4">
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                                Membutuhkan Respon
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* Modal Detail Perizinan */}
            <DetailPerizinan role={getRole(user.employee)} />
        </div>
    );
}

export default TablePengajuanPerizinan;
