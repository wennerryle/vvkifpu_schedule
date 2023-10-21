/**
 * Set day at header
 * @param {dayjs.Dayjs} dayJSObject
 */

export function setCurrentMonth(dayJSObject) {
  const monthWithYearHeader = document.querySelector('#month_with_year');
  monthWithYearHeader.textContent = dayJSObject.format('MMMM, YYYY');
}

/**
 * Set the number of week at header
 * @param {number} currentWeek
 */
export function setNumberOfWeek(currentWeek) {
  const isFirstWeekHeader = document.querySelector('#is_first_week');

  isFirstWeekHeader.textContent = ['Первая неделя', 'Вторая неделя'][currentWeek - 1]
        ?? `${currentWeek} неделя`;
}
