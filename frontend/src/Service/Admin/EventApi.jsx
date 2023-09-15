import React from 'react'
import axios from 'axios';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class AddEventApi{
    async  AddEvent(Info) { 
        try{
            const response = await axios.post("http://localhost:3000/event/add", Info);
             console.log(response)
             if (response.data.status){
                toast.success("Event Added successfully")
                return 'success'
             }
            
        }catch(err){
            console.log(err)
        }
    }

    async getAllEvents(){
        try{
            const response = await axios.get("http://localhost:3000/event/allEvents");
             console.log(response)
             if (response.data.status){
              
                return response.data.events
             }
            
        }catch(err){
            console.log(err)
        }
    }
    async deleteEvent(id){
        try{
            const response = await axios.post(`http://localhost:3000/event/deleteEvent/${id}`);
             console.log(response.status)
             return response.status
            
        }catch(err){
            console.log(err)
        }
    }


    async updateEvent(id,newEvent){
        try{
            const response = await axios.post(`http://localhost:3000/event/update/${id}`,newEvent);
            console.log()
             console.log(response.status)
             return response.status
            
        }catch(err){
            console.log(err)
        }
    }





}

    
export default AddEventApi