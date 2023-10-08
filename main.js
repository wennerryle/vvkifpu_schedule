import * as dayjs from "dayjs";
import "./src/shared/config";
import "./style.css";
import "./src/ui/atoms";
import { createDayCard } from "./src/ui/atoms/data-picker/ui/DayCard";
import isFirstWeek from "./src/shared/core/utils/isFirstWeek";

const monthWithYearHeader = document.getElementById("month_with_year");
monthWithYearHeader.textContent = dayjs().format("MMMM, YYYY");

const isFirstWeekHeader = document.getElementById("is_first_week");
isFirstWeekHeader.textContent = isFirstWeek()
  ? "Первая неделя"
  : "Вторая неделя";

const today = dayjs();
const weeks = document.getElementById("weeks");

for (let i = 0; i < 60; i++) {
  const day = today.add(i, "day");

  weeks.insertAdjacentElement(
    "beforeend",
    createDayCard(day.format("dd"), day.format("D"), i === 0 ? true : undefined)
  );
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
