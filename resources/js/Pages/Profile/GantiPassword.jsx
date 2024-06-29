import FormPerizinan from "@/Components/FormPerizinan";
import MainLayout from "@/Layouts/MainLayout";
import React, { useState } from "react";

function GantiPassword({ title, auth }) {
    const [showPasswordOld, setShowPasswordOld] = useState(false);
    const [showPasswordNew, setShowPasswordNew] = useState(false);
    const [showConfirmationPassword, setShowConfirmationPassword] =
        useState(false);

    const toggleShowPasswordOld = () => {
        setShowPasswordOld(!showPasswordOld);
    };

    const toggleShowPasswordNew = () => {
        setShowPasswordNew(!showPasswordNew);
    };

    const toggleShowConfirmationPassword = () => {
        setShowConfirmationPassword(!showConfirmationPassword);
    };

    return (
        <MainLayout user={auth.user} title={title}>
            <div className="flex gap-5">
                <div className="bg-white border border-gray-200 shadow rounded-lg p-5 w-1/2">
                    <form action="">
                        <div className="mb-5">
                            <label
                                htmlFor="password_lama"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Password Lama
                            </label>
                            <div className="relative w-full">
                                <input
                                    type={showPasswordOld ? "text" : "password"}
                                    id="password_lama"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    required=""
                                />
                                <button
                                    onClick={toggleShowPasswordOld}
                                    type="button"
                                    className="absolute inset-y-0 end-0 flex items-center pe-3"
                                >
                                    <i
                                        className={`fa-regular ${
                                            showPasswordOld
                                                ? "fa-eye-slash"
                                                : "fa-eye"
                                        }`}
                                    ></i>
                                </button>
                            </div>
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="password_baru"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Password Baru
                            </label>
                            <div className="relative w-full">
                                <input
                                    type={showPasswordNew ? "text" : "password"}
                                    id="password_baru"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    required=""
                                />
                                <button
                                    onClick={toggleShowPasswordNew}
                                    type="button"
                                    className="absolute inset-y-0 end-0 flex items-center pe-3"
                                >
                                    <i
                                        className={`fa-regular ${
                                            showPasswordNew
                                                ? "fa-eye-slash"
                                                : "fa-eye"
                                        }`}
                                    ></i>
                                </button>
                            </div>
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="konfirmasi_password_baru"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Konfirmasi Password Baru
                            </label>
                            <div className="relative w-full">
                                <input
                                    type={
                                        showConfirmationPassword
                                            ? "text"
                                            : "password"
                                    }
                                    id="konfirmasi_password_baru"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    required=""
                                />
                                <button
                                    onClick={toggleShowConfirmationPassword}
                                    type="button"
                                    className="absolute inset-y-0 end-0 flex items-center pe-3"
                                >
                                    <i
                                        className={`fa-regular ${
                                            showConfirmationPassword
                                                ? "fa-eye-slash"
                                                : "fa-eye"
                                        }`}
                                    ></i>
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                            >
                                Ganti Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
}

export default GantiPassword;
