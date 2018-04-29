import * as moment from 'moment';

export const formatDate = (miliseconds: string): string => {
    const date = moment.unix(parseInt(miliseconds)).format("hh:mm:ss")
    return date;
  }
  