const tables = require('../../general_resources/tables.json');
const knexConfig = require('../../knex/knexfile')
const knex = require('knex')(knexConfig.development);
const dbModel = require('./review.dal')

async function overallRating(request) {
    const insertObj = {
        fk_product_id: request.product_id,
        review: request.review,
        overall_rating: request.overall_rating,
        fk_user_id: request.user_id
    }
    const review_id = await knex(tables.review_mst).insert(insertObj)
    const insertObj2 = {
        fk_review_id: review_id[0],
        accuracy: request.accuracy ? request.accuracy : 0,
        communication: request.communication ? request.communication : 0,
        location: request.location ? request.location : 0,
        check_in: request.check_in ? request.check_in : 0,
        cleanliness: request.cleanliness ? request.cleanliness : 0,
        value: request.value ? request.value : 0,
        fk_user_id: request.user_id
    }
    const feature_review_id = await knex(tables.review_feature_ratings).insert(insertObj2)
    return review_id
}

async function ratingSummary(request) {
    const totalRating = await dbModel.getTotalRating(request)
    console.log(totalRating);
    return {
        average_rating: totalRating[0].total_average_rating ? Number(Number(totalRating[0].total_average_rating).toFixed(1)) : 0,
        total_ratings_on_product: totalRating[0].total_number_of_rating ? totalRating[0].total_number_of_rating : 0,
        accuracy: totalRating[0].accuracy ? Number(Number(totalRating[0].accuracy).toFixed(1)) : 0,
        communication: totalRating[0].communication ? Number(Number(totalRating[0].communication).toFixed(1)) : 0,
        location: totalRating[0].location ? Number(Number(totalRating[0].location).toFixed(1)) : 0,
        check_in: totalRating[0].check_in ? Number(Number(totalRating[0].check_in).toFixed(1)) : 0,
        cleanliness: totalRating[0].cleanliness ? Number(Number(totalRating[0].cleanliness).toFixed(1)) : 0,
        value: totalRating[0].value ? Number(Number(totalRating[0].value).toFixed(1)) : 0
    }
}

module.exports = {
    overallRating,
    ratingSummary
}