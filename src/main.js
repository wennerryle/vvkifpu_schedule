import dayjs from 'dayjs/esm';
import './shared/config';
import '../style.css';
import './ui/atoms';
import './ui/molecules';
import { setNumberOfWeek, setCurrentMonth } from './ui/molecules/header-date';
import renderWeeksAtHeader from './ui/ogranisms/header';
import renderLessons from './ui/ogranisms/lessons/renderLessons';
import DatesStore from './core/DatesStore';
import getCurrentWeek from './shared/core/getCurrentWeek';

const today = dayjs();
const currentWeek = getCurrentWeek(today);

setCurrentMonth(today);
renderWeeksAtHeader(today);
renderLessons(today, currentWeek);
setNumberOfWeek(currentWeek);

const datepicker = document.getElementById('datepicker');
datepicker.valueAsDate = new Date();
datepicker.addEventListener('change', () => {
  DatesStore.selectedDay = dayjs(datepicker.value);
});
