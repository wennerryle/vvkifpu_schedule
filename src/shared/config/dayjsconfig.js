import dayjs from 'dayjs/esm';
import weekOfYear from 'dayjs/esm/plugin/weekOfYear';
import 'dayjs/esm/locale/ru';

dayjs.locale('ru');
dayjs.extend(weekOfYear);
