function format(val: number): string {
  const [num, num2 = ''] = val.toString().split('.');
  const parts = num.match(/\d{1,3}(?=(\d{3})*$)/g);
  return [parts!.join(' '), num2].filter(val => !!val).join(',');
}

export default function(val: string | number, after?: string): string {
  return (format(+val) + ` ${after ?? ''}`).trim();
}
