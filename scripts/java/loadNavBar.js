const navBar = document.querySelector('.navbar');
fetch('../../modules/navBar.html')
  .then(res => res.text())
  .then(data => {
    navBar.innerHTML = data;
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    eval(doc.querySelector('script').textContent);
    console.log('navbar loaded');
  });
