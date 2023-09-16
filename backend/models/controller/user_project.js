const db = require('../entity')
const user_project = db.user_project

const addProject_addUser = async (req, res) => {

  try {

    let { users, project_id } = req.body; // Use 'let' instead of 'const'

 

    if (!Array.isArray(users)) {
      users = [users];

    }
    users.forEach(async (userId) => { // Use a different variable name here, e.g., 'userId'
      const newData = await user_project.create({
        project_id: project_id,
        user_id: userId, // Use 'userId' as the iterator variable
      });

      // Handle newData if needed

    });

 

    // Send a response or handle success

    res.status(200).json({ message: 'Associations created successfully' });

  } catch (error) {

    console.error('Error while creating associations:', error);

    // Handle errors and send an appropriate response

    res.status(500).json({ error: 'Internal server error' });

  }

};



// const db = require('../entity')
// const user_project = db.user_project


// const addProject_addUser= async(req,res) =>{
//     try {
        
// console.log(req.body)
//         // Extract the admin data from the request body
//         const {project_id,user_id} = req.body;
     

//              // Create a new project record in the database
//                 const newData = await user_project.create({
//                     project_id,
//                     user_id
//          });
 
//          // Send a response indicating success
//          res.json({ message: 'user details and Project details added successfully', user_project: newData,status:true});
         
       
//     } catch (err) {
//         // Handle any errors that occur during the addition process
//         console.error(err);
//         res.status(500).json({ error: 'Failed to add Project' });
//     }
// }



module.exports = {
    addProject_addUser
}
