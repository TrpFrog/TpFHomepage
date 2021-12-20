let num = location.search.substring(1) - 0;
const MAX = 29 - 0;
const prepreimg = fitInRange(num - 2);
const preimg = fitInRange(num - 1);
const nxtimg = fitInRange(num + 1);
const nxtnxtimg = fitInRange(num + 2);

function fitInRange(i) {
    if (i < 0) {
        return MAX + i;
    } else if (i >= MAX) {
        return i - MAX;
    } else {
        return i;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    imageView();
    controlPane();
});

function imageView() {
    let html = "";
    //   html += '  <div id=\"contents\" style=\"text-align: center; width: 100%\">'
    html += '      <img src=\"large_icons/' + num + '.png\" style=\"height:40vh;\">'
    //   html += '  </div>'
    document.getElementById('image_viewer').insertAdjacentHTML('beforeend', html);
}

function controlPane() {
    let html = "";
    html += '  <div id=\"prevAndNext\" style=\"text-align: center; padding-top: 10px; width: 100%;\">'
    html += '      <a href=' + preimg + '\"image_viewer.html?\" class=\"prevAndNextButton\" style=\"margin-right:0.5em; width:10%;\">←</a>'
    html += '      <a href=' + prepreimg + '\"image_viewer.html?\"><img src=\"images/' + prepreimg + '.png\" class=\"imgButton wideimgbutton\"></a>'
    html += '      <a href=' + preimg + '\"image_viewer.html?\"><img src=\"images/' + preimg + '.png\" class=\"imgButton\"></a>'
    html += '      <img src=\"images/' + num + '.png\" class=\"imgButton\">'
    html += '      <a href=' + nxtimg + '\"image_viewer.html?\"><img src=\"images/' + nxtimg + '.png\" class=\"imgButton\"></a>'
    html += '      <a href=' + nxtnxtimg + '\"image_viewer.html?\"><img src=\"images/' + nxtnxtimg + '.png\" class=\"imgButton wideimgbutton\"></a>'
    html += '      <a href=' + nxtimg + '\"image_viewer.html?\" class=\"prevAndNextButton\" style=\"margin-left:0.5em;width:10%;\">→</a><br>'
    html += '      <a href=\"index.html\" class=\"prevAndNextButton\" style=\"width:90%; margin-top:10px;\">一覧に戻る</a>'
    html += '  </div>'
    document.getElementById('control_panel').insertAdjacentHTML('beforeend', html);
}
