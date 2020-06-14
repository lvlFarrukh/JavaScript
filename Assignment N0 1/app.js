// ASSIGNMENT NO 1
//  JAVASCRIPT


// CHAPTER N0 1

// Task1
alert("Good Morning User");

// Task2
alert("Error! Please enter avalid password");

// Task3
alert("Welcome to js land...\nHappy Coding!")

// Task4
alert("Welcome to js land");

// alert("<h3>Pakistan<h3>");

// Task5
alert("Hello... I can run JS through my web browser's console");
 

// CHAPTER N0 2

// Task1
var username;

// Task2
var myname = "FARRUKH ASLAM";

// Task3
var message;
message = "PAKISTAN ZINDABAD";
alert(message);

// Task4
alert(myname);
var age = 23;
alert(age + " year old");
alert("Certified Mobile Application Development 'INSHALLAH'");

// Task5
alert("PIZZA\nPIZZ\nPIZ\nPI\nP");

// Task6
email = "farrukha303@gmail.com";
alert("My email address is " + email);

// Task7
var txt = "A smarter way to learn JavaScript";
alert("I am rying to learn from book " + txt);

// Task8
document.write("Yah! I can write HTML content through JavaScript");

// Task9
alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");


// CHAPTER N0 3

// Task1
var age = "23";
alert("I am " +age+ " year old");

// Task2
var n = "7"
alert("You have visited this site " +n+ "times");

// Task3
var dobY = 1997;
document.write("<br><br> date of birth year " +dobY);
document.write("<br>Data type of my declared variable is " +typeof dobY);  

// Task4
var visitorName = "Ali";
var productTitle = "Suit";
var quantity = 7;

document.write("<br><br>" +visitorName+ " order " +quantity+ " " +productTitle+ " from j.");



// CHAPTER N0 4

// Task1
var n1,n2,n3;

// Task2
var first_name, firstName, sum_, div_num, total;

// var $name, *first_name, &abc, .abcd, @abc_n;

// Task3
document.write("<br><br><h2>Rules for naming JS variables</h2>");
document.write("<br>Variable names can only contain number, $, and _. For example $my_1stVariable");
document.write("<br>Variables must begin with a letter , $ or _. For example $name, _name or name");
document.write("<br>Rules for naming JS variables");
document.write("<br>Variable names are case sensitive");
document.write("<br>Variable names should not be JS keywords");



// CHAPTER N0 5

// Task1
var n1 = 3;
var n2 = 5;
var sum = n1 + n2;

document.write("<br>Sum of " +n1+ " & " +n2+ " is " +sum);

// Task2
var sub = n1-n2;
document.write("<br>Subtraction of " +n1+ " & " +n2+ " is " +sub);
document.write("<br>Multiplication of " +n1+ " & " +n2+ " is " +n1*n2);
document.write("<br>Division of " +n1+ " & " +n2+ " is " +n1/n2);
document.write("<br>Modulus of " +n1+ " & " +n2+ " is " +n1%n2);

// Task3
var num;
document.write("<br><br>The value after declaration is "+num);
num = 5;
document.write("<br>Initial value "+num);
document.write("<br>Value after increased is "+ ++num);
num = num + 7;
document.write("<br>Value after addition is "+ num);
document.write("<br>Value after decrement is "+ --num);
num = num % 2;
document.write("<br>The remainder is "+ num%3);

// Task4
var ticket_prize = 600;
var n = 5
document.write("<br><br>Total cost to buy " +n+ " tickets to a movie is " +n*ticket_prize+ "PKR");

// Task5
var table = 4;
document.write("<br><br>Table of " +table);
for (var index = 1; index < 11; index++) {
    document.write("<br>"+table+ " X "+index+" = "+table*index);
}

// Task6
var c = 25;
document.write("<br><br>"+c+ "oC is "+ ((c*9/5)+32) + "oF");
var f = 70;
document.write("<br>"+f+ "oF is "+(f-32)*5/9+ "oC");

// Task7
var item1 = 650;
var q1 = 3;
var item2 = 100;
var q2 = 7;
var s_c = 100
document.write("<br><br><h1>Shopping Cart</h1>");
document.write("<br>Prize of item 1 is "+item1);
document.write("<br>Quantity of item 1 is "+q1);
document.write("<br>Prize of item 2 is "+item2);
document.write("<br>Quantity of item 2 is "+q2);
var total = item1*q1 + item2*q2 + s_c;
document.write("<br>Total cost of your order is "+ total);


// Task8
document.write("<br><br><h1>Mark Sheet</h1>");
var t_m = 980;
var m_o = 804;
var p = m_o/t_m * 100; 
document.write("<br>Total marks "+t_m);
document.write("<br>Obtain marks "+m_o);
document.write("<br>Percentage "+p);

// Task9
document.write("<br><br><h1>Currency in PKR</h1>");
var d = 10;
var r = 25;
var t = 104.80*d + 28*25;
document.write("<br>total currency in PKR is "+t);

// Task10
var num = 7;
num = num+5*10/2;
document.write("<br><br>After mathemetical expression ans: "+num);

// Task11
document.write("<br><br><h1>AGE CALCULATOR</h1>");
var dY = 1997;
var cY = 2020;
document.write("<br>Current Year "+cY);
document.write("<br>Birth Year "+dY);
var age = cY-dY;
document.write("<br>Your age "+age);

// Task12
var radius = 20;
document.write("<br><br><h1>The Geometrizer</h1>");
document.write("<br>Radius of a circle "+radius);
document.write("<br>The circumference is "+ radius*3.14*2);
document.write("<br>The area is "+ radius*radius*3.14);

// Task13
var snck = "oreo";
var cAge = 23;
var maxAge = 77;
var perDay = 2;
document.write("<br><br><h1>The Lifetime Supply Calculator</h1>");
document.write("<br>Favourite Snack: "+ snck);
document.write("<br>Current age: "+ cAge);
document.write("<br>Estimated Maximum Age"+ maxAge);
document.write("<br>Amount of snacks per day "+ perDay);
var tS = (maxAge - cAge) * 2;
document.write("<br>You will need "+ tS + " " +snck+ " to last you until the rip old age of "+maxAge);



// CHAPTER N0 6-9

// Task1
document.write("<br><br>Result");
var a = 10;
document.write("<br>The value of a is: "+a);
document.write("<br>-----------------------");
document.write("<br><br>The value of ++a is: "+ ++a);
document.write("<br>Now the value of a is: "+a);
document.write("<br><br>The value of a++ is: "+ a++);
document.write("<br>Now the value of a is: "+a);
document.write("<br><br>The value of --a is: "+ --a);
document.write("<br>Now the value of a is: "+a);
document.write("<br><br>The value of a-- is: "+ a--);
document.write("<br>Now the value of a is: "+a);

// Task2
var a = 2, b = 1;
var result =  --a - --b + ++b + b--;

// Explain the output at each stage:
// --a;
    // ans: 1

// --a - --b;
    // ans: 0

// --a - --b + ++b;
    // ans: 0

// --a - --b + ++b + b--;
    // ans: -1


// Task3
var name = prompt("What your name: ");
alert("Assalam o alikum "+name);

// Task5
var n = prompt("Enter Number for Display table");
document.write("<br><br><h2>Table</h2>");

if(n == ""){
    for (let index = 1; index < 11; index++) {
        document.write("<br> 5 X " +index+ " = "+index*5);
    }
}
else{
    for (let index = 1; index < 11; index++) {
        document.write("<br> "+n+" X " +index+ " = "+index*n);
    }
}

// Task6
var s1,s2,s3,o1,o2,o3,t = 100;
s1 = prompt("Enter Subject 1 name ");
o1 = prompt("Enter its Obaining Number");
s2 = prompt("Enter Subject 2 name ");
o2 = prompt("Enter its Obaining Number");
s3 = prompt("Enter Subject 3 name ");
o3 = prompt("Enter its Obaining Number");

document.write("<table><th><td><h3>Subject</h3></td><td><h3>Total Marks</h3></td><td><h3>Obtain Marks</h3></td><td><h3>Percentage</h3></td></th>");
document.write("<tr><td></td><td>"+s1+"</td><td>"+t+"</td><td>"+o1+"</td><td>"+ o1/t*100 +"</td></tr>");
document.write("<tr><td></td><td>"+s2+"</td><td>"+t+"</td><td>"+o2+"</td><td>"+ o2/t*100 +"</td></tr>");
document.write("<tr><td></td><td>"+s3+"</td><td>"+t+"</td><td>"+o3+"</td><td>"+ o3/t*100 +"</td></tr>");
var total_m = parseInt(o1) + parseInt(o2) + parseInt(o3);
document.write("<tr><td></td><td></td><td align='center'><strong>"+t*3+"</strong></td><td align='center'><strong>"+ total_m +"</strong></td><td align='center'><strong>"+ (o1/t*100 + o3/t*100 + o2/t*100)/3 +"</strong></td></tr></table>");



// CHAPTER N0 9-11

// Task1
var city = prompt("Enter Your city name");
if(city.toLowerCase() == "karachi") {
    alert("Welcome to city of light");
}
else{
    alert("Welcome to "+city);
}

// Task2
var gender = prompt("Enter Your gender");
if(gender.toLowerCase() == "male") {
    alert("Good Morning Sir");
}
if(gender.toLowerCase() == "female"){
    alert("Good Morning Mam");
}

// Task3
var color = prompt("Enter Color");
if (color.toLowerCase() == "red") {
    alert("Must Stop");
}
if (color.toLowerCase() == "yellow") {
    alert("Ready to move");
}
if (color.toLowerCase() == "green") {
    alert("Move now");
}

// Task4
var fuel = prompt("Input remaining fuel in car");
if (parseInt(fuel) < 0.25 ){
    alert("Please refill the fuel in your car”");
}

// Task5
// a. 
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

// ans: given condition for variable a is true

// b
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

// ans: 

// c
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

// ans: condition 2 is true
//      condition 4 is true

// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// ans: the cost equals 

// e.
if (true){
alert("True");
}
if (false){
alert("False");
}

// ans: True

// f
if("car" < "cat"){
    alert("car is smaller than cat");
    }

// ans: car is smaller than cat


// Task6

var t = 300, o = 100;
document.write("<br><br><h1>Mark Sheet</h1>");
document.write("<br>Total Marks: "+t);
document.write("<br>Marks obtained: "+o);
var p = o/t*100;
document.write("<br>Percentage: "+p);
if (p >= 80 && p <= 100){
    document.write("<br>Grade: A-one");
    document.write("<br>Remark: Excellent");
}
if (p >= 70 && p < 80){
    document.write("<br>Grade: A");
    document.write("<br>Remark: Good");
}
if (p >= 60 && p < 70){
    document.write("<br>Grade: B");
    document.write("<br>Remark: You need to improve");
}
if (p < 60){
    document.write("<br>Grade: Fail");
    document.write("<br>Remark: Sorry");
}


// Task7

var guess = Math.floor(Math.random() * 11);
for (let i = 0; i < 2; i++) {
    if (n > 10 || n < 0){
        alert("you Enter number out of range");
    }    
    var n = parseInt(prompt("Enter a number that u guess (0-10)"));
    if (guess == n) {
        alert("Bingo!")
    }
    if (guess == n+1 || guess == n-1){
        alert("Close enough to the correct answer");
    }    
}


// Task8

var num = parseInt(prompt("Enter Number"))
if (num % 3 == 0){
    alert(num+" is divisible by 3");
}
else{
    alert(num+" not divisible by 3");    
}

// Task9
var num = parseInt(prompt("Enter Number"))
if (num % 2 == 0){
    alert(num+" is even");
}
else{
    alert(num+" is odd");    
}


// Task10

var temp = parseInt(prompt("Enter Temperature"));
if ( temp > 40) {
   alert("It is too hot outside."); 
}
else if ( temp > 30) {
   alert("The Weather today is Normal."); 
}
else if ( temp > 20) {
   alert("Today’s Weather is cool."); 
}
else if ( temp > 10) {
   alert("OMG! Today’s weather is so Cool."); 
}


// Task11
var n1 = parseInt(prompt("Enter 1st number"));
var n2 = parseInt(prompt("Enter 2nd number"));
var o = prompt("Enter Operator");

if (o == '+'){
    alert(n1+" "+o+" "+n2+" = "+ (n1+n2));
}
else if (o == '-') {
    alert(n1+" "+o+" "+n2+" = "+ (n1-n2));
}
else if (o == '*') {
    alert(n1+" "+o+" "+n2+" = "+ (n1*n2));
}
else if (0 == '/') {
    alert(n1+" "+o+" "+n2+" = "+ (n1/n2));
}
else if (0 == '%') {
    alert(n1+" "+o+" "+n2+" = "+ (n1%n2));
}


// CHAPTER N0 12-13

// Task1
var chr = prompt("Enter Any character");
if (chr.charCodeAt() >= 65 && chr.charCodeAt() <= 90 ){
    alert("Input character is 'Upper case'");
}
else if (chr.charCodeAt() >= 97 && chr.charCodeAt() <= 122 ){
    alert("Input character is 'lower case'");
}


// Task2
var n1 = parseInt(prompt("Enter integer 1"));
var n2 = parseInt(prompt("Enter integer 2"));

if (n1 > n2) {
    alert(n1+" is greater");
}
else if (n2 > n1) {
    alert(n2+" is greater");
}
else {
    alert("Both are equal");
}


// Task3
var n = parseInt(prompt("Enter Number"));

if (n >= 0 ) {
    alert(n+" is positive");
}
else {
    alert(n+" is negative");
}


// Task4
var chr = prompt("Enter Any character");
if (chr == "a" || chr == "e" || chr == "i" || chr == "o" || chr == "u"){
    alert("True");
}
else {
    alert("False");
}


// Task5
var s_pass = "Pakistan";
var pass = prompt("Enter you password");
// console.log(pass);
if (pass == ""){
    alert("Please enter your password");
}
else if (pass == s_pass){
    alert("Correct!");
}
else {
    alert("Incorrect password");
}



// Task6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}else{
    greeting = "Good evening";
}


// Task7
var time = parseInt(prompt("Enter Time in 24 hour format"));

if (time >= 0000 && time <= 1200) {
    alert("Good Morning");
}
else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon");
}
else if (time >= 1700 && time < 2100) {
    alert("Good Evening");
}
if (time >= 2100 && time <= 2359) {
    alert("Good Night");
}


// CHAPTER NO 14-16

// Task1
var a_s_name = [];

// Task2
var o_s_name = {};

// Task3
var a_str = ['Pakistan', 'Turkey', 'Chine'];

// Task4
var a_num = [4,7,9,49];

// Task5
var a_bool = [true, false, false, true];

// Task6
var a_mix = [7, 'PAKISTAN', true];

// Task7
var qualification = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil', 'PhD'];

document.write("<br><br><h2>Qualifications:</h2>")
for (let i = 0; i < qualification.length; i++) {
    document.write((i+1)+") "+qualification[i]+"<br>");
}


// Task8
var names = ['Farrukh', 'Taha', 'Usama'];
var score = [350, 360 ,370];
document.write("<br><br>Score of "+ names[0]+" is "+score[0]+". Percentage: "+(score[0]/500*100));
document.write("<br>Score of "+ names[1]+" is "+score[1]+". Percentage: "+(score[1]/500*100));
document.write("<br>Score of "+ names[2]+" is "+score[2]+". Percentage: "+(score[2]/500*100));


// Task9
var color = ['blue'];
color.splice(0, 0,prompt("Enter Color you want to add in front"));
document.write("<br><br>Updated array: "+color);
color.splice(color.length, 0,prompt("Enter Color you want to add in end"));
document.write("<br>Updated array: "+color);
color.splice(0, 0,prompt("Enter Two Color you want to add in front"));
color.splice(0, 0,prompt("Enter Two Color you want to add in front"));
document.write("<br>Updated array: "+color);
color.shift();
document.write("<br>Updated array: "+color);
color.pop();
document.write("<br>Updated array: "+color);
var temp = parseInt(prompt('Enter Index where you want to insert color'));
color.splice(temp, 0,prompt("Now enter color"));
document.write("<br>Updated array: "+color);
var temp = parseInt(prompt('which index you wants to delete color(s)'));
color.splice(temp, parseInt(prompt("how many color you delete")));
document.write("<br>Updated array: "+color);


// Task10
var score = [320,230,480,120];
document.write("<br><br>Score of Student: "+score);
document.write("<br>Sorted Score of Student: "+score.sort());


// Task11
var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
var selectCity = cities.slice(0,3);
document.write("<br><br>Cities List:<br> "+cities);
document.write("<br>Selected Cities List:<br> "+selectCity);


// Task12
var arr = ['This', 'is', 'my', 'cat'];
document.write("<br><br>Array:<br> "+arr);
document.write("<br>String:<br> "+arr.join(" "));


// Task13
var devices = []
devices.push('keyboard');
document.write("<br>IN: <br>"+devices);
devices.push('Mouse');
document.write("<br>IN: <br>"+devices);
devices.push('Printer');
document.write("<br>IN: <br>"+devices);
devices.push('Monitor');
document.write("<br>IN: <br>"+devices);
// devices.push('keyboard');
document.write("<br><br>Out: <br>"+devices.shift());
devices.push('Mouse');
document.write("<br>Out: <br>"+devices.shift());
devices.push('Printer');
document.write("<br>Out: <br>"+devices.shift());
devices.push('Monitor');
document.write("<br>Out: <br>"+devices.shift());


// Task14
var mobile_m = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
document.write("<br>Mobile Manufactures:<br><select name='Mobile Manufactures'>");
for (var i in mobile_m) {
    document.write("<option value=''>"+mobile_m[i]+"</option>");
}
document.write("</select");

// CHAPTER N0 17-20

// Task1
var md_arr = [[],[]];

// Task2
md_arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
document.write("<br><br>");

// Task3
for (let i = 1; i < 11; i++) {
    document.write("<br>"+i);    
}

// Task4
var tbl = parseInt(prompt("Enter Table Number"));
var ln = parseInt(prompt("Length of table"));
document.write("<br><br>Multiplication table of "+tbl);
document.write("<br>Length of table "+ln+"<br>");
for (let i = 1; i <= ln; i++) {
    document.write("<br>"+tbl+" X "+i+" = "+(i*tbl));
    
}


// Task5
var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
document.write("<br>"+ (fruits.join("<br>"))+ "<br><br>");
for (var item in fruits){
    document.write("<br>Element at index "+item+" is "+ fruits[item]);
}


// Task6

document.write("<br><br>a. Counting: ")
for (let i = 1; i <= 15; i++) {
    document.write(i+",");
}
document.write("<br>b. Reverse Counting: ")
for (let i = 15; i >= 1; i--) {
    document.write(i+",");
}
document.write("<br>c. Even Counting: ")
for (let i = 0; i <= 15; i++) {
    if (i % 2 == 0 || i == 0){
        document.write(i+",");
    }
}
document.write("<br>d. Odd: ")
for (let i = 1; i <= 15; i++) {
    if (i % 2 != 0){
        document.write(i+",");
    }
}
document.write("<br>e. Series: ")
for (let i = 0; i <= 15; i++) {
    document.write(i+"K,");
}


// Task7
var bakery = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var search = prompt("Welcome Sevenstar bakery what do you want").toLocaleLowerCase();

for (let i = 0; i < bakery.length; i++) {
    if (bakery[i] == search) {
        alert(search+" is available for you in "+i+" index");
        break;
    }
}


// Task8
var num = [24, 53, 78, 91, 12];
document.write("<br><br>Array items: "+num);
document.write("<br>The Largest number is "+Math.max.apply(null,num));


// Task9
var num = [24, 53, 78, 91, 12];
document.write("<br><br>Array items: "+num);
document.write("<br>The Smallest number is "+Math.min.apply(null,num)+"<br>");

// Task10

for (let i = 5; i <= 100 ; i = i+5) {
    document.write(i+",");
}
