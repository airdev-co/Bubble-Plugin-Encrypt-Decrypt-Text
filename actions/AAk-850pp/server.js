function(properties, context) {

    const crypto = require('crypto');
    
    return {
     	'random_bytes': crypto.randomBytes(properties.number_of_characters).toString(properties.encoding)   
    };

}