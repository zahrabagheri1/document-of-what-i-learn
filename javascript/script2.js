// ! Git command line
// ls -> list system
// cd -> change directory
// mkdir -> make directory (folder)
// touch -> make file
// rm -rf [file name] -> delete file
// / * -> wild card

// ! Array Methods

// ? 1.Concat
const arr1 = ['1', '2', '3']
const arr2 = ['4', '5', '6']
const arr3 = arr1.concat(arr2)
// console.log(arr3) // => arr1 + arr2

// ? 2.Length
const arr4 = ['1', '2', '3']
// console.log(arr4.length)

const data = [];
if (data.length > 0) {//یعنی اگر دیتایی وجود نداشت
    // console.log('done this one')
}


// ? 3.foreach . map
const arr5 = ['1', '2', '3']

// ? 3.1. For
for (let i = 0; i < arr5.length; i++) {
    const element = arr5[i];
    if (element) {
        // console.log(element); 
    }
}

// ? 3.2. For of
for (const item of arr5) {
    // console.log(item); 
}

// ? 3.3. foreach
arr5.forEach(element => {
    // console.log(element);

});

// ? 3.4. Map ~~ React => make new array
arr5.map((item) => {
    // console.log(item)
})


// Todo: 4. Push
const arr6 = ['1', '2', '3'];
const arr7 = [];
arr6.forEach((item) => {
    if (item == 1) { //کورژن رخ میدهد و یک نمایش میدهد
        arr7.push(item);
    }
    arr7.push(item)
})
// console.log(arr7);

// ? 5. Pop Shift UnShift
const arr8 = ['1', '2', '3'];
// arr8.pop(); // خونه آخر حذف میشود
// console.log(arr8) //['1', '2']
// console.log(arr8.pop()) //3
// * pop => element ke hazf return And array asli dochar taghir mishavad

// ? 5.Shift 
// از خونه ی اول حذف میشود
arr8.shift()
// console.log(arr8.shift()) //1
// console.log(arr8) //[ '2', '3' ]

// ***********************************************************
// Q: حذف عدد دو با حذف کردن ارایه اخر یا اول
// Input: const arr = ['1', '2', '3'];
// Output: const arr = ['1' , '3'];

// در 80% مواقع برای سوال الگوریتمی نیاز به لوپ داریم
const arr9 = ['1', '2', '3'];
const result1 = [];

// 1.راه حل اول
arr9.forEach(element => {
    if (element != 2) {
        // result1.push(element)
    }
});

// 2.راه حل دوم
arr9.forEach(element => {
    const deleteElement = arr9.shift()
    if (deleteElement !== 2) {
        result1.push(element)
    }
});
// console.log(result1)

// ***********************************************************

// ? Unshife ! push
// به اول ارایه عدد را اضافه میکند
const arr10 = ['1', '2', '3'];
arr10.unshift('0');
// console.log(arr10.unshift('0')) //length array
// console.log(arr10)


// به آخر ارایه عدد را اضافه میکند
const arr11 = ['1', '2', '3'];
arr11.push('5');
// console.log(arr11.push('5')) //length array
// console.log(arr11)

// ? arr.flat() ~~
//  ارایه اصلی را دچار تغییر نمیکند و از ان یک کپی میگیرد
const arr12 = ['1', [['2']], '3', ['4']];
arr12.flat()
// console.log(arr12.flat()) //[ '1', [ '2' ], '3', '4' ]
// console.log(arr12) // تغییر نمیکند

// ? Reverse
const arr13 = ['1', '2', '3', '4', '5'];
// ارایه اصلی دچار مودیفای میشود
arr13.reverse()
// console.log(arr13.reverse()) //ارایه را بدون تغییر برمیگرداند
// console.log(arr13)

// ? Sort
const arr14 = [15, 8748, 15, 3151, 454, 36, 58, 486, 3, 15, 96, 7];

// Desc => نزولی  arr.sort((a, b) => b - a)
// Asc => صعودی arr.sort((a, b) => a - b)
//همان ارایه را سورت میکند ارایه جدید نیست

// 1.method
// arr14.sort((a, b) => a - b)  //Asc
arr14.sort((a, b) => b - a) //Desc
// console.log(arr14)

// Todo: 2. Sort array ,But don't use sort method


// ? Join
const arr15 = ['+98', '912', '5486254'];
// => New string
arr15.join("")
// console.log(arr15.join("")) //+989125486254
// console.log(arr15) //arr15 not chenge

// Senario - otp khud ra vard konid
// server=> '2586
const otp = [2, 5, 8, 6];
const otpJoin = otp.join('')
// console.log(otpJoin)
// بدون مودیفای کردن آرایه هب من استرینگ جدید میدهد
// و خروجی ما استرینگ از و میتوان متودهای استرینگ را روی ان اجرا کرد

// EXP:
let phoneWhitout = ['912', '4526587']
phoneWhitout = ['12', '4526587']

const phoneNumber = phoneWhitout.join("");
// validation
// if (!phoneNumber.startsWith('09')) throw new console.error('شماره شما نامعتبر است');
const phone = phoneNumber.padStart(11, 0)
// console.log(phone)


//  ! findIndex and findLastIndex
const arr16 = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9]
// console.log(arr16[2]) //3
const findIndex1 = arr16.findIndex((element) => element == 8)
// console.log(findIndex1) //index

const findIndex2 = arr16.findIndex((element) => element == 80)
// console.log(findIndex2) //-1

const findIndex3 = arr16.findIndex((element) => element == 5)
// console.log(findIndex3) //frist 5

const findLastIndex1 = arr16.findLastIndex((element) => element == 5)
// console.log(findLastIndex1) //last 5


// ! Search on arrays
// ? Filter => array new
const numbers = [2, 3, 4, 4, 4, 5];

// ? 1. How many four do we have
const fourArrays = numbers.filter((element) => element == 4)
// console.log("Array of fours",fourArrays) //[ 4, 4, 4]
// console.log("How many fours",fourArrays.length) //3

// ? 2. number that greater than 3
const greaterThan3 = numbers.filter((element) => element > 3)
// console.log(greaterThan3) //[ 4, 4, 4, 5 ]



// ? 3. Search user
const books = ['The Great Gatsby', 'Jane Eyre', 'To Kill a Mockingbird', 'Moby-Dick', 'David Copperfield', 'The Scarlet Letter']
// "Jane" => "Jane Eyre"
const bookstartsWith = books.filter((element) => element.startsWith("Jane"))
// console.log(bookstartsWith) //[ 'Jane Eyre' ]

const bookincludes = books.filter((element) => element.includes("The"))
// console.log(bookincludes) //[ 'The Great Gatsby', 'The Scarlet Letter' ]

const bookendsWith = books.filter((element) => element.endsWith("d"))
// console.log(bookendsWith) //[ 'To Kill a Mockingbird', 'David Copperfield' ]

// ? Find
const number3 = ['4545', '484', '4165', '787', '313', '155465', '4'];
const number3find = number3.find((element) => element === '313')
// console.log(number3find) //Value 313
// اولین چیزی که ببیند با شرط ما یکی است را برمیگراند

const informationOFPepole = [{ id: 1, name: 'Asal' }, { id: 2, name: 'Zahra' }, { id: 3, name: 'Maryam' }]
const informationSelect = informationOFPepole.find(element => element.id === 1)
// console.log(informationSelect) //{ id: 1, name: 'Asal' }


//  find => object
// filter => array
const info = [[2], [3], [[4]], [[[[[[16]]]]]]]
const infoFind1 = info.find(element => element == 16)
// console.log(infoFind1) //[ [ [ [Array] ] ] ]

const infoFind2 = info.find(element => element === 16)
// console.log(infoFind2) //undefined

// Todo: console.log([[[[[[[[16]]]]]]]] == 16) //true


// ! filter vs find
// ? 1. fliter => array , find => chizike bedst miare
// ? 2. filter tamani maqadir momken ra barmigardanad, find avalin meqdar
// ? 3. filter dar soorat peida nakardn shart ma => []
// ? 3. find dar soorat peida nakardn shart ma => undefined


// Todo: XO
// 9 ta khune
//  X 1 => true
//  O 0 => false
const aquare = Array(9).fill(null)
// console.log(aquare)

// تعداد حالت برد 8
// اگر بخوایم سطری ببریم باید اعداد پشت سر هم باشند
// اگر بخواهیم ستونی چک کنیم باید اعداد تا فاصله 3 با هم باشند
// اگر بخواهیم ضربدری چک کنیم باید اعداد زوج باشند



// ? Reduce 

// سبد خرید
const checkout = [
    { id: 1, name: 'بستنی فررو پلاس', price: 90000, count: 2 },
    { id: 2, name: 'بستنی فررو ', price: 60000, count: 3 },
    { id: 3, name: 'بستنی فررو ', price: 40000, count: 6 },
    { id: 4, name: 'بستنی فررو ', price: 30000, count: 9 },
]

// جمع محاسبه فاکتور
let result = 0;
checkout.forEach(element => {
    result += element.price * element.count;
});
// console.log(result) //360000

// console.log(checkout.length) //x

// 0 1
// [0,1] 2
// [0,1,2] 3
// [0,1,2,3] 4
let initialValue = 0;
const sumCheckout = checkout.reduce(
    (accumLator, currentValue) =>
        accumLator + currentValue.count * currentValue.price
    , initialValue
)

// console.log(sumCheckout) //870000

// چند تا خرید؟
let count = 0;
checkout.forEach(element => {
    count += element.count;
})
// console.log(count) //20

const counts = checkout.reduce(
    (accumLator, currentValue) =>
        accumLator + currentValue.count
    , initialValue
)
// console.log(counts) // 20


// Ex:
const checkout2 = [
    {
        id: 292536,
        count: 1
    },
    {
        id: 458265,
        count: 1
    },
    {
        id: 654941,
        count: 1
    }
]

const count2 = checkout2.reduce((accumLator, currentValue) => accumLator + currentValue.count, 0)
// console.log(count2)


// ! function group by reduce(key)

//! function => none premetive => تابع
function sum(a, b) {
    return a + b;
}
// console.log(sum(5, 62))

// ? دو روش تعرسف فانگشن

// ? declaration function
function sum2(a, b) {
    return a + b;
}

// ? expression function
const sum3 = function (a, b) {
    return a + b;
}


// Todo: Tafavot:
//? hoist shodn
//! declaration function => be bala hoist mishavad
// console.log(sum4(2, 3)) // 5
function sum4(a, b) {
    return a + b;
}

//! expression function => be bala hoist nemishavad
// console.log(sum5(2, 3)) //error
const sum5 = function (a, b) {
    return a + b;
}
// console.log(sum5(2, 3)) //5


// ? Arrow function  () => { }
const sum6 = (a, b) => { return a + b }
// console.log(sum6(2, 3)) //5


// ! IIFE  => Immediately invoked function expression
(() => { })();
((a, b) => { a + b })(5, 10);


//! coresion none premetive haaaaaaaaa
// ? premetive => premetive
// ? tostring();
// ? toValue();
// console.log([] + null + 1) //null1 => string
// => [] be "" tabdil mishavd
// console.log([5484] + null + 1) //5484null1 => string
// console.log([[[[[[12]]]]]] == 12) // true
// console.log(12 / '6' )


// ! JSON
// string => json
// json => string
// در جیسون عدد های بزرگ را استفاده نمیکند باید به صورت استرینگ باشد
// 454646464646 => 45464646400

const gelatoStr = '{"name": "ali","family": "alaii","age": 12,"information": {"country": "iran","city": "Ahvaz"},"chats": ["slm,Khubi", "slm to chetori?"]}'
const gelatoObj = JSON.stringify(gelatoStr)
// console.log(gelatoStr)

//! api browser
// یک سری کد ها رو خود ایجن جاوا اسکریپت انجام میده یک سری رو میفرسته برای بروزر که انجام بده
//Engine Js 
// Browser
// Browser Api ===> console.log(), setTimeout(), setInterval(), LocalStorage

// ! setTimeout 
// const setTimeoutFun = setTimeout(() => {
// console.log(5+6)
// }, 5000)
// console.log(setTimeoutFun)

// ! clearTimeout() cancel ejbari
// ! setInterval()
// هر ایکس ثانیه یکبار اجرا میشود
let a = 0
// setInterval(() => {
// console.log(++a)
// }, 2000)

// ! clearInterval
// const setIntervalFun = setInterval(() => {
// console.log(12)
// }, 2000)
// clearInterval(setIntervalFun)
// هر جا ست اینتروال داشتیم باید  کلیر اینترول هم استفاده کنیم
// Todo: single page application => refresh nemikonim
// Todo: setInterval ta akhar zendast
// Todo: setInterval karemon bahash tamom shod => clearInterval


// ! Localstorage
// json zakhire konam => [object, object]
// string

// ! 3 types of save data => LocalStoragre , Session Storage , cookie
// ? Life time
// LocalStoragre => تا زمانی که کاربر یا دولوپر کشش را ( به طور دستی) پاک نکند
// Session Storage => تا زمانی که تب باز است
// cookie => expiration time / یا کاربر کوکی رو پاک میکنه یا اینکه دولوپر اکسپایر تایم بهش میده

// ? Storage location
// LocalStoragre => Browser only
// Session Storage => Browser only
// cookie => Browser and Server 

// ? How to storage
// key value (string|number|boolean(premetives))
// "checkout" - "[{id:1, name: "فررو پلاس"}]"
// JSON.parse()
// ? Reading 
// LocalStoragre => client side reading only 
// Session Storage => client side reading only 
// cookie => server and client side reading only 

// +++++++++++++++++++Senario+++++++++++++++++++++++++++
// app.blubank.com    => subdomain app
// blubank.com
// junior.blubank.com  => subdomain app
// auth.blubank.com  => subdomain app

// لوکال استوریج و سشن استوریج مختص به یک صفحه هست و توی همه ی صفحه
// ها قابل استفاده نیست ولی کوکی را میتوان روی همه ساب دامین ها استفاده کرد

// * cookie mitavand rooie path zakhire shavad
// *کوکی اکسپایر تایم دارد (تاریخ انقضا دارد) و میتوان روی همه ی ساب دامنه ها به ان دسترسی داشت 
// cookie => *.blubank.com

// snapp => snappfood, snappdoctor , .... 
//  SSO توکن 

// ? Copacity
// LocalStoragre => 5MB - 10MB
// Session Storage => 5MB
// cookie => 300 cookies and 4KB

// ? How to use
// LocalStoragre 
// localStorage.setItem("user", "5")
// localStorage.removeItem("user")

// Session Storage
// sessionStorage.setItem("user", "5")
// sessionStorage.removeItem("user")

// cookie 
// document.cookie = "username=ali";

// ? Httponly => کوکی هایی که سرور آن ها رو ست میکنه و از طریق جاوااسکریپت دیگه به انها دسترسی ندایم
// ? Secure => الویت بندی
// ? SameSite => ایا کسی از طریق آی فریم به ان دسترسی داشته باشد یا نه
// ? path => دسترسی روی ساب دامنه

// ! shallow deep copy object
// Spreed ~ 
// ? Shallow Copy
const person = {
    name: "ali",
    family: "alaii",
    age: 12,
    country: {
        name: "iran",
        phone: "+98",
        city: "Ahvaz"
    }
}

// person.name = "Pouriya";
// person.country.name = 'usa';
// console.log(person);

const personCopy = { ...person }
// console.log(person === personCopy) //false
// personCopy.name = "Pouriya";
// console.log(personCopy)
// console.log(person)

// شل کپی یعنی از یک لول ما کپی میگیرد و از لول های بعدی کاری ندارند و رفرنس همان اصلی ست
// personCopy.country.phone = '+0';
// console.log(personCopy)
// console.log(person)

// ?  Deep Copy ~
const personDeepCopy = JSON.parse(JSON.stringify(person))
// personDeepCopy.country.phone = '+0';
// console.log(personDeepCopy)
// console.log(person)

const newPersonCopy = { ...person, ...{ country: { ...{ name: { info: "usa" } } } } }
// console.log(newPersonCopy)


//! destructering
// const {name, ...rest} = {
const personInfo = {
    name: 'john',
    family: 'deo',
    age: 20,
    country: "iran",
    numbers: ["09214587584", "09214789635"],
    courses: [
        { id: 5, name: 'ادبیات فارسی' }
    ],
    teacher: {
        name: 'mostafa',
        family: 'ali zadeh'
    }
};

// Use
// personInfo.teacher.family
// personInfo['teacher']['family']

// const { name, family, age, ...rest } = personInfo;
// const { teacher: {name} } = personInfo; //teacher is not defined
const { teacher: {name}, ...rest } = personInfo; 
console.log(rest)

// ! rest Operator
// ! ...rest => object

// هر گاه که از داخل ابجکت چیزی را دیستراکت میکنیم ان مقدار است که برایش کانست صادر میشود نه کل ابجکت
// هر گاه که از داخل ابجکت چیزی را دیستراکت میکنیم رست اوپریتور دیگر با آبجکت کار ندارد و انگار که 
// از داخل بقچه آوردیمش بیرون نیم رو گذاشتیم جیبمون باقیشو انداختیم سطل اشغال

//! compare
//! HOF
//! callback pramise async await
//! event loop
//! microtask macro task
//! ajax
//! class
//! ES6 rest spread arrow function
//! this
//! dom maniuolacion
//! event -> event bubbling
