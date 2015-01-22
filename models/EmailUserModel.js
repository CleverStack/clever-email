module.exports = function( Model ) {
    return Model.extend( "EmailUser", {
        id: {
            type            : Number,
            primaryKey      : true,
            autoIncrement   : true
        },
        status: {
            type            : Model.Types.ENUM,
            values          : [ 'cc', 'bcc' ],
            allowNull       : false
        }
        // EmailId: {
        //     type: DataTypes.INTEGER
        // },
        // UserId: {
        //     type: DataTypes.INTEGER
        // }
    });
};