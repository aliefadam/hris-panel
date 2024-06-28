import { Head, Link } from "@inertiajs/react";
import React from "react";

function About() {
    return (
        <div>
            <Head title="About" />
            <h1>Halaman About</h1>
            <Link href={route("home")}>Home</Link>
            <Link href="/">Welcome</Link>
        </div>
    );
}

export default About;
