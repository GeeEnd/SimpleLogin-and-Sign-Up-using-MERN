import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

<script>

</script>

function Login() {
    const history=useNavigate();
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        if (document.getElementById("name").value =="" || document.getElementById("email").value ==""){
            alert("Please enter a data");
        }else 

        try{

            await axios.post("http://localhost:8000/signup",{
                name,email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                  alert("Account has been created");
                    history("/",{state:{id:email}})
                  
                }
            })
            .catch(e=>{
                alert("wrong details")
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

            <h1>S I G N  U P</h1>

            <form action="POST">
            <div class="inputbox"><input type="name" id="name" onChange={(e) => { setName(e.target.value) }} placeholder="Full Name" required="true" /></div>
            <div class="inputbox"><input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" required /></div>
            <div class="inputbox">  <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" required/></div>
                <button type="submit" onClick={submit} >SUBMIT</button>
 

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/">Login Page</Link>

        </div>
        </div>
        </div>
    )
}

export default Login