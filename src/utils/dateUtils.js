export function getMonthMatrix(year, month) {
  const result = [];
  const firstDay = new Date(year, month, 1);
  let firstDayIndex = firstDay.getDay(); // 0 (Pazar) - 6 (Cumartesi)

  // Pazartesi'yi haftanın ilk günü yapmak için dönüşüm
  firstDayIndex = (firstDayIndex + 6) % 7;

  const lastDate = new Date(year, month + 1, 0).getDate();
  let current = 1 - firstDayIndex;

  for (let week = 0; week < 6; week++) {
    const row = [];
    for (let day = 0; day < 7; day++) {
      const dayDate = new Date(year, month, current);
      row.push({
        day: dayDate.getDate(),
        inCurrentMonth: dayDate.getMonth() === month,
      });
      current++;
    }
    result.push(row);
  }

  return result;
}
