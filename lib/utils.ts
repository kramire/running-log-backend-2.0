import dayjs, { Dayjs } from 'dayjs';

export const formatDateQuery = (defaultDate: Dayjs, queryParam?: string) => {
  if (queryParam) {
    return dayjs(queryParam).toDate();
  } else {
    return dayjs(defaultDate).toDate();
  }
};
