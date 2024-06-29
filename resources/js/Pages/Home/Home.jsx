import MainLayout from "@/Layouts/MainLayout";
import React from "react";

function Home({ title, users, auth }) {
    const dataUser = [
        {
            title: "Email",
            value: users.email,
        },
        {
            title: "Cabang",
            value: users.branch,
        },
        {
            title: "No. Telepon",
            value: users.no_telephone,
        },
    ];
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
                            {users.name}
                        </h5>
                        <span className="text-lg poppins-semibold text-yellow-300">
                            {users.division} - {users.sub_division}
                        </span>
                    </div>
                </div>
                <div className="w-[calc(100%-400px)] h-fit space-y-3">
                    <div className="flex gap-3">
                        {dataUser.map((user, index) => (
                            <div
                                key={index}
                                className="flex-[1] flex flex-col gap-1.5 leading-none p-5 bg-white border border-gray-200 rounded-lg shadow"
                            >
                                <span className="text-indigo-900 poppins-medium">
                                    {user.title}
                                </span>
                                <span className="text-yellow-300 poppins-semibold">
                                    {user.value}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-3">
                        <div className="flex-[1] flex flex-col gap-1 leading-none p-5 bg-white border border-gray-200 rounded-lg shadow">
                            <span className="text-indigo-900 poppins-medium">
                                Total Izin
                            </span>
                            <span className="text-yellow-300 poppins-semibold">
                                5
                            </span>
                        </div>
                        <div className="flex-[1] flex flex-col gap-1 leading-none p-5 bg-white border border-gray-200 rounded-lg shadow">
                            <span className="text-indigo-900 poppins-medium">
                                Total Cuti
                            </span>
                            <span className="text-yellow-300 poppins-semibold">
                                4
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10 w-full">
                <h1 className="text-center text-indigo-900 poppins-semibold text-2xl">
                    Kehadiran Divisi IT
                    <div className="flex gap-5 mt-5 w-full overflow-x-auto py-5">
                        <div className="border shadow rounded-lg px-10 py-5 leading-none">
                            <img
                                className="w-[150px]"
                                src="/imgs/no-picture.png"
                                alt=""
                            />
                            <h1 className="mt-4">Adam</h1>
                            <span className="text-sm poppins-semibold text-yellow-300">
                                IT - Developer
                            </span>

                            <div className="mt-5 text-green-500 poppins-bold">
                                HADIR
                            </div>
                        </div>
                    </div>
                </h1>
            </div>
        </MainLayout>
    );
}

export default Home;
