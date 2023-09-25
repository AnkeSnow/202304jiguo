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
    } else if (loginPassword.value != password) {
        passwordText.style.opacity = '1';
        passwordText.innerHTML = '密码错误';
        setTimeout(function () {
            passwordText.style.opacity = '0';
        }, 3000)
    } else {
        alert('登录成功');
        masking.style.display = 'none';
        sessionStorage.setItem('login', 'true');
        var account = document.getElementsByClassName('account')[0];
        account.style.display = 'block';
        var headerBox = document.getElementsByClassName('headerBox')[0];
        headerBox.children[2].children[1].style.display = 'none';
        headerBox.children[2].children[2].style.display = 'none';
        var user = sessionStorage.getItem('user');
        var account = document.getElementsByClassName('account')[0].lastElementChild.firstElementChild;
        account.innerHTML = user;
    }
}

// 判断是否登录
window.onload = function () {
    var logins = sessionStorage.getItem('login');
    if (logins == 'true') {
        var account = document.getElementsByClassName('account')[0];
        account.style.display = 'block';
        var headerBox = document.getElementsByClassName('headerBox')[0];
        headerBox.children[2].children[1].style.display = 'none';
        headerBox.children[2].children[2].style.display = 'none';
        var user = sessionStorage.getItem('user');
        var account = document.getElementsByClassName('account')[0].lastElementChild.firstElementChild;
        account.innerHTML = user;
    }
}

var close_ = document.getElementsByClassName('close')[0];
close_.onclick = function () {
    masking.style.display = 'none';
}


