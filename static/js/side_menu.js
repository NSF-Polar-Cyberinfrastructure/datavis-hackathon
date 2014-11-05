$(document).ready(function(){
  
  // NAVIGATION MENU
  
  // menu icon states, opening main nav
  $('#menu-icon').click(function(){
    $(this).toggleClass('open');
    $('#menu,#menu-toggle,#page-content,#menu-overlay').toggleClass('open');
    $('#menu li,.submenu-toggle').removeClass('open');
  });
  
  // clicking on overlay closes menu
  $('#menu-overlay').click(function(){
    $('*').removeClass('open');
  });
  
  // add child menu toggles and parent class
  $('#menu li').has('ul').addClass('parent').prepend('<div class="submenu-toggle">open</div>');
  
  // toggle child menus
  $('.submenu-toggle').click(function(){
    var currentToggle=$(this);
    currentToggle.parent().toggleClass('open');
    currentToggle.toggleClass('open');
  });
});
