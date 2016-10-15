
$(document).ready(function(){

  // ScrollTo Section

  $('#goto-home').click(function(){
    event.preventDefault();
    $.scrollTo('#coverpage', 800);
  });

  $('#goto-about').click(function(){
    event.preventDefault();
    $.scrollTo('#about-gek', 800);
  });

  $('#goto-portfolio').click(function(){
    event.preventDefault();
    $.scrollTo('.portfolio', 800);
  });

  $('#goto-hello').click(function(){
    event.preventDefault();
    $.scrollTo('#contactme', 800);
  });
});
