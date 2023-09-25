//bb
// var a = document.getElementsByClassName('comMore')[0];
// a.onclick = function () {
//     a.innerHTML = '正在加载中';
//     a.style.background = 'url(img/loading-icon.gif) no-repeat'
// }


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
        if (this.style.color != 'red') {
            this.style.background = 'url(../css/img/dazan.png) no-repeat left center'
            this.style.color = 'red'
            this.style.backgroundSize = '16px 16px'
            this.innerHTML = '4'
        } else {
            this.style.color = '#a3a3a3'
            this.style.background = 'url(../css/img/zan.png) no-repeat left center'
            this.innerHTML = '3'
        }
    }
}
for (var i = 0; i < look.length; i++) {
    look[i].onclick = function (e) {
        e.returnValue = false;
        if (this.style.color != 'red') {
            this.style.background = 'url(../css/img/look1.png) no-repeat left center'
            this.style.color = 'red'
            this.style.backgroundSize = '13px 13px'
            this.innerHTML = '4'
        } else {
            this.style.color = '#a3a3a3'
            this.style.background = 'url(../css/img/look.png) no-repeat left center'
            this.style.backgroundSize = '13px 13px'
            this.innerHTML = '3'
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
