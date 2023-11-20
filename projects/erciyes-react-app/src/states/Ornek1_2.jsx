import React,{useState} from 'react'

function Ornek1_2() {
    const [x, arttir] = useState([200,200]);
    const [sayilar, sayiEkle] = useState([1,2,3,4,5,6,7,8,9,10]);
  
    const boyutAyarla = () => {
      arttir([x[0] + 100, x[1] + 100]);
       
    }
    const addRandom = () => {
      var addSayi = Math.floor(Math.random() * 100);
      sayilar.find((sayi) => sayi === addSayi) ? addSayi = Math.floor(Math.random() * 100) : console.log("Sayı bulundu");
      sayiEkle([...sayilar, addSayi]);
    }
    return (
     <>
     <div style={{width: '100%',display: 'flex'}}>
     <div style={{width: '50%', border: '1px solid', height: '100vh', padding: '10px'}}>
      <h1>Örnek - 1 </h1>
      <button onClick={boyutAyarla}>Büyüt</button>
      <div style={{width: x[0], height: x[1], backgroundColor: 'black'}}></div>
     </div>
     <div style={{width: '50%', border: '1px solid', height: '100vh', padding: '10px'}}>
      <h1>Örnek - 2 </h1>
      <button onClick={addRandom}>Sayı Ekle</button>
      <ul>
        {sayilar.map((sayi, index) => (
          <li key={index}>{sayi}</li>
        ))}
      </ul>
     </div>
      
     </div>
     </> 
    );
}

export default Ornek1_2