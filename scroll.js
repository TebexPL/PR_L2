let button = document.getElementsByClassName("scroll")[0];

function goToUp(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function showUpButton(){
  if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)
    button.style.display = "block";
  else
    button.style.display = "none";
}

button.addEventListener('click', goToUp);
window.onscroll = function(){showUpButton()};
