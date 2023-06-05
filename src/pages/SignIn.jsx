import React from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/Auth.jsx";
import { UserContext } from "../context/UserContext.jsx";
//import { useToken } from "../hooks/TokenContext.jsx";

export default function SignIn() {

    const [form, setForm] = useState({ name: "", password: "" })
    //const [password, setPassword] = useState("")
    const { setUserData } = useContext(UserContext)
    // const token = useToken()
    //console.log(token)

    const navigate = useNavigate();

    function handleform(e) {

        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handlelogin(e) {

        e.preventDefault();

        //const body = {
        // email,
        // senha
        //}

        const promise = api.post('/sign-in', form)
        promise.then(response => {
            setUserData(response.data)
            navigate('/')
        });

        promise.catch(err => {
            alert(err.response.statusText)
        })

    }

    return (

        <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
            <div className="container h-full p-10">
                <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                    <div className="w-full">
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                            <div className="g-0 lg:flex lg:flex-wrap">

                                <div className="px-4 md:px-0 lg:w-6/12">
                                    <div className="md:mx-6 md:p-12">

                                        <div className="text-center">
                                            <img
                                                className="mx-auto w-70"
                                                src="https://ohsonline.com/articles/2021/05/01/-/media/OHS/OHS/Images/2021/05/wienczkowski.jpg"
                                                alt="logo"
                                            />
                                            <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                                                Nós somos a equipe Ultra blowers!
                                            </h4>
                                        </div>

                                        <form>
                                            <p className="mb-4">Por favor, faça o login</p>
                                            <div className="relative mb-4">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="digite seu e-mail"
                                                    value={form.email}
                                                    onChange={handleform}
                                                    required
                                                    className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-3 text-lg text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
                                                />
                                                <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Username</label>
                                            </div>
                                            <div className="relative mb-4" data-te-input-wrapper-init>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    placeholder="digite sua senha"
                                                    value={form.password}
                                                    onChange={handleform}
                                                    required
                                                    className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-3 text-lg text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
                                                />
                                                <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Password</label>
                                            </div>

                                            <div className="mb-12 pb-1 pt-1 text-center">
                                                <button
                                                    className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white bg-gradient-to-r from-[#ee7724] via-[#d8363a] to-[#b44593] shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                                                    type="button"
                                                    data-te-ripple-init
                                                    data-te-ripple-color="light"
                                                >
                                                    Log in
                                                </button>
                                               
                                                <a href="#!">Esqueceu a senha?</a>
                                            </div>

                                            <div className="flex items-center justify-between pb-6">
                                                <p className="mb-0 mr-2">Ainda não tem uma conta?</p>
                                                <button
                                                    type="button"
                                                    className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                                    data-te-ripple-init
                                                    data-te-ripple-color="light"
                                                >
                                                    Registre-se
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-gradient-to-r from-[#ee7724] via-[#d8363a] to-[#b44593]">
                                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                        <h4 className="mb-6 text-xl font-semibold">Ultra blowers</h4>
                                        <p className="text-sm">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    )
}


