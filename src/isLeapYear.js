export const isLeapYear = (year) => {
  
  let isLeapYear = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
  return isLeapYear;


};
