const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // 1. Kapıdaki memur pasaportu ister
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).send('Giriş Yasak: Pasaportun yok!');
    }

    try {
        // 2. Mühür gerçek mi kontrol et
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next(); // 3. Geçebilirsin!
    } catch (err) {
        res.status(403).send('Giriş Yasak: Pasaportun sahte veya süresi dolmuş!');
    }
};