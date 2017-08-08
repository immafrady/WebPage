/*jslint browser:true */
// 时间
document.getElementById('date').innerHTML = Date();

//点击控件
var btn = document.getElementById('submit');

btn.onclick = function () {
    'use strict';
    var hm = document.getElementById('height').value,
        w = document.getElementById('weight').value,
        h = hm / 100,
        bmi = w / (h * h);

    // 加入switch语句
    switch (isNaN(bmi)) {
    case true:
        document.getElementById('result').innerHTML = '##';
        document.getElementById('CNresult').innerHTML = '认真写，别逗我';
        document.getElementById('JPresult').innerHTML = '冗談じゃない！';
        document.getElementById('ENresult').innerHTML = 'What are you hidding?';
        break;
    default:
        document.getElementById('result').innerHTML = parseInt(bmi);
        if (bmi <= 18.5) {
            document.getElementById('CNresult').innerHTML = '食之无味，弃之可惜';
            document.getElementById('JPresult').innerHTML = 'いっぱい食べてもいいぜ';
            document.getElementById('ENresult').innerHTML = 'EAT or DIE';
        } else if (bmi <= 25) {
            document.getElementById('CNresult').innerHTML = '有点羡慕你了';
            document.getElementById('JPresult').innerHTML = '羨ましい！！';
            document.getElementById('ENresult').innerHTML = 'Doing Great!';
        } else if (bmi <= 30) {
            document.getElementById('CNresult').innerHTML = '你危险了';
            document.getElementById('JPresult').innerHTML = '太くなっている';
            document.getElementById('ENresult').innerHTML = 'Try to CONTROL yourself!';
        } else {
            document.getElementById('CNresult').innerHTML = '你是猪吗？';
            document.getElementById('JPresult').innerHTML = 'てめえ、豚なのかよ！';
            document.getElementById('ENresult').innerHTML = 'You taste so good';
        }
    }
}
