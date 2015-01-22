function CannotUpdateEmail( message ) {
	Error.call( this );
	Error.captureStackTrace( this, this.constructor );

	this.name = this.constructor.name;
    this.message = message;
}

require( 'util' ).inherits( CannotUpdateEmail, Error );

module.exports = CannotUpdateEmail;