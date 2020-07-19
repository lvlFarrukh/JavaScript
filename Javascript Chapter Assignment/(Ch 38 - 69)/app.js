// CHAPTER N0 38-42

// Task 1
function power(a, b) {
    return Math.pow(a,b)
}

alert('Power of 5 into 7 is '+power(5,7));


// Task 2
var y = +prompt('Enter Year ');
if ((y%4) == 0){
    alert(y+' is leap year');
}
else{
    alert(y+' is not leap year');
}

// Task 3
function calS(a, b, c) {
    return (a+b+c)/2;
}

function area(a, b, c){
    var s = calS(a, b, c);
    return s*(s-a)*(s-b)*(s-c);
}

alert('Sides of triangle is 4 5 6 and area is: '+area(4,5,6));


// Task 4
function calAverage(a, b, c){
    return (a+b+c)/3;
}

function calPercentage(a, b, c){
    return ((a+b+c)/300)*100;
}

function mainFunction(a, b, c) {
    alert('Average is '+calAverage(s11, s12, s13)+'\nPercentage is '+calPercentage(s11, s12, s13));
}

var s11 = +prompt('Enter number of 1st subject');
var s12 = +prompt('Enter number of 2nd subject');
var s13 = +prompt('Enter number of 3rd subject');
mainFunction(s11, s12, s13);


// Task 5
var strg = "PAKISTAN zindabad";
var c = prompt("String :'"+strg+"' what character index you find","Enter any character from string");

function selfIndexOf(txt, chr){
    for (let i = 0; i< txt.length; i++) {
        if (txt[i].toLowerCase() == c.toLowerCase()){
            return i;
            break;
        }
    }
}
alert('Index is :'+selfIndexOf(strg, c));


// Task 6
function eraseVowel(strng) {
    var txta = '';
    if (strng.length <= 25){
        for (let i = 0; i < strng.length; i++) {
            if (!(strng[i].toLowerCase() == 'a' || strng[i].toLowerCase() == 'e' || strng[i].toLowerCase() == 'i' || strng[i].toLowerCase() == 'o' || strng[i].toLowerCase() == 'u')){
                txta += strng[i];    
            }
        }
        alert('String after removing vowel: '+txta);
    }
    else {
        alert('!string character are greater than 25');
    }
}
var txt = prompt("Enter String [!smaller than 25 characters]");
eraseVowel(txt);


// Task 7
function checkVowel(strng) {
    var c = [];
    for (let i = 0; i < strng.length; i++) {
        if (strng[i].toLowerCase() == 'a' || strng[i].toLowerCase() == 'e' || strng[i].toLowerCase() == 'i' || strng[i].toLowerCase() == 'o' || strng[i].toLowerCase() == 'u'){            
            if (strng[i+1].toLowerCase() == 'a' || strng[i+1].toLowerCase() == 'e' || strng[i+1].toLowerCase() == 'i' || strng[i+1].toLowerCase() == 'o' || strng[i+1].toLowerCase() == 'u'){
                c.push(i);    
                // console.log
            }
        }
    }
    document.write("<br><br>Such occurence are: ");
    for (let i = 0; i < c.length; i++) {
        document.write(strng[c[i]]+strng[c[i]+1]+',');     
    }
}
var txt = 'Pleases read this application and give me gratuity';
checkVowel(txt);


// Task 8
function meters(dist) {
    return dist/1000;
}
function inches(dist) {
    return dist/39370.1;
}
function feets(dist) {
    return dist/3280.84;
}
function centimeters(dist) {
    return dist/100000;
}

var distn = +prompt('Enter Distance b/t 2 cites in km');
document.write("<br><br>Distance: "+meters(distn)+" meters");
document.write("<br>Distance: "+inches(distn)+" inches");
document.write("<br>Distance: "+feets(distn)+" feet");
document.write("<br>Distance: "+centimeters(distn)+" cm");


// Task 9
function overTimePay(amnt) {
    if (amnt > 40 ){
        return Math.ceil(amnt - 40) * 12;
    }
    else {
        return 0;
    }
}

alert('Over Time Amount: Rs='+overTimePay(+prompt("Enter No. of hours")));


// Task 10
function totalCurrancyNote (amnt) {
    var h = 0, f = 0, t = 0;
    if ((amnt/100) >= 1){
        h = Math.floor(amnt/100);
        amnt = amnt%100;
        // console.log(amnt);
    }
    if ((amnt/50) >= 1){
        f = Math.floor(amnt/50);
        amnt = amnt%50;
        // console.log(amnt);
    }
    if ((amnt/10) > 1){
        t = Math.floor(amnt/10);
        amnt = amnt%10;
        // console.log(amnt);
    }
    document.write("<br><br>You have "+h+" hundreds notes "+f+" fifty notes and "+t+" tens notes");
}
totalCurrancyNote(+prompt('Enter Amount to withdraw'));


// ----------------
// CHAPTER N0 43-48
// ----------------

// Task 1 & 2
function showMsg(name) {
    alert('Thank you for purchasing '+name+' from us');
}


// Task 3
var std = ['FARRUKH', 'TAHA', 'USAMA', 'UMAIR'];
var clas = ['10','11','12','13'];
document.write("<br><br>Before Delete");
document.write("<br><table class='tb'><tr><th>Index</th><th>Name</th><th>Class</th></tr>");
for (let i = 0; i < std.length; i++) {
    document.write("<tr><td>"+i+"</td><td>"+std[i]+"</td><td>"+clas[i]+"</td><td><button onclick='delrec("+i+")'>Delete</button></td></tr>");
}
document.write("</table>");

function delrec(i){
    std.splice(i,1);
    clas.splice(i,1);
    console.log(std);
    document.write("<br><br>After click on delete button on 'Mark' row");
    document.write("<br><table class='tb'><tr><th>Index</th><th>Name</th><th>Class</th></tr>");
    for (let i = 0; i < std.length; i++) {
        document.write("<tr><td>"+i+"</td><td>"+std[i]+"</td><td>"+clas[i]+"</td><td><button onclick='delrec("+i+")'>Delete</button></td></tr>");
    }
    document.write("</table>");
}


// Task 4
function overImg() {
    document.getElementById('imgs').setAttribute('src', 'data:image/jpeg;base64,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');
}
function outImg() {
    document.getElementById('imgs').setAttribute('src', 'data:image/jpeg;base64,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');
}


// Task 5
var num = document.getElementById('num');

function add() {
    num.value = parseInt(num.value) + 1;
}
function sub() {
    if (num.value > 0)
        num.value = parseInt(num.value) - 1;
}


// ----------------
// CHAPTER N0 49-52
// ----------------


// Task 1
function showData(){
    var divs = document.getElementsByClassName('signUp');
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    document.getElementById('u').innerHTML = 'USERNAME: '+user;
    document.getElementById('p').innerHTML = 'PASSWORD: '+pass;    
}


// Task 2
function seeAll() {
    txt = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus impedit fugiat sint necessitatibus nostrum. Perspiciatis unde minus voluptatum iste, impedit dignissimos, vitae ullam molestias recusandae dolorum error! Obcaecati, iusto maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus impedit fugiat sint necessitatibus nostrum. Perspiciatis unde minus voluptatum iste, impedit dignissimos, vitae ullam molestias recusandae dolorum error! Obcaecati, iusto maiores.';
    document.getElementById('cont').innerHTML = document.getElementById('cont').innerText + txt;
}



// Task 3
function showDetail() {
    var vals = document.getElementsByClassName('inpt');
    var inp = document.getElementById('tbl');
    var tr = document.createElement('tr');
    var c = 0;

    var idVals = vals[0].value[0]+vals[1].value[0]+vals[2].value[vals[2].value.length - 1];
    tr.setAttribute('id', idVals);

    for (let i = 0; i < vals.length + 2; i++) {
        if (i < 4) {
            td = document.createElement('td');
            tn = document.createTextNode(vals[i].value);
            td.append(tn);
            tr.append(td);
            vals[i].value = '';
        }
        else {
            if (c==0){
                c = 1;
                td = document.createElement('button');
                td.innerHTML = 'Update';
                td.setAttribute('onclick', 'sDataUpdate('+idVals+')');
                td.setAttribute('id', 'u'+idVals);
                tr.append(td);
            }
            else {
                td = document.createElement('button');
                td.innerHTML = 'Delete';
                td.setAttribute('onclick', 'sDataDelete(b'+idVals+')');
                td.setAttribute('id', 'b'+idVals);
                tr.append(td);
            }
        } 
        
    }
    inp.childNodes[1].appendChild(tr);
}


function sDataDelete(elm) {
    elm.parentElement.innerHTML = '';
}

function sDataUpdate(id) {
    // console.log(id.childNodes.length)
    for (let i = 0; i < id.childNodes.length - 2; i++) {
        var inp1 = document.createElement('input');
        inp1.setAttribute('type','text');
        inp1.setAttribute('class','tempInputField');
        inp1.value = id.childNodes[i].innerHTML;
        id.childNodes[i].appendChild(inp1);
        id.childNodes[i].removeChild(id.childNodes[i].childNodes[0]);
    }
    // console.log(id.getAttribute('id'));
    id.childNodes[4].setAttribute('onclick', 'updateValues('+id.getAttribute('id')+')');
    id.childNodes[5].disabled = true;
    // console.log(id.childNodes[5])
}

function updateValues(id) {
    var vals = document.getElementsByClassName('tempInputField');
    var val = [];
    for (let i = 0; i < vals.length; i++) {
        val[i] = vals[i].value;
    }
    // console.log(id);
    for (let i = 0; i < id.childNodes.length - 2; i++) {
        var tn = document.createTextNode(val[i]);
        // inp1.value = id.childNodes[i].innerHTML;
        id.childNodes[i].appendChild(tn);
        id.childNodes[i].removeChild(id.childNodes[i].childNodes[0]);
        // console.log(id.childNodes[i].childNodes[0]);
    }
    id.childNodes[4].setAttribute('onclick', 'sDataUpdate('+id.getAttribute('id')+')');
    id.childNodes[5].disabled = false;
}
    


// -------------------
// CHAPTER N0 52 - 58
// -------------------


// Task 1
function viewLg(val) {
    var model = document.getElementById('disp-model');
    // console.log(model.childNodes)
    model.style.display = 'block';
    // console.log(model)
    model.childNodes[3].setAttribute('src', val.getAttribute('src'));
    model.childNodes[1].setAttribute('onclick', 'closeModel()')
}
function closeModel() {
    var model = document.getElementById('disp-model');
    model.style.display = 'none';
}


// Task 2
function zomIn(elm) {
    elm.style.fontSize = '26px'; 
}
function zomOut(elm) {
    elm.style.fontSize = '16px'; 
}

// -------------------
// CHAPTER N0 58 - 69
// -------------------

// Task 1

// 1
var el = document.getElementById('main-content');


// 2
console.log(el)
document.write("<br><br>All Child nodes are: "+el);

// 3
var rander = document.getElementsByClassName('render');
console.log(rander)
for (let i = 0; i < rander.length; i++) {
    document.write('<br><br>Render Class items: '+rander[i].innerHTML);
    console.log(rander[i].innerHTML);
}

// 4
var ip = document.getElementById('first-name');
ip.value = 'FARRUKH';

// 5
var ip = document.getElementById('last-name');
ip.value = 'ASLAM';
var ip = document.getElementById('email');
ip.value = 'farrukha303@gmail.com';



// Task 2

// 1
var f = document.getElementById('form-content');
console.log(f.nodeType);
document.write("<br><br>Node value: "+f.nodeType);

// 2
var f_n = document.getElementById('lastName');
document.write("<br><br>Node value: "+f_n.nodeType);
document.write("<br><br>Child nodes: "+f_n.childNodes);
console.log(f_n.nodeType)
console.log(f_n.childNodes)


// 3
var lN = document.getElementById('lastName');
lN.appendChild(document.createTextNode(' (This is addition child node)'));

// 4
var mc = document.getElementById('main-content');
document.write("<br><br>First Child: "+mc.firstChild);
document.write("<br><br>First Child: "+mc.lastChild);
console.log(mc.firstChild);
console.log(mc.lastChild);

// 5
document.write("<br><br>next Sibling: "+lN.nextSibling);
document.write("<br><br>previous Sibling: "+lN.previousSibling);
console.log(lN.nextSibling);
console.log(lN.previousSibling);

// 6
var eml = document.getElementById('email');
document.write("<br><br>Parent Node: "+eml.parentNode);
document.write("<br><br>Node Type: "+eml.nodeType);
console.log(eml.parentNode);
console.log(eml.nodeType);