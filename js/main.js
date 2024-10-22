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

function include_footer(rootDir) {
	var footerString = '<footer>' +
		'<div id="footer" style="text-align: center;">' +
		'&copy; <a href="' + rootDir + 'index.html">home.shihoya.tokyo</a> 2022-2025 ' +
		'</div>' +
		'</footer>';
	document.write(footerString);
}

function header_with_date(datetime, rootDir) {
	var year = datetime.getFullYear();
	var month = datetime.getMonth() + 1;
	var day = datetime.getDate();
	var dayOfWeek = datetime.getDay();
	// var dayOfWeekStr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayOfWeek];
	var dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"][dayOfWeek];
	var dateString = year + '/' + month + '/' + day + ' (' + dayOfWeekStr + ')';

	var headerSource = '<header><a class="home" href="' + rootDir + 'index.html">&nwarr; HOME</a>' +
		'<div style = "text-align: right;">' +
		'<time datetime=' + datetime + '>' + dateString + '</time>' +
		'<br />' +
		'Mastodon: <a href="https://mstdn.shihoya.tokyo/@ARTi">@ARTi@mstdn.shihoya.tokyo</a>' +
		'</div>' +
		'</header>';
	document.write(headerSource);
}

// function helloWorld() {
// 	document.write("AAAAAA");
// }