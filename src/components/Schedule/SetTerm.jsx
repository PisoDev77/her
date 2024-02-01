import { useState } from 'react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function SetTerm() {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState();

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<h1>Step 1. 학기 기간 설정하기</h1>
			<DatePicker
				label={'시작일'}
				openTo='month'
				format='YYYY년 MM월 DD일'
				views={['year', 'month', 'day']}
				onChange={(date) => setStartDate(date)}
			/>
			<DatePicker
				label={'끝 일'}
				openTo='month'
				format='YYYY년 MM월 DD일'
				views={['year', 'month', 'day']}
				onChange={(date) => setEndDate(date)}
			/>
			<h1>{startDate && startDate.format('YYYY-MM-DD')}</h1>
			<h1>{endDate && endDate.format('YYYY-MM-DD')}</h1>
		</LocalizationProvider>
	);
}
