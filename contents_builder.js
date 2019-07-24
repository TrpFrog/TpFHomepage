let homedir = "https://www.trpfrog.net/";
// let homedir = ".";

function setFavicon(){
  let html = "";
  html += '<link rel="apple-touch-icon" sizes="180x180" href="'+homedir+'/favicon/apple-touch-icon.png">';
  html += '<link rel="icon" type="image/png" sizes="32x32" href="'+homedir+'/favicon/favicon-32x32.png">';
  html += '<link rel="icon" type="image/png" sizes="16x16" href="'+homedir+'/favicon/favicon-16x16.png">';
  html += '<link rel="manifest" href="'+homedir+'/favicon/site.webmanifest">';
  html += '<link rel="mask-icon" href="'+homedir+'/favicon/safari-pinned-tab.svg" color="#5bbad5">';
  html += '<link rel="shortcut icon" href="'+homedir+'/favicon/favicon.ico">';
  html += '<meta name="msapplication-TileColor" content="#da532c">';
  html += '<meta name="msapplication-config" content="/favicon/browserconfig.xml">';
  html += '<meta name="theme-color" content="#ffffff">';
  document.write(html);
}

function setTwitterCard(){
  let html = "";
  html += '<meta name="twitter:card" content="summary_large_image">';
  html += '<meta name="twitter:site" content="@TrpFrog">';
  html += '<meta property="og:url" content="https://www.trpfrog.net">';
  html += '<meta property="og:title" content="つまみさんのHP">';
  html += '<meta property="og:description" content="さかなになりたいね">';
  html += '<meta property="og:image" content="https://www.trpfrog.net/images/TwitterCard.png">';
  document.write(html);
}

function buildHeader(){
  let html = "";
  html += '<a href=\"'+homedir+'/index.html\" id=\"title\"><h1>TrpFrog\'s Homepage</h1></a>';
  //html += '<a href=\"'+homedir+'/index.html\" id=\"title\"><h1><img src=\"'+homedir+'/images/title.png\" height=100em></h1></a>';
  for(let i = 0 ; i<3; i++){
    html += '<img src=\"'+homedir+'/images/trpfrog.png\" height=\"50px\"';
    html += 'style=\"margin-bottom: 0px; margin-top: -15px;\"> ';
    html += '  <a href=\"'+homedir+'/index.html\" id=\"title\">';
  }
  if(homedir!="."){
    html += '    <img src=\"'+homedir+'/images/back_to_top.png\" height=\"60px\"';
    html += '  style=\"margin-bottom: 0px; margin-top: -15px; margin-left:-10px\"></a>';
    html += '  <br>';
  }
  document.write(html);
}

function buildNavigation(){
  let html = "";
  html += '<p>';
  html += '   <a href=\"'+homedir+'/index.html\" class=\"headerButton\">トップ</a>';
  html += '   <a href=\"'+homedir+'/balloon/index.html\" class=\"headerButton\">風船割り</a>';
  html += '   <a href=\"'+homedir+'/icon_gallery/index.html\" class=\"headerButton\">アイコン</a>';
  html += '   <a href=\"'+homedir+'/download/index.html\" class=\"headerButton\">壁紙</a>';
  html += '   <a href=\"https://github.com/TrpFrog/trpfrog.github.io/commits/master\" class=\"headerButton\">更新履歴</a>';
  html += '</p>'
  document.write(html);
}

function buildFooter() {
  let html = '© 2019 つまみ (<a href=\"https://twitter.com/TrpFrog\">@TrpFrog</a>)';
  html += '<br><br>';
  document.write(html);
}
