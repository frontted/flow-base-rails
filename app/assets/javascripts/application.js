//= require jquery/dist/jquery.min.js
//= require popper.js/dist/umd/popper.js
//= require bootstrap/dist/js/bootstrap.min.js

//= require dom-factory/dist/dom-factory.js
//= require material-design-kit/dist/material-design-kit.js

$('[data-toggle="tooltip"]').tooltip({ container: 'body' });
$('[data-toggle="popover"]').popover();

$('.dropdown.notifications ul a.nav-link').click(function (e) {
  e.stopPropagation();
  $(this).tab('show');
});

// COLOR VARIABLES
window.colors = {
  color_warning: "#F5B666",
  color_success: "#7DC668",
  color_primary: "#6774DF",
  color_danger : "#ff7076",
  color_blue   : "#549DE3",
  color_bg     : "rgba(239,244,248,1)",
  border_color : "#E2E8EE",
  facebook     : '#3b5998',
  twitter      : '#00aced',
  instagram    : '#E4405F',
  dribbble     : '#EA4C89'
}


// Self Initialize DOM Factory Components
domFactory.handler.autoInit()

// Connect button(s) to drawer(s)
var sidebarToggle = Array.prototype.slice.call(document.querySelectorAll('[data-toggle="sidebar"]'))

sidebarToggle.forEach(function (toggle) {
  toggle.addEventListener('click', function (e) {
    var selector = e.currentTarget.getAttribute('data-target') || '#default-drawer'
    var drawer = document.querySelector(selector)
    if (drawer) {
      drawer.mdkDrawer.toggle()
    }
  })
})
