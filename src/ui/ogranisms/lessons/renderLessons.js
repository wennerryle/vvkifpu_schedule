// @ts-check

import dayjs from "dayjs/esm";
import getScheduleOrNull from "../../../core/getScheduleOrNull";
import LessonCard from "../../molecules/LessonCard.js";
import callSchedule from "../../../../configuration/call_schedule.json";
import { createNoLessonsCard } from "../../molecules/NoLessonsCard";

/**
 * Render lessons
 * @param {dayjs.Dayjs} selectedDay A Day.js object
 * @param {number} currentWeek
 */
export default function renderLessons(selectedDay, currentWeek) {
  const numberOfDay = selectedDay.day();
  const lessons = getScheduleOrNull(numberOfDay, currentWeek);

  /** @type HTMLDivElement */
  // @ts-ignore
  const main = document.querySelector("main");

  main.innerHTML = "";

  if (lessons === null) {
    main.insertAdjacentElement("afterbegin", createNoLessonsCard());
    return;
  }

  if (Array.isArray(lessons)) {
    lessons.forEach((lesson, index) => {
      if (lesson === null) return;
      const [startTime, endTime] = callSchedule[index + 1];
      const [nameOfLesson, cabinet, note] = lesson.split("|");
      const lessonCard = LessonCard.from(
        startTime,
        endTime,
        nameOfLesson,
        cabinet,
        note
      );
      main.insertAdjacentElement("beforeend", lessonCard);
    });

    return;
  }

  const [startHours, startMinutes] = lessons.customTime.split(":");

  const customLessons = lessons.lessons;

  const firstLessonStart = dayjs(selectedDay)
    .hour(Number(startHours))
    .minute(Number(startMinutes))
    .second(0);

  /** @type {dayjs.Dayjs} */
  let lastLessonEnd = firstLessonStart;

  customLessons.forEach((lessonItem) => {
    const [lessonName, cabinet, note] = lessonItem.split("|");
    const lessonStart = lastLessonEnd;

    lastLessonEnd = lessonStart.add(60 + 35, "m");

    const lessonCard = LessonCard.from(
      lessonStart.format("HH:mm"),
      lastLessonEnd.format("HH:mm"),
      lessonName,
      cabinet,
      note
    );

    main.insertAdjacentElement("beforeend", lessonCard);

    lastLessonEnd = lastLessonEnd.add(10, "m");
  });
}
