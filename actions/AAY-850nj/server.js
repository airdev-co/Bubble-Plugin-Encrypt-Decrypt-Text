function(properties, context) {

    var crypto = require('crypto');
    
    // credit to https://ciphertrick.com/salt-hash-passwords-using-nodejs-crypto/
    
    /**
     * generates random string of characters i.e salt
     * @function
     * @param {number} length - Length of the random string.
     */
    var genRandomString = function(length){
        return crypto.randomBytes(Math.ceil(length/2))
                .toString('hex') /** convert to hexadecimal format */
                .slice(0,length);   /** return required number of characters */
    };


    var stringToHash = properties.input_string;
    
    var salt = genRandomString(16);

    const hashedString = crypto.createHmac(properties.algorithm, salt).update(stringToHash).digest(properties.encoding);

    return {
        "output_string": hashedString,
        "salt": salt
    }


}