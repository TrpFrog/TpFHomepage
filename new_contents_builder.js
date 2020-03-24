

function fontLoader() {
    let html = `
        <link href="https://fonts.googleapis.com/css?family=Comfortaa|M+PLUS+Rounded+1c:400,800|Questrial|Noto+Sans+JP&display=swap&subset=japanese" rel="stylesheet">
    `;
    document.write(html);
}

function search_tweet(){
    let input_word = document.getElementById("tweet_search_box").value;
    input_word = encodeURIComponent(input_word);
    window.location.href = "https://twilog.org/TrpFrog/search?word=" + input_word;
}

function buildHeader() {
    let html = `
        <div id="header_wrapper">
            <h1>つまみネット</h1>
            <div id="tweet_search">
                <form onsubmit="search_tweet();return false;">
                    <input type="text" placeholder="過去ツイサーチ" id="tweet_search_box">
                    <input type="submit" value="検索" class="twibutton">
                </form>
            </div>
            <nav>
                <ul>
                    <li><a href="index.html" class="headerButton">home</a></li>
                    <li><a href="icon_gallery/index.html" class="headerButton">icons</a></li>
                    <li><a href="download/index.html" class="headerButton">works</a></li>
                </ul>
            </nav>
        </div>
    `;
    document.write(html);
}

function buildFooter() {
    let html = `
        <div id="footer_wrapper">
            <p id="copyright">
                ©︎ 2019 つまみ
            </p>
            <p id="share">
                <a href="`+getTwitterUrl()+`"><img src="images/socialicons/twitter.svg" height="45" class="shareButton" alt="Share with Twitter"></a>
                <a href="`+getFacebookUrl()+`"><img src="images/socialicons/facebook.svg" height="45" class="shareButton" alt="Share with Facebook"></a>
                <a href="`+getLineUrl()+`"><img src="images/socialicons/line.svg" height="45" class="shareButton" alt="Share with LINE"></a>
            </p>
        </div>
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
