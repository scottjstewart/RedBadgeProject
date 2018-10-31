module.exports = (sequelize, DataTypes) => {
    const Buzz = sequelize.define('buzz', {
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false
        },
        funFactor: {
            type: DataTypes.STRING,
            allowNull: false  
        },
        details: {
            type: DataTypes.STRING
        },
        owner: {
            type: DataTypes.UUID
        }
    })
    return Buzz
}