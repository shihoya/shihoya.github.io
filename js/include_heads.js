fetch("/include/heads.html")
    .then((response) => response.text())
    .then((data) => document.querySelector("#include_head").insertAdjacentHTML('afterbegin', data));
