import { createDayCard } from '../../atoms/day-card/DayCard';

export default function renderWeeksAtHeader(dayOfStart) {
  const weeks = document.querySelector('#weeks');

  weeks.insertAdjacentElement('beforeend', createDayCard(dayOfStart, true));
  for (let i = 1; i < 60; i += 1) {
    const day = dayOfStart.add(i, 'day');
    const dayCard = createDayCard(day);
    // TODO: implement this function
    dayCard.addEventListener('click', () => {
    });
    weeks.insertAdjacentElement('beforeend', dayCard);
  }

  const weeksElements = [...document.querySelector('#weeks').children];

  weeksElements.forEach((child, _, children) => {
    child.addEventListener('click', () => {
      children.forEach((element) => element.removeAttribute('active'));
      child.setAttribute('active', '');
    });
  });
}
