const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEmptyObject = obj => Object.keys(obj).length === 0;
const randomString = () => Math.random().toString(36).slice(2);