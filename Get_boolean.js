const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const stringReverse = str => str.split("").reverse().join("");
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);