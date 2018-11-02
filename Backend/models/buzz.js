module.exports = (sequelize, DataTypes) => {
    const Buzz = sequelize.define('buzz', {
        userId: {
            type: DataTypes.UUID,
            allowNull: false
        },
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
        upVote: {
            type: DataTypes.INTEGER
        },
    });

    return Buzz;
}