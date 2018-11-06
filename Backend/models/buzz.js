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
        upVote: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
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
        }
    });

    return Buzz;
}