import React from "react";

function FormPerizinan() {
    return (
        <form action="">
            <div className="mb-5">
                <label
                    htmlFor="jenis_izin"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Pilih Izin
                </label>
                <select
                    id="jenis_izin"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                >
                    <option value="cuti">Cuti</option>
                    <option value="menikah">Menikah</option>
                    <option value="sakit">Sakit</option>
                </select>
            </div>

            <div className="mb-5">
                <label
                    htmlFor="tanggal_mulai"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Tanggal Mulai
                </label>
                <input
                    type="date"
                    id="tanggal_mulai"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    placeholder="name@flowbite.com"
                    required=""
                />
            </div>

            <div className="mb-5">
                <label
                    htmlFor="tanggal_akhir"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Tanggal Akhir
                </label>
                <input
                    type="date"
                    id="tanggal_akhir"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    required=""
                />
            </div>
            <div className="mb-5">
                <label
                    className="block mb-2 text-sm font-medium text-gray-900"
                    htmlFor="file_pendukung"
                >
                    File Pendukung
                </label>
                <input
                    accept="image/*, application/pdf, application/vnd.ms-word"
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                    id="file_pendukung"
                    type="file"
                />
            </div>
            <div className="mb-5">
                <label
                    htmlFor="catatan"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Catatan
                </label>
                <textarea
                    id="catatan"
                    rows={4}
                    className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    defaultValue={""}
                />
            </div>
            <div className="flex justify-end">
                <button
                    type="button"
                    className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                    Ajukan Perizinan
                </button>
            </div>
        </form>
    );
}

export default FormPerizinan;
