
//map, dizinin her elemanında işlem yaparak yeni bir dizi oluşturur.

//filter, belirtilen koşulu sağlayan elemanlardan oluşan yeni bir dizi döndürür.
//Aşağıdaki kodlar bir listenin içerisinde 20 den büyük olan sayıları yeni bir liste halinde döndürür.
const numbers = [10,20,30,40];
const greaterThanTwenty = numbers.filter(num=>num>20);
console.log(greaterThanTwenty);


//reduce , diziyi tek bir değere indirgemek için kullanılır. Toplama çarpma gibi işlemler yapmak için kullanılır.
const numbers = [1,2,3,4];
const sum = numbers.reduce((total,num)=>total+num,0); // 0 değeri burda total değişkenine başlangıçta atadığımız değer.
console.log(sum);


//foreach, dizi elemanları üzerinde gezinmek için kullanılır. Yeni bir dizi döndürmez, sadece her eleman için işlem yapar. Döngü amaçlıdır. Tam anlamıyla For döngüsü değildir. 
const numbers = [1,2,3,4];
numbers.forEach(num => console.log(num*2));






