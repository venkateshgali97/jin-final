const db = require('../entity')
const user_project = db.user_project
const users = db.users
const projects = db.projects
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



const projectDetailsOfLoginUser = (req, res) => {
  let userId = req.params.id;
  try {
    // Find the user by their ID and include the associated projects
    users.findByPk(userId, {
      include: [
        {
          model: projects,
          attributes: ['project_name', 'start_date', 'end_date'],
          through: {
            // If you have additional attributes in the user_project table, you can select them here
          },
        },
      ],
    }).then((user) => {
      if (user) {
        res.send(user.projects); // Note the lowercase 'projects' here
      } else {
        res.send(`User with ID ${userId} not found.`);
      }
    });
  } catch (err) {
    console.log(err);
  }
};



module.exports = {
  addProject_addUser,
  projectDetailsOfLoginUser 
}
