const tables = require('../../general_resources/tables.json');
const knexConfig = require('../../knex/knexfile')
const knex = require('knex')(knexConfig.development);

async function getTotalRating(request) {
    console.log(request.product_id);
    return knex(tables.review_mst + " as RM").avg('RM.overall_rating as total_average_rating')
        .leftJoin(tables.review_feature_ratings + " as RFR", 'RFR.fk_review_id', 'RM.review_id')
        .avg('RFR.accuracy as accuracy')
        .avg('RFR.communication as communication')
        .avg('RFR.location as location')
        .avg('RFR.check_in as check_in')
        .avg('RFR.cleanliness as cleanliness')
        .avg('RFR.value as value')
        .count('RM.review_id as total_number_of_rating')
        .where('RM.fk_product_id', request.product_id)
}

module.exports = {
    getTotalRating
}