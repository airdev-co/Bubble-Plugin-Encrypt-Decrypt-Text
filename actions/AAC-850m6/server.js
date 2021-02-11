function(properties, context) {
    try{
        const Cryptr = require('cryptr');
        const cryptr = new Cryptr(context.keys.key); 
        const encryptedString = cryptr.encrypt(properties.input_string);
        return {output_string: encryptedString};
    } catch (err) {
        return {error: true}
    }
}