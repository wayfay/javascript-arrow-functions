const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const symbolsPath = path.join(buildOutputPath, 'symbols');
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const value = ( 5 < 7 ) ? "True" : "False" ;
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const minNumber = arr => Math.min(...arr);