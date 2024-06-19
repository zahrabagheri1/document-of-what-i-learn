// let name2 = "Zahra";

//! 1. syntax

//! 2. variable
//? var
//? let
//? const
//? argonam
//? try - cash

/**
 * JsDoc
 */

// var name = "ali";
// Let name2 = "pouriya";
// const name3 = "pouriya";

//! 2.1 scope
//? global scope
//? function scope
//? module scope
//? block scope

// {
//     var name = "ali";
// }



//? undifined
// const x  = undifined
// ***** console.log(typeof x) //undefined
//? null
// مقدار ندارد ولی وجود دارد

//! typeof
//? Number => number
//? string => string
//? boolean => boolean
//? undifined => undifined
//? null => object
//? NaN => number
//? function => function
//? {} => object
//? [] => object
//? class => function


//? symbol

//! Assignment
// Compare

//? Assignment Operators

// console.log((a += 1));   // this moment
// console.log((a *= 1));   // this moment
// console.log((a /= 1));   // this moment
// console.log((a -= 1));   // this moment
// console.log(x = y);


//? Compeare Assignment Numbers
// console.log((a > 1));   // boolean
// console.log((a < 1));   // boolean
// console.log((a >= 1));   // boolean
// console.log((a <= 1));   // boolean

//! falsy truthly
//todo: PEREMETIVE TYPE => BOOLEAN (true, false)  => (explict, implcit)
//? falsy value: undefined , null , Nan , 0 ,  -0 , "" , false

const title = null;
// if (title) {
//     //*engine => null => boolean (implicit)
//     console.log('text')
// }

//! == === Equality Compere
const name4 = '5';
const age4 = 5;

// if (name4 == age4) {
//     //compere
//     console.log("compere")
// }else if( name4 === age4){
//     console.log("Maby compere")
// }else {
//     console.log("not compere")
// }

//? jounior: 
// مساوی تایپ ها چک نمیشوند و مقادیر چک میشوند
// در سه مساوی هم تایپ و هم مقدار چک میشود

//? senior:
// در دو مساوی تبدیل تایپ اتفاق میوفتد که به ان کورژن میگویند
// در سه مساوی تبدیل تایپ اتفاق نمی افتد

//! cast
const phone = "09365172977"; // => شماره تلفن را همیشه استرینگ میگیرم زیرا اگر عدد بگیریم 0 اول نمی افته
const age = 20;
//! Implicit Explicit
// تبدیل تایپ وابسته به کدی هست که خودمون میزنیم مانند زیر:
//? Explicit cast
// console.log(Boolean(phone))
// console.log(String(age))
// console.log(Number(phone))
// console.log(age.toString())

//! coresion ~~~ implicit (engine javascript)
// یک تبدیل خودکار که یک نوع داده رو به نوع دیگه ای تبدیل میکنه
//? + ( concat , sum)

//? 2 traf + number bashe
// console.log(20 + 20)

//? 1 traf + number , 1 traf string => + concat
// console.log(20 + 20 + "20") 
//4020 => اول جمع میشه و سپس  کورژن اتفاق می افته

//Todo: 
// console.log("20" + 20 + 20 + "20") //20202020
// console.log(50 + 60 + "20" + 20 + 20 + "20") //11020202020

//agr 2 tarf + boolean bashd be number tabdil mishavad
//? console.log(Number(true)) // 1
//? console.log(Number(false)) // 0

// console.log(true + true + false) // 1 + 1 + 0 => 2

//? console.log(true + 20) // 21 
//? console.log(true + "20") // true20
//? console.log("10" + 5 + true + false + "6" + 10) //105truefalse610



//! ==
// ? noket agr yek trf == null bashd va traf dgr == add bashe tabdil be add mishavad
// todo:  null => 0 

// console.log(1 == null) //false
// console.log(1 == undefined) //false
// console.log(Number(undefined)) //NaN
// console.log(Number("undefined")) //NaN
// console.log(Number("sfcsdfdsf")) //NaN
// console.log(Number("15465")) //number
// console.log(1 == "1") //true => یک استرینگ تبدیل به عدد میشود

// زمانی که دوطرف استرینگ باشن تبدیل تایپ نداریم
// console.log("null" == "null") // true
// console.log(0 == '0') //true
//? نال تبدیل به عدد میشه صر آندیفایند میشه نات نامبر

//todo: console.log(NaN == NaN) //false
//todo: console.log(NaN === NaN) //false

//اگر یک طرف بولین باشه اون طرف دیگه هم میشه بولین
const x = "ali";
// console.log(Boolean(x)) //true
// console.log(x == true) //false

// digikala.com / product ? id = 1 & isactive=true
const queryparam = "true";
// console.log(queryparam == true) //false
// if (queryparam == true) {
//این شرط اجرا نمیشود: زیرا در اینجا کورژن اتفاق نمی افتاد
// در واقع تبدیل تایپ فقط بولین میشه که تبدیل به 1 میشه
// console.log('yes')
// }

// ! cast
// در این دو حالت استرینک تبدیل به عدد میشه
//? console.log(+'56565') // is number 56565
//? console.log('56565' * 1) // is number 56565
//? console.log(!!"") //false  تبدیل به بولین React query enabled

//? console.log(null == '') //false  

// console.log(false == 'false') //false
// har vaqt == didim engar joft tarf string boolean => number

// Todo: Importent
// console.log(undefined == null) //true
// console.log(NaN == null) //false
// console.log(undefined == 0) //false
// console.log(NaN == 0) //false
// console.log(true == 1) //true
// console.log(false == 0) //true

//! conditions
//? if

const isAuthenticated = true;
// if (isAuthenticated) {
//     console.log('is Authenticated')
// } else {
//     console.log('is not Authenticated')
// }

const name5 = "zahra";
// if (name5 == "ali") {
//     console.log('is Authenticated')
// } else if (name5 == "mohsen"){
//     console.log('is not Authenticated')
// }else {
//     console.log('hichkas')
// }


// ! ternary oprator (react pasand) EC6
const isActivev = "true";
// * React conditinal rendering
// isActivev ? console.log('ali') : console.log('mohsen')

// ! ternary oprator (react pasand) EC6 nested ternary
const isUserActive = "true";
// isActive ? isUserActive ? console.log('ali') : console.log('hossein') : console.log('mohsen')

//!    !     !=
const name6 = "ali";
// if (!name6) {
// console.log("ali nist")
// }

// if ("60" != 60) {
// کورژن اتفاق می افتد
// console.log('ejra shodm')
// }

// if ("60" !== 60) {
//     console.log('ejra shodm')
// }

//! ==== 
// console.log(Object.is('60',60)) //false


//!switch
//زمانی که شرط های  تو در تو داریم
const action = "register";
// switch (action) {
//     case "register":
//         console.log('user register')
//         return 'ali';
//     case "register two":
//         console.log('user register two')
//         break;
//     default:
//         console.log('user not register')
//         break;
// }

//! shift Assignment
let a = 5;
// console.log((a <<= 2))

//! Logical Assignment
// ? &&=   ||=

const number1 = 1;
// console.log((number1 ||= 2)) //1
// اگر نامبر1 ترو بود مقدار 2 را به ان اساین کن

// console.log((number1 &&= 1)) //error

const number2 = 5;
number2 ||= 10;
// نامبردو 5 است اگر درست باشد حرف من درست است اگر نباشد مقدار بعد مساوی اگر درست باشد به جای نامبردو قرار میگیرد

//! condition operators
//! && ||

//todo: nekte mohem
// console.log(5 || 10) //5
// console.log(false || 10) //10    rendering react
// console.log(false || false) //false
// console.log("false" && false) //false

// ***** har gah hengam estefade az || (or) va && (and) traf akhar majara boolean bashad boolean kharj mishavad
// ***** har gah trafein && true bashad meghdar akhr retern mishavd
// ***** har gah trafein || true bashad avalin true retern mishavd

// console.log("5" && "10" && 6 && false && 12 && true && false) //false
// console.log("5" || "10" || 6 || false || 12 || true || false) //5


//! 2.2 NONE PREMETIVE ===> type object

// ! 1. Object {}  => type object
const information = {
    name: "zahra",
    family: "bagheri",
    age: 23,
    nationlity: {
        country: "iran",
        city: "iran",
        code: '021'
    },
};

// 1. use
// console.log(information.name)
// console.log(information.nationlity.code)

// ? 1.1
// console.log(information['age'])
// console.log(information["nationlity"]["city"])

// داینامیک بودن
// const nationlity = "nationlity"
// console.log(information[nationlity]["city"])

// ? 1.2 How to creat (don't use it never)
// ----- console.log(Object.create({name:"ali"}))
// +++++ {}


//! object methods
// ? 1.3.1 object.entries() ~~ method
const informationEntries = Object.entries(information); // obeject => array
// console.log(informationEntries)
// for foreach ...!
// return =>
const answerOfInformation = [
    ['name', 'zahra'],
    ['family', 'bagheri'],
    ['age', 23],
    ['nationlity', { country: 'iran', city: 'iran', code: '021' }]
];

// ? 1.3.2 object.fromEntries() ~~ method
const informationFromEntries = Object.fromEntries(answerOfInformation); //An iterable object that contains key-value entries for properties and methods.
// console.log(informationFromEntries) // array => object

// ? 1.3.3 object.is() ~~ method ====
// Object.is()  بررسی یکسان بودن دو مقدار در کنار هم

// ? 1.3.4 object.keys() ~~ method 
const informationKeys = Object.keys(information); // array of strigs
// console.log(informationKeys) //[ 'name', 'family', 'age', 'nationlity' ]

// ? 1.3.6 Object.assign()  concat ~~ method 
//* ....Spread ~~~~~ object.assign => هر گاه دوآبجکت را با هم کانکت کنیم 
//* در صورتی که پراپرتی هم نام داشته باشیم تنها مقدار انها آپدیت و اور رایت میشود ولی 
//* اگر پراپرتی ه نام نباشد کانکترخ میدهد

const information1 = {
    name: 'zara',
    family: 'vali'
}
const information2 = {
    name: 'zizi',
    family: 'done'
}

const informationAssign = Object.assign(information1, information2)
// console.log(informationAssign)

// Senario
// آدمی در ثبت احوال ثبت شده سن 18 - سن 19
const informationAli = {
    name: 'ali',
    age: 18,
    country: 'iran'
}

// Database

//? 1.Update
// informationAli.age= 19;
// informationAli.country= 'US';
// console.log(informationAli)

//? 2.Update
const informationAliNew = { age: 19, country: 'US' }
Object.assign(informationAli, informationAliNew)
// console.log(informationAli)

//? 3. Spread ~~ Object.assign ~~ React
const informationAliSpread = { ...informationAli, ...{ age: 20 } }
console.log(informationAliSpread)


// ? 1.3.6 object.hasOwn() ~~ method 
const informationhasOwn = Object.hasOwn(information, "family"); //boolean
// console.log(informationhasOwn)

// OR
const informationhasOwnProperty = information.hasOwnProperty('family'); //boolean
// console.log(informationhasOwnProperty)

// ? 1.3.7 Object.freeze() Object.seal()   //react library
// زمانی که میخوایم مانع تغییر ابجکت شویم
// ? Object.freeze() cannot chenge object
// Object.freeze(information) 
//exemption ~~ error that you cannot delete, add,update property of object its just readOnly
// delete information.name;

// Update -
// information.name ="mohsen"

// Read +
// console.log(information)

// Add
// (Upsert)
// information.felan = "ali"

// console.log(information)


// ? Object.seal() 
// Object.seal(information) 
// Delete -
// delete information.name; //exption cannot chenge object

// Update +
// information.family = 'test';

// Add -
// information.frind = 'hossein'; //exption cannot add peroperty to object

// Read +
// console.log(information)

// Todo: tafavot object.seal() va object.freeze dr in ast ke object.seal emkan update dard 
// Todo: ama object.freeze exception true mikonad

// ! convert object to array => array(intrable)
const informationObjectMap = Object.keys(information).map((key) => {
    return information[key]
});
// console.log(informationObjectMap)

// ! praperty
// ! value (premetive, none premetive)


// ! 2. array []
// ?value (premetive, none premetive)

//?  How to creat ?
const names = ['ali', 'zahra', 'hossein', 'mohsen', 5, { id: 1, name: 'ali' }];

//?  How to use ?
// console.log(names[6]) //undefined
// console.log(names[-1]) //undefined
// console.log(names[1]) //ali

// ! iterable  // itrate => قابل پیمایش یا امکان حلقه زدن
// data type iterable => Array
// data type not iterable => Object
// ? Loops

// ? For
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// ? For of  => array
// for (const name of names) {
//     console.log(name)
// }

// ? For Each => array
// names.forEach((element, index) => {
//     console.log(element, index)
// });

// ? For in => object
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }

// ? map  => array
// names.map((name)=>{
//     console.log(name)
// })

// ? while
const isActive = true;
// while (isActive) {
//     console.log(5)
// }

// ? do while
let z = 1;
// do {
//     console.log(z += 1)
//     setTimeout(() => {
//         isActive = false;
//     }, 1000)

// } while (isActive);

// ! Map va Foreach !!!!!!!!
// ? 1. foreach chizi bar nmigardanad => void

const forEachNames = names.forEach((element) => {
    return element;
});
// console.log(forEachNames) //undefined

// ? 1. mapchzi k barmigardone yek array jadid *******
const mapNames = names.map(name => {
    return name
})
// console.log(mapNames) //new array

// ? foreach taqiri roye array gabli nemide
// ? map yek copy az array gadid misazad


//! by refence by value

// ? non premetive (By value)

// ? premetive (By refrence)
// هر کدوم خانه ای جدایی را اشغال کرده اند پس جواب فالس است 
const objectcomper1 = {}
const objectcomper2 = {}
// console.log(objectcomper1 === objectcomper2) //false => premetive ha by refrence hastand and the refrence are differente

const arraycomper1 = []
const arraycomper2 = []
// console.log(arraycomper1 === arraycomper2) //false => premetive ha by refrence hastand  and the refrence are differente


// آرایه یک خانه را اشغال کرده است و زاموفیلیا بلک به همان خانه رفرنس داده شده است پس جواب ترو است
const zamofilaGreen = []
const zamofilaBlack = zamofilaGreen
// console.log(zamofilaGreen === zamofilaBlack) //true  => premetive ha by refrence hastand  and the refrence are same


const personal = {
    name: 'zahra',
    family: 'amin'
};

personal.family = "aminirad";
// console.log(personal) // ba in ke const vali update mishe => chon by refrence

const counter = 0;
for (let i = 0; i < names.length; i++) {
    for (let j = 0; j < names.length; j++) {
        // counter += 1;
    };
};
// console.log(counter) //chon const  reasign nemishavad

