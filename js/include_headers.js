fetch("/include/header.html")
    .then((response) => response.text())
    .then((data) => document.querySelector("#include_header").innerHTML = data);
fetch("/include/footer.html")
    .then((response) => response.text())
    .then((data) => document.querySelector("#include_footer").innerHTML = data);