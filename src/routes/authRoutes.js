const express = require('express');
const router = express.Router();

// Az önce yazdığımız ofis (controller) ve memuru (middleware) çağırıyoruz
const authController = require('../controllers/authController');
const verifyPassport = require('../middleware/authMiddleware');

// 1. Kapı: Vize alma kapısı (Herkes gelebilir)
router.post('/login', authController.login);

// 2. Kapı: Şehir merkezi (Sadece pasaportu olanlar girebilir)
// 'verifyPassport' memurunu kapıya nöbetçi olarak diktik
router.get('/ulke-ici', verifyPassport, (req, res) => {
    res.json({
        message: `Hoş geldin ${req.user.name}!`,
        bilgi: "Şu an korumalı bölgedesin.",
        yetki: req.user.role
    });
});

module.exports = router;