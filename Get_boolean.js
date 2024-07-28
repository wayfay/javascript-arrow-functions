const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const buildOutputPath = path.join(repositoryRootPath, 'out');
const randomString = () => Math.random().toString(36).slice(2);