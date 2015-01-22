module.exports = function( Controller, EmailService, Exceptions, config ) {
    return Controller.extend(
    /* @Static */
    {
        autoRouting: !!config[ 'clever-email' ].controllerEnabled
    },
    /* @Prototype */
    {
        listAction: function () {
            EmailService
                .listEmails( this.req.user.id )
                .then( this.proxy( 'handleServiceMessage' ) )
                .fail( this.proxy( 'handleException' ) );
        },

        getAction: function () {
            EmailService
                .getEmailByIds( this.req.user.id, this.req.params.id )
                .then( this.proxy( 'handleServiceMessage' ) )
                .fail( this.proxy( 'handleException' ) );
        },

        postAction: function () {
            var userId          = this.req.user.id
              , accId           = this.req.user.account.id
              , accLogo         = this.req.user.account.logo
              , accName         = this.req.user.account.name
              , userFirstName   = this.req.user.firstname
              , userLastName    = this.req.user.lastname
              , data            = this.req.body;

            data = data.map( function( x ) {
                x.userId        = userId;
                x.accId         = accId;
                x.userFirstName = userFirstName;
                x.userLastName  = userLastName;
                x.accLogo       = accLogo;
                x.accName       = accName;

                return x;
            });

            EmailService
                .handleEmailCreation( data )
                .then( this.proxy( 'handleServiceMessage' ) )
                .fail( this.proxy( 'handleException' ) );
        },

        putAction: function () {
            this.handleServiceMessage( new Exceptions.CannotUpdateEmail( 'Cannot update email with id of ' + this.req.params.id ) );
        },

        deleteAction: function () {
            EmailService
                .deleteEmail( this.req.user.id, this.req.params.id )
                .then( this.proxy( 'handleServiceMessage' ) )
                .fail( this.proxy( 'handleException' ) );
        },

        sendAction: function () {
            EmailService
                .handleEmailSending( this.req.user.id, this.req.params.id, this.req.body.type )
                .then( this.proxy( 'handleServiceMessage' ) )
                .fail( this.proxy( 'handleException' ) );

        }
    });
};