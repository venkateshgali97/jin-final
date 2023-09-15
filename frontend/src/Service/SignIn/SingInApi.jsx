import React from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class SingInApi{
    async  SingIn(Info) { 
        try{
            const response = await axios.post("http://localhost:3000/login", Info);
        console.log(response)
            if(response.data.role === 'admin'){
                return response
            }
            else if(response.data.role === 'user'){
                return response
            }
            else{
                return null
            }
        }catch(err){
            console.log(err)
        }
    }}
export default SingInApi