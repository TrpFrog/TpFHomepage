let MAX = 29;

function setMax(num){
  MAX = num-0;
}

function imageList(){
  let html = "";
  html += '  <div style=\"padding: 30px;text-align: center\">';
  for(let i=0; i<MAX; i++){
    html += '   <a href=\"image_viewer.html?'+i+'\"><img src=\"images/'+i+'.png\" height=\"100px\"></a>';
  }
  html += '  </div>'
  document.write(html);
}
