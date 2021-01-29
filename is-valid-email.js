const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

/**
 * isValidEmail
 * @param {string} email - the email that is going to be validated
 * @returns {boolean}
 */

module.exports = function isValidEmail(email) {
    return EMAIL_REGEX.test(email)
}