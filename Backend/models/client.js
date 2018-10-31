module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define('client', {
        venueName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        deal: {
            type: DataTypes.STRING,
            allowNull: false
        },
        details: {
            type: DataTypes.STRING,
            allowNull: false
        },
        owner: {
            type: DataTypes.UUID
        }
    })
    return Client
}