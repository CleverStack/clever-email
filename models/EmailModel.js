module.exports = function( Model ) {
    return Model.extend( "Email", {
        id: {
            type            : Number,
            primaryKey      : true,
            autoIncrement   : true
        },
        subject: {
            type            : String,
            allowNull       : false
        },
        body                : Model.Types.TEXT,
        isDelivered: {
            type            : Boolean,
            allowNull       : false,
            default         : true
        },
        sendAttempts: {
            type            : Number,
            allowNull       : false,
            default         : 0
        },
        isOpened: {
            type            : Boolean,
            allowNull       : false,
            default         : false
        },
        token               : Model.Types.TEXT,
        dump                : Model.Types.TEXT

        // EmailTemplateId     : Number
        // AccountId : {
        //     type: DataTypes.INTEGER
        // }
    });
};