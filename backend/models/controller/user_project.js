const db = require('../entity')
const user_project = db.user_project


const addProject_addUser= async(req,res) =>{
    try {
        
console.log(req.body)
        // Extract the admin data from the request body
        const {project_id,user_id} = req.body;
     

             // Create a new project record in the database
                const newData = await user_project.create({
                    project_id,
                    user_id
         });
 
         // Send a response indicating success
         res.json({ message: 'user details and Project details added successfully', user_project: newData,status:true});
         
       
    } catch (err) {
        // Handle any errors that occur during the addition process
        console.error(err);
        res.status(500).json({ error: 'Failed to add Project' });
    }
}



module.exports = {
    addProject_addUser
}
