import TableLembur from "@/Components/TableLembur";
import TableRiwayatMutasi from "@/Components/TableRiwayatMutasi";
import MainLayout from "@/Layouts/MainLayout";
import React from "react";

function DetailKaryawan({ title, user, profile, auth }) {
    return (
        <MainLayout title={title} user={auth.user}>
            <div className="flex gap-5">
                <div className="space-y-5">
                    <div className="w-[400px] py-10 bg-white border border-gray-200 rounded-lg shadow">
                        <div className="flex flex-col items-center">
                            <img
                                className="w-[150px] h-[150px] mb-3 rounded-full shadow-lg"
                                src="/imgs/no-picture.png"
                                alt="Bonnie image"
                            />
                            <h5 className="poppins-semibold text-indigo-900 mt-2 text-3xl dark:text-white">
                                {user.name}
                            </h5>
                            <span className="text-lg poppins-semibold text-yellow-300">
                                {user.division}{" "}
                                {user.sub_division == ""
                                    ? ""
                                    : `- ${user.sub_division}`}
                            </span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex gap-2">
                            <button className="text-sm flex-[1] text-center bg-gradient-to-r from-neutral-700 to-neutral-500 hover:from-neutral-800 hover:to-neutral-600 text-white rounded-lg py-3.5 leading-none">
                                <i class="fa-regular fa-note mr-2"></i>
                                Edit Catatan
                            </button>
                            <button className="text-sm flex-[1] text-center bg-gradient-to-r from-green-700 to-green-500 hover:from-green-800 hover:to-green-600 text-white rounded-lg py-3.5 leading-none">
                                <i class="fa-regular fa-file-contract mr-2"></i>
                                Perpanjang Kontrak
                            </button>
                        </div>
                        <button className="text-sm w-full text-center bg-gradient-to-r from-red-700 to-red-500 hover:from-red-800 hover:to-red-600 text-white rounded-lg py-3.5 leading-none">
                            <i class="fa-sharp fa-regular fa-person-to-door mr-2"></i>
                            Resign
                        </button>
                    </div>
                </div>
                <div className="w-[calc(100%-400px)] h-fit space-y-3">
                    <div className="h-[315px] pr-3 overflow-auto vertical-scroll-style">
                        <div className="grid grid-cols-3 gap-3">
                            {profile.map((employee, index) => (
                                <div
                                    key={index}
                                    className="flex-[1] flex flex-col gap-1.5 leading-none p-5 bg-white border border-gray-200 rounded-lg shadow"
                                >
                                    <span className="text-indigo-900 poppins-medium">
                                        {employee.title}
                                    </span>
                                    <span className="text-yellow-300 poppins-semibold">
                                        {employee.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-3 gap-3 mt-3">
                            {profile.map((employee, index) => (
                                <div
                                    key={index}
                                    className="flex-[1] flex flex-col gap-1.5 leading-none p-5 bg-white border border-gray-200 rounded-lg shadow"
                                >
                                    <span className="text-indigo-900 poppins-medium">
                                        {employee.title}
                                    </span>
                                    <span className="text-yellow-300 poppins-semibold">
                                        {employee.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-5 flex justify-end">
                        <button
                            data-modal-target="edit-foto-modal"
                            data-modal-toggle="edit-foto-modal"
                            type="button"
                            className="text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                        >
                            <i className="fa-regular fa-user-pen mr-2"></i>
                            Edit Profil
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <TableRiwayatMutasi />
            </div>

            <div className="mt-10">
                <TableLembur />
            </div>
        </MainLayout>
    );
}

export default DetailKaryawan;
