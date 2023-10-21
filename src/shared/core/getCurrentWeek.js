import dayjs from 'dayjs/esm';
import getLastNumberInSeries from './getLastNumberInSeriesRepeatedBySeperator';
import schedule from '../../../configuration/schedule.json';

/**
 * Get a current week by schedule.
 * @param {dayjs.Dayjs} dayjsObject
 * @returns {number}
 */
export default function getCurrentWeek(dayjsObject) {
  const referencePointOfWeeks = dayjs(schedule.firstWeek);
  return getLastNumberInSeries(dayjsObject.diff(referencePointOfWeeks, 'w'), schedule.weeks.length);
}
