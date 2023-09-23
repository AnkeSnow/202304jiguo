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
                console.log(data[i].img);
                str += `
                <li>
                <a href="use/detail.html">
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
}