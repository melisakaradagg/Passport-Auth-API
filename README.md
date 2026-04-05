# 🛂 Passport Auth API (Node.js & JWT)

Bu proje, modern web uygulamalarında kullanılan **JWT (JSON Web Token)** tabanlı kimlik doğrulama mekanizmasını ve **Middleware (Ara Katman)** mantığını simüle etmek için geliştirilmiştir. 

Proje, bir "Gümrük Kontrol Noktası" metaforu üzerine kurulmuştur: Kullanıcı önce vize (Token) alır, ardından bu vize ile korumalı alanlara giriş yapar.

## 🚀 Öne Çıkan Özellikler
* **JWT Kimlik Doğrulama:** Güvenli ve stateless (durumsuz) oturum yönetimi.
* **Custom Middleware:** Yetkisiz erişimleri engelleyen özel ara katman kontrolü.
* **MVC Yapısı (Opsiyonel):** Modüler ve okunabilir kod dizilimi.
* **Security:** Kullanıcı bilgilerinin token içerisinde şifrelenmiş halde taşınması.

---

## 🛠️ Kurulum ve Çalıştırma

1.  **Projeyi Klonlayın:**
    ```bash
    git clone [https://github.com/melisakaradagg/Passport-Auth-API.git](https://github.com/melisakaradagg/Passport-Auth-API.git)
    cd Passport-Auth-API
    ```

2.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    ```

3.  **Çevresel Değişkenleri Ayarlayın:**
    Ana dizinde bir `.env` dosyası oluşturun ve şu satırı ekleyin:
    ```text
    JWT_SECRET=ozel_gumruk_muhuru_2026
    ```

4.  **Sunucuyu Başlatın:**
    ```bash
    node server.js
    ```

---

## 🛣️ API Rotaları ve Kullanım

| Method | Endpoint | Açıklama | Yetki |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/login` | Kullanıcı adı ve şifre ile JWT (Vize) alır. | Herkese Açık |
| **GET** | `/api/ulke-ici` | Korumalı alana giriş yapar. | ✅ JWT Gerekli |

### 🧪 Test Senaryosu

1.  **Giriş Yap (Vize Al):** `POST` isteği ile `{"username": "admin", "password": "123"}` gönderin. Size bir `passport` kodu dönecektir.
2.  **Erişim Sağla (Şehre Gir):** `GET` isteği yaparken **Headers** kısmına şu bilgiyi ekleyin:
    * **Key:** `Authorization`
    * **Value:** `Bearer <KOPYALADIĞINIZ_TOKEN>`

---

## 👨‍💻 Geliştirici
- **Melisa Karadağ** (@melisakaradagg)
