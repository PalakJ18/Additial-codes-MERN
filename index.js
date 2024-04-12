// console.log("chal gyaaaa");
// console.log("mer aprogram chal gyaaa");
// console.log("krte rhooooo.... ho ho .....krte rhooooooo");

// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i < 1);

// console.log("done");

// factory function
// function createRectangle(length, breadth) {
//     let rectangle = {
//         // length: 5, / len: length,
//         length,
//         breadth,

//         draw: function () {
//             console.log('factory function');
//         }
//     };
//     return rectangle;
// }

// let rectangleObj1 = createRectangle(6, 7)

// constructor function
// see this in inspect- colsole
// function Rectangle(length , breadth) {
//         this.length =length;
//        this.breadth= breadth;

//         this.draw = function () {
//             console.log('constructor function');
//         }
// }
// let rectangleObj = new Rectangle(4, 5);

// // primitive
// let a = 9;
// let b =a;
// a++;
// console.log(a);
// console.log(b);

// // reference/ object
// let c= {value:6};
// let d =c;
// c.value++;
// console.log(c.value);
// console.log(d.value);

// // primitive
// let e =5;
// function inc(e){
//     e++;
// }
// inc(e);
// console.log(e);

// //obj/ ref
// let f={value: 5};
// function inc(f){
//     f.value++;
// }
// inc(f);
// console.log(f);

let rectangle = {
    length: 4,
    breadth: 5
};
// // for-in loop applied on objects
// for(let key in rectangle){
//     // values are reflected through rectangle[key]
//     console.log(key, rectangle[key]);
// }
// for(let key in rectangle){
//     // keys are reflected through key cariable
//     console.log(key);
// }

// // for-of loop applied on iterables

// for(let key of Object.keys(rectangle)){
//     // keys are reflected through key cariable
//     console.log(key);
// }

// for(let key of Object.entries(rectangle)){
//     // keys are reflected through key cariable
//     console.log(key);
// }

// // check presesnce
// if('length' in rectangle){
//     console.log('present');
// }else{
//     console.log('absent');
// }
// if('area' in rectangle){
//     console.log('present');
// }else{
//     console.log('absent');
// }

// object cloning 
// // 1-iteration
// let emptyObj = {};
// for(let key in rectangle){
//     // values are reflected through rectangle[key]
//    emptyObj[key] = rectangle[key] ;
// }
// console.log(emptyObj);

// // 2- assign
// let dest = Object.assign({},rectangle);
// console.log(dest);

// //3-spread
// let dest2 = {...rectangle};
// console.log(dest2);

// // for multiplpe object cloning
// let src= {value:'did it'}
// let destMlt = Object.assign({},rectangle, src);
// console.log(destMlt);



// // finding objeect
// let courses = [{no:1, sub:'maths'}, {no:2, sub:'hindi'}, {no:3, sub:'english'}];
// console.log(courses);
// // using call function
// let course = courses.find(function(course){
//     return course.sub === 'maths';
// })
// console.log(course);

// // using arraow
// let course2 = courses.find(course2 =>  course2.sub === 'hindi');
// console.log(course2);

// combining and slicing
// let arr1 = [1, 2,3];
// let arr2 = [4, 5, 6];
// let combine = arr1.concat(arr2);
// console.log(combine);
// console.log(combine.slice(3,5));
// // spread
// console.log(...arr1, ...arr2);
// console.log(...arr1,'a', ...arr2, 'b');

// // ITERATION
// // iteration usinf for-of loop
// for(let value of arr1){
//     console.log(value); 
// }
// // iteration using for-each loop
// arr1.forEach(function(value) {
//     console.log(value); 
// });
// // iteration using arrow 
// arr1.forEach(value => console.log(value));

// // JOINING  ARRAYS 
// let arr = [10, 20, 30, 40 ,50];
// let joined = arr.join('-');
// console.log(joined);

// // SPLIT ARRAY
// let msg = 'beautiful messs la la lalala';
// let splited= msg.split(' ');
// console.log(splited);
// console.log(splited.join('_'));

// let arr1 = [2, 1, 5, 6, 4, 8 ,7 ];
// let arr2 = ['hum' , 'appka', 'kaiko', 'bataye ki' , 18, 2, 'ko ', 'bday hai'];
// arr1.sort();
// console.log(arr1);
// console.log(arr2.sort());
// arr1.reverse();
// console.log(arr1);
// console.log(arr2.reverse());

// //FILTER
// let nums = [1, 9, -3, 7, -2];
// let filtered = nums.filter(function(value){
//     return value>=0;
// });
// let filtered2 = nums.filter(value =>  value<=0);
// console.log(filtered);
// console.log(filtered2);

// // MAPPING ARRAYS
//  let arr1 = [1, 2,3];
//  let items = arr1.map(function(value){
//     return 'studenrt '+value;
//  });
//  console.log(items);
//  let items2 = arr1.map(value => 'studenrt '+value);
//  console.log(items2);

// // MAPPING WIT OBJECTS
//  let nums = [1, 9, -3, 7, -2];
//   let filtered = nums.filter(value =>  value<=0);
// let items = filtered.map(function(num){
//     return {value: num};
// });
//  console.log(items);

// //  CHAINING = MULTIPLE FUNCTIONS TOGETHER => compare above and below code
//  let items2 = nums.filter(value =>  value<=0).map(num => {value: num});
//  console.log(items2);


// // FUNUCTIONS 
// function  sum(a, b){
//     return a+b;
// }

// console.log(sum());
// console.log(sum(1, 2));
// console.log(sum(2));
// console.log(sum(1, 2, 3,4));

// // EXTRRA ARE STORED AT ARGUMENT OBJECT
// function  sum2(a, b){
//     console.log(arguments);
//     return a+b;
// }
// let ans2 = sum2(1, 2, 3, 4, 5);
// console.log(ans2);

// // FOR THOSE EXTRA SUM WE CAN RUN A LOOP OVER THE ARGUMENTS OBJECT
// function  sum3(a, b){
//     let total =0;
//     for(let value of arguments)
//     total = total + value;
//     return total;
// }
// let ans3 = sum3(1, 2, 3, 4, 5);
// console.log(ans3);


// // REST OPERATOR
// // aftre ...args no paramter can be writtem
// function  sum4(...args){
//     console.log(args);
// }

// function  sum5(num, ...args){
//     console.log(args);
// }

// sum4(1, 2,3 ,4 ,5);
// sum5(1, 2,3 ,4 ,5);

// // DEFAULT PARAMETERS
// function  intrst(p, r=5, t = 4){
//     return p*r/100 * t;
// }
// console.log(intrst(600,7)); //p, r
// console.log(intrst(600,undefined,7)); // p , t // bad practice
// console.log(intrst(600)); // p

// GETTER SETTER
// let person = {
// fname :'palak', 
// lname : 'jain'
// };
// // read only function
// function fullname(){
// return `${person.fname}    ${person.lname}`;  // back ticks 
// }
// console.log(fullname());


// // getter setter
// let person2 = {
//     fName: 'palak',
//     lName: 'jain',
//     get fullName() {
//         return `${person2.fName}      ${person2.lName}`;
//     },

//     set fullName(value) {
//         if (typeof value !== 'string') {
//             throw new Error("string nhi h ye");
//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };
// console.log(person2.fullName);
// person2.fullName = 'kisna jain';
// console.log(person2.fullName);

// try {
//     person2.fullName = 18;
//     console.log(person2.fullName);
// } catch (e) {
//     alert('wrong data');
// }
// try {
//     person2.fullName = 'lallu chappu';
//     console.log(person2.fullName);
// } catch (e) {
//     alert(e);
// }


// // REDUCING AN ARRAY
// let arr = [3, 4, 5, 6, 7];
// let total = 0;

// for (var value of arr) {
//     total = total + value;
// }
// console.log(total);

// let total2 = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(total2);
// let total3 = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 3);
// console.log(total3);
// let total4 = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(total4);

// BROWSER EVENTS

// trial
// let a = document.querySelector('h1');
// document.addEventListener('click', function () {
//     a.style.background = 'red';
// });

// // best way
// function trial() {
//     // a.style.background = 'red';
//     console.log('listner ');
// }
// document.addEventListener('click', trial);
// // document.removeEventListener('click', trial);


// // DEFAULT PREVENT
// let links = document.querySelectorAll('a');
// let second = links[1];

// second.addEventListener('click', function (event) {
//     event.preventDefault();
//     console.log('link not working yohoooo');
// });

// avoid too much event
// let myDiv = document.createElement('div');
// for(let i =1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para'+ i;
//     newElement.addEventListener('click', function(event){
//         console.log('clicked on para');
//     });
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);


//optimized
// let myDic = document.createElement('div');
// function statusOfPara(event){
//     console.log('clicked on para');
// }
// newDic.addEventListener('click',statusOfPara );
// for(let i =1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para'+ i;

//     myDic.appendChild(newElement);
// }
// document.body.appendChild(myDic);

// optimized with indivisual access
// let myDic = document.createElement('div');
// function statusOfPara(event) {
//     console.log('clicked on para' + event.target.textContent);
// }
// newDic.addEventListener('click', statusOfPara);
// for (let i = 1; i <= 50; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para' + i;

//     myDic.appendChild(newElement);
// }
// document.body.appendChild(myDic);

// //.NODENAME
// let elem = document.querySelector('#wrapper');
// elem.addEventListener('click', function (event) {
//     if (event.target.nodeName === 'SPAN') {
//         console.log('clicked on span' + event.target.textContent);
//     }
// })

// //SET TIME OUT
// setTimeout(function(){
//     console.log('third');
// }, 2000)
// function sync(){
//     console.log('first');
// }
// sync();
// console.log('second');

// PROMISE

// let meraPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside promise');
//     }, 3000);
//     resolve(1998);
//     // reject(new Error('error aagya h bhai'));
// });
// let meraPromise2 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside promise2');
//     }, 2000);
//     // resolve(1998);
//     reject(new Error('error aagya h bhai'));
// });
// console.log('pehla');

// FUNCTIONS OF PROMISE
// let meraPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside promise');
//     }, 3000);
//     resolve(19986755869);
//     // reject(new Error('error aagya h bhai'));
// });
// meraPromise.then((value) => {console.log(value)});

// let meraPromise2 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside promise2');
//     }, 2000);
//     // resolve(1998);
//     reject(new Error('error aagya h bhai'));
// });
// meraPromise2.catch((error) => {console.log('error aagyi')});

// // or do both together
// meraPromise.then((value) => {console.log(value)}, (error) => {console.log('error aagyi')});

// // multiple Promise
// let wada1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("inside wada 1 ");
//     }, 2000);
//     resolve(true);
// });
// wada1.then(() =>{let wada2 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('inside wada 2');
//     }, 3000);
//     resolve("wada 2 resolved ");
// });
// return wada2;
// }).then((value) => console.log(value))

// // ASYNC FUNCTION
// async function abcd( ){
//     return 18;
// }

// async function utility( ){
// let ratlam = new  Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("ratlam m hu");
//     }, 3000)
// });
// let indore = new  Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("indore m hu");
//     }, 5000)
// });

// let dm = ratlam;
// let dm2 = await indore;
// return [dm, dm2];

// }

// // FETCH API USING GET METHOD
// async function utility(){
// let content =await fetch('https://jsonplaceholder.typicode.com/todos/1'); // wait till api fetches th edata
// console.log(content); // no use just to check why .json is used
// console.log(content.status); // no use just to check why .json is used
// console.log(content.text); // no use just to check why .json is used
// console.log(content.body); // no use just to check why .json is used
// let output = await content.json();
// console.log(output);
// }
// utility();

// // POST METHOD

// async function helper(){

// let options = {
// method: 'POST',
// body: JSON.stringify({
//   title: 'foo',
//   body: 'bar',
//   userId: 1,
// }),
// headers: {
//   'Content-type': 'application/json; charset=UTF-8',
// },
// };
// let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
// let response =  content.json();
// return response; // response
// }


// async function utility(){
//    let  ans = helper();
//    console.log(ans);
// }
// utility();


// CLOSURES
// remember scope of let and var
// function init() {
//     let name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//         // displayName() is the inner function, that forms the closure
//         console.log(name); // use variable declared in the parent function
//     }
//     return displayName();
// }
// let a = init();
// func1();