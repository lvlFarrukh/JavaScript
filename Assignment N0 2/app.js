// alert("Pakistan Zindabad");

// CHAPTER N0 21 - 25

// Task 1
var n1 = prompt("Enter first name");
var n2 = prompt("Enter last name");

alert('Assalam o alikum '+n1+' '+n2);


// Task 2
var phone = prompt("My favorite phone is")
document.write("<br><br>My favorite phone is: "+phone);
document.write("<br>Length of string: "+phone.length);

// Task 3
var text = 'Pakistani';
document.write("<br><br>String: "+text);
document.write("<br>Index of 'n': "+text.indexOf('n'));


// Task 4
var text = "Hello World";
document.write("<br><br>String: "+text);
document.write("<br>Index of 'n': "+text.lastIndexOf('l'));

// Task 5
var text = "Pakistani";
document.write("<br><br>String: "+text);
document.write("<br>Character at index 3: "+text[3]);

// Task 6
var n1 = prompt("Enter first name");
var n2 = prompt("Enter last name");

alert('Assalam o alikum '+n1.concat(' ',n2));


// Task 7
var city = 'Hyderabad';
document.write("<br><br>City: "+city);
document.write("<br>After Replacement: "+city.replace('Hyder', 'Islam'));

// Task 8
var message = "Ali and Sami are best friends. They play cricket and football together."; 
document.write("<br><br>Message: "+message);
document.write("<br>After Replacement: "+message.replace('and','&').replace('and','&'));

// Task 9
var n = 472, t = '472';
document.write("<br><br>value: "+n);
document.write("<br>Type: "+typeof(n));
document.write("<br>Value: "+t);
document.write("<br>Type: "+typeof(t));

// Task 10
var df = prompt("Enter Any Dry Fruit name");
document.write("<br><br>User: "+df);
document.write("<br>Upper Case: "+df.toUpperCase());

// Task 11
var pl = prompt("Enter Favorite Programming Language name");
document.write("<br><br>User Input: "+pl);
document.write("<br>Upper Case: "+(pl[0].toUpperCase()+pl.slice(1)));

// Task 12
var num = 35.36;
document.write("<br><br>Number: "+num);
document.write("<br>Result: "+num.toString().replace('.',''));

// Task 13
var nam = prompt("Enter you name");
while (nam.includes('@','.','!',',')){
    nam = prompt('Enter a valid user name');
}

// Task 14
var bkry = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var search = prompt("Welcome to abc bakery! what do you want").toLowerCase();

if (bkry.includes(search)){
    document.write("<br><br>"+search+" is available at index "+bkry.indexOf(search)+" in our bakery");
} 
else {
    document.write("<br><br>We are sorry "+search+" is not available in our bakery");
}


// Task 15
var pas = prompt("Enter Password");
var m = 0;
if (!(pas.length >= 6)) {
    pas = prompt("Password has at least 6 characters\nPlease enter valid password");
}
else if (parseInt(pas[0]) >= 0){
    pas = prompt("Password not contain number in starting\nPlease enter valid password");
}
for (let i = 0; i < pas.length; i++) {
    if (pas[i].charCodeAt() >= 65 && pas[i].charCodeAt() <= 90 && pas[i].charCodeAt() >= 97 && pas[i].charCodeAt() <= 122){
        m = 1 
    } 
}
if (m = 0){
    pas = prompt("Password contains atleast 1 alphabet\nPlease enter valid password");
}


// Task 16
var uni = "University of Karachi";
var ar = uni.split('')
ar.forEach(element => {
    document.write(element+"<br>"); 
});


// Task 17
var txt = prompt("Enter text")
document.write("<br><br>User: "+txt);
document.write("<br>Last Character of input: "+txt[txt.length-1]);


// Task 18
var text = "The quick brown fox jumps over the lazy dog".toLowerCase().split(' ');
c = 0;
text.forEach(e => {
    if (e == 'the'){
        c++;
    }
});
document.write("<br><br>There are "+c+" occurrence(s) of word 'the'");


// CHAPTER n0 26 - 30

// Task 1
var num = prompt("Enter any number");
document.write("<br><br>Number: "+num);
document.write("<br>round off value: "+Math.round(num));
document.write("<br>floor value: "+Math.floor(num));
document.write("<br>ceil value: "+Math.ceil(num));


// Task 2
var num = prompt("Enter any number");
document.write("<br><br>Number: "+num);
document.write("<br>round off value: "+Math.round(num));
document.write("<br>floor value: "+Math.floor(num));
document.write("<br>ceil value: "+Math.ceil(num));


// Task 3
var num = prompt("Enter any number");
document.write("<br><br>The absolute value of "+num+" is "+Math.abs(num));


// Task 4
document.write("<br><br>Random Dice value: "+ (Math.round(Math.random() * 5)+1));


// Task 5
var rv = (Math.round(Math.random() * 1)+1);
if (rv == 1){
    document.write("<br><br>"+rv+"<br>Random coin value: Head");
}
else {
    document.write("<br><br>"+rv+"<br>Random coin value: Tail");
}


// Task 6
document.write("<br><br>Random value between 1 to 100: "+ (Math.round(Math.random() * 99)+1));


// Task 7
var w = prompt("Enter your weight in kg");
var ind = 0;
for (let i = 0; i < w.length; i++) {
    if ((w[i].charCodeAt() >= 65 && w[i].charCodeAt() <= 92) || (w[i].charCodeAt() >= 97 && w[i].charCodeAt() <= 120)){
        // alert(i);
        ind = i;
        break
    }
}
document.write("<br><br>The weight of user is "+w.slice(0,ind)+" Kilograms");


// Task 8
var sNum = (Math.round(Math.random()) * 9) + 1;
// alert(sNum);
var num = +prompt('Enter number between (1-10)');
if ( num == sNum) {
    alert('Congratulation');
}
else {
    alert('Try Again');
}



// CHAPTER N0 31 - 34


// Task 1
var d = new Date();
document.write("<br><br>"+d);

// Task 2
var month = '';
switch (d.getMonth()) {
    case 0:
        month = 'January';
        break;

    case 1:
        month = 'Feburary';
        break;
    
    case 2:
        month = 'March';
        break;
        
    case 3:
        month = 'April';
        break;

    case 4:
        month = 'May';
        break;
    
    case 5:
        month = 'June';
        break;

    case 6:
        month = 'July';
        break;

    case 7:
        month = 'August';
        break;

    case 8:
        month = 'September';
        break;
    
    case 9:
        month = 'October';
        break;
    
    case 10:
        month = 'November';
        break;

    case 7:
        month = 'December';
        break;
}
document.write("<br><br>Current month is: "+month);



// Task 3
var d = new Date();
var day = '';
switch (d.getDay()) {
    case 0:
        day = 'Sunday';
        break;

    case 1:
        day = 'Monday';
        break;
    
    case 2:
        day = 'Tuesday';
        break;
        
    case 3:
        day = 'Wednesday';
        break;

    case 4:
        day = 'Thuesday';
        break;
    
    case 5:
        day = 'Friday';
        break;

    case 6:
        day = 'Saturday';
        break;
}
document.write("<br><br>Current Day is: "+day);


// Task 4
if (new Date().getDay() == 6 || new Date().getDay() == 0) {
    document.write("<br><br>It's Fun day");
}


// Task 5
if (new Date().getUTCDate() < 16) {
    document.write("<br><br>First fifteen days of the month");
}
else {
    document.write("<br><br>Last days of the month");
    
}


// Task 6
var mils = (new Date().getTime() - new Date('Jan 1,1970').getTime());
document.write("<br><br>Current Date: "+new Date('Jan 1,1970'));
document.write("<br>Elapsed millisecinds since January 1, 1970: "+mils);
document.write("<br>Elapsed minutes since January 1, 1970: "+(mils/(1000*60*60)));


// Task 7
var h = new Date().getUTCHours;
var m = new Date().getUTCMinutes;

if (h >= 12 && h < 24) {
    document.write("<br><br>Its Pm");
}
else {
    document.write("<br><br>Its Am");
}


// Task 8
var laterDate = new Date('dec 31,2020');
document.write("<br><br>Later Date: "+laterDate);



// Task 9
var psD = new Date('June 18, 2015').getTime();
var pD = new Date().getTime();
var def = pD - psD;
document.write("<br><br>"+( Math.floor(def / (1000*60*60*24) ))+" days have pass since 1st Ramadan 2015" );



// Task 10
var psD = new Date('Dec 5, 2015').getTime();
var pD = new Date().getTime();
var def = pD - psD;
document.write("<br><br>On reference Data "+new Date('Dec 5, 2015'))
document.write("<br>"+( Math.floor(def / (1000*60) ))+" seconds had pass since begiinning of 2015" );


// Task 11
var psD = new Date();
var pD = new Date();
document.write("<br><br>Current Date: "+psD);
document.write("<br>1 hour ago, it was "+new Date(pD.setHours(pD.getHours() + 1)));


// Task 12
var psD = new Date();
document.write("<br><br>Current Date: "+psD);
document.write("<br>100 years back, it was "+new Date(psD.setYear(psD.getFullYear() - 100)));



// Task 13
var age = +prompt("Enter age");
document.write("<br><br>Your age: "+age);
document.write("<br>Your birth year is: "+( (new Date().getFullYear()) - age));



// Task 14
var cName = prompt("Enter Customer name");
var nUnit = 479, uCharges = 16;
document.write("<br><br><h2>K-Electric Bill</h2>");
document.write("<br>Customer Name: <b>"+cName+"</b>");
document.write("<br>Month: <b>"+new Date().toString().split(' ')[1]+"</b>");
document.write("<br>Number of Units: <b>"+nUnit+"</b>");
document.write("<br>Charges per unit: <b>"+uCharges+"</b>");
document.write("<br><br>Net Amount Payable (within Due Date): <b>"+(nUnit * uCharges)+"</b>");
document.write("<br>Late payment surcharges: <b>"+350+"</b>");
document.write("<br>Cross Amount Payable (after Due Date): <b>"+(nUnit * uCharges + 350)+"</b>");



// CHAPTER N0 35 - 38

// Task 1
function showDate(){
    return new Date();
}
document.write("<br><br>"+showDate());


// Task 2
function greet(fName, lName){
    alert("Assalam o alikum "+fName+" "+lName);
}
greet(prompt("Enter First Name"), prompt("Enter First Name"));



// Task 3
function sum(n1, n2){
    return n1+n2;
}

alert("Sum is "+sum(+prompt("Enter n1"), +prompt("Enter n2")));



// Task 4
function cal(n1, n2, o){
    ans = 0;
    switch (o){
        case '+':
            ans = n1 + n2;
            break;

        case '-':
            ans = n1 - n2;
            break;

        case '*':
            ans = n1 * n2;
            break;

        case '/':
            ans = n1 / n2;
            break;

        case '%':
            ans = n1 % n2;
            break;
        
        default:
            ans = 'Invalid operator';
    }
    if (ans != 'Invalid operator'){
        document.write("<br><br>Answer of "+n1+" "+o+" "+n2+" = "+ans)
    }
    else{
        alert("Invalid Character");
    }
}

var n1 = +prompt("Enter n1");
var n2 = +prompt("Enter n2");
var o = prompt("Enter operator");
cal(n1, n2 , o);


// Task 5
function sqr(n){
    return n * n;
}
var s = +prompt("Enter number")
alert("Square of "+s+" is "+sqr(s));


// Task 6
function facto(n){
    ans = 1
    for (let i = 1; i <= n; i++) {
        ans *= i;
    }
    return ans
}
var num = +prompt("Enter Number");
document.write("<br><br>Factorial of "+num+" is "+facto(num));



// Task 7
function counting(s, e){
    for (let i = s; i <= e; i++){
        document.write(i+" ");

        if ((i%10) == 0){
            document.write("<br>");
        }
    }
}
counting(+prompt("Enter Start point"), +prompt("Enter Start point"));



// Task 8
function sqr(a){
    return a*a;
}
function findH(b, p){
    return sqr(sqr(b) + sqr(p));
}
document.write("<br><br>Value of Hypotenuse "+findH(+prompt("Enter Base value"), +prompt("Enter Perpendicular value")));




// Task 9
function aor(w, h){
    return w*h;
}
var w = +prompt("Enter width: ");
var h = +prompt("Enter height: ");
alert("Area of rectangle: "+aor(w,h));
alert("Area of rectangle: "+aor(4,6));




// Task 10
var text = prompt("Enter any word");
var f = 0;
for (let i = 0; i < text.length; i++) {
    if (!(text[i] == text[text.length - i - 1])){
        alert("'"+text+"' word is not palindrome");
        break;
    }
    if (i == (text.length-1)){
        alert("'"+text+"' word is palindrome");
    }
}



// Task 11
var text = prompt("Enter any text").split(' ');
document.write("<br><br>Example String: "+text.join(' '));
for (let i = 0; i < text.length; i++) {
    text[i] = text[i][0].toUpperCase() + text[i].slice(1);
}
document.write("<br><br>Expected String: "+text.join(' '));


// Task 12
var text = prompt("Enter any text").split(' ');
document.write("<br><br>Example String: "+text.join(' '));
var ind = 0;
for (let i = 0; i < text.length; i++) {
    if (text[ind].length < text[i].length){
        ind = i;
    }
}
document.write("<br>Expected Output: "+text[ind]);



// Task 13
function countL(string, char){
    c = 0;
    for (let i = 0; i < string.length; i++) {
        if (char == string[i]){
            c++;
        }
    }
    return c;
}
var s = prompt("Enter String");
var ch = prompt("Enter which letter you found");
document.write("<br><br>In string<br>"+s+"<br> has "+countL(s, ch)+" numbers of "+ch);



// Task 14
function calcCircumference(r){
    return 2 * 3.14 * r;
}
function calcArea(r){
    return 3.14 * (r * r);
}   
document.write("<br>The circumference is "+calcCircumference(7));
document.write("<br>The Area is "+calcArea(7));