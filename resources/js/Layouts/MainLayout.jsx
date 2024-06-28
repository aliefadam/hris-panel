import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import { Head } from "@inertiajs/react";
import { initFlowbite } from "flowbite";
import React, { useEffect } from "react";

function MainLayout({ children, title }) {
    useEffect(() => {
        initFlowbite();
    });
    return (
        <div className="w-full">
            <Head title={title} />
            <Sidebar />

            <div className="ml-[300px] mt-[100px] w-[calc(98.5%-300px)] pb-10">
                <Navbar />
                {children}
            </div>
        </div>
    );
}

export default MainLayout;
