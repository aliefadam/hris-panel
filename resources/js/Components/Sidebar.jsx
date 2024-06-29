import { Link } from "@inertiajs/react";
import React from "react";

const SideBarLink = [
    {
        name: "Home",
        route: "home",
        icon: "fa-regular fa-house",
    },
    {
        name: "Perizinan",
        route: "perizinan",
        icon: "fa-regular fa-clipboard-check",
    },
    {
        name: "Riwayat Izin",
        route: "riwayat-perizinan",
        icon: "fa-regular fa-clock-rotate-left",
    },
    {
        name: "Data Rekapan",
        route: "data-rekapan",
        icon: "fa-regular fa-notebook",
    },
];

function Sidebar() {
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
