import EditFoto from "@/Components/modal/EditFoto";
import MainLayout from "@/Layouts/MainLayout";
import React from "react";

function Profile({ title, profile, auth }) {
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
                            {auth.user.name}
                        </h5>
                        <span className="text-lg poppins-semibold text-yellow-300">
                            {auth.user.employee.division.division_name}{" "}
                            {auth.user.employee.sub_division == null
                                ? ""
                                : `- ${auth.user.employee.sub_division}`}
                        </span>
                    </div>
                </div>
                <div className="w-[calc(100%-400px)] h-fit space-y-3">
                    <div className="grid grid-cols-3 gap-3">
                        {profile.map((user, index) => (
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
