// 点击申请
var shen = document.getElementById('shen');
var tai = document.getElementById('tai');
var btn = document.getElementsByClassName('btn')[0];
var num1 = 126;
var num2 = 20;
btn.onclick = function () {
    var logins = sessionStorage.getItem('login');
    if (logins == 'true') {
        shen.innerHTML = `${++num1}人申请`;
        tai.innerHTML = `${--num2}台`;
        btn.disabled = 'true';
        btn.style.backgroundColor = 'gray';
        btn.style.opacity = '.6';
        sessionStorage.setItem('apply', 'true');
    }
    else {
        masking.style.display = 'block';
    }
}

var apply = sessionStorage.getItem('apply')
if (apply == 'true') {
    shen.innerHTML = `${++num1}人申请`;
    tai.innerHTML = `${--num2}台`;
    btn.disabled = 'true';
    btn.style.backgroundColor = 'gray';
    btn.style.opacity = '.6';
}