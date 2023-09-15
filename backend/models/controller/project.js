const db = require('../entity')
const projects = db.projects


const addProject = async(req,res) =>{
    try {
        

        // Extract the admin data from the request body
        const {name,description,start_date,end_date} = req.body;
        console.log(name,description,start_date,end_date)

        // checking project is already existed or not
        const findProject = await projects.findOne({
            where :{
                name: name
            }
         })

         if(findProject){
            res.status(400).json({message : 'project already existed'})
         }
         // if project is not not existed
         else{

             // Create a new project record in the database
                const newProject = await projects.create({
                    name,
                    description,
                    start_date,
                    end_date
         });
 
         // Send a response indicating success
         res.status(201).json({ message: 'Project added successfully', project: newProject});
         }
       
    } catch (err) {
        // Handle any errors that occur during the addition process
        console.error(err);
        res.status(500).json({ error: 'Failed to add Project' });
    }
}



module.exports = {
    addProject
}
