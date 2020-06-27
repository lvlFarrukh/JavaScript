var result = '';
function getnum(text){
    result += text;
    // console.log(result);
    document.getElementById('result').value = result;
}

function showResult() {
    if (result == ''){
        document.getElementById('result').value = '';    
    }
    else if (eval(document.getElementById('result').value).toString().split('.').length == 2 && eval(document.getElementById('result').value).toString().split('.')[1].length > 2){
        document.getElementById('result').value = eval(document.getElementById('result').value).toFixed(2);
        result = eval(document.getElementById('result').value).toFixed(2);
    }
    else{
        document.getElementById('result').value = eval(document.getElementById('result').value);
        result = eval(document.getElementById('result').value);
    }
}

function clearResult() {
    result = '';
    document.getElementById('result').value = ''; 
}

function clearOne() {
    result = result.slice(0, result.length - 1);
    document.getElementById('result').value = result;
}

function inverse() {
    document.getElementById('result').value = (1/eval(result)).toFixed(2);
    result = (1/eval(result)).toFixed(2);
}

function square() {
    document.getElementById('result').value = (eval(result) * eval(result));
    result = (eval(result) * eval(result));
}

function squareRoot() {
    document.getElementById('result').value = (Math.sqrt(eval(result))).toFixed(2);
    result = (Math.sqrt(eval(result))).toFixed(2);
}

function absolute() {
    document.getElementById('result').value = Math.abs(eval(document.getElementById('result').value));
    result = Math.abs(eval(result));
}