import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { LoginUser } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (email === undefined || password === undefined) {
            alert("Please enter email and password.");
        }
        else {
            const LoginResponse = await LoginUser(email, password);
            if (LoginResponse) {
                navigate("/");
            } else {
                alert("Invalid credentials, please sign up.");
            }
        }

    }
    const guestLogin = async (e) => {
        e.preventDefault();
        const LoginResponse = await LoginUser("guest@gmail.com", "guest123");
        if (LoginResponse) {
            navigate("/");
        } else {
            alert("Invalid credentials, please sign up.");
        }

    }
    const { user } = useAuth();
    const navigate = useNavigate();
    return (
        <div>
            <div className="page-container">

                <div className="container-login">
                    <h2 className="heading">Login</h2>
                    <form>
                        <div>
                            <label className="label">Email address</label>
                            <br />
                            <input onChange={e => setEmail(e.target.value)} className="text-input" type="email" placeholder="adarshbalika@gmail.com" />
                        </div>
                        <div>
                            <label className="label">Password</label>
                            <br />
                            <input onChange={e => setPassword(e.target.value)} className="text-input" type="password" placeholder="***********" />
                        </div>
                        <div className="remember-me">
                            <div>
                                <input type="checkbox" /> Remember me
            </div>
                            <a href="#">Forgot your password?</a>
                        </div>
                        <button onClick={e => handleLogin(e)} className="btn login">Login</button>
                        <button onClick={e => guestLogin(e)} className="btn login">Login as a guest</button>

                        <div className="create">
                            <Link to="/signup">
                                Create new account
                <i className="fa-solid fa-chevron-right" />
                            </Link>
                        </div>
                    </form>
                </div>

            </div>


        </div>
    )
}