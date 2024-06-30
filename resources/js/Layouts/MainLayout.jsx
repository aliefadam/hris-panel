import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import { Head } from "@inertiajs/react";
import { initFlowbite } from "flowbite";
import React, { useEffect } from "react";

function MainLayout({ children, title, user }) {
    useEffect(() => {
        initFlowbite();
    });
    return (
        <div className="w-full">
            <Head title={title} />
            <Sidebar employee={user.employee} />

            <div className="ml-[300px] mt-[100px] w-[calc(98.5%-300px)] pb-10">
                <Navbar
                    employee={user.employee}
                    name={user.name}
                    email={user.email}
                />
                {children}
            </div>
        </div>
    );
}

export default MainLayout;
