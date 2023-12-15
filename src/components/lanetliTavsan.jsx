 import {useNavigate } from "react-router-dom";


/*const LanetliTavsan = () => {
    
  const navigate = useNavigate();

  return (
    <div>
      <h2>Lanetli Tavşan</h2>
      <p>Yazar: Bora Chung</p>
      <p>Sayfa Sayısı: 246</p>

      <button onClick={() => navigate("/home")}>Go Home</button>
    </div>
    
  )
}

export default LanetliTavsan */

import React, { useState,useEffect } from 'react';

function LanetliTavsan() {
  const initialYorumlar = JSON.parse(localStorage.getItem('yorumlar')) || [];
  const [yorumlar, setYorumlar] = useState(initialYorumlar);
  const [yeniYorum, setYeniYorum] = useState('');
const navigate = useNavigate();


useEffect(() => {
  localStorage.setItem('yorumlar', JSON.stringify(yorumlar));
}, [yorumlar]);


  // Yorum ekleme fonksiyonu
  const yorumEkle = () => {

    

    if (yeniYorum.trim() !== '') {
      const yeniYorumObj = {
        text: yeniYorum,
        date: new Date().toLocaleString(),
      };
      setYorumlar([...yorumlar, yeniYorumObj]);
      setYeniYorum('');
    }
  };

  const yorumSil = (index) => {
    const yeniYorumlar = [...yorumlar];
    yeniYorumlar.splice(index, 1);
    setYorumlar(yeniYorumlar);
  };

  return (
    <div>
     <h2>Lanetli Tavşan</h2>
      <h5>Yazar: Bora Chung</h5>
      <h5>Sayfa Sayısı: 246</h5>
      <h2>Kitap hakkındaki Düşüncelerin</h2>
      <div>
        <textarea
          rows="4"
          cols="50"
          placeholder="Kitap hakkındaki düşüncelerinizi yazınız..."
          value={yeniYorum}
          onChange={(e) => setYeniYorum(e.target.value)}
        />
        <br />
        <button onClick={yorumEkle}>Yorum Ekle</button>
      </div>
      <div>
        <h2>Yorumlar</h2>
        <ul>
          {yorumlar.map((yorum, index) => (
            <li key={index}>
              <span>{yorum.text}</span>
              <span style={{ marginLeft: '10px' }}>({yorum.date})</span>
              <button onClick={() => yorumSil(index)}>Sil</button>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={() => navigate("/home")}>Go Home</button>
    </div>
  );
}

export default LanetliTavsan;
