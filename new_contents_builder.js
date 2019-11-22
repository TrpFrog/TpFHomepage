function fontLoader() {
    let html = "";
    html = `
        <link href="https://fonts.googleapis.com/css?family=Comfortaa|M+PLUS+Rounded+1c:400,800|Questrial|Noto+Sans+JP&display=swap&subset=japanese" rel="stylesheet">
    `;
    document.write(html);
}

function buildHeader() {
    let html = "";
    html = `
        <h1>つまみネット</h1>
        <nav>
            <ul>
                <li><a href="index.html" class="headerButton">home</a></li>
                <li><a href="index.html" class="headerButton">icons</a></li>
                <li><a href="index.html" class="headerButton">works</a></li>
            </ul>
        </nav>
    `;
    document.write(html);
}

function buildFooter() {
    let html = "";
    //`+url+`
    html = `
        <p id="copyright">
            ©︎ 2019 つまみ
        </p>
        <p id="share">
            <a href="`+getTwitterUrl()+`"><img src="images/socialicons/twitter.svg" height="45" class="shareButton"></a>
            <a href="`+getFacebookUrl()+`"><img src="images/socialicons/facebook.svg" height="45" class="shareButton"></a>
            <a href="`+getLineUrl()+`"><img src="images/socialicons/line.svg" height="45" class="shareButton"></a>
        </p>
    `;
    document.write(html);
}

function getTwitterUrl(){
    let url = "https://twitter.com/intent/tweet?";
    url += "text="+document.title+"&";
    url += "url="+location.href;
    return url;
}

function getFacebookUrl(){
    let url = "https://www.facebook.com/sharer/sharer.php?u=";
    url += location.href;
    return url;
}

function getLineUrl(){
    let url = "https://social-plugins.line.me/lineit/share?url=";
    url += location.href;
    return url;
}
