import dayjs from 'dayjs';

/**
 * 시작일과 마지막일 사이의 월요일부터 금요일까지의 날 수
 * @param {string} startDate
 * @param {string} endDate
 */
export const getFullDaysAndDays = (startDate, endDate) => {
	if (!startDate || !endDate) return [0, 0];

	const start = dayjs(startDate);
	const end = dayjs(endDate);

	let days = 1;
	const fullDays = end.diff(start, 'day');

	for (let idx = 0; idx < fullDays; idx++) {
		const day = start.add(idx, 'day').get('day');
		if (day > 0 && day < 6) days++;
	}

	return [fullDays + 1, days];
};
