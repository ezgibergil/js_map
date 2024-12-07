//Map ile bir ürün listesini fiyatlara KDV ekleyerek güncellemek.

const urunler = [
    { isim: "Telefon", fiyat: 10000 },
    { isim: "Bilgisayar", fiyat: 20000 },
    { isim: "Tablet", fiyat: 8000 }];

const kdvliFiyatlar = urunler.map(function(urun){
    return{
        isim: urun.isim,
        fiyat: urun.fiyat*1.18
    }   
});
console.log(kdvliFiyatlar);

//Filter ile fiyatı 10000den fazla olan ürünleri listele.

const yeniListe = urunler.filter(function(urun){
    return urun.fiyat>10000;
});
console.log(yeniListe);

//reduce ile toplam fiyatı hesapla.

const sum = urunler.reduce((total,urun)=>total+urun.fiyat,0);
console.log(sum);

//function kullanılarak yapılan hali;
const summ = urunler.reduce(function(toplam, urun) {
    return toplam + urun.fiyat; 
}, 0); 

console.log(summ);
//forEach ile ürünlerin adlarını ekrana yazdır.

urunler.forEach(urun => console.log(urun.isim));

//function kullanılan yöntem;
urunler.forEach(function(urun){
    console.log(urun.isim);
})