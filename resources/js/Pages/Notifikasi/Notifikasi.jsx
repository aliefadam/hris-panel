import MainLayout from "@/Layouts/MainLayout";
import React from "react";

function Notifikasi() {
    return (
        <MainLayout>
            <div className="flex bg-white shadow border h-[calc(100vh-141px)] rounded-lg">
                <div className="w-[400px] border-r-2">
                    <div className="p-4 border-b cursor-pointer hover:bg-gray-50 -2">
                        <h1 className="text-[17px]">Semua Notifikasi</h1>
                    </div>
                    <div className="h-[calc(100%-59.1px)] overflow-auto">
                        <div className="p-4 border-b cursor-pointer hover:bg-gray-50 ">
                            <div className="flex items-center justify-between">
                                <span className="leading-none poppins-medium text-indigo-900">
                                    Deasy Mei - HRD
                                </span>
                                <span className="inline-block leading-none text-right text-sm text-gray-400 poppins-medium">
                                    10 menit lalu
                                </span>
                            </div>
                            <div className="mt-2 text-justify text-sm">
                                Lorem ipsum dolor sit amet ipsum dolor sit...
                            </div>
                        </div>
                        <div className="p-4 border-b cursor-pointer hover:bg-gray-50 ">
                            <div className="flex items-center justify-between">
                                <span className="leading-none poppins-medium text-indigo-900">
                                    Deasy Mei - HRD
                                </span>
                                <span className="inline-block leading-none text-right text-sm text-gray-400 poppins-medium">
                                    10 menit lalu
                                </span>
                            </div>
                            <div className="mt-2 text-justify text-sm">
                                Lorem ipsum dolor sit amet ipsum dolor sit...
                            </div>
                        </div>
                        <div className="p-4 border-b cursor-pointer hover:bg-gray-50 ">
                            <div className="flex items-center justify-between">
                                <span className="leading-none poppins-medium text-indigo-900">
                                    Deasy Mei - HRD
                                </span>
                                <span className="inline-block leading-none text-right text-sm text-gray-400 poppins-medium">
                                    10 menit lalu
                                </span>
                            </div>
                            <div className="mt-2 text-justify text-sm">
                                Lorem ipsum dolor sit amet ipsum dolor sit...
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[calc(100%-400px)]">
                    <div className="h-[calc(100vh-141px)] flex justify-center items-center">
                        <h1 className="poppins-semibold text-gray-400 poppins-semibold text-lg">
                            Klik notifikasi disamping untuk melihat detail
                        </h1>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Notifikasi;
