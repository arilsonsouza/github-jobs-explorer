import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime)
export function humanizeDate(date: string) {
    return dayjs().to(date);
}