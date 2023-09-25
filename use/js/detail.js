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
            // console.log(ul_);
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
