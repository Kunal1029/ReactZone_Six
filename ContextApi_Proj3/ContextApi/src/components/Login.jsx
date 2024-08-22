import React, { useContext } from 'react';
import UserContex from '../context/UserContext';

function Login() {
    const [username, setUserName] = React.useState("")
    const [password, setPassword] = React.useState("")
  
    const {setUser} = useContext(UserContex);
  
    const handleSubmit = (e)=>{
      e.preventDefault()
      setUser({username,password}) 
    }
    
  return (
    <div>
      <h2>Log IN</h2>
      <input type="text" value={username} onChange={(e)=> setUserName(e.target.value)} placeholder='username' />
      <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='password' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
