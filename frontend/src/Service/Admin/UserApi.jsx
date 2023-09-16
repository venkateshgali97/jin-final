import React from 'react'
import axios from 'axios';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class AddUserApi{
    async  AddUser(Info) { 
        try{
            const response = await axios.post("http://localhost:3000/user/add", Info);
             console.log(response)
             if (response.data.status){
                toast.success("Event Added successfully")
                return 'success'
             }
            
        }catch(err){
            console.log(err)
        }
    }

    async getAllUsers(){
        try{
            const response = await axios.get("http://localhost:3000/user/allusers");
             if (response.data.status){    
                return response.data.users
             }
            
        }catch(err){
            console.log(err)
        }
    }
    async deleteUser(id){
        try{
            const response = await axios.post(`http://localhost:3000/user/deleteUser/${id}`);
             console.log(response.status)
             return response.status
            
        }catch(err){
            console.log(err)
        }
    }

    async updateUser(id,newUser){
        console.log(id,newUser ,"this is from services")
        try{
            const response = await axios.post(`http://localhost:3000/user/update/${id}`,newUser);
            console.log()
             console.log(response.status)
             return response.status
            
        }catch(err){
            console.log(err)
        }
    }


}
export default AddUserApi;