import React, { useState } from 'react'

const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if( name.length > 0 && email.length > 0 && password.length > 0){
            console.log('Form Submitted:', { name, email, password });
        } else {
            return alert('Fill in data in fields');
        }
        
    }

  return (
    <>
        <form onSubmit={handleSubmit}
        style={{
            display: "flex", 
            flexDirection: "column",
            gap: "2rem"   
        }}>
            <h2> User Registration Form</h2>
            <input 
            type="text" 
            name="name" 
            placeholder="Enter Username"
            value={name}
            onChange={handleUsernameChange}
            required
            />

            <input 
            type="email" 
            name="email" 
            placeholder="Enter Email"
            value={email}
            onChange={handleEmailChange}
            required
            />

            <input 
            type="password" 
            name="password" 
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
            required
            />

            <button type="submit">Submit</button>
            
        </form>
            <div style = {{
                display: "block",
                textAlign: "left",
                marginTop: "2rem"
            }}>
            <p>Username is : {name}</p>
            <p>Email is : {email}</p>
            <p>password is : {password}</p>
            </div>
            
        
    </>
  )
}

export default RegistrationForm;