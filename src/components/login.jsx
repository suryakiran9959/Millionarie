import { useState } from "react" 


export default function Login(){
    const [credentials,setCredentials]=useState({
        name:"",
        password:""   
    }) 

    const handleClick=(e)=>{
    const {name,value}=e.target
        setCredentials({...credentials,[name]:value})
    }

    const submitHandler=(e)=>{
        e.preventDefault()
        alert(`WElLCOME->>${credentials.name}`)
        console.log(credentials);
        setCredentials({
            name:"",
            password:"" 
        })

    }
    return(
        <form onSubmit={submitHandler}>
            <label>Username</label>
            <input type="text" value={credentials.name} name="name" onChange={handleClick} /> <br />

            <label>Password</label>
            <input type="password" value={credentials.password} name="password" onChange={handleClick} /><br />

            <input type="submit" />
        </form>
    )
}