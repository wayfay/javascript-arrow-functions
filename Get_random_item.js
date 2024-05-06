const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const timeFromDate = date => date.toTimeString().slice(0, 8);
const electronDownloadPath = path.join(repositoryRootPath, 'electron');