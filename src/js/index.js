const body = document.querySelector('body');
const checkbox = document.getElementById('input');
checkbox.checked = true;

checkbox.addEventListener('change', function() {
  if (this.checked) {
    checkbox.setAttribute('checked', 'false');
    body.setAttribute('data-theme', 'light');
  } else {
    checkbox.setAttribute('checked', 'true');
    body.setAttribute('data-theme', 'dark');
  }
});
