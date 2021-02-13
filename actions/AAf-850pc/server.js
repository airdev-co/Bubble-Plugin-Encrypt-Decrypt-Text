function(properties, context) {
    try{
        const Cryptr = require('cryptr');
        const cryptr = new Cryptr(context.keys.key); 
        const decryptedString = cryptr.decrypt(properties.input_string);
        return {output_string: decryptedString};
    } catch (err) {
        return {error: true}
    }
}