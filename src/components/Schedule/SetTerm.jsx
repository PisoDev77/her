import { useContext } from 'react';

import { Button, ButtonGroup, Paper, Stack, Typography } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { ScheduleContext } from '../../contexts';

import { getFullDaysAndDays } from '../../lib/date';

export default function SetTerm() {
	const { term, setTerm, setStep } = useContext(ScheduleContext);
	const handleTerm = (newTerm) => {
		const [fullDays, days] = getFullDaysAndDays(newTerm.startDate, newTerm.endDate);
		setTerm({ ...newTerm, fullDays, days });
	};

	const { startDate, endDate, days, fullDays } = term;

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<Paper variant='outlined' sx={{ margin: '1rem', padding: '1rem' }}>
				<Stack spacing={{ xs: 2 }} flexDirection='column' alignItems={'center'}>
					<Typography variant='h4' component={'h2'}>
						Step 1. 학기 기간 설정하기
					</Typography>
					<Typography variant='h5' component={'h3'}>
						{startDate && '학기 시작일: ' + term.startDate.format('YYYY-MM-DD')}
					</Typography>
					<DatePicker
						label={'학기 시작일'}
						openTo='month'
						format='YYYY년 MM월 DD일'
						views={['year', 'month', 'day']}
						onChange={(newDate) => handleTerm({ ...term, startDate: newDate })}
					/>
					<Typography variant='h5' component={'h3'}>
						{endDate && '학기 마지막일: ' + term.endDate.format('YYYY-MM-DD')}
					</Typography>
					<DatePicker
						label={'학기 마지막일'}
						openTo='month'
						format='YYYY년 MM월 DD일'
						views={['year', 'month', 'day']}
						onChange={(newDate) => handleTerm({ ...term, endDate: newDate })}
					/>
					<Typography variant='h6' component={'h3'}>
						학기 일수(월-금만): {days}일
					</Typography>
					<Typography variant='h6' component={'h3'}>
						총 학기 일수: {fullDays}일
					</Typography>
					<ButtonGroup>
						<Button onClick={() => setStep(1)}>Next</Button>
					</ButtonGroup>
				</Stack>
			</Paper>
		</LocalizationProvider>
	);
}
