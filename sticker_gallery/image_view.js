let num = location.search.substring(1)-0;
const MAX = 80-0;
const prepreimg = fitInRange(num-2);
const preimg = fitInRange(num-1);
const nxtimg = fitInRange(num+1);
const nxtnxtimg = fitInRange(num+2);

function fitInRange(i){
  if(i<0){
    return MAX+i;
  }else if(i>=MAX){
    return i-MAX;
  }else{
    return i;
  }
}
// alert(prepreimg+" "+preimg+" "+num+" "+nxtimg+" "+nxtnxtimg);

function imageView(){
  let html = "";
  html += '  <div id=\"contents\" style=\"text-align: center; width: 100%\">'
  html += '      <img src=\"large_icons/'+num+'.png\" style=\"height:25em\">'
  html += '  </div>'
  document.write(html);
}

function controlPane(){
  let html = "";
  html += '  <div id=\"prevAndNext\" style=\"text-align: center; padding-top: 10px; width: 100%;\">'
  html += '      <a href=\"image_viewer.html?'+preimg+'\" class=\"prevAndNextButton\" style=\"margin-right:0.5em;\">Prev.</a>'
  html += '      <a href=\"image_viewer.html?'+prepreimg+'\"><img src=\"images/'+prepreimg+'.png\" class=\"imgButton\"></a>'
  html += '      <a href=\"image_viewer.html?'+preimg+'\"><img src=\"images/'+preimg+'.png\" class=\"imgButton\"></a>'
  html += '      <img src=\"images/'+num+'.png\" class=\"imgButton\">'
  html += '      <a href=\"image_viewer.html?'+nxtimg+'\"><img src=\"images/'+nxtimg+'.png\" class=\"imgButton\"></a>'
  html += '      <a href=\"image_viewer.html?'+nxtnxtimg+'\"><img src=\"images/'+nxtnxtimg+'.png\" class=\"imgButton\"></a>'
  html += '      <a href=\"image_viewer.html?'+nxtimg+'\" class=\"prevAndNextButton\" style=\"margin-left:0.5em;\">Next</a><br>'
  html += '      <a href=\"index.html\" class=\"prevAndNextButton\" style=\"width:90%; margin-top:10px;\">一覧に戻る</a>'
  html += '  </div>'
  document.write(html);
}
