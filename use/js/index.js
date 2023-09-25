// window.onload = function () {
//     setTimeout(getData, 10);
// };
setTimeout(getData, 10);

//试用页面渲染数据
var ul_ = document.getElementsByClassName('mind');
function getData() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
    ajax_.open("get", "http://127.0.0.1:3000/useing/public");
    ajax_.send();
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText);
                // console.log(data);
                show(data);
            }
        }
    }
}

//渲染
function show(val) {
    var str = '';
    var textArr = ['报告数量：8', '报告数量：8', '查看试用名单', '剩余时间2天', '报告数量：8', '报告数量：8', '查看试用名单', '剩余时间2天', '报告数量：8', '报告数量：8', '查看试用名单', '剩余时间2天', '查看试用名单', '剩余时间2天', '查看试用名单', '剩余时间2天'];
    var nums = [];
    for (var a = 0; a < val.length - 1; a++) {
        var num = Math.random() * 10;
        num = Math.round(num);
        // num = num == 0 ? num + 1 : num;
        nums.push(num);
    }
    for (var i = 0; i < val.length - 1; i++) {
        // console.log(data[i].img);
        // console.log(data[i].txt);
        str += `<li>
                <a href="detail.html">
                    <span class="shoufa">${val[i].info_ty}</span>
                    <img src="${val[i].img}" alt="">
                    <div class="etp_box">
                        <h2>${val[i].text}</h2>
                        <p>
                            <span>${val[i].totalnum}</span>
                            <span>${val[i].num}台</span>
                        </p>
                        <div class="sq">
                            <span>${val[i].apply}</span>申请
                        </div>
                        <span>${textArr[nums[i]]}</span>
                    </div>
                </a>
            </li>`;
    }
    ul_[0].innerHTML = str;
    ul_[1].innerHTML = str;
}
function show1() {
    var etp = document.querySelector('.etp');
    etp.style.height = 'auto';
    // console.log(p);
    var more = document.querySelector('.more').firstElementChild;
    var img = more.firstElementChild;
    var span = more.lastElementChild;
    var span1 = span.previousElementSibling;
    span1.innerHTML = `没有更多啦~`;
    span1.style.color = '#a3a3a3';
    img.style.display = 'none';
    span.style.display = 'none';

}
// 4. 触底加载

// 窗口的高度 + 滚动上去的距离 >=  页面的整体高度

window.onscroll = function () {
    // 窗口高度
    var winHeight =
        document.documentElement.clientHeight || document.body.clientHeight;

    //滚动条的高度  滚动出页面的高度
    var scroolTop =
        document.documentElement.scrollTop || document.body.scrollTop;
    // console.log('滚动条：' + scroolTop);

    //页面的整体高度
    var scroolH =
        document.documentElement.scrollHeight || document.body.scrollHeight;
    // console.log('整体高：' + scroolH);

    if (winHeight + scroolTop >= scroolH) {
        var more = document.querySelector('.more').firstElementChild;
        var img = more.firstElementChild;
        var span = more.lastElementChild;
        img.src = '../img/loading-icon.gif';
        span.innerHTML = '正在加载中';
        setTimeout(show1, 800);
    }
};