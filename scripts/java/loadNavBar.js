const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    const navbar = document.getElementsByClassName("navbar")[0];
    navbar.innerHTML = this.responseText;
    const scriptTags = navbar.getElementsByTagName("script");
    for (let i = 0; i < scriptTags.length; i++) {
      if (scriptTags[i].src) {
        const scriptTag = document.createElement("script");
        scriptTag.src = scriptTags[i].src;
        document.body.appendChild(scriptTag);
      } else {
        const scriptTag = document.createElement("script");
        scriptTag.innerHTML = scriptTags[i].innerHTML;
        document.body.appendChild(scriptTag);
      }
    }
  }
};
xhr.open("GET", "../modules/navbar.html", true);
xhr.send();
console.log('navbar loaded');
