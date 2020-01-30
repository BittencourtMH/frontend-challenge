import capitalizeFirst from './capitalizeFirst';
import differenceDays from './differenceDays';

function formatDate(date, now) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  const difference = differenceDays(now, date);
  if (!difference) {
    return 'Hoje';
  }
  if (difference === 1) {
    return 'Amanhã';
  }
  const weekday = capitalizeFirst(date.toLocaleString('pt', {weekday: 'long'}));
  return `${weekday} (${date.toLocaleDateString('pt')})`;
}

function formatTime(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  if (date.getMinutes()) {
    return `${date.getHours()}h${date.getMinutes().toString().padStart(2, '0')}`;
  }
  return `${date.getHours()}h`;
}

export {formatDate, formatTime};
