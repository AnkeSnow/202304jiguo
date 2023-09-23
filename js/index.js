// 登录
var loginButton = document.getElementsByClassName('loginButton')[0];
var masking = document.getElementsByClassName('masking')[0];
loginButton.onclick = function () {
    masking.style.display = 'block';
}
var login_Button = document.getElementsByClassName('login_Button')[0];
login_Button.onclick = function () {
    var loginTelephone = document.getElementById('loginTelephone');
    var loginUser = document.getElementById('loginUser');
    var loginPassword = document.getElementById('loginPassword');
    var tel = JSON.parse(sessionStorage.getItem('tel'));
    var user = sessionStorage.getItem('user');
    var password = sessionStorage.getItem('password');
    var loginTelephoneText = document.getElementsByClassName('loginTelephoneText')[0]
    var loginUserText = document.getElementsByClassName('loginUserText')[0];
    var passwordText = document.getElementsByClassName('passwordText')[0];
    console.log(loginTelephone.value);
    if (loginTelephone.value == '') {
        loginTelephoneText.style.opacity = '1';
        loginTelephoneText.innerHTML = '输入不能为空';
        setTimeout(function () {
            loginTelephoneText.style.opacity = '0';
        }, 3000)
    } else if (loginUser.value == '') {
        loginUserText.style.opacity = '1';
        loginUserText.innerHTML = '输入不能为空';
        setTimeout(function () {
            loginUserText.style.opacity = '0';
        }, 3000)
    } else if (loginPassword.value == '') {
        passwordText.style.opacity = '1';
        passwordText.innerHTML = '输入不能为空';
        setTimeout(function () {
            passwordText.style.opacity = '0';
        }, 3000)
    } else if (loginTelephone.value != tel) {
        loginTelephoneText.style.opacity = '1';
        loginTelephoneText.innerHTML = '手机号未查询到注册';
        setTimeout(function () {
            loginTelephoneText.style.opacity = '0';
        }, 3000)
    } else if (loginUser.value != user) {
        loginUserText.style.opacity = '1';
        loginUserText.innerHTML = '用户名未查询到注册';
        setTimeout(function () {
            loginUserText.style.opacity = '0';
        }, 3000)
    } else if (loginPassword.value == password) {
        passwordText.style.opacity = '1';
        passwordText.innerHTML = '密码错误';
        setTimeout(function () {
            passwordText.style.opacity = '0';
        }, 3000)
    } else {
        alert('登录成功');
        masking.style.display = 'none';
    }
}
var close_ = document.getElementsByClassName('close')[0];
close_.onclick = function () {
    masking.style.display = 'none';
}

var a = document.getElementsByClassName('comMore')[0];
a.onclick = function () {
    a.innerHTML = '正在加载中';
    a.style.background = 'url(img/loading-icon.gif) no-repeat'
}
window.onscroll = function () {
    var back = document.getElementById('back');
    var scroll = document.documentElement.scrollTop;
    if (scroll >= 100) {
        back.style.display = 'block'
    }
    else {
        back.style.display = 'none'
    }
}
function returnTop() {
    document.documentElement.scrollIntoView({
        behavior: 'smooth'
    })
}
var djs = document.getElementById('djs');

var timer = setInterval(function () {
    var mb = new Date(2023, 11, 11);
    var time = new Date();
    var gap = mb - time;
    var date = parseInt(gap / 1000 / 60 / 60 / 24);
    var hour = parseInt(gap / 1000 / 60 / 60 % 24);
    var minute = parseInt(gap / 1000 / 60 % 60);
    var second = parseInt(gap / 1000 % 60);
    var str = '申请时间剩余:' + '&nbsp;&nbsp;' + date + '天' + hour + '时' + minute + '分' + second + '秒';
    djs.innerHTML = str;
}, 1000)
var shen = document.getElementById('shen');
var tai = document.getElementById('tai');
var btn = document.getElementsByClassName('btn')[0];
var num1 = 126;
var num2 = 20;
btn.onclick = function () {
    shen.innerHTML = `${++num1}人申请`
    tai.innerHTML = `${--num2}台`
    btn.disabled = 'true'
    btn.style.backgroundColor = 'gray'
    btn.style.opacity = '.6'
}