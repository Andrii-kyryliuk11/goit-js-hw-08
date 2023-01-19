import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {});

let savedTime;

const localStorageObj = localStorage.getItem('videoplayer-current-time');
function getSavedTime() {
  if (localStorageObj) {
    savedTime = JSON.parse(
      localStorage.getItem('videoplayer-current-time')
    ).seconds;
  }
}

getSavedTime();

player
  .setCurrentTime(savedTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
const onPlay = function (data) {
  const stringifySavedTime = JSON.stringify(data);

  localStorage.setItem('videoplayer-current-time', stringifySavedTime);

  console.log(stringifySavedTime);
};

player.on('timeupdate', throttle(onPlay, 100));
