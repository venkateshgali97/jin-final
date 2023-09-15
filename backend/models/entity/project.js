const { DataTypes } = require("sequelize");
const { sequelize } = require(".");


module.exports = (sequelize,DataTypes) =>{
    const projects = sequelize.define("projects",{
       
        name : {
            type:DataTypes.STRING,
            allowNull : false,
            validate : {
                notEmpty : true
            }
        },
        description : {
            type:DataTypes.STRING,
            allowNull : false,
            validate : {
                notEmpty : true
            }
        },


        start_date : {
            type:DataTypes.DATE,
            allowNull : false,
            validate : {
                notEmpty : true
            }
        },

        end_date : {
            type:DataTypes.DATE,
            allowNull : false,
            validate : {
                notEmpty : true
            }
        }

    },
    {
        timestamps:false,
        createdAt :false,
        updatedAt:false
    }
    )

    return projects
}