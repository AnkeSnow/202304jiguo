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