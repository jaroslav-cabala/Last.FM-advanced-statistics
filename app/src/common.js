export const getCurrentTimeString = () => {
  const date = new Date();
  return `${date.getHours()}h:${date.getMinutes()}m:${date.getSeconds()}s:${date.getMilliseconds()}`;
};

export const dump = (message) => console.log(message);
