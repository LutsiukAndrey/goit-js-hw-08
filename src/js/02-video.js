const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
import throttle from 'lodash.throttle';
const LOCAL_STOREGE = 'current_Time';
initPage();
function initPage() {
  const s = localStorage.getItem(LOCAL_STOREGE);
  if (s === null) {
    return;
  } else {
    player.setCurrentTime(s);
  }
}
const onPlay = function ({ seconds }) {
  console.log(seconds);
  localStorage.setItem(LOCAL_STOREGE, seconds);
  // data is an object containing properties specific to that event
};

player.on('timeupdate', throttle(onPlay, 3000));
