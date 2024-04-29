const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const isEmptyObject = obj => Object.keys(obj).length === 0;
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};