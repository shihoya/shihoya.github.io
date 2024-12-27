// fetch("/include/heads.html")
//     .then((response) => response.text())
//     .then((data) => document.querySelector("#include_head").insertAdjacentHTML('afterbegin', data));
var content = '<meta http-equiv="Content-type" content="text/html;charset=UTF-8">' +
'<link rel="stylesheet" type="text/css" href="/css/neat.css">' +
'<link rel="stylesheet" type="text/css" href="/css/custom.css" />' +
'<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
'<meta charset="UTF-8" />' +
'<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />' +
'<script type="text/javascript" src="https://code.jquery.com/jquery-3.7.1.min.js"></script>' +
'<script type="text/javascript" src="/js/main.js"></script>' +
'<meta name="fediverse:creator" content="@ARTi@mstdn.shihoya.tokyo" />' +
'<meta property="og:site_name" content="home.shihoya.tokyo" />' +
'<meta name="theme-color" media="(prefers-color-scheme: light)" content="#59ADC4">' +
'<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#6AC4DC">' +
'<meta name="robots" content="noindex" />' +
'<meta property="og:type" content="website" />';
document.querySelector("#include_head").insertAdjacentHTML('afterbegin', content);