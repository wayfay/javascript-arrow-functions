const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const symbolsPath = path.join(buildOutputPath, 'symbols');
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');