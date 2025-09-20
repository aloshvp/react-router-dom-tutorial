import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:" + email);
        console.log("Password:" + password);
        if (email && password) {
            localStorage.setItem("loggedIn", true)
            navigate("/posts");
        }

    }
    return (
        <div>
            <h2>Login</h2>
            <form action="post" onSubmit={handleSubmit}>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                < input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Login