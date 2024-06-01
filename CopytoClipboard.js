const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const repositoryRootPath = path.resolve(__dirname, '..');
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();