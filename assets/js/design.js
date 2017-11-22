//GLOBAL variables

var userLevelProgress = 90; //percent  //default
var userLevel = 0; //default
var userName = "Guest"; //default  

var gemsValue = "000 000 000"; //default  
var magicValue = "000 000 000"; //default  
var energyValue = 10; //default    
var chipsValue = "000 000 000"; //default 


//************************************************
  

(function ($) { 
    var i = 0;
    
    
    if ($(".main-slider").length) {
        $(document).ready(function () {
            $('.main-slider').slick({
                dots: false
                , arrows: true
                , infinite: true
                , speed: 300
                , slidesToShow: 4
                , slidesToScroll: 1
                , responsive: [
                    {
                        breakpoint: 1024
                        , settings: {
                            dots: false
                            , arrows: true
                            , slidesToShow: 3
                            , slidesToScroll: 1
                            , infinite: true
                        }
    }
            , {
                        dots: false
                        , arrows: true
                        , breakpoint: 600
                        , settings: {
                            slidesToShow: 2
                            , slidesToScroll: 1
                        }
    }
            , {
                        dots: false
                        , arrows: true
                        , breakpoint: 480
                        , settings: {
                            slidesToShow: 1
                            , slidesToScroll: 1
                        }
    }
  ]
            });
        });
    }
    
    $(".game-classic .btn-menu").click(function () {
        $(".game-classic .game-menu").toggleClass("open");
    });
    
    $(".shop-resources .shop-wrapper .btn").click(function () {
        $(this).closest(".shop-wrapper").toggleClass("active");
    });
    
    
    
    $(document).mouseup(function (e) {
        if ($(".game-classic .game-menu").has(e.target).length === 0 && $(".game-classic .btn-menu").has(e.target).length === 0) {
            $(".game-classic .game-menu").removeClass('open');
        }
    });
  
    $(document).ready(function () { 
        var energyPoint = '<div class="energy-part"></div>';
        
            $('.progress').css("width" , userLevelProgress  + "%");
            $('.user-name').text(userName);
            $('.user-level').text(userLevel);
            
            $('.source-placeholder.gems .value').text(gemsValue); 
            $('.source-placeholder.magic .value').text(magicValue); 
             
            $('.source-placeholder.chips .value').text(chipsValue);
         
        while (i < energyValue) {
            $('.source-placeholder.energy .value').append(energyPoint);
            i++;
        }
         
        
        
        
        }); 
    
    

})(jQuery);



