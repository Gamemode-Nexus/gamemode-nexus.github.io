const footer = document.querySelector('.footer');
fetch('../../modules/footer.html')
  .then(res => res.text())
  .then(data => {
    footer.innerHTML = data;
    console.log('footer loaded');
  });