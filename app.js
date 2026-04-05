require('dotenv').config(); // Gizli anahtarları oku (.env)
const express = require('express');
const authRoutes = require('./routes/authRoutes'); // Yol haritasını çağır

const app = express();

// Gelen JSON verilerini okumamızı sağlar (Vize başvurusu için şart)
app.use(express.json());

// Tüm rotalarımızı '/api' ön ekiyle sisteme tanıtıyoruz
app.use('/api', authRoutes);

// Sunucuyu başlat
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`\n🚀 SİSTEM BAŞLATILDI`);
    console.log(`-------------------------`);
    console.log(`📍 Ana Durak: http://localhost:${PORT}/api`);
    console.log(`🛂 Vize Ofisi: /api/login`);
    console.log(`🏙️ Şehir İçi: /api/ulke-ici`);
    console.log(`-------------------------\n`);
});