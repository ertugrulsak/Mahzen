CREATE TABLE kitap (
    kitap_id INT PRIMARY KEY AUTO_INCREMENT,
    kitap_isim VARCHAR(255) NOT NULL,
    kitap_sayfasi INT,
    kitap_yazari VARCHAR(255),
    basim_yili INT,
    kitap_turu VARCHAR(255)
);