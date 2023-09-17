import React from 'react'
import axios from 'axios';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class GetLoginUser{

    async getLoginUserDetails(id){
        try{
            const response = await axios.get(`http://localhost:3000/user/${id}`);
             if (response.data.status){    
                return response.data.user
             }
            
        }catch(err){
            console.log(err)
        }
    }

   

}
export default GetLoginUser;