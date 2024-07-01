import React, { useState } from "react";
import { router, useForm } from "@inertiajs/react";

function FormPerizinan({ role }) {
    const [process, setProcces] = useState(false);

    const { data, setData, post, progress } = useForm({
        izin: "",
        tanggalMulai: "",
        tanggalAkhir: "",
        filePendukung: null,
        catatan: "",
    });

    const handleChange = (event) => {
        setData(
            event.target.name,
            event.target.files ? event.target.files[0] : event.target.value
        );
    };

    const ajukanPerizinan = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("izin", data.izin);
        formData.append("tanggalMulai", data.tanggalMulai);
        formData.append("tanggalAkhir", data.tanggalAkhir);
        formData.append("filePendukung", data.filePendukung);
        formData.append("catatan", data.catatan);
        post(route(`${role}.ajukan-perizinan`), {
            data: formData,
            onStart: () => {
                setProcces(true);
            },
            onSuccess: () => {
                setProcces(false);
            },
        });
    };

    return (
        <form action="" onSubmit={ajukanPerizinan}>
            <div className="mb-5">
                <label
                    htmlFor="jenis_izin"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Pilih Izin
                </label>
                <select
                    id="jenis_izin"
                    name="izin"
                    defaultChecked={"cuti"}
                    defaultValue={"cuti"}
                    onChange={handleChange}
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
                    name="tanggalMulai"
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
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
                    name="tanggalAkhir"
                    onChange={handleChange}
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
                    onChange={handleChange}
                    accept="image/*, application/pdf, application/vnd.ms-word"
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                    id="file_pendukung"
                    name="filePendukung"
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
                    name="catatan"
                    onChange={handleChange}
                    rows={4}
                    className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    defaultValue={""}
                />
            </div>
            <div className="flex justify-end">
                <button
                    disabled={process}
                    type="submit"
                    className={`text-white ${
                        process
                            ? "cursor-not-allowed bg-indigo-400"
                            : "bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300"
                    }  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}
                >
                    {process ? "Sedang Diproses..." : "Ajukan Perizinan"}
                </button>
            </div>
        </form>
    );
}

export default FormPerizinan;
