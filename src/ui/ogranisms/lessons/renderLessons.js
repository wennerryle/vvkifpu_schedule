import dayjs from 'dayjs/esm';
import getScheduleOrNull from '../../../core/getScheduleOrNull';
import { createLessonCard } from '../../molecules/lesson-card/LessonCard';
import callSchedule from '../../../../configuration/call_schedule.json';
import DatesStore from '../../../core/DatesStore';
import { createNoLessonsCard } from '../../molecules/no-lessons-card';

/**
 * Render lessons
 * @param {number} numberOfDay
 * @param {number} currentWeek
 */
export default function renderLessons(numberOfDay, currentWeek) {
  const lessons = getScheduleOrNull(numberOfDay, currentWeek);
  const main = document.querySelector('main');
  main.innerHTML = '';
  if (lessons === null) {
    main.insertAdjacentElement('afterbegin', createNoLessonsCard());
  } else if (Array.isArray(lessons)) {
    lessons.forEach((lesson, index) => {
      if (lesson === null) return;
      const [startTime, endTime] = callSchedule[index + 1];
      const [nameOfLesson, cabinet] = lesson.split('|');
      const lessonCard = createLessonCard(startTime, endTime, nameOfLesson, cabinet);
      main.insertAdjacentElement('beforeend', lessonCard);
    });
  } else {
    const startTime = lessons.customTime;
    const [startHour, startMinute] = startTime.split(':');

    const customLessons = lessons.lessons;
    let lastLessonEnd;
    for (let lesson = 1; lesson <= customLessons.length; lesson += 1) {
      const lessonItem = customLessons[lesson - 1];
      const [lessonName, cabinet] = lessonItem.split('|');

      let lessonStart = dayjs(DatesStore.selectedDay)
        .hour(startHour)
        .minute(startMinute)
        .second(0);

      if (lesson !== 1) lessonStart = lastLessonEnd;

      lastLessonEnd = lessonStart.add(60 + 35, 'm');
      const lessonCard = createLessonCard(
        String(lessonStart.format('HH:mm')),
        String(lastLessonEnd.format('HH:mm')),
        lessonName,
        cabinet,
      );
      main.insertAdjacentElement('beforeend', lessonCard);
      lastLessonEnd = lastLessonEnd.add(10, 'm');
    }
  }
}
