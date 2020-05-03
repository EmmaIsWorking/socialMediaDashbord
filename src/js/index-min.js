const body = document.querySelector('body');
const checkbox = document.getElementById('input');
checkbox.checked = true;

checkbox.addEventListener('change', function() {
  if (this.checked) {
    this.checked = false;
    body.setAttribute('data-theme', 'light');
  } else {
    this.checked = true;
    body.setAttribute('data-theme', 'dark');
  }
});


