//试用页面渲染数据
var ul_ = document.querySelector('.mind');
var ajax_ = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
ajax_.open("get", "http://127.0.0.1:3000/useing/public");
ajax_.send();
ajax_.onreadystatechange = function () {
    if (ajax_.readyState == 4) {
        if (ajax_.status == 200) {
            var data = JSON.parse(ajax_.responseText);
            // console.log(data);
            var str = '';
            var textArr = ['报告数量：8', '报告数量：8', '查看试用名单', '剩余时间2天', '报告数量：8', '报告数量：8', '查看试用名单', '剩余时间2天', '报告数量：8', '报告数量：8', '查看试用名单', '剩余时间2天', '查看试用名单', '剩余时间2天', '查看试用名单', '剩余时间2天'];
            var nums = [];
            for (var a = 0; a < data.length - 1; a++) {
                var num = Math.random() * 10;
                num = Math.round(num);
                // num = num == 0 ? num + 1 : num;
                nums.push(num);
            }
            for (var i = 0; i < data.length - 1; i++) {
                // console.log(data[i].img);
                // console.log(data[i].txt);
                str += `<li>
                <a href="#">
                    <span class="shoufa">${data[i].info_ty}</span>
                    <img src="${data[i].img}" alt="">
                    <div class="etp_box">
                        <h2>${data[i].text}</h2>
                        <p>
                            <span>${data[i].totalnum}</span>
                            <span>${data[i].num}台</span>
                        </p>
                        <div class="sq">
                            <span>${data[i].apply}</span>申请
                        </div>
                        <span>${textArr[nums[i]]}</span>
                    </div>
                </a>
            </li>`;
            }

        }
        ul_.innerHTML = str;
        /* 首发体验师样式 */
        for (var item of ul_.children) {
            var shoufa = item.firstElementChild.firstElementChild;
            if (shoufa.innerHTML == '体验师转享') {
                shoufa.className = 'shoufa1';
            }
        }
    }
}
