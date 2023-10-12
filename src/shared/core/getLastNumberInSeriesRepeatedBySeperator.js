/**
 * @param {number} length length of series.
 * @param {number} seperator number after that series will be repeated
 * @returns {number} last defined number
 */
export default function getLastNumberInSeriesRepeatedBySeperator(length, seperator) {
  let result = 1;

  for (let i = 1; i < length; i += 1) {
    if (result === seperator) {
      result = 1;
      // eslint-disable-next-line no-continue
      continue;
    }
    result += 1;
  }

  return result;
}
