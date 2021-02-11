function(properties, context) {

    var crypto = require('crypto');

    var stringToHash = properties.input_string;

    const hashedString = crypto.createHmac(properties.algorithm, context.keys.key).update(stringToHash).digest(properties.encoding);

    return {"output_string": hashedString}


}