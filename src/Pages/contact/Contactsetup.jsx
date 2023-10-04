import axios from 'axios';
import React, { useRef } from 'react';
import './contact.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Contactsetup = ()=> {

    const fullname = useRef(null);
    const email = useRef(null);
    const message = useRef(null);
    

    function submit(e) {
        e.preventDefault();
        console.log(fullname.current.value,email.current.value,message.current.value)
    }
    

    

return(



            <div className='contactcontainer'>
        
                <div className='container-fliud' id='contactcontent'>
                    <h1 className="text-center">Contact Us.</h1>
                    <p className="contactdetails">phone  <span> +2348132272181 </span></p>
                    <p className="contactdetails">Email  <span> ocarslyobas@gmail.com </span></p>

                    <h4>Leave a message here</h4>
                    
                    <form className="form-group w-100" onSubmit={submit}>
                    <input className="form-control-lg mb-2 mt-2  w-100 border no-border" 

                    type="text" 
                    id="FullName"  
                    required="" 
                    placeholder="Enter FullName" 
                    ref={fullname} 
                    
                    />
                    <input className="form-control-lg my-2  w-100 border no-border"  
                    type="email"  
                    id="Email"  
                    placeholder="Email"
                    ref={email} 
                    
                    />
                    <textarea className="form-control-lg h-15 w-100" 
                    id="Message" 
                    placeholder="Enter text"
                    ref={message}
                    >
                    </textarea>
                    
                    <button className="btn btn-primary btn-lg mt-2  w-100">submit</button>
                    </form>
                </div> 
        
            </div>
    )
    
}

export default Contactsetup;

