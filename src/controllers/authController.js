const jwt = require('jsonwebtoken');

// Bu fonksiyon giriş yapma mantığını yönetir
exports.login = (req, res) => {
    const { username, password } = req.body;

    // Basit bir kontrol: Kullanıcı adı 'admin' ve şifre '123' mü?
    if (username === 'admin' && password === '123') {
        const user = { id: 1, name: username, role: 'VIP' };
        
        // Mühürlü Pasaportu (Token) oluşturuyoruz
        // process.env.JWT_SECRET'ı birazdan .env dosyasına yazacağız
        const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '15m' });
        
        return res.json({
            message: "Vizeniz onaylandı. Hoş geldiniz!",
            passport: token
        });
    }

    // Bilgiler yanlışsa kapıdan çevir
    res.status(401).json({ message: "Vize reddedildi: Bilgiler hatalı!" });
};