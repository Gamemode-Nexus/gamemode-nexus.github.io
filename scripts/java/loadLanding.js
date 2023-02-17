const landing = document.querySelector('.landing');
fetch('../../modules/landing.html')
  .then(res => res.text())
  .then(data => {
    landing.innerHTML = data;
    console.log('landing loaded');
  });