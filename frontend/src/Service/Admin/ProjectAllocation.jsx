import React from 'react'
import axios from 'axios';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class ProjectAllocationApi{
    async  AddProject(Info) { 
        try{
            const response = await axios.post("http://localhost:3000/project/add", Info);
             console.log(response)
            return response.data
            
        }catch(err){
            console.log(err)
        }
    }

    


}
export default ProjectAllocationApi