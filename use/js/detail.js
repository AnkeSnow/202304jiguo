// ajax
var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
ajax.open('get', 'http://127.0.0.1:3000/useing/public');
ajax.send();
ajax.onreadystatechange = function () {
    if (ajax.readyState == 4) {
        if (ajax.status == 200) {
            var json_ = JSON.parse(ajax.responseText);
            var str = ``;
            var ul_ = document.getElementsByClassName('container')[1].lastElementChild;
            for (var i = 0; i < 4; i++) {
                str +=
                    `
<li>
<a href="detail.html">
    <span>${json_[i].info_ty}</span>
    <img src="${json_[i].img}" alt="">
    <div>
        <h4>${json_[i].text} </h4>
        <p><span>${json_[i].totalnum}</span><span>${json_[i].num}台</span></p>
        <p><span>${json_[i].apply}</span>申请</p>
        <span>剩余时间2天</span>
    </div >
</a >
</li >
`
                ul_.innerHTML = str;
            }
        }
    }
}

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
        var cg = sessionStorage.getItem('login');
        if (cg == 'true') {
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
                btn.style.opacity = '.6';

            }
        } else if (cg != 'true') {
            btn.onclick = function () {
                console.log(1);
                masking.style.display = 'block';
            }
        }
    }
}

// 判断是否登录
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

var close_ = document.getElementsByClassName('close')[0];
close_.onclick = function () {
    masking.style.display = 'none';
}

//倒计时
var djs = document.getElementById('djs');

var timer = setInterval(function () {
    var mb = new Date(2023, 10, 11);
    var time = new Date();
    var gap = mb - time;
    var date = parseInt(gap / 1000 / 60 / 60 / 24);
    var hour = parseInt(gap / 1000 / 60 / 60 % 24);
    var minute = parseInt(gap / 1000 / 60 % 60);
    var second = parseInt(gap / 1000 % 60);
    var str = '申请时间剩余:' + '&nbsp;&nbsp;' + date + '天' + hour + '时' + minute + '分' + second + '秒';
    djs.innerHTML = str;
}, 1000)