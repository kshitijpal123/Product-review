const tables = require('../../general_resources/tables.json');
const knexConfig = require('../../knex/knexfile')
const knex = require('knex')(knexConfig.development);
const bcrypt = require('bcrypt');

async function signupService(request) {
    const salt = await bcrypt.genSalt();
    request.password = await bcrypt.hash(request.password, salt);
    const insertObj = {
        email: request.email,
        password: request.password,
        first_name: request.first_name,
        last_name: request.last_name
    }
    const user_id = await knex(tables.user_mst).insert(insertObj)
    
    return user_id
}

async function logInService(request) {
    const user = await knex(tables.user_mst).select('*').where({email: request.email})
    console.log(user);
    const checkPass = await bcrypt.compare(request.password, user[0].password)
    console.log(checkPass);
        if (user.length > 0 && checkPass) {
            return await knex(tables.product_mst).select('*')
        } else {
            console.log("error showing");
            throw new Error("user is not registered")
        }
}

module.exports = {
    signupService,
    logInService
}