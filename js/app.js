var title= $('#title');
var tcontainer = $('#tcontainer');
var svg_zen=$('#svg_2');
$tcontainer.css('background','blue');
function setup(){
    $svg_zen.velocity(transition.expandin);
    $title.velocity({translateY:-100},{duration:400,easing:"ease-in-out"});
    $title.velocity({opacity:1});
}

var home_btn=$('#home-btn');
var about_btn=$('#about-btn');
var gallery_btn=$('#gallery-btn');
var use_btn=$('#use-btn');
var nav=$("#nav");
window.addEventListener("load",setup,false);

$nav.on("mousedown",function (){
    setTimeout(function(){
      $home_btn.velocity({display:block});
    },200);
    setTimeout(function(){
        $about_btn.velocity({display:block});
    },600);
    setTimeout(function(){
        $gallery_btn.velocity({display:block});
    },400);
    setTimeout(function(){
        $use_btn.velocity({display:block});
    },800);
}
 