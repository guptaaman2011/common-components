const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dayNames = [ "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const addZero = data => data.padStart(2, '0');

export const getDate = timestamp => {
    const dateObj = new Date(timestamp);
    const date = addZero(`${dateObj.getDate()}`);
    const month = monthNames[dateObj.getMonth()];
    const year = `${dateObj.getFullYear()}`;
    const day = dayNames[dateObj.getDay()]
    const formattedDate = `${day.substring(0, 3)} ${date}-${month}-${year}`;
    // const formattedDate = `${date}-${month}-${year}`;
    return formattedDate;
};

export const getDay = timestamp => {
    const dateObj = new Date(timestamp);
    const day = dayNames[dateObj.getDay()]
    return day;
};

export const getTime = timestamp => {
    const dateObj = new Date(timestamp);
    let amPM = 'am';
    let hours = dateObj.getHours();
    if (hours > 12) {
        hours = hours - 12;
        amPM = 'pm';
    }
    // hours = addZero(`${hours}`)
    const minutes = addZero(`${dateObj.getMinutes()}`);
    const formattedTime = `${hours}:${minutes} ${amPM}`;
    return formattedTime;
}

export const getTimeStamp = date => {
    const dateObj = new Date(date);
    const utcSeconds = (dateObj.getTime());
    return utcSeconds;
}

export const getTimeSince = function (date) {
    if (typeof date !== 'object') {
        date = new Date(date);
    }

    const seconds = Math.floor((new Date() - date) / 1000);
    let intervalType;

    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
        intervalType = 'year';
    } else {
        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
            intervalType = 'month';
        } else {
            interval = Math.floor(seconds / 86400);
            if (interval >= 1) {
                intervalType = 'day';
            } else {
                interval = Math.floor(seconds / 3600);
                if (interval >= 1) {
                    intervalType = "hour";
                } else {
                    interval = Math.floor(seconds / 60);
                    if (interval >= 1) {
                        intervalType = "minute";
                    } else {
                        interval = seconds;
                        intervalType = "second";
                    }
                }
            }
        }
    }

    if (interval > 1 || interval === 0) {
        intervalType += 's';
    }

    if(interval < 0) {
        interval = 0;
    }

    return interval + ' ' + intervalType + ' ago';
};

export const getDayIfSevenDaysOld = ( createdAt ) => {
    let commentDate = new Date(createdAt)
    let date = getDate(createdAt);
    let today = new Date();
    let sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 7);

    if(commentDate > sevenDaysAgo) {
        if (date === getDate(today)) {
            date = "Today";
        }
        else if (date === getDate(today.setDate(today.getDate()-1))) {
            date = "Yesterday";
        } else {
            date = getDay(createdAt);
        }
    }

    return date;
}