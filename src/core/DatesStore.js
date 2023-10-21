import dayjs from 'dayjs/esm';
import schedule from '../../configuration/schedule';
import getLastNumberInSeries from '../shared/core/getLastNumberInSeriesRepeatedBySeperator';
import { setCurrentMonth, setNumberOfWeek } from '../ui/molecules/header-date';
import renderLessons from '../ui/ogranisms/lessons/renderLessons';

export default class DatesStore {
  static referencePointOfWeeks = dayjs(schedule.firstWeek);

  static #selectedDay = dayjs();

  static get selectedDay() {
    return DatesStore.#selectedDay;
  }

  static set selectedDay(day) {
    DatesStore.#selectedDay = day;
    const currentWeek = getLastNumberInSeries(day.diff(DatesStore.referencePointOfWeeks, 'w'), 2);
    const numberOfWeek = day.day();
    setCurrentMonth(day);
    setNumberOfWeek(currentWeek);
    renderLessons(numberOfWeek, currentWeek);
  }
}
