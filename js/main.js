// function header(rootDir) {
// 	$.ajax({
// 		url: rootDir + "include/header.html", // ディレクトリー変更
// 		cache: false,
// 		async: false,
// 		dataType: 'html',
// 		success: function (html) {
// 			html = html.replace(/\{\$root\}/g, rootDir);
// 			document.write(html);
// 		}
// 	});
// }

// function include_header(rootDir) {
// 	$.ajax({
// 		url: rootDir + 'include/header.html', // リクエストを送信するURLを指定
// 		async: false, // 非同期リクエストを無効にする
// 	}).done(function (header_html) { // 通信が成功したら
// 		header_html = header_html.replace(/\{root\}/g, rootDir); // header.htmlの文字列を置き換え

// 		document.write(header_html); // herder.htmlを表示する
// 	});
// }

// function include_footer(rootDir) {
// 	var footerString = '<footer>' +
// 		'<div id="footer" style="text-align: center;">' +
// 		'&copy; <a href="' + rootDir + 'index.html">home.shihoya.tokyo</a> 2022-2025 ' +
// 		'</div>' +
// 		'</footer>';
// 	document.write(footerString);
// }

function insert_timestamp(datetime) {
	var year = datetime.getFullYear();
	var month = datetime.getMonth() + 1;
	var day = datetime.getDate();
	var dayOfWeek = datetime.getDay();
	// var dayOfWeekStr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayOfWeek];
	var dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"][dayOfWeek];
	var dateString = year + '年' + month + '月' + day + '日 (' + dayOfWeekStr + ')';

	var headerSource = '<div style = "text-align: right;">' +
		'<time datetime=' + datetime + '>' + dateString + '</time>' +
		'</div>';
	document.write(headerSource);
}

function insert_header() {
	var header_data = '<header>' +
	'<div id="header_src">' +
	'<div class="readable_width">' +
	'<div class="header_content">' +
	'<a id="header_text" class="no_underline" href="/">' +
	'Shihoya\'s home' +
	'</a>' +
	'<a id="header_icon" href="https://mstdn.shihoya.tokyo/@ARTi">' +
	'<i class="fa-brands fa-mastodon" style="color: white;"></i>' +
	'</a>' +
	'</div>' +
	'</div>' +
	'</div>' +
	'</header>';
	document.write(header_data);
}

function insert_footer() {
	var footer_data = '<footer>' + 
	'<div id="footer_src" style="text-align: center;">' + 
	'&copy; <a href="/">home.shihoya.tokyo</a> 2022-2025' + 
	'</div>' + 
	'</footer>';
	document.write(footer_data);
}