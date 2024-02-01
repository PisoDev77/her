export const getRandomColor = (lectures) => {
	let newColor;

	do {
		newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
	} while (lectures.some(({ color }) => color === newColor));

	return newColor;
};

export const getContrastColor = (hexColor) => {
	const threshold = 128; // 임계값
	const r = parseInt(hexColor.slice(1, 3), 16);
	const g = parseInt(hexColor.slice(3, 5), 16);
	const b = parseInt(hexColor.slice(5, 7), 16);
	const brightness = (r * 299 + g * 587 + b * 114) / 1000;

	return brightness > threshold ? '#000000' : '#ffffff';
};
