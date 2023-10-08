import * as dayjs from "dayjs";
import "./src/shared/config";
import "./style.css";
import "./src/ui/atoms";
import "./src/ui/molecules";

import { createDayCard } from "./src/ui/atoms/day-card/ui/DayCard";
import isFirstWeek from "./src/shared/core/isFirstWeek";

const monthWithYearHeader = document.getElementById("month_with_year");
monthWithYearHeader.textContent = dayjs().format("MMMM, YYYY");

const isFirstWeekHeader = document.getElementById("is_first_week");
isFirstWeekHeader.textContent = isFirstWeek()
  ? "Первая неделя"
  : "Вторая неделя";

const today = dayjs();
const weeks = document.getElementById("weeks");

weeks.insertAdjacentElement("beforeend", createDayCard(today, true));
for (let i = 1; i < 60; i++) {
  const day = today.add(i, "day");
  weeks.insertAdjacentElement("beforeend", createDayCard(day));
}

const weeksElements = [...document.getElementById("weeks").children];

let selectedDay = today.clone();

weeksElements.forEach((child, _, children) => {
  child.addEventListener("click", () => {
    children.forEach((child) => child.removeAttribute("active"));
    child.setAttribute("active", "");
  });

  child.addEventListener("onSelectedDay", (e) => console.log(e));
});
