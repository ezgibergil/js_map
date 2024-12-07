//Bir alışveriş sepetindeki ürünlerin toplam fiyatını bulalım.
const sepet = [{urun:"Telefon",adet:2,fiyat:5000},
    {urun:"Kulaklık",adet:1,fiyat:800},
    {urun:"Kılıf",adet:3,fiyat:100}
    
];
const toplamFiyat = sepet.reduce(function(toplam, urun) {
    return toplam +=urun.fiyat*urun.adet; 
}, 0); 

console.log(toplamFiyat);


//Bir ürün listesindeki stok durumlarını kontrol edip ekrana yazdıralım.
const urunler = [{ isim: "Telefon", stok: 5 },
{ isim: "Tablet", stok: 0 },
{ isim: "Laptop", stok: 3 }
];

//Filter ile yapılan yöntem;
const stokDurum = urunler.filter(function (urun) {
    return urun.stok > 0;
})
console.log(stokDurum);

// forEach ile yapılışı
const stokD = urunler.forEach(function (urun) {
    if (urun.stok > 0) { console.log(urun.isim + ":" + urun.stok); }
    else { console.log(urun.isim + ": Stokta yok"); }
})
console.log(stokD);