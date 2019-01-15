var title= $('#title');
var id=$('id');
var tcontainer = $('#tcontainer');
$tcontainer.css('background','blue');
function setup(){
var i = 0;
var txt = 'Lorem ipsum dummy text bla bla.';
var speed = 50;
  if (i < txt.length) {
    $id.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
    $title.velocity({translateY:-100},{duration:400,easing:"ease-in-out"});
    $title.velocity({opacity:1});
}

window.addEventListener("load",setup,false);