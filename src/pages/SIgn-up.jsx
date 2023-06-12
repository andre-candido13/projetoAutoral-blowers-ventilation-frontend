import React from "react";
import { useState } from "react";
import { api } from "../services/Auth";
import { useNavigate, Link } from "react-router-dom";



export default function SignUp() {

    const [form, setForm] = useState({ nome: "", email: "", password: "", cpf: "" });
    const navigate = useNavigate();

    function handleform(e) {

        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleSignUp() {

        e.preventDefault()


        const promise = api.post('/sign-up', form)
        promise.then(response => {
            alert('cadastro realizado')
            navigate('/')
        });
        promise.catch(err => {
            err.response.textStatus
        });

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
                                            <p className="mb-4">Por favor, realize seu cadastro</p>
                                            <div className="relative mb-4">
                                                <input
                                                    type="nome"
                                                    name="nome"
                                                    placeholder="digite seu nome"
                                                    value={form.nome}
                                                    onChange={handleform}
                                                    required
                                                    className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-3 text-lg text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
                                                />

                                            </div>
                                            <div className="relative mb-4" data-te-input-wrapper-init>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="digite seu e-mail"
                                                    value={form.email}
                                                    onChange={handleform}
                                                    required
                                                    className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-3 text-lg text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
                                                />

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

                                            </div>

                                            <div className="relative mb-4" data-te-input-wrapper-init>
                                                <input
                                                    type="cpf"
                                                    name="cpf"
                                                    placeholder="digite seu cpf"
                                                    value={form.cpf}
                                                    onChange={handleform}
                                                    required
                                                    className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-3 text-lg text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
                                                />

                                            </div>

                                            <div className="mb-12 pb-1 pt-1 text-center">
                                                <button
                                                    className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white bg-gradient-to-r from-[#ee7724] via-[#d8363a] to-[#b44593] shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                                                    type="submit"
                                                    data-te-ripple-init
                                                    data-te-ripple-color="light"
                                                >
                                                    Cadastrar
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