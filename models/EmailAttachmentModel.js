module.exports = function( Model ) {
    return Model.extend( "EmailAttachment", {
        id: {
            type            : Number,
            primaryKey      : true,
            autoIncrement   : true
        },
        fileName: {
            type            : String,
            allowNull       : false,
            required        : true
        },
        filePath: {
            type            : String,
            allowNull       : false,
            required        : true
        }
    });
};