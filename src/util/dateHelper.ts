
import * as moment from "moment";

export const formatDate = (miliseconds: string): string => {
    // tslint:disable-next-line:radix
    const date = moment.unix(parseInt(miliseconds)).format("hh:mm:ss")
    return date;
  }
  