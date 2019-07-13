let balloonClicked = Array(5);
reset();
let breakSound = false;
let audio = document.getElementById('sound');
let balloons = 0;
let b_homedir = '..';
let b_width = 50;

function setHomedir(newhomedir){
  b_homedir = newhomedir;
}

function setWidth(newwidth){
  b_width = newwidth;
}

function prepare(num){
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

function buildBalloons(){
  for(let i = 0; i<balloonClicked.length; i++){
    let random = Math.floor( Math.random() * 3 );
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
    let html = '';
    html += '<img src=\"'+b_homedir+'/images/balloon/'+color+'/normal.png\" '
    html += 'width='+b_width+'px '
    html += 'onmouseover=\"if( !balloonClicked['+i+'] ) this.src=\''+b_homedir+'/images/balloon/'+color+'/tremble.gif\'\" '
    html += 'onmouseout=\"if( !balloonClicked['+i+'] ) this.src=\''+b_homedir+'/images/balloon/'+color+'/normal.png\'\" '
    html += 'onclick=\"this.src=\''+b_homedir+'/images/balloon/'+color+'/break.png\'; '
    html += '    if( !balloonClicked['+i+'] ) breakBalloon();'
    html += '    balloonClicked['+i+'] = true\"'
    html += 'style=\"cursor: crosshair\"; '
    html += 'class=\"balloon\">'
    document.write(html);
  }
}
