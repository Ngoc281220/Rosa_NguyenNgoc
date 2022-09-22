jQuery(function($){
    click_mobile();
    click_hide();
    show_headerIcon();  
    get_height();
  
})



function click_mobile(){
    $(".menu-icon").click(function(){
       $(".hd-nav-table").fadeIn();
       $(".menu-close").show();
    })
   
}

function click_hide(){
    $(".menu-close").click(function(){
        $(".hd-nav-table").fadeOut();
        $(".menu-close").hide();
        
    })
   
}



function show_headerIcon(){
    $(".header-icon h5").click(function(){
        $(".header-icon ul").toggle(300);
    })
}

// function hide_headerIcon(){
//     $("body").click(function(){
//         $(".header-icon ul").hide();
//     })
// }
 function get_height(){

   
    var wheigth =$(window).height();
    var heightheader = $("#header").height();
    var heightfooter = $("#footer").height();
    var sumHeader = heightheader + heightfooter;
     var sum = wheigth - sumHeader ;
    //  $(".checkour-ens").css("height",sum);
    //  console.log("header",heightheader);
    //  console.log("footer",heightfooter);
    
   
 }

