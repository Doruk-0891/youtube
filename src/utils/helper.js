export function viewsLikesConvertor (number) {
    const strNumber = number.toString();
    let range = 1;
    let rangeStr = '';
    if (strNumber.length >= 10) {
       range = 1000000000;
       rangeStr = 'B';
    } else if (strNumber.length >= 7) {
        range = 1000000;
        rangeStr = 'M';
    } else if (strNumber.length >= 4) {
        range = 1000;
        rangeStr = 'K';
    }
    return (number / range).toFixed(1) + rangeStr;
}

export function getPublishedTime(utcDate) {
    const seconds = (new Date().getTime() - new Date(utcDate).getTime())/ 1000;
    if (seconds < 60) {
        return Math.trunc(seconds)+'seconds ago';
    } else if (seconds < 3600) {
        return Math.trunc(seconds/ 60) + 'minute(s) ago';
    } else if (seconds < 86400) {
        return Math.trunc(seconds/ 3600) + 'hour(s) ago';
    } else if (seconds < 2592000) {
        return Math.trunc(seconds/ 86400) + 'day(s) ago';
    } else if (seconds < 31104000) {
        return Math.trunc(seconds/ 2592000) + 'month(s) ago';
    } else if (seconds >= 31104000) {
        return Math.trunc(seconds / 31104000) + 'year(s) ago';
    } else {
        return '';
    }

}