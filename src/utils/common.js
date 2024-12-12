function responseBuilder(res, is_success, status_code, data = null, pagination = null) {
    return res.status(200).json({
        statusCode: String(status_code),
        body:{
            is_success: is_success,
            data,
            pagination,
        }
    });
}

// function getErrorMessage(e) {
//     const errorMessage = e.message || e[0]?.message || e
//     console.log("errorMessage: ", errorMessage)
//     return errorMessage
// }

module.exports = {
    responseBuilder,
    // getErrorMessage
};