const { DataTypes } = require("sequelize");
const { sequelize } = require(".");


module.exports = (sequelize,DataTypes) =>{
    const public_holiday  = sequelize.define("public_holiday",{
        date : {
            type:DataTypes.DATE,
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
        }
       

    },
    {
        timestamps:false,
        createdAt :false,
        updatedAt:false
    }
    )

    return public_holiday
}