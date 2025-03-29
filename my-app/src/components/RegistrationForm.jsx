
import React,{useState} from 'react'

function RegistrationForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegistration = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = existingUsers.some(user => user.email === email);

        if (userExists) {
            setError('User already exists.');
            return;
        }

        existingUsers.push({ name, email, password });
        localStorage.setItem('users', JSON.stringify(existingUsers));
        window.location.href = '/login';
    };

  return (
    <form onSubmit={handleRegistration}style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <input
                type="text"
                placeholder="Name"
                style={{marginTop:"10px"}}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                style={{marginTop:"10px"}}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <input
                type="password"
                placeholder="Confirm Password"
                style={{marginTop:"10px"}}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />
            <button type="submit" style={{marginTop:"10px"}}>Register</button>
            {error && <p>{error}</p>}
        </form>
  )
}

export default RegistrationForm
