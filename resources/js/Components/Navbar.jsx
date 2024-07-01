import { Link } from "@inertiajs/react";
import { useState } from "react";

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

function Navbar({ name, email, employee }) {
    const getDate = () => {
        const date = new Date();
        const daysString = [
            "Minggu",
            "Senin",
            "Selasa",
            "Rabu",
            "Kamis",
            "Jumat",
            "Sabtu",
        ];
        const dayName = daysString[date.getDay()];
        const day = date.getDate().toString().padStart(2, "0");
        const monthString = [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
        ];
        const month = monthString[date.getMonth()];
        const year = date.getFullYear();
        return `${dayName}, ${day} ${month} ${year}`;
    };

    const getHours = () => {
        const date = new Date();
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const seconds = date.getSeconds().toString().padStart(2, "0");
        return `${hours}:${minutes}:${seconds}`;
    };

    const [viewDate, setViewDate] = useState(getDate());
    const [viewHours, setViewHours] = useState(getHours());

    setInterval(() => {
        setViewDate(getDate());
    }, 1000);

    setInterval(() => {
        setViewHours(getHours());
    }, 1000);

    return (
        <nav className="bg-white rounded-lg shadow-lg flex justify-between items-center fixed top-0 px-5 w-[calc(98.5%-300px)] left-[300px] h-[70px]">
            <div className="flex gap-3 items-center">
                <div className="w-[120px] text-lg text-center poppins-semibold text-yellow-400 bg-gradient-to-r from-indigo-900 to-indigo-700 rounded-lg p-2">
                    {viewHours}
                </div>
                <div className="text-xl text-indigo-900 poppins-semibold">
                    {viewDate}
                </div>
            </div>
            <div className="flex items-center gap-5">
                <i
                    data-dropdown-toggle="dropdownNotification"
                    className="cursor-pointer text-2xl text-indigo-900 fa-solid fa-bell"
                ></i>
                <i
                    id="dropdownSetting"
                    data-dropdown-toggle="dropdown-setting"
                    className="cursor-pointer text-2xl text-indigo-900 fa-solid fa-user-gear"
                ></i>
            </div>

            {/* Dropdown Setting */}
            <div
                style={{ translate: "-25px 15px" }}
                id="dropdown-setting"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-[200px]"
            >
                <div className="px-4 py-3 text-sm text-gray-900">
                    <div>{name}</div>
                    <div className="font-medium truncate">{email}</div>
                </div>
                <ul
                    className="py-2 text-sm text-gray-700"
                    aria-labelledby="dropdownSetting"
                >
                    <li>
                        <Link
                            href={route(`${getRole(employee)}.profil-saya`)}
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            Profil Saya
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={route(`${getRole(employee)}.ganti-password`)}
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            Ganti Password
                        </Link>
                    </li>
                </ul>
                <div className="py-2">
                    <Link
                        href={route("logout")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Keluar
                    </Link>
                </div>
            </div>

            {/* Dropdown Notification */}
            <div
                style={{ translate: "-25px 15px" }}
                id="dropdownNotification"
                className="z-20 hidden w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow-lg"
                aria-labelledby="dropdownNotificationButton"
            >
                <div className="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50">
                    Notifikasi
                </div>
                <div className="divide-y divide-gray-100">
                    <a href="#" className="flex px-4 py-3 hover:bg-gray-100">
                        <div className="flex-shrink-0">
                            <img
                                className="rounded-full w-10 h-10 shadow-lg"
                                src="/imgs/no-picture.png"
                                alt="Jese image"
                            />
                        </div>
                        <div className="w-full ps-3">
                            <div className="text-gray-500 text-sm mb-1">
                                <span className="font-semibold text-gray-900">
                                    Deasy Mei - HRD
                                </span>
                            </div>
                            <div className="text-sm text-gray-500 mb-1.5">
                                Pengajuan Izin telah disetujui
                            </div>
                            <div className="text-xs text-indigo-900 poppins-semibold">
                                10 minutes ago
                            </div>
                        </div>
                    </a>
                </div>
                <Link
                    href={route(`${getRole(employee)}.notifikasi`)}
                    className="block py-3 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100"
                >
                    <div className="inline-flex items-center">
                        Lihat Semua Notifikasi
                    </div>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
