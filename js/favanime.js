//横跨62.5px，总长400px
//靠左：0、50、100、150、200、250、300、350
//靠右：0、150、200、250、300、350、400、450

// $('li').mouseenter(function(){
//     each(function(i) {
//         $('li:lt(i)').animate({'left':50 * i}, 1000)
//         $('li:gt(i)').animate({'left': 150 + 50 * i}, 1000)
//     });
// }

for (var i in $('li')) {
    // console.log(typeof $('li'))
    $('li').eq(i).mouseenter(function() {
        $('li:eq(i)').animate({'left':50 * i }, 400);
    //     $('li:lt(i)').animate({'left':50 * i }, 400);
    //     $('li:gt(i)').animate({'left':50 * i + 150}, 400)
    });
}
// $('.img1').mouseenter(function(){
//     $('li').stop(true);
//     $('.img2').animate({'left':150}, 400);
//     $('.img3').animate({'left':200}, 400);
//     $('.img4').animate({'left':250}, 400);
//     $('.img5').animate({'left':300}, 400);
//     $('.img6').animate({'left':350}, 400);
//     $('.img7').animate({'left':400}, 400);
//     $('.img8').animate({'left':450}, 400);
// })
// $('.img2').mouseenter(function(){
//     $('li').stop(true);
//     $('.img2').animate({'left':50}, 400);
//     $('.img3').animate({'left':200}, 400);
//     $('.img4').animate({'left':250}, 400);
//     $('.img5').animate({'left':300}, 400);
//     $('.img6').animate({'left':350}, 400);
//     $('.img7').animate({'left':400}, 400);
//     $('.img8').animate({'left':450}, 400);
// })
// $('.img3').mouseenter(function(){
//     $('li').stop(true);
//     $('.img2').animate({'left':50}, 400);
//     $('.img3').animate({'left':100}, 400);
//     $('.img4').animate({'left':250}, 400);
//     $('.img5').animate({'left':300}, 400);
//     $('.img6').animate({'left':350}, 400);
//     $('.img7').animate({'left':400}, 400);
//     $('.img8').animate({'left':450}, 400);
// })
// $('.img4').mouseenter(function(){
//     $('li').stop(true);
//     $('.img2').animate({'left':50}, 400);
//     $('.img3').animate({'left':100}, 400);
//     $('.img4').animate({'left':150}, 400);
//     $('.img5').animate({'left':300}, 400);
//     $('.img6').animate({'left':350}, 400);
//     $('.img7').animate({'left':400}, 400);
//     $('.img8').animate({'left':450}, 400);
// })
// $('.img5').mouseenter(function(){
//     $('li').stop(true);
//     $('.img2').animate({'left':50}, 400);
//     $('.img3').animate({'left':100}, 400);
//     $('.img4').animate({'left':150}, 400);
//     $('.img5').animate({'left':200}, 400);
//     $('.img6').animate({'left':350}, 400);
//     $('.img7').animate({'left':400}, 400);
//     $('.img8').animate({'left':450}, 400);
// })
// $('.img6').mouseenter(function(){
//     $('li').stop(true);
//     $('.img2').animate({'left':50}, 400);
//     $('.img3').animate({'left':100}, 400);
//     $('.img4').animate({'left':150}, 400);
//     $('.img5').animate({'left':200}, 400);
//     $('.img6').animate({'left':250}, 400);
//     $('.img7').animate({'left':400}, 400);
//     $('.img8').animate({'left':450}, 400);
// })
// $('.img7').mouseenter(function(){
//     $('li').stop(true);
//     $('.img2').animate({'left':50}, 400);
//     $('.img3').animate({'left':100}, 400);
//     $('.img4').animate({'left':150}, 400);
//     $('.img5').animate({'left':200}, 400);
//     $('.img6').animate({'left':250}, 400);
//     $('.img7').animate({'left':300}, 400);
//     $('.img8').animate({'left':450}, 400);
// })
// $('.img8').mouseenter(function(){
//     $('li').stop(true);
//     $('.img2').animate({'left':50}, 400);
//     $('.img3').animate({'left':100}, 400);
//     $('.img4').animate({'left':150}, 400);
//     $('.img5').animate({'left':200}, 400);
//     $('.img6').animate({'left':250}, 400);
//     $('.img7').animate({'left':300}, 400);
//     $('.img8').animate({'left':350}, 400);
// })


$('.img-frame').mouseleave(function() {
    $('.img2').animate({'left':62.5}, 400);
    $('.img3').animate({'left':125}, 400);
    $('.img4').animate({'left':187.5}, 400);
    $('.img5').animate({'left':250}, 400);
    $('.img6').animate({'left':312.5}, 400);
    $('.img7').animate({'left':375}, 400);
    $('.img8').animate({'left':437.5}, 400);
})
