export const convertToDateFormat = (num: number): string => {
  const dateFormat = new Date(num);
  const year = dateFormat.getFullYear() % 100;
  const month = (dateFormat.getMonth() + 1).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const date = dateFormat
    .getDate()
    .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
  const hours = dateFormat
    .getHours()
    .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
  const minutes = dateFormat
    .getMinutes()
    .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });

  return `${year}-${month}-${date} ${hours}:${minutes}`;
};
