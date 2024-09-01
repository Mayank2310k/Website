const scriptURL = 'https://script.google.com/macros/s/AKfycbx5FI0ITeVUnshTexxN5zy4H0LXO3Rz_77JmwjkUxWoc4HZI41xLtZjYd9rBHUUk9su/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Your form has been submitted successfully. You can expect to hear from us within the next 48 hours." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})