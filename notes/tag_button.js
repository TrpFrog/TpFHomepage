let lastTag = '';

function showAllTags() {
    let articles = document.getElementsByClassName("blog_window");
    for(w of articles) {
        w.style.display = "block";
    }
    let buttons = document.getElementsByClassName("tag_button");
    for(b of buttons) {
        b.style.backgroundColor = "#66a928";
    }
    lastTag = '';
}

function showCertainTag(tag) {
    let articles = document.getElementsByClassName("blog_window");
    for(w of articles) {
        w.style.display = "none";
    }
    let buttons = document.getElementsByClassName("tag_button");
    for(b of buttons) {
        b.style.backgroundColor = "rgb(184, 192, 170)";
    }

    let tag_articles = document.getElementsByClassName("tag_" + tag);
    for(w of tag_articles) {
        w.style.display = "block";
    }
    let btn = document.getElementsByClassName("tag_btn_" + tag)[0];
    btn.style.backgroundColor = "#66a928";

    lastTag = tag;
}

function showTag(tag) {
    if (lastTag == tag) {
        showAllTags();
    } else {
        showCertainTag(tag);
    }
}