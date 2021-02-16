function(properties, context) {


    return {
     	'random_bytes': randomBytes(properties.number_of_characters).toString('hex')   
    }


}