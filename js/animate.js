var title= $('#title');
var tcontainer = $('#tcontainer');
var nav= $('#nav');
function setup(){
    $(title).velocity({translateY:500},{duration:400, easing:"ease-in-out"});
    $(title).velocity({opacity:1});
    $(nav).velocity({ width: 80 },{duration:600, easing:"ease-in-out-back"});
}

window.addEventListener("load",setup,false);