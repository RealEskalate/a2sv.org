
exports.paginate = async (req, query) => {
    const limit = parseInt(req.query.limit) || 20
    const page = parseInt(req.query.page) || 0

    const result = await query
        .skip(page * limit)
        .limit(limit)
    return { meta: { page: page, limit: limit}, data: result}
}
