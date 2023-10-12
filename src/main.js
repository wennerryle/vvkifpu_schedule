import dayjs from 'dayjs/esm';
import './shared/config';
import '../style.css';
import './ui/atoms';
import './ui/molecules';
import getLastNumberInSeriesRepeatedBySeperator from './shared/core/getLastNumberInSeriesRepeatedBySeperator';
import { firstWeek } from '../configuration/schedule.json';
import { createDayCard } from './ui/atoms/day-card/DayCard';
import getScheduleByDate from './shared/core/getScheduleByDate';

const monthWithYearHeader = document.querySelector('#month_with_year');
monthWithYearHeader.textContent = dayjs().format('MMMM, YYYY');

const isFirstWeekHeader = document.querySelector('#is_first_week');

const today = dayjs();
const startDay = dayjs(firstWeek);
const currentWeekNumber = getLastNumberInSeriesRepeatedBySeperator(today.diff(startDay, 'w'), 2);

isFirstWeekHeader.textContent = ['Первая неделя', 'Вторая неделя'][currentWeekNumber - 1]
?? `${currentWeekNumber} неделя`;

const weeks = document.querySelector('#weeks');

weeks.insertAdjacentElement('beforeend', createDayCard(today, true));
for (let i = 1; i < 60; i += 1) {
  const day = today.add(i, 'day');
  weeks.insertAdjacentElement('beforeend', createDayCard(day));
}

const weeksElements = [...document.querySelector('#weeks').children];

weeksElements.forEach((child, _, children) => {
  child.addEventListener('click', () => {
    children.forEach((element) => element.removeAttribute('active'));
    child.setAttribute('active', '');
  });

  child.addEventListener('onSelectedDay', (element) => {
    // TODO: implement this function
    getScheduleByDate(element.day);
  });
});
