/* 26- MASALA */
// //26.Quyidagi namunalarni kuzatgan holda funksiya yasang.
//// Namuna:
//// fun(4) ➞ false
//// fun(9) ➞ false
//// fun(7) ➞ true

// function fun(num) {
//   if (num <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }
// const num = prompt("sonni kiriting ");
// console.log(fun(num));
/* 27- MASALA */
//// 27.Funskiay 2ta istalgan turdagi qiymatlar qabul qiladi. Agar ushbu 2ta qiymat ham qiymat jihatidan ham ma’lumot turi jihatidan teng bo’lsa rost, aks holda funkisya yolg’on qiymat qaytarsin.
// function tengMi(x, y) {
//   return x === y;
// const x = prompt("sonni kiriting");
// const y = prompt("sonni kiriting");
// console.log(tengMi(x, y));
/* 28- MASALA */
////Funksiya boolean qiymat qabul qiladi. Ushbu funksiya boolean qiymatni stringga o’girib qaytarib bersin.
// function booleanToString(bool) {
//   return bool.toString();
// const bool = prompt("boolen qiymat kiriting");
// console.log(booleanToString(bool));
/* 29- MASALA */
//// Arrow funksiyasini yarating ushbu funksiya shunchaki berilgan qiymatni qaytarsin.
// const arrowFunc = (value) => value;
// const value = prompt("biror bir narsa yozin (son,soz,yil");
// console.log(arrowFunc(value));
/* 30- MASALA */
//// Framelar sonini hisoblaydigan funksiya yarating. Frame bu 1 sekundda necha marta ko’rinishlar soni aylanishi. Funksiya minutlar va 1 sekundda nechta framelar soni aylanishini argument sifatida qabul qiladi. Funksiya jami framelar sonini qaytarsin.
// function frameSoni(minut, frame) {
//   return minut * 60 * frame;
// const minut = prompt("minut: ");
// const frame = prompt("frame: ");
// console.log(frameSoni(minut, frame));
/* 31- MASALA */
//// 31.Oddiy matematik amallar ketma-ketligi string ko’rinishida funksiyaga argument sifatida beriladi. Ushbu funksiya matematik ifodani bajarib natijani qaytarsin.
// function calc(str) {
//   return eval(str);
// const str = prompt("biror amal kirriitiing");
// console.log(calc(str));
/* 32- MASALA */
// //.Shunday funksiya yasangki, unda 2ta butun son argument qilib beriladi. Agar ushbu sonlardan birontasi 10ga teng bo’lsa yoki ularning yig’indisi 10ga teng bo’lsa funksiya rost qiymat qaytaradi. Aks hold yolg’on.
// function teng10(a, b) {
//   a = Number(a);
//   b = Number(b);
//   if (a === 10 || b === 10 || a + b === 10) {
//     return true;
//   } else {
//     return false;
// const a = prompt("a sonni kiriting");
// const b = prompt("b sonni kiriting");
// console.log(teng10(a, b));
/* 33- MASALA */
//// 33.Mashina kilometriga 10litr benzin ichadi. Mashina doim yo’lga chiqishdan oldin kamida 100litr benzin bilan chiqadi. Agar masofa funksiyaga argument sifatida berilsa, ushbu masofaga chiqish uchun Mashina necha litr benzin bilan chiqishi keraglini funksiya qaytarib bersin.
// function litrMasofa(km) {
//   const consumptionPerKm = 10;
//   const minFuel = 100;
//   const requiredFuel = km * consumptionPerKm;
//   return Math.max(requiredFuel, minFuel);
// const km = prompt("Masofani kiriting ");
// console.log(litrMasofa(Number(km)));
/* 34- MASALA */
//// 34.Quyidagi namunaga nazar tashlagan holda funksiya yasang.
// //fun(3, 7) ➞ 7
//// fun(-1, 0) ➞ 0
//// fun(1000, 400) ➞ 1000
// function compare(a, b) {
//   if (a > b) {
//     return a;
//   } else if (b > a) {
//     return b;
//     console.log("ssonlar teng");
// const a = prompt("sonni kriiting");
// const b = prompt("sonni kriiting");
// console.log(compare(a, b));
/* 35- MASALA */
// //35.Funksiya 2ta argument berilsa, funksiya anashu 2ta argumentdan iborat massiv qaytarsin.
// function arr(x, y) {
//   return [x, y];
// const x = prompt(" sonni kiriting");
// const y = prompt(" sonni kiriting");
// console.log(arr(x, y));
/* 36- MASALA */
// //36.Funksiyaga 2ta argument sifatida string ko’rinishidagi ma’lumotlar beriladi. Agar ushbu ikkala stringdagi belgilar soni bir-birinikiga teng bo’lsa funksiya rost qiymat qaytarsin, aks hold yolg’on.
// function tengStrings(str1, str2) {
//   return str1.length === str2.length;
// const str1 = prompt("so'z  kiriting");
// const str2 = prompt(" so'z kiriting");
// console.log(tengStrings(str1, str2));
/* 37- MASALA */
////\ 37.Shunday funksiya yasangki, unga string argument qilib beriladi, agar ushbu string bo’sh bo’lsa funksiya true qaytaradi, aks holda false.
// function boshStr(str) {
//   return str === "";
// const str = prompt("string kiriting");
// console.log(boshStr(str));
/* 38- MASALA */
//// 38.Shunday funksiya yasang.Unda butun son argument qilib beriladi. Agar ushbu butun son 5ga bo’linsa, funksiya true qaytarsin, aks holda false.
// function bolinsin5(son) {
//   return son % 5 === 0;
// const son = prompt("sonni kiriting");
// console.log(bolinsin5(son));
/* 39- MASALA */
//// 39.Shunday funksiya yasang.Unda butun son argument qilib beriladi. Agar ushbu butun son 100ga bo’linsa, funksiya true qaytarsin, aks holda false.
// function bolinsin100(son) {
//   return son % 100 === 0;
// console.log(bolinsin100(son));
/* 40- MASALA */
//// 40.Shunday funksiya yasangki, ushbu funksiya stringni ichida nechta belgi borligini aytsin. Bunda length propertisidan foydalanmang va rekursiv funksiya ishlating.
// function uzunlik(str) {
//   if (str === "") {
//     return 0;
//     return 1 + uzunlik(str.slice(1));
// const str = prompt("striing kiriting");
// console.log(uzunlik(str));
/* 41- MASALA */
//// 41.Funksiya 2ta argument qabul qiladi. Birinchi argument ikkinchi argumentdan katta emas. Agar birinchi argumentni ikkinchisiga bo’linsa, funksiya true qaytaradi aks holda false
// function bolinsin(x, y) {
//   x = Number(x);
//   y = Number(y);
//   if (x < y) {
//     return x / y;
// const x = prompt(" sonni kirit");
// const y = prompt(" sonni kirit");
// console.log(bolinsin(x, y));
/* 42- MASALA */
//// 42.Funksiyaga raqam string ko’rinishida berilsa, funksiya ushbu ma’lumotni yana raqam ma’lumot turi ko’rinishida qaytarib bersin.
// function raqam(str) {
//   return Number(str);
// const str = prompt("striingni kiriting");
// console.log(raqam(str));
/* 43- MASALA */
//// 43.To’rtburchakning yuzini hisoblaydigan funksiya yasang. Bunda funksiyaga to’rtburchakning(ya’ni to’g’ri turtburchak) tomonlari beriladi. Funksiya uning yuzini qaytarishi kerak, agar tomonlar xato kiritilgan bo’lsa funksiya -1 qaytarsin.
// function tortYuzi(a, b) {
//   if (a <= 0 || b <= 0) {
//     return -1;
//   return a * b;
// const a = prompt("tomon uzinligiini kiriting");
// const b = prompt("tomon uzinligiini kiriting");
// console.log(tortYuzi(a, b));
/* 44- MASALA */
// 44.Funksiyaga ism va familiya argument qilib berilsa, funksiya “ism, familiya” formatdagi string qaytarsin.
// function ismFam(ism, familiya) {
//   return `${ism}  ${familiya}`;
// const ism = prompt("ismingiznii kiriting");
// const familiya = prompt("familiyangizni kiriting");
// console.log(ismFam(ism, familiya));
/* 45- MASALA */
//// 45.Quyidaga namunani kuzatgan holda funksiya yasang.
//// bug(true) ➞ "sad days"
///// bug(false) ➞ "it's a good day"
// function fun(day) {
//   if (day == "ha") {
//     return " siz hafa bolsangiz  bugun yomon kun ekan ";
//   } else if (day == "yoq") {
//     return "siz yaxshi bolsangiz unda yaxshi kun ekan";
// const day = prompt("ahvolingiz yaxshimi (ha yoki yoq)?");
// console.log(fun(day));
/* 46- MASALA */
//// 46.Shunday funksiya yasangki, ushbu funksiya 2ta argument qabul qiladi. Birinchi argument massive, ikkinchi argument ushbu massivni boshidan boshlab nechta elementni tushurib qoldirish. Tushirib qoldirilgandan so’ng funksiya natijani qaytarsin.
// function tushirMassiv(arr, tushirishSoni) {
//   if (tushirishSoni >= arr.length) {
//     return [];
//   return arr.slice(tushirishSoni);
// const arrInput = prompt(
//   "massiv elementlarini vergul bilan kiriting (masalan: 1,2,3):"
// );
// const tushirishSoni = Number(prompt("tushirish sonini kiriting:"));
// const arr = arrInput.split(",").map(Number);
// console.log(tushirMassiv(arr, tushirishSoni));
/* 47- MASALA */
// OBJECT EKAN !!!!
/* 48- MASALA */
//// 48.Funksiya son qabul qilsa, ushbu sonning negativini qaytarsin.
// function negativ(son) {
//   return son - son * 2;
// console.log(negativ(son));
/* 49- MASALA */
//// 49.Massivni elementlarini o’rnin almashtiradigan funksiya yasang. Reverse metodi siz ham urinib ko’ring.
// function almash(arr) {
//   const reverse = [];
//   const nlenght = arr.length;
//   for (let i = nlenght - 1; i >= 0; i--) {
//     reverse.push(arr[i]);
//   return reverse;
// const arr = prompt("ssonlarni kiriting");
// console.log(almash(arr));
/* 50- MASALA */
//// 50.Kinoteatrga bollar kino ko’rgani kirmoqchi bunda 2ta talab mavjud. Shunda funksiya 2ta argument qabul qiladi. Bolaning yoshini va ota-onasi bilan birgami degan boolean qiymat. Agar bolaning yoshi kamida 15 bo’lsa va ota-onasi bilan birga bo’lsa funksiya true qaytarsin aks holda false.\
// function kinogaKirish(yosh, otaOna) {
//   yosh = Number(yosh);
//   if (yosh >= 15 && otaOna === "true") {
//     return "kinoteatrga kirishingiz  mumkin !";
//     return "kirish mumkin emas";
// const yosh = prompt("bolani yoshi nechida ");
// const otaOna = prompt("ota-onasi billan kelganmi(true/false");
// console.log(kinogaKirish(yosh, otaOna));
/* 51- MASALA */
//// 51.Quyidagi namunalarda kamchilik bor funksiya aslida har bir massivning elementiga 1 qo’shishi kerak. Funksiya to’g’ri yasang.
//// oshir1ga([0, 1, 2, 3]) ➞ [1, 2, 3, 4]
//// oshir1ga([2, 4, 6, 8]) ➞ [3, 5, 7, 9]
//// oshir1ga([-1, -2, -3, -4]) ➞ [0, -1, -2, -3]
// function oshir1ga(arr) {
//   let natija = [];
//   for (let i = 0; i < arr.length; i++) {
//     natija[i] = Number(arr[i]) + 1;
//   return natija;
// const arrInput = prompt("Arrayni kiriting (masalan: 1,2,3,4,5,6):");
// const arr = arrInput.split(",");
// console.log(oshir1ga(arr));
/* 52- MASALA */
// //52.Template string yordamida ya’ni backticlar orqali  `` ushbu formatdagi stringni hosil qiling.
// let ism = "Donyor";
// let familiya = "Olimov";
// let natija = `${ism} ${familiya}`;
// console.log(natija);
/* 53- MASALA */
//// tushunmadim
/* 54- MASALA */
// //54.Funksiya string qabul qiladi. Agar ushbu stringning uzunligi. juft bo’lsa funksiya true qaytarsin, aks holda false
// function sozUzunligi(str) {
//   return str.length % 2 === 0;
// const str = prompt("birorta soz kiriting");
// console.log(sozUzunligi(str));
/* 55- MASALA */
//// 55.Funksiya 2ta argument qabul qiladi. Ikkala argument ham son, funksiya 1-sonni 2-songa darajaga ko’tarilgan qiymatni qaytarsin.
// function daraja(x, y) {
//   return x ** y;
// console.log(daraja(x, y));
/* 56- MASALA */
//// 56.Funksiya massiv qabul qiladi. Ushbu funksiya massivning so’nggi elementini qaytarib bersin.
// function songiElement(arr) {
//   return arr[arr.length - 1];
// }
// const arr = prompt("arrayni kiriting");
// console.log(songiElement(arr));

/* 57- MASALA */
//// 57.Kabisa yilini aniqlaydigan funksiya yasang. Agar kiritilgan yil kabisa bo’lsa funksiya true qaytaradi, aks holda false. Kabisa yili 4ga bo’linadigan yil bo’lib, lekin 100ga bo’linsa u holda 400ga ham bo’linganidagina kabisa hisoblanadi.

// function kabisa(yil) {
//   return (yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0;
// }
// const yil = prompt("yilni kiriting");
// console.log(kabisa(yil));

/* 58- MASALA */
// 58.Funskiyaga so’z kiritilsa funksiya ushbu so’zni birinchi harfisiz qaytarib bersin.

// function soz(word) {
//   let harflar = word.split("");
//   harflar.shift();

//   return harflar.join("");
// }
// const word = prompt("sozni kiriting");
// console.log(soz(word));

/* 59- MASALA */
//// 59.Boolen qiymatini teskarisini qaytarib beradigan funksiya yasang.

// function teskariBool(bool) {
//   bool = bool === "true";
//   return !bool;
// }
// const bool = prompt("true / false kiriting");
// console.log(teskariBool(bool));

/* 60- MASALA */
//// 60.Funskiya son qabul qiladi, agar son juft bo’lsa funskiya “juft” qaytaradi, agar toq bo’lsa “toq” qaytarsin.

// function juftMiToqmi(son) {
//   if (son % 2 === 0) {
//     return "juft";
//   } else {
//     return "toq";
//   }
// }
// const son = prompt("sonni kiriting");
// console.log(juftMiToqmi(son));
