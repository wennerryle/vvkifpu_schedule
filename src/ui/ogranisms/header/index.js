import { createDayCard } from '../../atoms/day-card/DayCard';
import DatesStore from '../../../core/DatesStore';

const weeks = document.querySelector('#weeks');
const loadMoreButton = document.querySelector('#load_more');

export default function renderWeeksAtHeader(dayOfStart) {
  const firstDayCard = createDayCard(dayOfStart, true);
  firstDayCard.addEventListener('click', () => {
    DatesStore.selectedDay = dayOfStart;
  });
  weeks.insertBefore(firstDayCard, loadMoreButton);
  for (let i = 1; i < 60; i += 1) {
    const day = dayOfStart.add(i, 'day');
    const dayCard = createDayCard(day);
    dayCard.addEventListener('click', () => {
      DatesStore.selectedDay = day;
    });
    weeks.insertBefore(dayCard, loadMoreButton);
  }

  const weeksElements = [...document.querySelector('#weeks').children];
  let [currentSelectedWeekElement] = weeksElements;
  weeksElements.forEach((weekElement) => {
    weekElement.addEventListener('click', () => {
      currentSelectedWeekElement?.removeAttribute('active');
      currentSelectedWeekElement = weekElement;
      weekElement.setAttribute('active', '');
    });
  });
}
