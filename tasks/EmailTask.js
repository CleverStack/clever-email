var Task            = require( 'classes' ).Task
  , utils           = require( 'utils' )
  , async           = require( 'async' )
  , config          = require( 'config' )
  , models          = require( 'models' )
  , services        = require( 'services' )
  , ejsFileRender   = utils.ejsRenderer;

module.exports = Task.extend(
{
    init: function( payload, callback ) {
        debug( 'Starting...' );
 
        async.waterfall(
            [
                this.proxy( 'findEmailsToSend' ),
                this.proxy( 'doSomethingElse')
            ],
            function( err, results ) {
                debug( 'Finished.' );
                callback( err );
            }
        );
    },

    findEmailsToSend: function( callback ) {
        this.EmailModel
            .findAll({ where: { isDelivered: false, sentAttemps: { lte: 3 } } , limit: 10, include: [ this.EmailAttachmentModel ]})
            .success( this.proxy( 'loopOverEmailsToSend', callback ) )
            .error( callback );
    },
 
    doSomething: function( callback ) {
        callback( null );
    },
 
    doSomethingElse: function( callback ) {
        callback( null );
    }
});
