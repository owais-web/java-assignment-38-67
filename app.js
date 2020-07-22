// Chapter 38-44

// // Q1
// function power(a,b){
//     alert(a+b);
// }
// power(10,10);

// // Q2
// function leapyear(){
//     var user_leap = +prompt("Enter leap Year");
//   var leap = (user_leap % 100 === 0) ? (user_leap % 400 === 0) : (user_leap % 4 === 0);
//   if(leap == true){
//       alert(user_leap + " is a leap year")
//   }else{
//       alert(user_leap + " is not a leap year")
//   }
// }
// leapyear();

// // Q3
// function triangleSides(a,b,c){
//   var sides = (a+b+c)/2;
//   alert(sides)
// }
// triangleSides(1,1,1);

// function areacalc(a,b,c){
//     var sides = (a+b+c)/2;
//     var area = sides*(sides-a)*(sides-b)*(sides-c);
//     alert(area);
// }
// areacalc(1,1,1);

// // Q4
// var firstSubject = +prompt("enter English Marks");
// var secondSubject = +prompt("enter Urdu Marks");
// var thirdSubject = +prompt("enter Maths Marks");
// var obt = firstSubject+secondSubject+thirdSubject;
// var maxMarks = 100;
// var tot = 300;
// function average(){
//     var average1 = (obt)/3;
//     document.write( "<br>"+"average: " + average1 );
// }
// function percentage(){
//  var per = (obt*100)/tot;
//  document.write( "<br>"+"Total percentage: " + per + "%");
// }
// function mainFunction(){
//   document.write("Total Obtained Marks: " + obt);
//   document.write("<br>"+"Each Subject Marks: " + maxMarks);
//   document.write( "<br>"+"Total Max Marks: " +tot);
//   average();
//   percentage();
// }
// mainFunction();

// Q5
// escape

// // Q6
// var string = prompt("enter sentence");
// string = string.replace( /[aeiou]/g, '' );
// alert(string);


// // Q7
// function findOccurrences() {
//     var text = "Pleases read this application and give me gratuity";
//     var matchValue = text.match(/[aeiou]{2}/g);
//     return matchValue ? matchValue.slice(0) : 0;
//   }
//   var found = findOccurrences();
//   document.write("Such occurrences are " + found);

// // Q8
// var kiloprom = +prompt("enter distance between two cities in (km)");
// document.write("Kilometer = " + kiloprom)
// function meterconv(){
//     var meter = kiloprom * 1000;
//     document.write("<br>" + kiloprom + " kilometer converts to meter = " + meter);
// }
// function feetconv(){
//     var feet = kiloprom * 3280.8398950131;
//     Math.round(feet);
//     document.write("<br>" + kiloprom + " kilometer converts to feet/foot = " + feet);
// }
// function inchconv(){
//     var inches = kiloprom * 39370.078740157;
//     Math.round(inches);
//     document.write("<br>" + kiloprom + " kilometer converts to inches = " + inches);
// }
// function centimeterconv(){
//     var centi = kiloprom * 100000;
//     document.write("<br>" + kiloprom + " kilometer converts to centimeter = " + centi);
// }
// meterconv();feetconv();inchconv();centimeterconv();

// // Q9
// var employees = 1;

// while(employees<=5){
//     var workinghour = +prompt("Enter the working hours of employee" + employees);
//     if(workinghour>40){
//         var overtime = workinghour-40;
//         var pay = overtime*12;
//         document.write( "<br>"+"employee no " + employees + " overtime pay is " + "Rs " + pay)
//     }else{
//         document.write( "<br>"+"You have to work for more than 40 hours to get over time pay")
//     }
//     employees++;
// }

// // Q10
// var cashWithdraw = +prompt("Enter amount to withdraw");
// var ca100 =  cashWithdraw/100;
// var cas50 = (cashWithdraw % 100)/50;
// var cas10 = (((cashWithdraw % 100)% 50)/10);
// var casre = (((cashWithdraw % 100)% 50)%10);
// var mathCon100 =  Math.floor(ca100)
// var mathCon50  =  Math.floor(cas50);
// var mathCon10  =  Math.floor(cas10);
// var mathConre  =  Math.floor(casre);

// document.write("You will have " + mathCon100 + " Hundred Notes " + mathCon50 + 
// " fifty notes " + mathCon10 + " ten notes and remaining rupees are " + mathConre + " paisa" )


// Chapter No 43-48
// // Q1
// function firstQ(){
//     alert("hello World!")
// }

// // Q2
// function mobile(){
//     alert("Thanks for purchasing a phone from us")
// }

// // Q3
// function del(){
//     var row1 = document.getElementById("delete1");
//      row1.innerHTML = " ";
// }
// function dell(){
//     var row2 = document.getElementById("delete2");
//      row2.innerHTML = " ";
// }
// function delll(){
//     var row1 = document.getElementById("delete3");
//      row1.innerHTML = " ";
// }
// function de(){
//     var row1 = document.getElementById("delete4");
//      row1.innerHTML = " ";
// }

// // Q4
// function changeImage(){
//     var chn = document.getElementById("change");
//     chn.src = "img2.jpg"
// }
// function firstImage(){
//     var chn = document.getElementById("change");
//     chn.src = "download.jpg"
// }

// // Q5
// var clicks = 0;
// function increase() {
//     clicks += 1;
//     document.getElementById("clicks").innerHTML = clicks;
// }
// function decrease() {
//     clicks -= 1;
//     document.getElementById("clicks").innerHTML = clicks;
// }


// chapter no 49-52
// // Q1
// function submi(){
//     var firstNam = document.getElementById("firstName").value;
// var lastName = document.getElementById("lastName").value;
// var birthD = document.getElementById("birth").value;
// var email = document.getElementById("email").value;
// var num = document.getElementById("number").value;
// var pass = document.getElementById("password").value;
//     var first = "First name: " + firstNam + "<br>" + "last Name: " + lastName + "<br>" + "Birth Date: " + birthD + "<br>" + "email: " + email + "<br>" + "number: " + num + "<br>" + "password: " + pass;
//    document.write(first)
// }

// // Q2
// function readMore(){
//     var text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae explicabo cum molestiae optio, exercitationem voluptatum? Cumque, error minima unde deserunt quis asperiores voluptas debitis laudantium suscipit? Obcaecati ea corrupti maxime rerum. Enim possimus eaque voluptates rerum iure quisquam, officiis fugiat blanditiis dolorem quod esse sint ab quibusdam, nisi, adipisci dolores?";
//     var textdisplay = document.getElementById("text");
//     textdisplay.innerHTML = text;
//     var button = document.getElementById("butt").style.display = 'none';
//     var button = document.getElementById("but").style.display = 'inline';
// }
// function lessMore(){
//     var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, deserunt!";
//     var textdisplay = document.getElementById("text");
//     textdisplay.innerHTML = text;
//     var button = document.getElementById("butt").style.display = 'inline';
//     var button = document.getElementById("but").style.display = 'none';
// }

// // Q3
// function del(){
//     var row1 = document.getElementById("delete1");
//      row1.innerHTML = " ";
// }
// function dell(){
//     var row2 = document.getElementById("delete2");
//      row2.innerHTML = " ";
// }
// function delll(){
//     var row1 = document.getElementById("delete3");
//      row1.innerHTML = " ";
// }
// function de(){
//     var row1 = document.getElementById("delete4");
//      row1.innerHTML = " ";
// }
// function edd(){
//     var row1 = document.getElementById("delete1");
//      row1.innerHTML = "<tr id='delete1'><td>0</td><td>hamza</td><td>11</td><td><button onclick='del()'>delete</button></td></tr>";
// }
// function eddd(){
//     var row1 = document.getElementById("delete2");
//      row1.innerHTML = "<tr id='delete2'><td>1</td><td>ubaid</td><td>9</td><td><button onclick='dell()'>delete</button></td></tr>";
// }
// function edddd(){
//     var row1 = document.getElementById("delete3");
//      row1.innerHTML = "<tr id='delete3'><td>2</td><td>abdul hadi</td><td>10</td><td><button onclick='delll()'>delete</button></td></tr>";
// }
// function ed(){
//     var row1 = document.getElementById("delete4");
//      row1.innerHTML = "<tr id='delete4'><td>3</td><td>mark</td><td>8</td><td><button onclick='de()'>delete</button></td></tr>";
// }



// Chp no 53-57
// Q1
// Q1 in index page with bootstrap model line no: 179

// // Q2
// html of Q2 line no: 236
// function zoomin(){
//     var per = document.getElementById("para");
//     per.style.fontSize = '30px';
// }
// function zoomout(){
//     var per = document.getElementById("para");
//     per.style.fontSize = '20px';
// }



// Chap no 58-67
// // Q1 i
// var first = document.getElementById("main-content").childNodes;

// // Q1 ii
// console.log(first[1]);
// console.log(first[2]);
// console.log(first[3]);
// console.log(first[4]);
// console.log(first[5]);

// // Q1 iii
// var first = document.getElementById("main-content").childNodes;
// console.log(first[1]);
// console.log(first[2]);
// console.log(first[3]);
// console.log(first[4]);
// console.log(first[5]);

// // Q1 iv
// var placeHolder = document.getElementById("first-name");
// placeHolder.value = "Owais";

// // Q1 v
// var placeHolder = document.getElementById("last-name");
// placeHolder.value = "Hanif";
// var placeHolder = document.getElementById("email");
// placeHolder.value = "owaishanif906@gmail.com";


// // Q2 i
// var type = document.getElementById("form-content").nodeType;
// console.log(type);

// // Q2 ii
// var type = document.getElementById("last-name").nodeType;
// var typ = document.getElementById("last-name").childNodes;
// console.log(type);
// console.log(typ[0]);

// // Q2 iv
// var main_first = document.getElementById("main-content").firstChild;
// console.log(main_first)
// var main_last = document.getElementById("main-content").lastChild;
// console.log(main_last)