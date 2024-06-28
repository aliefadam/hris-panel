import FormPerizinan from "@/Components/FormPerizinan";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function Perizinan({ title }) {
    return (
        <MainLayout title={title}>
            <div className="flex gap-5">
                <div className="bg-white border border-gray-200 shadow rounded-lg p-5 w-1/2">
                    <FormPerizinan />
                </div>
                <div className="w-1/2 space-y-3">
                    <div className="grid grid-cols-3 gap-3">
                        <div className="flex justify-between items-center bg-gradient-to-r from-indigo-900 to-indigo-700 rounded-lg p-5">
                            <span className="text-white leading-none text-sm poppins-semibold">
                                Berduka
                            </span>
                            <span className="text-yellow-300 leading-none text-sm poppins-semibold">
                                3 Hari
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-gradient-to-r from-indigo-900 to-indigo-700 rounded-lg p-5">
                            <span className="text-white leading-none text-sm poppins-semibold">
                                Menikah
                            </span>
                            <span className="text-yellow-300 leading-none text-sm poppins-semibold">
                                3 Hari
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-gradient-to-r from-indigo-900 to-indigo-700 rounded-lg p-5">
                            <span className="text-white leading-none text-sm poppins-semibold">
                                Melahirkan
                            </span>
                            <span className="text-yellow-300 leading-none text-sm poppins-semibold">
                                3 Bulan
                            </span>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-5 rounded-lg flex items-center justify-between">
                        <span className="text-white poppins-semibold">
                            Sisa Cuti Tahunan Anda
                        </span>
                        <span className="text-lg text-yellow-300 poppins-semibold leading-none">
                            6
                        </span>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Perizinan;
