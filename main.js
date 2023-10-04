import './style.css'
import * as dayjs from 'dayjs'
import 'dayjs/locale/ru'
import './src/atoms'

dayjs.locale('ru')

const monthWithYearHeader = document.getElementById('month_with_year');

monthWithYearHeader.textContent = dayjs().format('MMMM, YYYY');