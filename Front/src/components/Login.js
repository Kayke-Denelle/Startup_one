import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', formData);
            localStorage.setItem('token', response.data.token); // Armazena o token
            alert('Login bem-sucedido');
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
            alert('Erro ao fazer login');
        }
    };

    return (
        <><div class="flex items-center justify-center h-screen">
            <div class="min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] ">
                <div class="mb-8 flex justify-center">
                    <img class="w-24" alt="" />
                </div>
                <div class="flex flex-col text-sm rounded-md">
                    <input class="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 " type="text" placeholder="Username or Email id" />
                    <input class="border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500" type="password" placeholder="Password" />
                </div>
                <button class="mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300" type="submit">Sign in</button>
                <div class="mt-5 flex justify-between text-sm text-gray-600">
                    <a href="/">Forgot password?</a>
                    <a href="/">Sign up</a>
                </div>
                <div class="flex justify-center mt-5 text-sm">
                    <p class="text-gray-400">or you can sign with</p>
                </div>
                <div class="mt-5 flex justify-center gap-3">
                    <img alt="Volans Logo" className="w-12 h-12"/>
                    <img class="h-7 grayscale cursor-pointer hover:grayscale-0 scale-105 duration-300 "/>
                    <img class="h-7 grayscale cursor-pointer hover:grayscale-0 scale-105 duration-300"/>
                        <a class="bg-gray-400 h-7 w-7 rounded-3xl text-center grayscale cursor-pointer hover:grayscale-0 scale-105 duration-300 ">...</a>
                    </div>
                <div class="mt-5 flex text-center text-sm text-gray-400">
                    <p>
                        This site is protected by reCAPTCHA and the Google <br />
                        <a class="underline">Privacy Policy</a>  and <a class="underline" href="">Terms of Service</a>  apply.
                    </p>
                </div>
            </div>
        </div><form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Senha" onChange={handleChange} required />
                <button type="submit">Login</button>
            </form></>
        
    );
}

export default Login;
