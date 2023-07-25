import React from "react"
import img1 from './IMG_1415.JPG';
import {useLocation, useNavigate} from 'react-router-dom';

function Home (){
    const location=useLocation()

    return (
        
          <div class="container">
            <div class="about__img">
                        <img src={img1} alt="no image" />
                        </div>
           
        <p>Email: {location.state.id}</p>
    
       <div><h1>Hello and welcome to the home</h1></div> 
            </div>
          
        
      
   
    )
}

export default Home