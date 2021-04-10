var authMiddlerware = (req, res, next) => {
    var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];

}

var userMiddlerware = (req, res, next) => {
    var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];
}

export default {
    authMiddlerware,
    userMiddlerware
}