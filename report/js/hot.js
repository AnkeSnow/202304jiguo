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
// 点击加载
var more = document.getElementsByTagName('article')[0].children[1].firstElementChild;
more.onclick = function () {
    var upload = document.getElementsByTagName('article')[0].children[1].lastElementChild;
    this.style.display = 'none';
    upload.style.display = 'block';
    setTimeout(function () {
        upload.parentNode.style.display = 'none';
        document.getElementsByTagName('article')[0].firstElementChild.children[13].style.display = 'block';
        document.getElementsByTagName('article')[0].firstElementChild.children[14].style.display = 'block';
        document.getElementsByTagName('article')[0].firstElementChild.children[15].style.display = 'block';
        document.getElementsByTagName('article')[0].firstElementChild.children[16].style.display = 'block';
        document.getElementsByTagName('article')[0].firstElementChild.children[17].style.display = 'block';
        document.getElementsByTagName('article')[0].firstElementChild.children[18].style.display = 'block';
    }, 3000)
}
// ajax
var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
ajax.open('get', 'http://127.0.0.1:3000/report/hot');
ajax.send();
ajax.onreadystatechange = function () {
    if (ajax.readyState == 4) {
        if (ajax.status == 200) {
            var json_ = JSON.parse(ajax.responseText);
            var str = ``;
            var ul_ = document.getElementsByTagName('article')[0].firstElementChild;
            for (var item of json_) {
                str +=
                    `
<li>
    <a href="../guid/detail.html">
        <img src='${item.img}'>
        <div>
            <p>${item.text}</p>
            <div>
                <div>
                    <i></i><span>${item.uName}</span><span>${item.endTime}</span>
                </div>
                <div>
                    <span class='xin'>3</span>
                    <span class='look'>3</span>
                </div>
            </div>
        </div>
    </a>
</li>
`
                ul_.innerHTML = str;
            }
            var xin = document.querySelectorAll('.xin');
            var look = document.getElementsByClassName('look');
            for (var i = 0; i < xin.length; i++) {
                xin[i].onclick = function (e) {

                    e.returnValue = false;
                    var num = this.innerHTML;
                    console.log(num);
                    if (this.style.color != 'red') {
                        this.style.background = 'url(../css/img/dazan.png) no-repeat center center'
                        this.style.color = 'red'
                        this.style.backgroundSize = '15px 15px'
                        this.innerHTML = ++num;
                    } else {
                        this.style.color = '#a3a3a3'
                        this.style.background = 'url(../css/img/zan.png) no-repeat center center'
                        this.innerHTML = --num;
                    }
                }
            }
            for (var i = 0; i < look.length; i++) {
                look[i].onclick = function (e) {
                    e.returnValue = false;
                    var num = this.innerHTML;
                    if (this.style.color != 'red') {
                        this.style.background = 'url(../css/img/look1.png) no-repeat center center'
                        this.style.color = 'red'
                        this.style.backgroundSize = '13px 13px'
                        this.innerHTML = ++num
                    } else {
                        this.style.color = '#a3a3a3'
                        this.style.background = 'url(../css/img/look.png) no-repeat center center'
                        this.style.backgroundSize = '13px 13px'
                        this.innerHTML = --num;
                    }
                }
            }
        }
    }
}
