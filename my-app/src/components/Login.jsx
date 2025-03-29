import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    useEffect(() => {
        
        const token = localStorage.getItem('token');
        if (token) {
           
            window.location.href = '/dashboard';
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (response.ok) {
            
            localStorage.setItem('token', data.token);
            
            window.location.href = '/dashboard';
        } else {
            setError('Login failed. Please check your credentials.');
        }
    };
  return (
    <form onSubmit={handleLogin} style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}> 
            <input
                type="text"
                placeholder="Username"
                style={{marginTop:"10px"}}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                style={{marginTop:"10px"}}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit" style={{marginTop:"10px"}}>Login</button>
            {/* <a onClick={()=>{window.location.href = '/dashboard'}}>No account?Please Register</a> */}
            <Link to="register">No account?Please Register</Link>
            {error && <p>{error}</p>}
        </form>
  )
}

export default Login
