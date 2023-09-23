
//试用页面渲染数据
var ul = document.querySelector('#myDiv')
var ajax_ = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
ajax_.open("get", "http://127.0.0.1:3000/play/new");
ajax_.send();
ajax_.onreadystatechange = function () {
    if (ajax_.readyState == 4) {
        if (ajax_.status == 200) {
            var data = JSON.parse(ajax_.responseText);
            var str = '';
            for (var item of data) {
                console.log(item);
                // console.log(data);
                for (var i = 0; i < item.length; i++) {
                    console.log(item[i].img);
                    console.log(item[i].text);
                    str += `<li>
                <a href="use/detail.html">
                    <img src="${item[i].img}" width="220" height="130" />
                    <div class="info">
                        <p class="name">${item[i].description}<span>${item[i].text}</span></p>
                        <div class="tip fix">
                            <span class="price left">${item[i].price}</span>
                            <div class="right icon">
                                <span class="xin">${item[i].like}</span>
                                <span class="look">${item[i].words}</span>
                            </div>
                        </div>
                    </div>
                </a>
            </li>`

                }
            }


        }
        ul.innerHTML = str;


    }
}
