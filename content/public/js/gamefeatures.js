/**
 * Created by Administrator on 2017/3/10.
 */
var shishemTit=0;
$(function () {
    onefage();
    twofage();
    threefage();
    fourfage();
    fivefage();

});

function onefage(){
    //第一模块
    for( var i=1;i<6;i++){
        (function(i){
            $(".header_top ul li").eq(i).hover(function(){
                $(this).find("em").css({
                    "visibility":"visible",
                    "-webkit-transition":"all 0.3s linear",
                    "-moz-transition":"all 0.3s linear",
                    "transition":"all 0.3s linear",
                    "opacity":"1"
                });
                $(this).find("span").css({
                    "-webkit-transition": "all 0.3s linear",
                    "-moz-transition": "all 0.3s linear",
                    "transition": "all 0.3s linear",
                    "margin-right":"20px"
                });
            },function(){
                $(this).find("em").css({
                    "visibility":"hidden",
                    "-webkit-transition":"all 0.3s linear",
                    "-moz-transition":"all 0.3s linear",
                    "transition":"all 0.3s linear",
                    "opacity":"0"
                });
                $(this).find("span").css({
                    "-webkit-transition": "all 0.3s linear",
                    "-moz-transition": "all 0.3s linear",
                    "transition": "all 0.3s linear",
                    "margin-right":"38px"
                });
            })
        })(i);
    }



    $(".qq").hover(function(){
        $(".gf_qq").css("display","block");
    },function(){
        $(".gf_qq").css("display","none");
    });
    $(".wx").hover(function(){
        $(".gf_wx").css("display","block");
    },function(){
        $(".gf_wx").css("display","none");
    });



    $(".one_body .door1").css({
        "-webkit-transform":"translate(0,0)",
        "-moz-transform":"translate(0,0)",
        "transform":"translate(0,0)"
    });
    $(".one_body .door2").css({
        "-webkit-transform":"translate(0,0)",
        "-moz-transform":"translate(0,0)",
        "transform":"translate(0,0)"
    });
    //延时器
    setTimeout(function(){
        $(".one_body .person").css({
            "-webkit-transition":"all 0.5s linear",
            "-moz-transition":"all 0.5s linear",
            "transition":"all 0.5s linear",
            "opacity":"1"
        });

        $(".one_body .cloud1").css("background","url('../../public/images/game_features/cloud1_6dc33a8.png') -60px 0px no-repeat");
        $(".one_body .flowers1").css("background","url('../../public/images/game_features/flower_8fc3d9f.png') -160px 25px no-repeat");
        $(".one_body .flowers2").css("background","url('../../public/images/game_features/flower_move_6b91c7a.png') 30px 160px no-repeat");
        $(".one_body .logo").css("background","url('../../public/images/game_features/logo_1df3473.png') no-repeat");

        setTimeout(function(){
            $(".tu_pian").css({
                "-webkit-transition":"all 0.5s linear",
                "-moz-transition":"all 0.5s linear",
                "transition":"all 0.5s linear",
                "opacity":"1"
            });
            $(".download").css({
                "-webkit-transition":"all 0.5s linear",
                "-moz-transition":"all 0.5s linear",
                "transition":"all 0.5s linear",
                "opacity":"1"
            });
        },300)
    },1200);
}

function twofage(){
    //第二模块
     var jqtitle=1;
     $(".span_world").on("mouseover",function(){
         $(".span_world").css("opacity","1");
     }).on("mouseout",function(){
         if(jqtitle!=1){
             $(".span_world").css("opacity","0");
         }
     }).on("click",function(){
         jqtitle=1;
         $(".jq_1").css("display","block");
         $(".jq_2").css("display","none");
         $(".jq_3").css("display","none");
         $(".span_world").css("opacity","1");
         $(".span_zj").css("opacity","0");
         $(".span_wtj").css("opacity","0");
     });
     $(".span_zj").on("mouseover",function(){
         $(".span_zj").css("opacity","1");
     }).on("mouseout",function(){
         if(jqtitle!=2){
             $(".span_zj").css("opacity","0");
         }
     }).on("click",function(){
         jqtitle=2;
         $(".jq_1").css("display","none");
         $(".jq_2").css("display","block");
         $(".jq_3").css("display","none");
         $(".span_zj").css("opacity","1");
         $(".span_world").css("opacity","0");
         $(".span_wtj").css("opacity","0");
     });

     $(".span_wtj").on("mouseover",function(){
         $(".span_wtj").css("opacity","1");
     }).on("mouseout",function(){
         if(jqtitle!=3){
             $(".span_wtj").css("opacity","0");
         }
     }).on("click",function(){
         jqtitle=3;
         $(".jq_1").css("display","none");
         $(".jq_2").css("display","none");
         $(".jq_3").css("display","block");
         $(".span_wtj").css("opacity","1");
         $(".span_zj").css("opacity","0");
         $(".span_world").css("opacity","0");
     });


     $(".tit_zj").on("click",function(){
         $(".tit_zj").addClass("active_zj");
         $(".zj").css("display","block");
         $(".shishen").css("display","none");
         $(".tit_shishen").removeClass("active_zj");
     });
     $(".tit_shishen").on("click",function(){
         $(".tit_shishen").addClass("active_zj");
         $(".shishen").css("display","block");
         $(".zj").css("display","none");
         $(".tit_zj").removeClass("active_zj");
     });

    for(var i=0;i<4;i++){
        (function(i){
            $(".zj_con").eq(i).hover(function(){
                $(".zj_text").eq(i).css("display","block");
            },function(){
                $(".zj_text").eq(i).css("display","none");
            })
        })(i);
    }

    $(".shishem_tit_span1").on("click",function(){
        shishemTit--;
        if(shishemTit<0){
            shishemTit=7;
        }
        $(".shishen_ul").css({left:-shishemTit*290+"px"});
        $(".shishem_tit_ul li").removeClass("shishem_tit_show");
        $(".shishem_tit_ul li").eq(shishemTit).addClass("shishem_tit_show");
    });
    $(".shishem_tit_span2").on("click",function(){
        shishemTit++;
        if(shishemTit>7){
            shishemTit=0;
        }
        $(".shishen_ul").css({left:-shishemTit*290+"px"});
        $(".shishem_tit_ul li").removeClass("shishem_tit_show");
        $(".shishem_tit_ul li").eq(shishemTit).addClass("shishem_tit_show");
    });

}

function show(id){
    shishemTit=id-1;
    $(".shishen_ul").css({left:-(id-1)*290+"px"});
    $(".shishem_tit_ul li").removeClass("shishem_tit_show");
    $(".shishem_tit_ul li").eq((id-1)).addClass("shishem_tit_show");

}

function threefage(){
    var jqtitle=1;
    $(".span_jietu").on("mouseover",function(){
        $(".span_jietu").css("opacity","1");
    }).on("mouseout",function(){
        if(jqtitle!=1){
            $(".span_jietu").css("opacity","0");
        }
    }).on("click",function(){
        jqtitle=1;
        $(".meishu_1").css("display","block");
        $(".meishu_2").css("display","none");
        $(".meishu_3").css("display","none");
        $(".span_jietu").css("opacity","1");
        $(".span_yuanhua").css("opacity","0");
        $(".span_tongren").css("opacity","0");
    });
    $(".span_yuanhua").on("mouseover",function(){
        $(".span_yuanhua").css("opacity","1");
    }).on("mouseout",function(){
        if(jqtitle!=2){
            $(".span_yuanhua").css("opacity","0");
        }
    }).on("click",function(){
        jqtitle=2;
        $(".meishu_1").css("display","none");
        $(".meishu_2").css("display","block");
        $(".meishu_3").css("display","none");
        $(".span_yuanhua").css("opacity","1");
        $(".span_jietu").css("opacity","0");
        $(".span_tongren").css("opacity","0");
    });

    $(".span_tongren").on("mouseover",function(){
        $(".span_tongren").css("opacity","1");
    }).on("mouseout",function(){
        if(jqtitle!=3){
            $(".span_tongren").css("opacity","0");
        }
    }).on("click",function(){
        jqtitle=3;
        $(".meishu_1").css("display","none");
        $(".meishu_2").css("display","none");
        $(".meishu_3").css("display","block");
        $(".span_tongren").css("opacity","1");
        $(".span_yuanhua").css("opacity","0");
        $(".span_jietu").css("opacity","0");
    });


    var jietuTit=0;
    $(".jietu_tit_next").on("click",function(){
        jietuTit++;
        if(jietuTit>5){
            jietuTit=0;
        }
        $(".jietu_tit_ul").css("left",-jietuTit*74+"px");
    });
    $(".jietu_tit_prev").on("click",function(){
        jietuTit--;
        if(jietuTit<0){
            jietuTit=5;
        }
        $(".jietu_tit_ul").css("left",-jietuTit*74+"px");
    });

    var yuanhuaTit=0;
    $(".yuanhua_tit_next").on("click",function(){
        yuanhuaTit++;
        if(yuanhuaTit>1){
            yuanhuaTit=0;
        }
        $(".yuanhua_tit_ul").css("left",-yuanhuaTit*74+"px");
    });
    $(".yuanhua_tit_prev").on("click",function(){
        yuanhuaTit--;
        if(yuanhuaTit<0){
            yuanhuaTit=1;
        }
        $(".yuanhua_tit_ul").css("left",-yuanhuaTit*74+"px");
    });



    for(var i=0;i<10;i++){
        (function(i){
            $(".jietu_tit_ul li").eq(i).on("click",function(){
                $(".jietu_pic_img").css("background","url('../../public/images/game_features/ms0"+(i+1)+"s.jpg') no-repeat");
                $(".jietu_tit_ul li img").removeClass("jietu_tit_show");
                $(".jietu_tit_ul li img").eq(i).addClass("jietu_tit_show");
            });
        })(i);
    }

    var yhActive=1;
    for(var j=0;j<6;j++){
        (function(j){
            $(".yuanhua_tit_ul li a").eq(j).on("click",function(){
                $(".yuanhua_box_img").css("background","url('../../public/images/game_features/2"+(j+1)+".png') no-repeat");
                $(".yuanhua_tit_ul li b").removeClass("yuanhua_b"+yhActive+"_active");
                $(".yuanhua_tit_ul li b").eq(j).addClass("yuanhua_b"+(j+1)+"_active");
                $(".yuanhua_tit_ul li span").removeClass("yuanhua_span_active");
                $(".yuanhua_tit_ul li span").eq(j).addClass("yuanhua_span_active");
                yhActive=j+1;
            });
            $(".yuanhua_tit_ul li a").eq(j).hover(function(){
                $(".yuanhua_tit_ul li span").eq(j).addClass("yuanhua_span_active");
            },function(){
                if( yhActive!=(j+1) ){
                    $(".yuanhua_tit_ul li span").eq(j).removeClass("yuanhua_span_active");
                }
            });

        })(j)
    }


    var juli=-250;
    var timerLeft;
    var timerRight;
    $(".yuanhua_left").hover(function(){
        clearInterval(timerRight);
        timerLeft=window.setInterval(function(){
            juli+=5;
            if(juli>=0){
                juli=0;
                $(".yuanhua_box_img").css("left",juli+"px");
            }else {
                $(".yuanhua_box_img").css("left",juli+"px");
            }
        },150);
    },function(){
        clearInterval(timerLeft);
    });
    $(".yuanhua_right").hover(function(){
        clearInterval(timerLeft);
        timerRight=window.setInterval(function(){
            juli-=5;
            if(juli<=-460){
                juli=-460;
                $(".yuanhua_box_img").css("left",juli+"px");
            }else {
                $(".yuanhua_box_img").css("left",juli+"px");
            }
        },150);
    },function(){
        clearInterval(timerRight);
    });



    $(".tr_cos").on("click",function(){
        $(".tr_cos").addClass("active_zj");
        $(".cosplay").css("display","block");
        $(".trhui").css("display","none");
        $(".tr_trhui").removeClass("active_zj");
    });
    $(".tr_trhui").on("click",function(){
        $(".tr_trhui").addClass("active_zj");
        $(".trhui").css("display","block");
        $(".cosplay").css("display","none");
        $(".tr_cos").removeClass("active_zj");
    });


    for(var k=1;k<25;k++){
        (function(k){
            $(".cos"+k+"").hover(function(){
                $(this).find(".cos_hover").css("opacity","1")
            },function(){
                $(this).find(".cos_hover").css("opacity","0")
            });
        })(k)
    }


}



function fourfage(){
    var jqtitle=1;
    $(".span_shengyou").on("mouseover",function(){
        $(".span_shengyou").css("opacity","1");
    }).on("mouseout",function(){
        if(jqtitle!=1){
            $(".span_shengyou").css("opacity","0");
        }
    }).on("click",function(){
        jqtitle=1;
        $(".yinyue_1").show();
        $(".yinyue_2").hide();
        $(".yinyue_3").hide();
        $(".span_shengyou").css("opacity","1");
        $(".span_zhenrong").css("opacity","0");
        $(".span_peiyue").css("opacity","0");
    });
    $(".span_zhenrong").on("mouseover",function(){
        $(".span_zhenrong").css("opacity","1");
    }).on("mouseout",function(){
        if(jqtitle!=2){
            $(".span_zhenrong").css("opacity","0");
        }
    }).on("click",function(){
        jqtitle=2;
        $(".yinyue_1").hide();
        $(".yinyue_2").show();
        $(".yinyue_3").hide();
        $(".span_zhenrong").css("opacity","1");
        $(".span_shengyou").css("opacity","0");
        $(".span_peiyue").css("opacity","0");
    });

    $(".span_peiyue").on("mouseover",function(){
        $(".span_peiyue").css("opacity","1");
    }).on("mouseout",function(){
        if(jqtitle!=3){
            $(".span_peiyue").css("opacity","0");
        }
    }).on("click",function(){
        jqtitle=3;
        $(".yinyue_1").hide();
        $(".yinyue_2").hide();
        $(".yinyue_3").show();
        $(".span_peiyue").css("opacity","1");
        $(".span_zhenrong").css("opacity","0");
        $(".span_shengyou").css("opacity","0");
    });

    $(".yinyue1_zj").on("click",function(){
        $(".yinyue1_zj").addClass("active_zj");
        $(".yinyue_zj").show();
        $(".yinyue_shishen").hide();
        $(".yinyue1_shishen").removeClass("active_zj");
    });
    $(".yinyue1_shishen").on("click",function(){
        $(".yinyue1_shishen").addClass("active_zj");
        $(".yinyue_shishen").show();
        $(".yinyue_zj").hide();
        $(".yinyue1_zj").removeClass("active_zj");
    });

    $(".yy_shishen_span1").on("click",function(){
        yyshishen--;
        if(yyshishen<1){
            yyshishen=2;
        }
        $(".yy_shishen_con").css({left:-yyshishen*290+"px"});
        $(".yy_ul li").removeClass("shishem_tit_show");
        $(".yy_ul li").eq(yyshishen).addClass("shishem_tit_show");
    })
    $(".yy_shishen_span2").on("click",function(){
        yyshishen++;
        if(yyshishen>2){
            yyshishen=0;
        }
        $(".yy_shishen_con").css({left:-yyshishen*290+"px"});
        $(".yy_ul li").removeClass("shishem_tit_show");
        $(".yy_ul li").eq(yyshishen).addClass("shishem_tit_show");
    })

}

var yyshishen=0;
function yyshow(id){
    yyshishen=id-1;
    $(".yy_shishen_con").css({left:-(id-1)*290+"px"});
    $(".yy_ul li").removeClass("shishem_tit_show");
    $(".yy_ul li").eq((id-1)).addClass("shishem_tit_show");
}


function fivefage(){
    var jqtitle=1;
    $(".span_wanfa").on("mouseover",function(){
        $(".span_wanfa").css("opacity","1");
    }).on("mouseout",function(){
        if(jqtitle!=1){
            $(".span_wanfa").css("opacity","0");
        }
    }).on("click",function(){
        jqtitle=1;
        $(".wanfa_1").css("display","block");
        $(".wanfa_2").css("display","none");
        $(".wanfa_3").css("display","none");
        $(".span_wanfa").css("opacity","1");
        $(".span_tansuo").css("opacity","0");
        $(".span_zhinan").css("opacity","0");
    });
    $(".span_tansuo").on("mouseover",function(){
        $(".span_tansuo").css("opacity","1");
    }).on("mouseout",function(){
        if(jqtitle!=2){
            $(".span_tansuo").css("opacity","0");
        }
    }).on("click",function(){
        jqtitle=2;
        $(".wanfa_1").css("display","none");
        $(".wanfa_2").css("display","block");
        $(".wanfa_3").css("display","none");
        $(".span_tansuo").css("opacity","1");
        $(".span_wanfa").css("opacity","0");
        $(".span_zhinan").css("opacity","0");
    });

    $(".span_zhinan").on("mouseover",function(){
        $(".span_zhinan").css("opacity","1");
    }).on("mouseout",function(){
        if(jqtitle!=3){
            $(".span_zhinan").css("opacity","0");
        }
    }).on("click",function(){
        jqtitle=3;
        $(".wanfa_1").css("display","none");
        $(".wanfa_2").css("display","none");
        $(".wanfa_3").css("display","block");
        $(".span_zhinan").css("opacity","1");
        $(".span_tansuo").css("opacity","0");
        $(".span_wanfa").css("opacity","0");
    });

    var btnEm=2;
    var jpgcon={
        0:"dm",
        1:"bgyx",
        2:"LBS",
        3:"dj",
        4:"sssj",
        5:"ssfb"
    };
    $(".wf_1 em").each(function(index){
        //console.log(this);
        $(".wf_1 em").eq(index).hover(function(){
            console.log(this);
            $(this).addClass("wf_em_show");
            $(".wf_1_btn").eq(index).addClass("wf_btm_show");
        },function(){
            if(btnEm!=index){
                $(this).removeClass("wf_em_show");
                $(".wf_1_btn").eq(index).removeClass("wf_btm_show");
            }
        });
        $(".wf_1 em").eq(index).on("click",function(){
            //console.log(jpgcon[index]);
            btnEm=index;
            $(".wf_1 em").removeClass("wf_em_show");
            $(".wf_1_btn").removeClass("wf_btm_show");
            $(this).addClass("wf_em_show");
            $(".wf_1_btn").eq(index).addClass("wf_btm_show");
            $(".wf_1_content").css("background","url('../../public/images/game_features/"+jpgcon[index]+".jpg') 3px 3px no-repeat");
        })
    });

    $(".fb_map p").each(function(i){
        $(".fb_map a").eq(i).hover(function(){
            $(".fb_map p").eq(i).show();
        },function(){
            $(".fb_map p").eq(i).hide();
        });
    });

    $(".xs_box a").each(function(i){
        $(".xs_box a").eq(i).on("click",function(){
            $(".xs_box").hide();
            $(".xs_box_pic").find("img").attr("src","../../public/images/game_features/"+(i+1)+".jpg");
            $(".xs_box_pic").find("p").hide();
            $(".xs_box_pic").find("p").eq(i).show();
            $(".xs_box_pic").show();
        })
    });

    $(".xs_box_pic").find("span").on("click",function(){
        $(".xs_box_pic").hide();
        $(".xs_box").show();
    })
}