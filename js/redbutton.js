// 경고창
const txt = '<div class="alert"><i class="fas fa-wrench"></i>&nbsp;&nbsp;준비 중입니다. </div>';
/* $(txt).appendTo('body'); */
$('body').append(txt);

// 이벤트
$('a[href="#"]').click(function(e){
    e.preventDefault();
    $('.alert').stop().fadeIn(300);
    $('.curtain').stop().fadeIn(300);
    setTimeout(function(){
        $('.alert').stop().fadeOut(500);
        $('.curtain').stop().fadeOut(500);
    }, 1000);
});
// Top 버튼
$(window).scroll(function(){
    if($(this).scrollTop()>200){
        $('#topButton').stop().show();
    }else{
        $('#topButton').stop().hide();
    }
});

$('#topButton').click(function(){
    window.scrollTo({top : 0, behavior: 'smooth'}); 
  });

// aside
$('.top_sub p .fa-times-circle').click(function(){
    $('#wrap>aside').stop().hide();
})

// snb
$(document).ready(function(){
    // 1. 1depth 클릭시 2depth 서브메뉴 나옴
    $('.gnb li a').mouseenter(function(){
        $('.snb').stop().slideDown();
    });
    // 2. 닫기버튼 클릭시 2depth 서브메뉴 사라짐
    $('.snb').mouseleave(function(){
        $('.snb').stop().slideUp();
    });
});


// 세돌
function a(i){
    $('.md_pick .leesedol h2 iframe').removeClass('on');
    $('.md_pick .leesedol h2 iframe').eq(i-1).addClass('on');
}

// 프랜차이즈
$('.real_title .real_time .fran2 .fran_list').eq(0).show();
function b(i){
    $('.real_title .real_time .fran2 .fran_list').hide();
    $('.real_title .real_time .fran2 .fran_list').eq(i-1).show(); 
}


// 게임설명
$('.description').stop().hide();
$('.caxa .caxa_game ul li a').click(function(){
    $('.description').stop().hide();
    $(this).next('.description').stop().show();
});
$('.description .fa-times').click(function(){
    $(this).parent().stop().hide();
});


