import { Link } from "@inertiajs/react";
import React from "react";

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

function Sidebar({ employee }) {
    const role = getRole(employee);
    const SideBarLink = [
        {
            name: "Home",
            route: `${role}.home`,
            icon: "fa-regular fa-house",
        },
        {
            name: "Perizinan",
            route: `${role}.perizinan`,
            icon: "fa-regular fa-clipboard-check",
        },
        {
            name: "Riwayat Izin",
            route: `${role}.riwayat-perizinan`,
            icon: "fa-regular fa-clock-rotate-left",
        },
        {
            name: "Data Rekapan",
            route: `${role}.data-rekapan`,
            icon: "fa-regular fa-notebook",
        },
    ];

    if (role == "hr") {
        SideBarLink.splice(3, 1, {
            name: "Pengajuan Perizinan",
            route: `${role}.pengajuan-izin`,
            icon: "fa-regular fa-ballot-check",
        });

        SideBarLink.splice(4, 1, {
            name: "Daftar Karyawan",
            route: `${role}.daftar-karyawan`,
            icon: "fa-regular fa-users",
        });

        SideBarLink.push({
            name: "Penilaian KPI",
            route: `${role}.penilaian-kpi`,
            icon: "fa-regular fa-chart-line-up",
        });
    }

    return (
        <aside className="w-[280px] bg-gradient-to-r from-indigo-900 to-indigo-700 h-screen fixed top-0">
            <div className="flex p-5 gap-2 items-center justify-center">
                <img className="w-[25px]" src="/imgs/db-logo.png" alt="" />
                <span className="text-white text-2xl poppins-bold leading-none">
                    HRIS DBKLIK
                </span>
            </div>

            <div className="mt-5 px-3 space-y-2">
                {SideBarLink.map((link, i) => {
                    return (
                        <Link
                            key={i}
                            href={route(link.route)}
                            className={`flex gap-2 items-center w-full p-3 rounded-lg ${
                                route().current(link.route)
                                    ? "bg-white"
                                    : "hover:bg-[#f3f3f32d]"
                            }`}
                        >
                            <i
                                className={`text-xl w-6 text-center ${
                                    route().current(link.route)
                                        ? "text-indigo-900"
                                        : "text-white"
                                } ${link.icon}`}
                            ></i>
                            <span
                                className={`${
                                    route().current(link.route)
                                        ? "text-indigo-900"
                                        : "text-white"
                                } poppins-medium`}
                            >
                                {link.name}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </aside>
    );
}

export default Sidebar;
