module.exports = (sequelize, DataTypes) => {
    const Com = sequelize.define('comment', {
        text: {
            type: DataTypes.STRING
        },
        upVote: {
            type: DataTypes.INTEGER
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        commenter: {
            type: DataTypes.STRING
        }
    });

    return Com;
}