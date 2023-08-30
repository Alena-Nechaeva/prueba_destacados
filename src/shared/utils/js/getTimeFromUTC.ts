export function getTimeFromUTC(utcTime: number) {
  const apiTime: Date = new Date(utcTime * 1000);
  const today: Date = new Date();
  const difference: number = today.getTime() - apiTime.getTime();
  const hoursDifference: number = Math.floor(difference / (1000 * 360));
  const daysDifference: number = Math.floor(difference / (1000 * 360 * 24));

  if (hoursDifference < 23) {
    return hoursDifference === 1 ? `${hoursDifference} hour ago` : `${hoursDifference} hours ago`;
  }

  return daysDifference === 1 ? `${daysDifference} day ago` : `${daysDifference} days ago`;
}
