const ogrenciler = [
    {isim:"Ali",not:85,yas:20},
    {isim:"Ayşe",not:92,yas:25},
    {isim:"Fatma", not:76,yas:16},
    {isim:"Mehmet",not:60,yas:17}
];

//Öğrenci notlarını harf notlarına dönüştürme
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

//Öğrenci listesinden yaşı 18 den küçük olanları seçelim.

const kucukler = ogrenciler.filter(function(ogr){
    return ogr.yas<18;
});

console.log(kucukler);