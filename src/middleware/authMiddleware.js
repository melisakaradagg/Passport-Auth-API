const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // 1. Yolcunun üzerindeki 'Authorization' başlığına bakıyoruz
    const authHeader = req.header('Authorization');
    
    // 2. 'Bearer <token>' formatındaki token'ı ayıklıyoruz
    const token = authHeader && authHeader.split(' ')[1];

    // Eğer pasaport (token) hiç yoksa içeri almayız
    if (!token) {
        return res.status(401).json({ message: "Giriş Yasak: Pasaportunuz eksik!" });
    }

    try {
        // 3. Mührün gerçek olup olmadığını gizli anahtarımızla kontrol ediyoruz
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        
        // 4. Pasaport geçerliyse içindeki bilgileri (isim, rol) isteğe ekliyoruz
        req.user = verified; 
        
        // 5. Her şey yolunda, "Geçebilirsin!" diyoruz
        next(); 
    } catch (err) {
        // Mühür sahteyse veya süresi dolmuşsa kapıdan çeviriyoruz
        res.status(403).json({ message: "Giriş Yasak: Geçersiz veya süresi dolmuş pasaport!" });
    }
};