var ul_ = document.getElementById('myDiv')
var ajax_ = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
ajax_.open("get", "http://127.0.0.1:3000/guid/hot");
ajax_.send();
ajax_.onreadystatechange = function () {
    if (ajax_.readyState == 4) {
        if (ajax_.status == 200) {
            var data = JSON.parse(ajax_.responseText);
            var str = '';
            for (var i = 0; i < data.length; i++) {
                str += `
                <li>
                <a href="detail.html">
                    <img src="${data[i].img}" width="220" height="130" />
                    <div class="info">
                        <p class="name">${data[i].text}</p>
                        <div class="tip fix">
                            <div class="right icon">
                                <span class="xin">${data[i].like}</span>
                                <span class="look">${data[i].words}</span>
                            </div>
                        </div>
                    </div>
                </a>
            </li>`;
            }

        }
        str += `<li></li>`
        ul_.innerHTML = str;


    }
    var xin = document.getElementsByClassName('xin');

    var look = document.getElementsByClassName('look');
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

    for (var i = 0; i < look.length; i++) {
        look[i].onclick = function (e) {
            e.returnValue = false;
            if (this.style.color != 'red') {
                this.style.background = 'url(../css/img/look1.png) no-repeat left center'
                this.style.color = 'red'
                this.style.backgroundSize = '13px 13px'
                this.innerHTML = '6'
            } else {
                this.style.color = '#a3a3a3'
                this.style.background = 'url(../css/img/look.png) no-repeat left center'
                this.style.backgroundSize = '13px 13px'
                this.innerHTML = '5'
            }
        }
    }
}
var divs = document.getElementById('myDiv');
console.log(divs);
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
};
