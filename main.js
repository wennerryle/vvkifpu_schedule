import './src/shared/config';
import './style.css';
import './src/ui/atoms';
import './src/ui/molecules';

import dayjs from 'dayjs';

import isFirstWeek from './src/shared/core/isFirstWeek';
import { createDayCard } from './src/ui/atoms/day-card/ui/DayCard';

const monthWithYearHeader = document.querySelector('#month_with_year');
monthWithYearHeader.textContent = dayjs().format('MMMM, YYYY');

const isFirstWeekHeader = document.querySelector('#is_first_week');
isFirstWeekHeader.textContent = isFirstWeek()
  ? 'Первая неделя'
  : 'Вторая неделя';

const today = dayjs();
const weeks = document.querySelector('#weeks');

weeks.insertAdjacentElement('beforeend', createDayCard(today, true));
for (let i = 1; i < 60; i += 1) {
  const day = today.add(i, 'day');
  weeks.insertAdjacentElement('beforeend', createDayCard(day));
}

const weeksElements = [...document.querySelector('#weeks').children];

// const selectedDay = today.clone();

weeksElements.forEach((child, _, children) => {
  child.addEventListener('click', () => {
    children.forEach((element) => element.removeAttribute('active'));
    child.setAttribute('active', '');
  });

  child.addEventListener('onSelectedDay', (e) => console.log(e));
});
