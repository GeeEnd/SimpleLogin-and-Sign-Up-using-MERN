import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                   
                }
                else if(res.data=="notexist"){
                    alert ("Enter Email and Password")
                }
            })
            .catch(e=>{
                alert("The Email and password is incorrect")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }

    return (
       
<div class="formbox">
        <div className="login">
            <div class="container">
               
            <h1>L O G I N</h1>

            <form action="POST">
            <div class="inputbox"><span class="input-group-text" id="inputGroup-sizing-sm"> <input class="form-control" type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="EMAIL"/></span></div>
            <div class="inputbox"><span class="input-group-text" id="inputGroup-sizing-sm"><input class="form-control" type="password" onChange={(e) => { setPassword(e.target.value) }}  placeholder="PASSWORD"/></span></div>
               <button type="submit" onClick={submit} >SUBMIT</button>

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/signup">Signup Page</Link>
            </div>
            </div>
            </div>
        
    )
}

export default Login