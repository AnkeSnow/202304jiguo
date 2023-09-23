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