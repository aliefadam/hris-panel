import EditFoto from "@/Components/modal/EditFoto";
import MainLayout from "@/Layouts/MainLayout";
import React from "react";

function Profile({ title, auth }) {
    return (
        <MainLayout user={auth.user} title={title}>
            <div className="flex gap-5">
                <div className="w-[400px] py-10 bg-white border border-gray-200 rounded-lg shadow">
                    <div className="flex flex-col items-center">
                        <img
                            className="w-[150px] h-[150px] mb-3 rounded-full shadow-lg"
                            src="/imgs/no-picture.png"
                            alt="Bonnie image"
                        />
                        <h5 className="poppins-semibold text-indigo-900 mt-2 text-3xl dark:text-white">
                            Alief Adam
                        </h5>
                        <span className="text-lg poppins-semibold text-yellow-300">
                            IT - Developer
                        </span>
                    </div>
                </div>
                <div className="w-[calc(100%-400px)] h-fit space-y-3">
                    <div className="grid grid-cols-3 gap-3">
                        <div className="flex-[1] flex flex-col gap-1 leading-none p-5 bg-white border border-gray-200 rounded-lg shadow">
                            <span className="text-indigo-900 poppins-medium">
                                Email
                            </span>
                            <span className="text-yellow-300 poppins-semibold">
                                aliefadam6@gmail.com
                            </span>
                        </div>
                        <div className="flex-[1] flex flex-col gap-1 leading-none p-5 bg-white border border-gray-200 rounded-lg shadow">
                            <span className="text-indigo-900 poppins-medium">
                                Cabang
                            </span>
                            <span className="text-yellow-300 poppins-semibold">
                                Surabaya - Tenggilis
                            </span>
                        </div>
                        <div className="flex-[1] flex flex-col gap-1 leading-none p-5 bg-white border border-gray-200 rounded-lg shadow">
                            <span className="text-indigo-900 poppins-medium">
                                No. Telepon
                            </span>
                            <span className="text-yellow-300 poppins-semibold">
                                +6281234567890
                            </span>
                        </div>
                        <div className="flex-[1] flex flex-col gap-1 leading-none p-5 bg-white border border-gray-200 rounded-lg shadow">
                            <span className="text-indigo-900 poppins-medium">
                                No. Telepon Whatsapp
                            </span>
                            <span className="text-yellow-300 poppins-semibold">
                                +6281234567890
                            </span>
                        </div>
                        <div className="flex-[1] flex flex-col gap-1 leading-none p-5 bg-white border border-gray-200 rounded-lg shadow">
                            <span className="text-indigo-900 poppins-medium">
                                Alamat
                            </span>
                            <span className="text-yellow-300 poppins-semibold">
                                Jl. Surabaya No. 45
                            </span>
                        </div>
                        <div className="flex-[1] flex flex-col gap-1 leading-none p-5 bg-white border border-gray-200 rounded-lg shadow">
                            <span className="text-indigo-900 poppins-medium">
                                Agama
                            </span>
                            <span className="text-yellow-300 poppins-semibold">
                                Islam
                            </span>
                        </div>
                        <div className="flex-[1] flex flex-col gap-1 leading-none p-5 bg-white border border-gray-200 rounded-lg shadow">
                            <span className="text-indigo-900 poppins-medium">
                                Tanggal Mulai Kontrak
                            </span>
                            <span className="text-yellow-300 poppins-semibold">
                                15-01-2023
                            </span>
                        </div>
                        <div className="flex-[1] flex flex-col gap-1 leading-none p-5 bg-white border border-gray-200 rounded-lg shadow">
                            <span className="text-indigo-900 poppins-medium">
                                Tanggal Berakhir Kontrak
                            </span>
                            <span className="text-yellow-300 poppins-semibold">
                                15-01-2025
                            </span>
                        </div>
                        <div className="flex-[1] flex flex-col gap-1 leading-none p-5 bg-white border border-gray-200 rounded-lg shadow">
                            <span className="text-indigo-900 poppins-medium">
                                Nomor Rekening
                            </span>
                            <span className="text-yellow-300 poppins-semibold">
                                90909090
                            </span>
                        </div>
                    </div>
                    <div className="mt-5">
                        <button
                            data-modal-target="edit-foto-modal"
                            data-modal-toggle="edit-foto-modal"
                            type="button"
                            className="text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                        >
                            <i className="fa-regular fa-image mr-2"></i>
                            Ganti Foto Profil
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal Edit Foto */}
            <EditFoto />
        </MainLayout>
    );
}

export default Profile;
