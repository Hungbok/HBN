readTextFile("/data/header_menu.json", function (text) {
    let data = JSON.parse(text);
    let pHtml = '<div class="header-section">' + $('.header-section').html() + '</div>';
    let nHtml = '';
    data.forEach(function (v, i) {
        let res = pHtml.replace("{count}", i + 1);
        res = res.replace("{header_class}", v.class);
        res = res.replace("{header_link}", v.link);
        res = res.replace("{header_menu}", v.menu);
        res = res.replace("{header_data_lang}", v.data_lang);
        nHtml += res;
    });
    $('.header').after(nHtml);
});
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}