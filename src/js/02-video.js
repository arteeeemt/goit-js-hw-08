import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
let throttle = require('lodash.throttle');

console.log(Player)
console.log(throttle)

const iframe = document.getElementById('vimeo-player');


const player = new Player(iframe);

const saveCurrentTime = (time) => {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
};


const loadCurrentTime = () => {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    return savedTime ? JSON.parse(savedTime) : 0;
};


const updateCurrentTime = throttle((currentTime) => {
    saveCurrentTime(currentTime);
}, 1000); 


player.on('timeupdate', (event) => {
    const currentTime = event.seconds;
    updateCurrentTime(currentTime);
});


player.ready().then(() => {
    const currentTime = loadCurrentTime();
    player.setCurrentTime(currentTime);
});

