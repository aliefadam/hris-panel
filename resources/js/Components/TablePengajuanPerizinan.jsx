import React, { useState } from "react";
import DetailPerizinan from "./modal/DetailPerizinan";

const generateStatus = (status) => {
    if (status.includes("pending")) {
        return (
            <span className="capitalize bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                Pending
            </span>
        );
    } else if (status.includes("Disetujui")) {
        return (
            <span className="capitalize bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                {status}
            </span>
        );
    } else {
        return (
            <span className="capitalize bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                {status}
            </span>
        );
    }
};

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

function TablePengajuanPerizinan({ user, perizinan }) {
    const [detail, setDetail] = useState();

    const handleClick = (i) => {
        setDetail(perizinan[i]);
    };

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
                    {perizinan.map((p, i) => (
                        <tr
                            onClick={() => handleClick(i)}
                            key={i}
                            data-modal-target="default-modal"
                            data-modal-toggle="default-modal"
                            className="hover:bg-gray-100 cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                            <td className="px-6 py-4">{i + 1}</td>
                            <td className="px-6 py-4">{p.nama}</td>
                            <td className="px-6 py-4">{p.divisi}</td>
                            <td className="px-6 py-4 capitalize">
                                {p.jenis_izin}
                            </td>
                            <td
                                className="px-6 py-4"
                                dangerouslySetInnerHTML={{
                                    __html: p.tanggal_izin,
                                }}
                            ></td>
                            <td className="px-6 py-4">{p.catatan}</td>
                            <td className="px-6 py-4">{p.diajukan_pada}</td>
                            <td className="px-1 py-4">
                                {generateStatus(p.status)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal Detail Perizinan */}
            <DetailPerizinan
                employee={user.employee}
                getRole={getRole}
                detail={detail}
                generateStatus={generateStatus}
                role={getRole(user.employee)}
            />
        </div>
    );
}

export default TablePengajuanPerizinan;
