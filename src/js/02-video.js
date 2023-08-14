import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
let throttle = require('lodash.throttle');

console.log(Player)
console.log(throttle)

const iframe = document.getElementById('vimeo-player');

// Создаем экземпляр плеера
const player = new Player(iframe);

// Функция для сохранения времени воспроизведения в локальное хранилище
const saveCurrentTime = (time) => {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
};

// Функция для загрузки времени воспроизведения из локального хранилища
const loadCurrentTime = () => {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    return savedTime ? JSON.parse(savedTime) : 0;
};

// Функция для обновления времени воспроизведения
const updateCurrentTime = throttle((currentTime) => {
    saveCurrentTime(currentTime);
}, 1000); // Ограничиваем вызов функции не чаще чем раз в секунду

// Инициализируем плеер и восстанавливаем время воспроизведения
player.on('timeupdate', (event) => {
    const currentTime = event.seconds;
    updateCurrentTime(currentTime);
});

// Загружаем и восстанавливаем время воспроизведения при загрузке страницы
player.ready().then(() => {
    const currentTime = loadCurrentTime();
    player.setCurrentTime(currentTime);
});


