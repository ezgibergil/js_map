//Bir öğrenci listesinde şunları yapalım
//1.18 yaşından büyük olanları seçelim.
//2.Bu öğrencilerin notlarını harf notuna çevirelim.
//3.Ortalama harf notunu hesaplayalım.


const ogrenciler = [{isim:"Ali",yas:16,not:85},
    {isim:"Ayşe",yas:19,not:92},
    {isim:"Fatma",yas:22,not:76},
    {isim:"Mehmet",yas:17,not:60}
    ];

//1
const buyuk18den = ogrenciler.filter(function(ogr){
    return ogr.yas>18;
})
console.log(buyuk18den);

//2

const harfNotu1 = ogrenciler.map(function(ogr){
    let harfNotu = "";
    if(ogr.not>90) harfNotu="AA";
    else if (ogr.not>80) harfNotu="BB";
    else if (ogr.not>70) harfNotu="CC";
    else if (ogr.not>60) harfNotu="DD";
    else harfNotu="FF";

    return{
        isim:ogr.isim,
        not:ogr.not,
        yas:ogr.yas,
        HarfNotu:harfNotu
    } 
})
console.log(harfNotu1);

//3
const ortalama = ogrenciler.reduce(function(toplam,ogr){
    return toplam + ogr.not;
},0)

const canEgrisi = ortalama /ogrenciler.length;
console.log(canEgrisi);
