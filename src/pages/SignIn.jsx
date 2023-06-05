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

        <div>

            <form onSubmit={handlelogin} className="flex flex-col space-y-4">
                <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={handleform}
                    required
                    className="h-14 px-4 border border-gray-300 rounded-lg"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    value={form.password}
                    onChange={handleform}
                    required
                    className="h-14 px-4 border border-gray-300 rounded-lg"
                />



                <button
                    type="submit"
                    className="h-12 px-6 bg-blue-500 text-white rounded-lg"
                >
                    Entrar
                </button>
            </form>

        </div>


    )
}
