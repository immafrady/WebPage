/*jslint browser:true */

document.getElementById('date').innerHTML = Date();


var btn = document.getElementById('submit');

btn.onclick = function (hm, w, h, bmi) {
    'use strict';
    hm = document.getElementById('height').value;
    w = document.getElementById('weight').value;
    h = hm / 100;
    bmi = w / (h * h);
    // function bmi() {
    //     bmi = w / (h * h);
    // }
}
// 建设中
// var hm = document.getElementById('height').value,
//     w = document.getElementById('weight').value,
//     h = hm / 100;
// 固定参数演示
// var hm =183, w=78,
//     h = hm /100 ;
// 测试JS是否成立
// var hm,
//     w,
//     h = hm / 100;
//
// function clickButton() {
//     hm = document.getElementById('height').value;
//     w = document.getElementById('weight').value;
//     var bmi = function(h , w){
//         bmi = w / (h * h);
//     };
//     console.log(bmi);
// };
// console.log(bmi)
// function clickButton(){
//     document.getElementById('point').innerHTML='"你的分数是" + bmi';
// }

//原始输出
// function clickButton(hm,w){
//     hm = document.getElementById('height').value,
//     w = document.getElementById('weight').value,
//     if (bmi <= 18.5){
//         document.getElementById('CNresult').innerHTML='食之无味，弃之可惜',
//         document.getElementById('JPresult').innerHTML='いっぱい食べてもいいぜ',
//         document.getElementById('ENresult').innerHTML='EAT or DIE';
//     } else if (bmi <=25) {
//         document.getElementById('CNresult').innerHTML='有点羡慕你了',
//         document.getElementById('JPresult').innerHTML='羨ましい！！',
//         document.getElementById('ENresult').innerHTML='Doing Great!';
//     } else if (bmi <=30) {
//         document.getElementById('CNresult').innerHTML='你危险了',
//         document.getElementById('JPresult').innerHTML='太くなっている',
//         document.getElementById('ENresult').innerHTML='Try to CONTROL yourself!';
//     } else {
//         document.getElementById('CNresult').innerHTML='你是猪吗'
//         document.getElementById('JPresult').innerHTML='てめえ、豚なのかよ！',
//         document.getElementById('ENresult').innerHTML='You taste so good';
//     }
// }
