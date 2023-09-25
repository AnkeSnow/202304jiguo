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
window.onabort = function () {
    var logins = sessionStorage.getItem('login');
    if (logins == true) {
        var account = document.getElementsByClassName('account')[0];
        account.style.display = 'block';
        var headerBox = document.getElementsByClassName('headerBox')[0];
        headerBox.children[2].children[1].display = 'none';
        headerBox.children[2].children[2].display = 'none';
    }
}

var close_ = document.getElementsByClassName('close')[0];
close_.onclick = function () {
    masking.style.display = 'none';
}

// 注册验证
// 手机号
var telephone = document.getElementById('telephone');
var telephoneJudge = false;
var telephoneText = document.getElementsByClassName('telephoneText')[0];
telephone.onblur = function () {
    var reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
    if (this.value == '') {
        telephoneText.style.color = 'red';
        telephoneText.innerHTML = '手机号不能为空，请重新输入';
        telephoneJudge = false;
    } else if (reg.test(this.value) == false) {
        telephoneText.style.color = 'red';
        telephoneText.innerHTML = '手机号有误，请重新输入';
        telephoneJudge = false;
    } else {
        telephoneText.style.color = 'skyblue';
        telephoneText.innerHTML = '验证成功√';
        telephoneJudge = true;
        verificationButton.disabled = false;
    }
}
// 图片校验码
var checkCode = document.getElementById('checkCode');
var checkCodeJudge = false;
var checkCodeText = document.getElementsByClassName('checkCodeText')[0];
checkCode.onblur = function () {
    if (this.value.toLowerCase() == 'r2b7') {
        checkCodeText.style.color = 'skyblue';
        checkCodeText.innerHTML = '验证成功√';
        checkCodeJudge = true;
        verificationButton.disabled = false;
    } else if (this.value == '') {
        checkCodeText.style.color = 'red'
        checkCodeText.innerHTML = '校验码不能为空，请重新输入';
        checkCodeJudge = false;
    } else {
        checkCodeText.style.color = 'red'
        checkCodeText.innerHTML = '校验码有误，请重新输入';
        checkCodeJudge = false;
    }
}
// 短信验证码发送
var verificationButton = document.getElementById('verificationButton');
var num = 60;
var timer;
var randoms = 0;
verificationButton.onclick = function () {
    if (telephoneJudge == true && checkCodeJudge == true && !telephone.value == '' && !checkCode.value == '') {
        clearInterval(timer);
        timer = setInterval(function () {
            num--;
            verificationButton.value = `${num}秒后重新发送`;
            verificationButton.disabled = true;
            if (num == 50) {
                randoms = parseInt(Math.random() * 10000);
                randoms = randoms < 1000 ? randoms + 1000 : randoms;
                alert(randoms)
            }
            if (num < 0) {
                clearInterval(timer);
                verificationButton.value = '获取验证码'
                verificationButton.disabled = false;
                num = 60;
            }
        }, 1000)
    } else if (telephone.value == '') {
        this.disabled = true;
        telephoneText.innerHTML = '手机号不能为空，请重新输入';
        telephoneText.style.color = 'red';
    } else if (checkCode.value == '') {
        this.disabled = true;
        checkCodeText.style.color = 'red';
        checkCodeText.innerHTML = '校验码不能为空，请重新输入';
    }
}
// 验证短信验证码
var verificationCode = document.getElementById('verificationCode');
var verificationCodeJudge = false;
var verificationCodeText = document.getElementsByClassName('verificationCodeText')[0];
verificationCode.onblur = function () {
    if (this.value == '') {
        verificationCodeText.style.color = 'red';
        verificationCodeText.innerHTML = '验证码输入不能为空，请重新输入';
        verificationCodeJudge = false;
    } else if (this.value == randoms) {
        verificationCodeText.style.color = 'skyblue';
        verificationCodeText.innerHTML = '验证成功√';
        verificationCodeJudge = true;
    } else {
        verificationCodeText.style.color = 'red';
        verificationCodeText.innerHTML = '验证失败，请核对验证码是否正确';
        verificationCodeJudge = false;
    }
}
// 用户名
var user = document.getElementById('user');
var userJudge = false;
var userText = document.getElementsByClassName('userText')[0];
user.onblur = function () {
    if (this.value == '') {
        userText.style.color = 'red';
        userText.innerHTML = '用户名不能为空，请重新输入';
        userJudge = false;
    } else if (this.value.length < 7) {
        userText.style.color = 'red';
        userText.innerHTML = '用户名长度不能小于7位，请重新输入';
        userJudge = false;
    } else {
        userText.style.color = 'skyblue';
        userText.innerHTML = '用户名验证成功√';
        userJudge = true;
    }
}
// 密码
var password = document.getElementById('password');
var passwordJudge = false;
var passwordText = document.getElementsByClassName('passwordText')[1];
password.onblur = function () {
    if (this.value == '') {
        passwordText.style.color = 'red';
        passwordText.innerHTML = '密码不能为空，请重新输入';
        passwordJudge = false;
    } else if (this.value.length < 8) {
        passwordText.style.color = 'red';
        passwordText.innerHTML = '密码不能不能小于8位，请重新输入';
        passwordJudge = false;
    } else {
        passwordText.style.color = 'skyblue';
        passwordText.innerHTML = '密码验证成功√';
        passwordJudge = true;
    }
}
// 重复密码
var verifyPassword = document.getElementById('verifyPassword');
var verifyPasswordJudge = false;
var verifyPasswordText = document.getElementsByClassName('verifyPasswordText')[0];
verifyPassword.onblur = function () {
    if (this.value == '') {
        verifyPasswordText.style.color = 'red';
        verifyPasswordText.innerHTML = '重复密码不能为空，请重新输入';
        verifyPasswordJudge = false;
    } else if (this.value != password.value) {
        verifyPasswordText.style.color = 'red';
        verifyPasswordText.innerHTML = '两次密码不一致，请重新输入';
        verifyPasswordJudge = false;
    } else {
        verifyPasswordText.style.color = 'skyblue';
        verifyPasswordText.innerHTML = '密码验证成功√';
        verifyPasswordJudge = true;
    }
}

var logup = document.getElementById('logup');
logup.onclick = function () {
    if (telephone.value == '') {
        telephoneText.style.color = 'red';
        telephoneText.innerHTML = '手机号不能为空，请重新输入';
        telephoneJudge = false;
    } else if (checkCode.value == '') {
        checkCodeText.style.color = 'red'
        checkCodeText.innerHTML = '校验码不能为空，请重新输入';
        checkCodeJudge = false;
    } else if (verificationCode.value == '') {
        verificationCodeText.style.color = 'red';
        verificationCodeText.innerHTML = '验证码输入不能为空，请重新输入';
        verificationCodeJudge = false;
    } else if (user.value == '') {
        userText.style.color = 'red';
        userText.innerHTML = '用户名不能为空，请重新输入';
        userJudge = false;
    } else if (password.value == '') {
        passwordText.style.color = 'red';
        passwordText.innerHTML = '密码不能为空，请重新输入';
        passwordJudge = false;
    } else if (verifyPassword.value == '') {
        verifyPasswordText.style.color = 'red';
        verifyPasswordText.innerHTML = '重复密码不能为空，请重新输入';
        verifyPasswordJudge = false;
    } else if (telephoneJudge == true && checkCodeJudge == true && verificationCodeJudge == true && userJudge == true && passwordJudge == true && verifyPasswordJudge == true) {
        sessionStorage.setItem('tel', telephone.value);
        sessionStorage.setItem('user', user.value);
        sessionStorage.setItem('password', password.value);
        sessionStorage.setItem('login', 'false');
        alert('注册成功!');
        telephone.value = '';
        checkCode.value = '';
        verificationCode.value = '';
        user.value = '';
        password.value = '';
        verifyPassword.value = '';
        location.href = ("../index.html")
    }
}
