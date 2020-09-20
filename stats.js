const PROFILE_IMAGE_CLICKED = 'profileImageClicked';
const BALLOON_BROKENS = 'balloonBrokens';
const BALLOON_COMPLETED = 'balloonCompleted';
const BALLOON_SYMMETRY = 'balloonLineSymmetry';

function initStats() {
    if (!storageAvailable('localStorage'));
    let properties = [
        PROFILE_IMAGE_CLICKED,
        BALLOON_BROKENS,
        BALLOON_SYMMETRY,
        BALLOON_COMPLETED
    ];
    let isAllHidden = true;
    properties.forEach(e => {
        if (localStorage.getItem(e) == undefined) {
            localStorage.setItem(e, '0');
        }
        if (localStorage.getItem(e) == 0) {
            document.getElementById(e + '_wrapper').style.opacity = 0;
        } else {
            isAllHidden = false;
        }
    });
    if(!isAllHidden){
        document.getElementById('stats').style.opacity = 1;
    }
}

function incrementStatNumber(property, applyToppage = true) {
    let n = Number(localStorage.getItem(property)) + 1;
    localStorage.setItem(property, n);
    if(applyToppage) {
        if (n == 1) {
            document.getElementById('stats').style.opacity = 1;
            document.getElementById(property + '_wrapper').style.opacity = 1;
        }
        document.getElementById(property).innerHTML = String(n);
    }
}

function buildStatNumber(property) {
    let html = '<span style="font-size:2.8em; font-weight: bold;"';
    html += 'id="'+property+'">';
    if (localStorage.getItem(property) == undefined){
        html += '0</span>';
    }else{
        html += String(localStorage.getItem(property)) + '</span>';
    }
    document.getElementById(property + '_wrapper').insertAdjacentHTML('beforeend', html);
}