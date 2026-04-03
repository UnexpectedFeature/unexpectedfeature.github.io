document.addEventListener('DOMContentLoaded', function() {
  var icon = document.querySelector('#nav .icon a');
  var nav = document.querySelector('#nav ul');
  icon.addEventListener('click', function(e) {
    e.preventDefault();
    nav.classList.toggle('mobile-open');
  });
});
