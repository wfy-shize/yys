/**
 * Created by Administrator on 2017/3/12 0012.
 */
var flag=1;
var flag1=1;
var i=1;
var timrout;
var timroutB;

var way=1;
setInterval(function () {
    if(flag==1){
        $("#in_exchange").animate({ top: "-=55"},400);
        $("#in_exchange1").animate({ opacity: "0.5"},100);
        $("#in_exchange1").animate({ opacity: "0.3"},100);
        $("#in_exchange1").animate({ opacity: "0.1"},100);
        $("#in_exchange1").animate({ opacity: "0.0"},100);

        $("#in_exchange2").animate({ opacity: "0.1"},100);
        $("#in_exchange2").animate({ opacity: "0.3"},100);
        $("#in_exchange2").animate({ opacity: "0.5"},100);
        $("#in_exchange2").animate({ opacity: "1"},100);
        flag++;
    }else if(flag==2){
        $("#in_exchange").animate({ top: "-=55"},400);

        $("#in_exchange2").animate({ opacity: "0.5"},100);
        $("#in_exchange2").animate({ opacity: "0.3"},100);
        $("#in_exchange2").animate({ opacity: "0.1"},100);
        $("#in_exchange2").animate({ opacity: "0.0"},100);

        $("#in_exchange3").animate({ opacity: "0.1"},100);
        $("#in_exchange3").animate({ opacity: "0.3"},100);
        $("#in_exchange3").animate({ opacity: "0.5"},100);
        $("#in_exchange3").animate({ opacity: "1"},100);
        flag++;
    }else if(flag==3){
        flag=1;
        $("#in_exchange").animate({ top: "0"},0);
        $("#in_exchange").animate({ top: "-=55"},400);

        $("#in_exchange1").animate({ opacity: "1"},0);
        $("#in_exchange1").animate({ opacity: "0.5"},100);
        $("#in_exchange1").animate({ opacity: "0.3"},100);
        $("#in_exchange1").animate({ opacity: "0.1"},100);
        $("#in_exchange1").animate({ opacity: "0.0"},100);

        $("#in_exchange2").animate({ opacity: "0.1"},100);
        $("#in_exchange2").animate({ opacity: "0.3"},100);
        $("#in_exchange2").animate({ opacity: "0.5"},100);
        $("#in_exchange2").animate({ opacity: "1"},100);

        flag++;
    }
},3000);

$("#allGames").mouseover(function(){
    $("#allGames").css("color","rgb(188,46,46)");
    $("#allGames").css("border-bottom","3px solid rgb(188,46,46)");
    $("#allGames").css("background","-ms-linear-gradient(top, #F3F3F3,  #fff)");
    $("#allGames").css("background","-moz-linear-gradient(top, #F3F3F3,  #fff)");
    $("#allGames").css("background","-webkit-gradient(linear, 0% 0%, 0% 100%,from(#F3F3F3), to(#fff))");
    clearTimeout(timrout);
    $("#wy_down_content").show();
    $("#wy_down_content").animate({height:"450px"},270);
});
$("#allGames").mouseout(function(){
    $("#allGames").css("border-bottom","0 solid rgb(188,46,46)");
    $("#allGames").css("background","none");
    timrout=setTimeout(function () {
        $("#wy_down_content").hide();
        $("#wy_down_content").animate({height:"0"},0);
    }, 300);
});
$("#wy_down_content").mouseover(function(){
    $("#allGames").css("color","rgb(188,46,46)");
    $("#allGames").css("border-bottom","3px solid rgb(188,46,46)");
    $("#allGames").css("background","-ms-linear-gradient(top, #F3F3F3,  #fff)");
    $("#allGames").css("background","-moz-linear-gradient(top, #F3F3F3,  #fff)");
    $("#allGames").css("background","-webkit-gradient(linear, 0% 0%, 0% 100%,from(#F3F3F3), to(#fff))");
    clearTimeout(timrout);
    $("#wy_down_content").show();
});
$("#wy_down_content").mouseout(function(){
    $("#allGames").css("border-bottom","0 solid rgb(188,46,46)");
    $("#allGames").css("background","none");
    timrout=setTimeout(function () {
        $("#wy_down_content").hide();
        $("#wy_down_content").animate({height:"0"},0);
    }, 300);
});
$("#moreGame").on("click",function () {
    if(flag1){
        $("#moreGame").css({"width":"25px","height":"22px","border-radius":"2px","top":"203px","left":"-41px","padding-top":"5px","padding-left":"5px"});
        $("#moreGame").text(">>");

        $("#hidden_ul1").animate({opacity: 1},150);
        $("#hidden_ul2").delay(170).animate({opacity: 1},100);
        $("#hidden_ul3").delay(320).animate({opacity: 1},100);
        $("#phoneGame").animate({ left: "30"},400);

        flag1=0;
    }else {
        $("#moreGame").css({"width":"30px","height":"95px","border-right-bottom-radius":"0","top":"166px","left":"-31px","padding-top":"7px","padding-left":"10px"});
        $("#moreGame").text("更多热门手游");

        $("#hidden_ul3").animate({opacity: 0},100);
        $("#hidden_ul2").delay(120).animate({opacity: 0},100);
        $("#hidden_ul1").delay(240).animate({opacity: 0},100);

        $("#phoneGame").animate({ left: "250"},400);

        flag1=1;
    }
});
$(window).scroll( function() {
    if($(window).scrollTop()>=55){
        $("#top_nav").addClass("fixed");
        $(".top_nav_erweima").eq(0).addClass("show");
        $(".gameLogo_Name").eq(0).addClass("gameLogo_Name_show");
    }else if(($(window).scrollTop()<=55)){
        $("#top_nav").removeClass("fixed");
        $(".top_nav_erweima").eq(0).removeClass("show");
        $(".gameLogo_Name").eq(0).css("transition","all 0.5s");
        $(".gameLogo_Name").eq(0).removeClass("gameLogo_Name_show");

    }
} );
//移入
$("#cosZone").mouseover(function(){
    clearTimeout(timroutB);
    if(way==1){
        $("#cosDown").css("opacity","1");
        $("#cosDown").css("z-index","2");
    }else {
        $("#cosDown").animate({opacity: 1},350);
        $("#cosDown").css("z-index","2");
        $("#offDown").animate({opacity: 0},350);
        $("#offDown").css("z-index","0");

        $("#offWay em").animate({opacity: 0},150);
    }
    $("#top_nav").addClass("bg_color");
    $(".top_nav_down").eq(0).addClass("downShow");
    $("#cosZone em").animate({opacity: 1},150);
    way=0;
});
$("#offWay").mouseover(function(){
    clearTimeout(timroutB);
    if(way==1){
        $("#offDown").css("opacity","1");
        $("#offDown").css("z-index","2");
    }else {
        $("#offDown").animate({opacity: 1},350);
        $("#offDown").css("z-index","2");
        $("#cosDown").animate({opacity: 0},350);
        $("#cosDown").css("z-index","0");

        $("#cosZone em").animate({opacity: 0},150);
    }
    $("#top_nav").addClass("bg_color");
    $(".top_nav_down").eq(0).addClass("downShow");
    $("#offWay em").animate({opacity: 1},150);
    way=0;
});
$("#cosZone").mouseout(function(){
    timroutB=setTimeout(function () {
        $("#top_nav").removeClass("bg_color");
        $("#cosZone em").animate({opacity: 0},150);
        $(".top_nav_down").eq(0).removeClass("downShow");
    }, 150);
});
$("#offWay").mouseout(function(){
    timroutB=setTimeout(function () {
        $("#top_nav").removeClass("bg_color");
        $("#offWay em").animate({opacity: 0},150);
        $(".top_nav_down").eq(0).removeClass("downShow");
    }, 150);

});
$("#top_nav_down").mouseover(function(){
    clearTimeout(timroutB);
});
$("#top_nav_down").mouseout(function(){
    timroutB=setTimeout(function () {
        $("#top_nav").removeClass("bg_color");
        $(".top_nav_down").eq(0).removeClass("downShow");
        $("#cosZone em").animate({opacity: 0},150);
        $("#offWay em").animate({opacity: 0},150);
    }, 300);
});
for(var j=0;j<4;j++){
    (function (j) {
        $(".picdiv").eq(j).hover(function(){
            $(".picdiv").eq(j).addClass("upAnm");
        },function(){
            $(".picdiv").eq(j).removeClass("upAnm");
        });
    })(j);
}
(function () {
    $(".con_slide").eq(0).addClass("role_active1");
    setTimeout(function () {
        $(".gameLogo_Name").eq(0).removeClass("gameLogo_Name_left");
    },800);
})();
var roleShow=1;
var role_flag;
function active() {
    if(roleShow){
        clearTimeout(role_flag);
        $(".con_slide").eq(0).addClass("role_active2");
        $(".con_slide").eq(0).removeClass("role_active1");
        role_flag=setTimeout(function () {
            $(".con_slide").eq(1).addClass("role_active1");
            $(".con_slide").eq(1).removeClass("role_active2");
        },1500);
        roleShow=0;
    }else {
        clearTimeout(role_flag);
        $(".con_slide").eq(1).addClass("role_active2");
        $(".con_slide").eq(1).removeClass("role_active1");
        role_flag=setTimeout(function () {
            $(".con_slide").eq(0).addClass("role_active1");
            $(".con_slide").eq(0).removeClass("role_active2");
        },1500);
        roleShow=1;
    }
}
$(".xXxX").eq(0).hover(function(){
    $(".xXxX").eq(0).addClass("rot");
},function(){
    $(".xXxX").eq(0).removeClass("rot");
});
$(".xXxX").eq(0).on('click',function () {
    $(".server_area").eq(0).addClass("toSmall");
});

$(".shantu").eq(0).on('click',function () {
    $(".server_area").eq(0).removeClass("toSmall");
});
var download_flag=1;
$(".closer_botten").eq(0).on('click',function () {
    $(".download_open").eq(0).hide();
    $(".download_close").eq(0).show();
    $(".download").eq(0).animate({marginLeft:"200px",width:"360px"},500);
});
$(".download_close_a").eq(0).on('click',function () {
    $(".download_close").eq(0).hide();
    $(".download_open").eq(0).show();
    $(".download").eq(0).animate({marginLeft:"-148px",width:"390px"},500);
});
























