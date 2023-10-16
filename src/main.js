import dayjs from 'dayjs/esm';
import './shared/config';
import '../style.css';
import './ui/atoms';
import './ui/molecules';
import getLastNumberInSeries from './shared/core/getLastNumberInSeriesRepeatedBySeperator';
import { firstWeek } from '../configuration/schedule.json';
import { setNumberOfWeek, setCurrentMonth } from './ui/molecules/header-date';
import renderWeeksAtHeader from './ui/ogranisms/header';
import renderLessons from './ui/ogranisms/lessons/renderLessons';

const today = dayjs();
const referencePointOfWeeks = dayjs(firstWeek);
const currentWeek = getLastNumberInSeries(today.diff(referencePointOfWeeks, 'w'), 2);

setCurrentMonth(today);
renderLessons(today);
setNumberOfWeek(currentWeek);
renderWeeksAtHeader(today);
