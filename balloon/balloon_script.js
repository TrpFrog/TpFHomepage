let balloonClicked = Array(5);
reset();
let breakSound = false;
let urlParameter = location.search;
if (urlParameter === "?enable_breaking_sound") {
    breakSound = true;
}
let audio = document.getElementById('sound');
let balloons = 0;
let b_homedir = 'https://trpfrog.net';
let b_width = 50;

function buildSoundButton() {
    let html;
    if (breakSound) {
        html = '<a href=\"' + b_homedir + '/balloon/index.html\" class=\"linkButton\">音を消す</a>';
    } else {
        html = '<a href=\"' + b_homedir + '/balloon/index.html?enable_breaking_sound\" class=\"linkButton\">音を鳴らす</a>';
    }
    document.getElementById('title').innerHTML += html;
}

function setWidth(newwidth) {
    b_width = newwidth;
}

function prepare(num) {
    balloons = num;
    balloonClicked = Array(balloons);
    reset();
}

function reset() {
    for (let i = 0; i < balloonClicked.length; i++) {
        balloonClicked[i] = false;
    }
}

function breakBalloon() {
    if (breakSound) {
        audio.load();
        audio.play();
    }
}

function buildBalloons() {
    let balloon_area = document.getElementById('balloon_area');
    let balloon_color = ['orange', 'green', 'blue'];
    
    for (let i = 0; i < balloonClicked.length; i++) {
        let random = Math.floor(Math.random() * 3);
        let color = balloon_color[random];

        let balloon = document.createElement('img');
        balloon.setAttribute('class', 'balloon');

        balloon.src          = b_homedir + '/images/balloon/' + color + '/normal.png';
        balloon.style.width  = b_width + 'px';
        balloon.style.cursor = 'crosshair';

        balloon.addEventListener('mouseover', function() {
            if(!balloonClicked[i]) {
                this.src = b_homedir + '/images/balloon/' + color + '/tremble.gif';
            }
        });

        balloon.addEventListener('mouseout', function () {
            if (!balloonClicked[i]) {
                this.src = b_homedir + '/images/balloon/' + color + '/normal.png';
            }
        });

        balloon.addEventListener('click', function () {
            this.src = b_homedir + '/images/balloon/' + color + '/break.png';
            if (!balloonClicked[i]) {
                breakBalloon();
                incrementStatNumber(BALLOON_BROKENS, false);
            }
            balloonClicked[i] = true;
        });

        balloon_area.appendChild(balloon);
    }
}

function buildTopBalloons(preparedBaloons) {
    let previousColorIndex = 0;
    let colorHistory = [];
    let isCompleted = true;
    let html = '';
    for (let i = 0; i < balloonClicked.length; i++) {
        let random = Math.floor(Math.random() * 3);
        
        if(i === 0){
            previousColorIndex = random;
        }else{
            if(previousColorIndex !== random) isCompleted = false;
        }
        colorHistory.push(random);

        let color = "orange";
        switch (random) {
            case 0:
                color = "orange";
                break;
            case 1:
                color = "blue";
                break;
            case 2:
                color = "green";
                break;
            default:
        }
        html += `
            <img src="/images/balloon/${color}/normal.png"
                alt="${color} balloon" 
                width="${Math.floor(100 / preparedBaloons) - 0.5}%" 
                onmouseover="
                    if( !balloonClicked[${i}] ) this.src = '/images/balloon/${color}/tremble.gif';
                " 
                onmouseout="
                    if( !balloonClicked[${i}] ) this.src='/images/balloon/${color}/normal.png'
                " 
                onclick="this.src='/images/balloon/${color}/break.png';
                    if( !balloonClicked[${i}] ) {
                        breakBalloon();
                        incrementStatNumber(BALLOON_BROKENS);
                    }
                    balloonClicked[${i}] = true;
                "
                style="cursor: crosshair" 
                class="balloon">`;
    }
    if(isCompleted) {
        incrementStatNumber(BALLOON_COMPLETED);
    }

    let isPalindrome = true;
    for(let i = 0; i < preparedBaloons / 2; i++){
        if(colorHistory[i] !== colorHistory[preparedBaloons - 1 - i]) isPalindrome = false;
    }
    if (isPalindrome) {
        incrementStatNumber(BALLOON_SYMMETRY);
    }
    
    document.getElementById('balloon-area').innerHTML = html;
}

function regenerateTopBalloon() {
    prepare(7);
    buildTopBalloons(7);
}
