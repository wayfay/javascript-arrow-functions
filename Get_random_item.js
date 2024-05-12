const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const buildOutputPath = path.join(repositoryRootPath, 'out');