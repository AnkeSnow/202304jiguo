//bb
// var a = document.getElementsByClassName('comMore')[0];
// a.onclick = function () {
//     a.innerHTML = '正在加载中';
//     a.style.background = 'url(img/loading-icon.gif) no-repeat'
// }


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
// var shen = document.getElementById('shen');
// var tai = document.getElementById('tai');
// var btn = document.getElementsByClassName('btn')[0];
// var num1 = 126;
// var num2 = 20;
// btn.onclick = function () {
//     shen.innerHTML = `${++num1}人申请`
//     tai.innerHTML = `${--num2}台`
//     btn.disabled = 'true'
//     btn.style.backgroundColor = 'gray'
//     btn.style.opacity = '.6'
// }
var xin = document.getElementsByClassName('xin');
var zan = document.getElementsByClassName('zan');
var look = document.getElementsByClassName('look');
var num = 3;
for (var i = 0; i < xin.length; i++) {
    xin[i].onclick = function (e) {
        e.returnValue = false;
        if (this.style.color != 'red') {
            this.style.background = 'url(../css/img/xinRedh.png) no-repeat left center'
            this.style.color = 'red'
            this.style.backgroundSize = '13px 13px'
            this.innerHTML = '4'
        } else {
            this.style.color = '#a3a3a3'
            this.style.background = 'url(../css/img/xin.png) no-repeat left center'
            this.innerHTML = '3'
        }
    }
}
for (var i = 0; i < zan.length; i++) {
    zan[i].onclick = function (e) {
        e.returnValue = false;
        var num = this.innerHTML;
        if (this.style.color != 'red') {
            this.style.background = 'url(./css/img/dazan.png) no-repeat left center'
            this.style.color = 'red'
            this.style.backgroundSize = '16px 16px'
            this.innerHTML = ++num;
        } else {
            this.style.color = '#a3a3a3'
            this.style.background = 'url(./css/img/zan.png) no-repeat left center'
            this.innerHTML = --num;
        }
    }
}
for (var i = 0; i < look.length; i++) {
    look[i].onclick = function (e) {
        e.returnValue = false;
        var num = this.innerHTML;
        if (this.style.color != 'red') {
            this.style.background = 'url(./css/img/look1.png) no-repeat left center'
            this.style.color = 'red'
            this.style.backgroundSize = '13px 13px'
            this.innerHTML = ++num
        } else {
            this.style.color = '#a3a3a3'
            this.style.background = 'url(./css/img/look.png) no-repeat left center'
            this.style.backgroundSize = '13px 13px'
            this.innerHTML = --num;
        }
    }
}
var divs = document.getElementById('myDiv');
// console.log(divs);
function show1() {

    divs.style.height = 'auto';
    var more = document.querySelector('.playMore');
    var bg = document.querySelector('.comMore');
    var op = document.getElementsByClassName('op')[0];
    bg.style.display = 'none'
    op.innerHTML = `没有更多啦~`;
    op.style.color = '#a3a3a3'
}

var bg = document.querySelector('.comMore');
window.onscroll = function () {
    var winHeight =
        document.documentElement.clientHeight || document.body.clientHeight;

    var scroolTop =
        document.documentElement.scrollTop || document.body.scrollTop;
    var scroolH =
        document.documentElement.scrollHeight || document.body.scrollHeight;

    if (winHeight + scroolTop + 222 >= scroolH) {
        var more = document.querySelector('.playMore');
        var bg = document.querySelector('.comMore');
        bg.style.background = 'url(../css/img/loading-icon.gif) no-repeat'
        bg.innerHTML = '正在加载中';
        setTimeout(show1, 800);
    }
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


