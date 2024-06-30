import { Link } from "@inertiajs/react";
import React from "react";

function TableDaftarKaryawan({ user }) {
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
                            Jabatan
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Cabang
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            #
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((employee, i) => (
                        <tr
                            key={i}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                            <td className="px-6 py-4">{i + 1}</td>
                            <td className="px-6 py-4">{employee.name}</td>
                            <td className="px-6 py-4">
                                {employee.employee.division.division_name}{" "}
                                {employee.employee.sub_division == null
                                    ? ""
                                    : `- ${employee.employee.sub_division.sub_division_name}`}
                            </td>
                            <td className="px-6 py-4">
                                {employee.employee.position.position_name}
                            </td>
                            <td className="px-6 py-4">
                                {employee.employee.branch.branch_name}
                            </td>
                            <td className="px-6 py-4">
                                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                                    Aktif
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <Link
                                    href={route("hr.detail-karyawan", {
                                        user: employee.id,
                                    })}
                                    type="button"
                                    className="text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 flex w-fit text-center"
                                >
                                    Lihat Detail
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableDaftarKaryawan;
