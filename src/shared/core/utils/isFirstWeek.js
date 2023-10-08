import * as dayjs from "dayjs";
import schedule from "../../../../configuration/schedule.json";

/**
 * Returns true if today is first week. The new week begins on Sunday.
 * @returns {boolean}
 */
export default function () {
  const firstWeek = dayjs(new Date(schedule.firstWeek));
  const today = dayjs();

  return today.diff(firstWeek, "day") % 7 === 0;
}
