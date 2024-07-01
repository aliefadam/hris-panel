import React from "react";

function EditProfile() {
    return (
        <div
            id="edit-profile-modal"
            tabIndex={-1}
            aria-hidden="true"
            className="animate__animated animate__fadeInDown hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
            <div className="relative p-4 w-1/2 max-h-full">
                {/* Modal content */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* Modal header */}
                    <div className="bg-gradient-to-r from-indigo-900 to-indigo-700 flex items-center justify-between p-4 border-b rounded-t">
                        <h3 className="text-lg font-semibold text-yellow-300">
                            Edit Profil
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-indigo-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                            data-modal-hide="edit-profile-modal"
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* Modal body */}
                    <form className="p-4 md:p-5 h-[400px] overflow-auto vertical-scroll-style">
                        <div className="flex gap-5">
                            <div className="flex-[1]">
                                <div className="mb-4">
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="alamat-domisili"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        Alamat Domisili
                                    </label>
                                    <input
                                        type="text"
                                        id="alamat-domisili"
                                        className="bg-gray-50 border border-gray-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="no-telephone"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        No Telephone
                                    </label>
                                    <input
                                        type="text"
                                        id="no-telephone"
                                        className="bg-gray-50 border border-gray-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="no-telephone-whatsapp"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        No Whatsapp
                                    </label>
                                    <input
                                        type="text"
                                        id="no-telephone-whatsapp"
                                        className="bg-gray-50 border border-gray-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="status-menikah"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        Status Menikah
                                    </label>
                                    <select
                                        id="countries"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                                    >
                                        <option value="DE">
                                            Belum Menikah
                                        </option>
                                        <option value="FR">
                                            Sudah Menikah
                                        </option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="no-bpjs-kesehatan"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        No BPJS Kesehatan
                                    </label>
                                    <input
                                        type="text"
                                        id="no-bpjs-kesehatan"
                                        className="bg-gray-50 border border-gray-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="no-bpjs-ketenagakerjaan"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        No BPJS Ketenagakerjaan
                                    </label>
                                    <input
                                        type="text"
                                        id="no-bpjs-ketenagakerjaan"
                                        className="bg-gray-50 border border-gray-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="inventaris-kantor"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        Inventaris Kantor
                                    </label>
                                    <input
                                        type="text"
                                        id="inventaris-kantor"
                                        className="bg-gray-50 border border-gray-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                                    />
                                </div>
                            </div>
                            <div className="flex-[1]">
                                <div className="mb-4">
                                    <label
                                        htmlFor="cv"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        File CV
                                    </label>
                                    <input
                                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                                        id="cv"
                                        type="file"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="ksk"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        File KSK
                                    </label>
                                    <input
                                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                                        id="ksk"
                                        type="file"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="ijazah"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        File Ijazah
                                    </label>
                                    <input
                                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                                        id="ijazah"
                                        type="file"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="transkrip-nilai"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        File Transkrip Nilai
                                    </label>
                                    <input
                                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                                        id="transkrip-nilai"
                                        type="file"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="ktp"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        File KTP
                                    </label>
                                    <input
                                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                                        id="ktp"
                                        type="file"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="file-bpjs-kesehatan"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        File BPJS Kesehatan
                                    </label>
                                    <input
                                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                                        id="file-bpjs-kesehatan"
                                        type="file"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="file-bpjs-ketenagakerjaan"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        File BPJS Ketenagakerjaan
                                    </label>
                                    <input
                                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                                        id="file-bpjs-ketenagakerjaan"
                                        type="file"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="surat-referensi-kerja"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        Surat Referensi Kerja
                                    </label>
                                    <input
                                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                                        id="surat-referensi-kerja"
                                        type="file"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="text-white inline-flex items-center bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Simpan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditProfile;
