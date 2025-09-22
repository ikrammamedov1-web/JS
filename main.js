// ## Task-01

// ```
// İstifadəçi adını parametr kimi qəbul edən və konsola
// «[İstifadəçi adı] is active now» mesajı çıxaran funksiya tərtib edin.
// Funksiyanı 3 müxtəlif ad üçün çağırın.

// function adlar (userName) {
//    console.log(`${userName} is active now`);
   
// }

// adlar("Ali")
// adlar("Vali")
// adlar("Peri")




// ## Task-02

// ```
// Parametr olaraq üç ədəd qəbul edən və konsolda ən böyüyünü göstərən bir funksiya tərtib edin.
// Fərqli arqumentlərlə funksiyanı üç dəfə çağırın.


// function boyuk (a,b,c) {
//    console.log(Math.max(a,b,c));
// }

// boyuk(12,45,67)
// boyuk(12,45,67)
// boyuk(12,45,67)



// ## Task-03

// ```
// Rubl və dollarla hesab qəbul edən və bütün hesablardakı məbləğin
// cəmin rublla göstərən funksiya yazın.
// Tutaq ki, müştərinin rubl hesabında 1200 rubl, dollar hesabında isə 20 dollar var.
// Bir dollar üçün məzənnə 75 rubl təşkil edir.
// Bu halda, funksiya belə mesaj göstərməlidir: Bütün depozitlər üzrə məbləğ: 2700 rubl.


// function sum (rub,usd) {
//    let result = rub + usd * 75
//    console.log(result);
   
// }

// sum(1200, 30)


// ## Task-05

// ```
// Parametr kimi iki ədəd qəbul edən və onlardan ən kiçiyini qaytaran min() funksiyası tərtib edin.


// function min (a,b) {
//    console.log(Math.min(a,b))
// }

// min(23,17)


// // ## Task-06

// // ```
// // Parametr kimi iki ədəd və riyazi əməliyyatın işarəsini qəbul edən və
// // bu riyazi əməliyyatın nəticəsini qaytaran calc funksiyasını yazın.
// // Məsələn, calc(4, 6, '+');  //  10 qaytaracaq

// function calc (a,b,sum) {
//    switch (sum) {
//       case "+":
//          console.log(a + b);
         
//          break;
//       case "-":
//          console.log(a-b)
   
//       default:
//          break;
//    }
// }

// calc(4,6, "-")

// ## Task-07

// ```
// Altı rəqəmli ədəd qəbul edən və ilk üç rəqəminin cəminin ikinci üç rəqəminin cəminə bərabər
// olduğunu yoxlayan isLucky funksiyasını yazın.
// Bilet uğurlu olarsa, funksiya true, uğursuz olarsa, false qaytarmalıdır.
// Məsələn, isLucky(234801);  // true qaytaracaq


// function result (number) {
//    let num = String(number)
//    let firstNumber = +num[0] + +num[1] + +num[2]
//    let secondNumber = +num[3] + +num[4] + +num[5]
   
//    return firstNumber === secondNumber

//  }

// console.log(result(123123))


// ## Task-08

// ```
// Funksiya parametr kimi bir neçə sözdən ibarət mətn qəbul edir.
// Funksiya geriyə eyni mətni qaytarmalıdır, lakin içindəki hər söz böyük hərflə başlamalıdır.
// Məsələn, capitalizeWords('Hello my name is Harry'); // 'Hello My Name Is Harry' qaytaracaq.

// let metn = "Harry Maguire"

// function boyukHerf(metn) {
//    console.log(metn.toUpperCase());
   
// }

// boyukHerf(metn)


// ## Task-09

// ```
// Bir ədədi parametr kimi qəbul edən və cüt olduqda true,
// tək olduqda isə false qaytaran isEven() funksiyasını yazın.


// function isEven(a) {
//    if(a % 2 === 0) {
//       return true;
//    } else return false;
// }
// console.log(isEven(7));
// console.log(isEven(8))


// ## Task-10

// ```
// Telefon nömrəsini parametr kimi qəbul edən ısvalidnumber() funksiyasını yazın.
// Telefon nömrəsi 11 rəqəmdən ibarət olduqda və +7 ilə başladıqda, funksiya true qaytarır.
// +7123456789

// function nomre(a) {
//    let baslig = a.startsWith("+7");
//    let uzunlug = a.length === 12;

//    return baslig && uzunlug;
   
   
// }


// console.log(nomre("+71234432344"))
// console.log(nomre("+712344232344"))


// ## Task-12

// ```
// Verilmiş ədədin sadə olub-olmadığını yoxlayan `isPrime()` funksiyasını yazın.
// Məsələn, `isPrime(7)` çağırıldıqda `true`, `isPrime(8)` çağırıldıqda `false` qaytarmalıdır.