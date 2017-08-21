//横跨62.5px，总长500px
//靠左：0、50、100、150、200、250、300、350
//靠右：0、150、200、250、300、350、400、450

$('li').mouseenter().each(function(i){
    $(this).stop(true);
    $("li:gt($(this).length)").animate({
        'left':i * 50
    },1000);
})
