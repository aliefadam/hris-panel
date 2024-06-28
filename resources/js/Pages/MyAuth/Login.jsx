import { router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

function Login({ message }) {
    const [loginError, setLoginError] = useState(false);
    const [showPasswordOld, setShowPasswordOld] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [proccess, setProccess] = useState(false);

    useEffect(() => {
        if (loginError) {
            console.log(message);
            setProccess(false);
        }
    }, [loginError]);

    const toggleShowPasswordOld = () => {
        setShowPasswordOld(!showPasswordOld);
    };

    const handleInputEmail = ({ target }) => {
        setEmail(target.value);
    };

    const handleInputPassword = ({ target }) => {
        setPassword(target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        router.post(
            route("login"),
            {
                email: email,
                password: password,
            },
            {
                onStart: () => {
                    setProccess(true);
                    setLoginError(false);
                },
                onSuccess: () => {
                    setLoginError(true);
                },
            }
        );
    };

    return (
        <div className="flex justify-center items-center w-full h-[calc(100vh-1px)] bg-gradient-to-r from-indigo-900 to-indigo-700 leading-none">
            <div className="w-[40%] bg-white rounded-lg shadow-lg p-10">
                <h1 className="text-center text-3xl poppins-black -tracking-tight text-indigo-900">
                    HRIS DBKLIK
                </h1>
                <form onSubmit={handleLogin} className="mt-5">
                    <div className="mb-5">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Email
                        </label>
                        <input
                            onInput={handleInputEmail}
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                            required=""
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Password
                        </label>
                        <div className="relative w-full">
                            <input
                                onInput={handleInputPassword}
                                type={showPasswordOld ? "text" : "password"}
                                id="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required=""
                            />
                            <button
                                onClick={toggleShowPasswordOld}
                                type="button"
                                className="absolute inset-y-0 end-0 flex items-center pe-3"
                            >
                                <i
                                    className={`fa-regular ${
                                        showPasswordOld
                                            ? "fa-eye-slash"
                                            : "fa-eye"
                                    }`}
                                ></i>
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            disabled={proccess}
                            type="submit"
                            className={`text-yellow-300 ${
                                proccess
                                    ? "cursor-not-allowed bg-indigo-400"
                                    : "bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300"
                            }   poppins-semibold rounded-lg text-sm w-[50%] px-5 py-2.5 text-center`}
                        >
                            {proccess ? "Loading..." : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
