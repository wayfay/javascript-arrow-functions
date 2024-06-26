const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const merge = Object.assign({}, obj1, obj2);
const reversedString = str => str.split('').reverse().join('');