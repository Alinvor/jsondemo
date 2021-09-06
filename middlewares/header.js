module.exports = (req, res, next) => {
    res.header('X-DATA-SOURCE', 'mock-v0.16.3')
    res.header('X-SESSION-ID', new Date().valueOf())
    next()
}
