import moment from 'moment';

function isValidTime(data) {

  return !!moment(data).isValid();

}


function getTimeFromNow(updatedAt) {

  if (!isValidTime(updatedAt)) return null;

  return moment().diff(moment(updatedAt));

}


export const checkUpdationTimePassed = (updatedAt, updationTimeLimit) => {
  if (!isValidTime(updatedAt)) return true;


  const timeDiff = getTimeFromNow(updatedAt);
  const duration = moment.duration(timeDiff).asMinutes();

  return duration > Number(updationTimeLimit);

};


export const getTimeLeftInWindow = (time, updationTimeLimit) => Number(updationTimeLimit) * 60 * 1000 - getTimeFromNow(time);