import schedule from '../../configuration/schedule';

/**
 * Get schedule for selected day.
 * @param {number} numberOfWeek
 * @param {number} currentWeek
 * @returns {(string[] | {customTime: string, lessons: string[]}) | null}
 */
export default function getScheduleOrNull(numberOfWeek, currentWeek) {
  return schedule.weeks[currentWeek - 1][numberOfWeek];
}
