const service = require('./authentication.service');

async function signUp(req, res, next) {
    const reqObj = {...req.body};
    const result = await service.signupService(reqObj);
    if (result) {
        res.send("user is created") 
    }
    next();
}

async function logIn(req, res, next) {
    const reqObj = {...req.body};
    const result = await service.logInService(reqObj);
    try {
        if (result) {
            res.status(200).send(result)
        }
    } catch (error) {
        console.error(error.message);
        throw error;
    }
    next();
}

module.exports = {
    signUp,
    logIn
};