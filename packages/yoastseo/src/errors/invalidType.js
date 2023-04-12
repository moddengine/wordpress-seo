import "error-polyfill";
import inherits from "inherits";

/**
 * Throws an invalid type error
 *
 * @param {string} message The message to show when the error is thrown
 *
 * @returns {void}
 */
function InvalidTypeError( message ) {
	Error.captureStackTrace( this, this.constructor );
	this.name = this.constructor.name;
	this.message = message;
}

inherits( InvalidTypeError, Error );

export default InvalidTypeError;
