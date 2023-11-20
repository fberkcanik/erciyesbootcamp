import React, {useState} from "react";

function Ornek_RandomDelete() {
    let sayiDizisi = [55,433,23,146,89,54,61,34,54,12,23,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    const [sayilar, sayiSil] = useState(sayiDizisi);

    const deleteRandom = () => {
       var  randomIndex = Math.floor(Math.random() * sayilar.length);
        sayilar.splice(randomIndex, 1);
        sayiSil([...sayilar]);
    }
    const deleteAll = () => {
        sayiSil([]);
    }
  return (
    <>
    <button onClick={deleteRandom}>Rastgele Sil</button>
    <button  onClick={deleteAll}>Hepsini Sil</button>
      <ul>
        {sayilar.map((sayi, index) => (
           
          <li key={index}>{sayi}</li>
        ))}
      </ul>
    </>
  );
}

export default Ornek_RandomDelete;
