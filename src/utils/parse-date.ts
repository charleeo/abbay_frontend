export const parseDate = (dateString:string):string => {
  const dateObject = new Date(dateString);
  const day = dateObject.getDate();
  const year = dateObject.getFullYear()
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Get the month name
  const month = monthNames[dateObject.getMonth()];
  return `${day} of ${month}, ${year}`
//   return { day, month,year };
};