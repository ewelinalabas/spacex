//unix timestamp convertion
export const convertTimestamp = (timestamp) => {
  const months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const date = new Date(timestamp * 1000);
  const year = date.getFullYear();
  const month = months_arr[date.getMonth()];
  const day = date.getDate();
  const hour = date.getHours();
  const minutes = "0" + date.getMinutes();
  const convertedDate = day + "-"  + month + "-" + year + " " + hour + ":" + minutes.substr(-2) + " UTC";

  return convertedDate
};