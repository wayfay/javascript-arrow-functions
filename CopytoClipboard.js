const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
const timeFromDate = date => date.toTimeString().slice(0, 8);
console.log( "A" - "B" + 2);