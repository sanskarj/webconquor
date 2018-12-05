$(document).ready(function(){
    
    $(".reg-button").click(function(){
        $(".popup-container").css("top","0");
        $(".popup-container").css("opacity","0");
        $(".popup").css("display","block");
        $(".popup-container").animate({
            opacity : "1",
            top:"50%"
        },500,"swing");
    });
    $(".arrow-2").click(function(){
        $(".popup-container").animate({
            opacity : "0",
            top: "0%"
        },500,"swing",function(){
            $(".popup").css("display","none");
            $(".popup-container").css({
                opacity:"1",
                top :"50%"
            });
        });
    });
    $(".submit-button").click(function(){
        $(".popup-container-1").css("top","0");
        $(".popup-container-1").css("opacity","0");
        $(".popup-1").css("display","block");
        $(".popup-container-1").animate({
            opacity : "1",
            top:"50%"
        },500,"swing");  
    });
    $(".arrow-3").click(function(){
        $(".popup-container-1").animate({
            opacity : "0",
            top: "0%"
        },500,"swing",function(){
            $(".popup-1").css("display","none");
            $(".popup-container-1").css({
                opacity:"1",
                top :"50%"
            });
        });
    });
    $(".details-button-ongoing").click(function(){
        $(".popup-container-2").css("top","0");
        $(".popup-container-2").css("opacity","0");
        $(".popup-2").css("display","block");
        $(".popup-container-2").animate({
            opacity : "1",
            top:"50%"
        },500,"swing");  
    });
    $(".arrow-4").click(function(){
        $(".popup-container-2").animate({
            opacity : "0",
            top: "0%"
        },500,"swing",function(){
            $(".popup-2").css("display","none");
            $(".popup-container-2").css({
                opacity:"1",
                top :"50%"
            });
        });
    });
    $(".details-button-upcomming").click(function(){
        $(".popup-container-3").css("top","0");
        $(".popup-container-3").css("opacity","0");
        $(".popup-3").css("display","block");
        $(".popup-container-3").animate({
            opacity : "1",
            top:"50%"
        },500,"swing");  
    });
    $(".arrow-5").click(function(){
        $(".popup-container-3").animate({
            opacity : "0",
            top: "0%"
        },500,"swing",function(){
            $(".popup-3").css("display","none");
            $(".popup-container-3").css({
                opacity:"1",
                top :"50%"
            });
        });
    });
    $(".details-button-past").click(function(){
        $(".popup-container-4").css("top","0");
        $(".popup-container-4").css("opacity","0");
        $(".popup-4").css("display","block");
        $(".popup-container-4").animate({
            opacity : "1",
            top:"50%"
        },500,"swing");  
    });
    $(".arrow-6").click(function(){
        $(".popup-container-4").animate({
            opacity : "0",
            top: "0%"
        },500,"swing",function(){
            $(".popup-4").css("display","none");
            $(".popup-container-4").css({
                opacity:"1",
                top :"50%"
            });
        });
    });
    

    
});