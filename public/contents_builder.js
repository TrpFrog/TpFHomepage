let headElement = document.getElementsByTagName('head')[0];

document.addEventListener("DOMContentLoaded", function () {
    fontLoader();
    buildHeader();
    buildWideNavigationBar();
    buildHamburger();
    buildFooter();
    buildBackToTopButton();
    setFavicon();
});

function setFavicon() {
    let html = `
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
        <link rel="manifest" href="/favicon/site.webmanifest">
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#90e200">
        <link rel="shortcut icon" href="/favicon/favicon.ico">
        <meta name="msapplication-TileColor" content="#90e200">
        <meta name="msapplication-config" content="/favicon/browserconfig.xml">
        <meta name="theme-color" content="#66a928">
    `;
    headElement.insertAdjacentHTML('beforeend', html);
}

function fontLoader() {
    WebFontConfig = {
        google: {
            families: ['Comfortaa', 'M+PLUS+Rounded+1c:400,800', 'Questrial', 'Noto+Sans+JP:400,700', 'Noto+Sans+Mono']
        },
        custom: {
            families: ['Font Awesome\ 5 Icons:400,900', 'Font Awesome\ 5 Brands:400'],
            urls: ['https://use.fontawesome.com/releases/v5.6.4/css/all.css']
        },
        active: function() {
            sessionStorage.fonts = true;
        }
    };
      
    (function(d) {
        var wf = d.createElement('script'), s = d.scripts[0];
        wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
        wf.async = true;
        s.parentNode.insertBefore(wf, s);
    })(document);
}

function search_tweet() {
    let input_word = document.getElementById("tweet_search_box").value;
    input_word = encodeURIComponent(input_word);
    window.location.href = "https://twilog.org/TrpFrog/search?word=" + input_word;
}

function getNavLinks() {
    return `
        <a href="/index.html"><div class="sidemenu_link">Home</div></a>
        <a href="/notes/index.html"><div class="sidemenu_link">Notes</div></a>
        <a href="/icon_gallery/index.html"><div class="sidemenu_link">Icon</div></a>
        <a href="/sticker_gallery/index.html"><div class="sidemenu_link">Sticker</div></a>
        <a href="/balloon/index.html"><div class="sidemenu_link">Balloon</div></a>
        <a href="/download/index.html"><div class="sidemenu_link">Download</div></a>
        <a href="/iconmaker/index.html"><div class="sidemenu_link">Icon Maker</div></a>
        <a href="/environment/index.html"><div class="sidemenu_link">Environment</div></a>
        <a href="/walking/index.html"><div class="sidemenu_link">Walking</div></a>
    `;
}

function buildHamburger() {
    let html = `
        <section id="mobile_menu">
            <aside id="menu_background" onclick="toggleSideMenu();"></aside>
            <aside id="side_menu">
                <div id="side_header"></div>
                <div id="side_links">
                    ${getNavLinks()}
                </div>
            </aside>
        </section>
    `;
    document.getElementsByTagName('body')[0].insertAdjacentHTML('afterbegin', html);
}

function buildWideNavigationBar() {
    let html = `
        <nav id="wide_nav">
            <div id="wide_nav_wrapper">
                `+ getNavLinks() +`
            </div>
        </nav>
    `;
    document.getElementsByTagName('header')[0].insertAdjacentHTML('afterend', html);
}

function buildHeader() {
    let html = `
        <div id="header_wrapper">
                <h1><a href="/">つまみネット</a></h1>
                <div id="tweet_search">
                    <form onsubmit="search_tweet();return false;">
                        <input type="text" placeholder="過去ツイサーチ" id="tweet_search_box">
                        <input type="submit" value="検索" class="twibutton">
                    </form>
                </div>
                <nav>
                    <ul>
                        <li><a href="/index.html" class="headerButton">home</a></li>
                        <li><a href="/notes/index.html" class="headerButton">notes</a></li>
                        <li><a href="https://trpfrog.hateblo.jp" class="headerButton">blog</a></li>
                    </ul>
                </nav>
                <div id="hamburger_menu" onclick="toggleSideMenu();">
                    <a class="menu-trigger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
            </div>
    `;
    document.getElementsByTagName('header')[0]
        .insertAdjacentHTML('afterbegin', html);
}

function buildFooter() {
    let html = `
        <div id="footer_wrapper">
            <p id="copyright">
                ©︎ 2019-2021 つまみ
            </p>
            <p id="share">
                <a href="https://trpfrog.net/legal" style="color: white">Legal</a>
                <a href="`+ getTwitterUrl() + `"><img src="https://trpfrog.net/images/socialicons/twitter.svg" height="45" class="shareButton" alt="Share with Twitter"></a>
                <a href="`+ getFacebookUrl() + `"><img src="https://trpfrog.net/images/socialicons/facebook.svg" height="45" class="shareButton" alt="Share with Facebook"></a>
                <a href="`+ getLineUrl() + `"><img src="https://trpfrog.net/images/socialicons/line.svg" height="45" class="shareButton" alt="Share with LINE"></a>
            </p>
        </div>
    `;
    document.getElementsByTagName('footer')[0]
        .insertAdjacentHTML('beforeend', html);
}

function buildBackToTopButton() {
    let html = `
        <div id="page_top"><a href="#"></a></div>
    `;
    document.getElementsByTagName('body')[0].insertAdjacentHTML('afterbegin', html);
}

let isSideMenuOpened = false;
function toggleSideMenu(){
    if(isSideMenuOpened){
        hideMenu();
    }else{
        showMenu();
    }
    isSideMenuOpened = !isSideMenuOpened;
}

function showMenu() {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    document.getElementById('menu_background').style.visibility = 'visible';
    document.getElementById('menu_background').style.opacity = 0;
    document.getElementById('menu_background').style.opacity = 0.7;


    document.getElementById('side_menu').style.right = '0';

    let btn = document.getElementsByClassName('menu-trigger')[0].children;
    
    let style = `
        top: 0;
        width: 43%;
        -webkit-transform: translate3d(1.5px, 3.6px, 0) rotate(45deg);
        transform: translate3d(1.5px, 3.6px, 0) rotate(45deg);
    `;
    btn[0].setAttribute('style', style);

    style = `
        top: 10px;
        width: 105%;
        -webkit-transform: translate3d(-1px, 0, 0) rotate(-45deg);
        transform: translate3d(-1px, 0, 0) rotate(-45deg);
    `;
    btn[1].setAttribute('style', style);

    style = `
        bottom: 0;
        width: 43%;
        -webkit-transform: translate3d(14px, -3.5px, 0) rotate(45deg);
        transform: translate3d(14px, -3.5px, 0) rotate(45deg);
    `;
    btn[2].setAttribute('style', style);

}

function hideMenu() {
    document.getElementsByTagName('body')[0].style.overflow = 'visible';
    document.getElementById('menu_background').style.visibility = 'hidden';
    document.getElementById('side_menu').style.right = '-260px';

    let btn = document.getElementsByClassName('menu-trigger')[0].children;

    let style = 'top: 0;';
    btn[0].setAttribute('style', style);

    style = 'top: 10px;';
    btn[1].setAttribute('style', style);

    style = 'bottom: 0;';
    btn[2].setAttribute('style', style);
}

function getTwitterUrl() {
    let url = "https://twitter.com/intent/tweet?";
    url += "text=" + encodeURIComponent(document.title) + "&";
    url += "url=" + location.href;
    return url;
}

function getFacebookUrl() {
    let url = "https://www.facebook.com/sharer/sharer.php?u=";
    url += location.href;
    return url;
}

function getLineUrl() {
    let url = "https://social-plugins.line.me/lineit/share?url=";
    url += location.href;
    return url;
}

let isSupportedLocalStorage;
function initIsSupportedLocalStorage() {
    isSupportedLocalStorage = storageAvailable('localStorage');
}

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        let x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}