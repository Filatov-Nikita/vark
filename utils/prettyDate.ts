export default function(date: string) {
  const dt = new Date(date);
  const str = dt.toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'long' ,
    year: 'numeric',
  });
  return str.slice(0, -3);
}
