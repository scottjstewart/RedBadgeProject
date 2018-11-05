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
        },
        longitude: {
            type: DataTypes.DECIMAL,
            validate: {
                min: -180,
                max: 180
            }
        },
        latitude: {
            type: DataTypes.DECIMAL,
            validate: {
                min: -90,
                max: 90
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [5, 5]
            }
        }
    })
    return Client
}