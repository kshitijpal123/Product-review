const service = require('./review.service');

async function overallRating(req, res, next) {
    const reqObj = {...req.body};
    const result = await service.overallRating(reqObj);
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

async function ratingSummary(req, res, next) {
    const reqObj = {...req.query};
    console.log(reqObj);
    const result = await service.ratingSummary(reqObj);
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

async function featureRating(req, res, next) {
    const reqObj = {...req.body};
    const result = await service.overallRating(reqObj);
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
    overallRating,
    ratingSummary,
    featureRating
};