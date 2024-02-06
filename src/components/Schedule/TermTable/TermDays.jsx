import { useContext, useState } from 'react';

import {
	Avatar,
	Card,
	CardContent,
	Chip,
	Paper,
	Stack,
	TableCell,
	TableRow,
	TextField,
	Typography,
} from '@mui/material';

import { ScheduleContext } from '../../../contexts';

import { getDate } from '../../../lib/date';

export default function TermDays() {
	const { term } = useContext(ScheduleContext);
	const { startDate, endDate, weeks } = term;
	const [currentWeek, setCurrentWeek] = useState(0);

	return (
		<TableRow>
			<TableCell>
				<TextField
					select
					defaultValue={currentWeek}
					SelectProps={{ native: true }}
					onChange={(e) => setCurrentWeek(+e.target.value)}
				>
					{new Array(weeks).fill(0).map((i, idx) => (
						<option value={idx}>{idx + 1} 주차</option>
					))}
				</TextField>
			</TableCell>
			{['월', '화', '수', '목', '금'].map((day, idx) => {
				const tmpDate = startDate.add(idx + 7 * currentWeek - (startDate.get('day') - 1), 'day');
				const isBeforeStartDate = tmpDate.isBefore(startDate);
				const isAfterEndDate = tmpDate.isAfter(endDate);

				return (
					<TableCell>
						<Stack spacing={{ xs: 1 }} flexDirection={'column'} alignItems={'center'}>
							<Chip
								label={
									<Typography variant='h6' component={'h3'}>
										{getDate(
											startDate.add(idx + 7 * currentWeek - (startDate.get('day') - 1), 'day')
										)}
									</Typography>
								}
								color={isBeforeStartDate || isAfterEndDate ? 'info' : 'secondary'}
								variant={isBeforeStartDate || isAfterEndDate ? 'outlined' : 'filled'}
							/>

							<Chip label={day} color='primary' />
						</Stack>
					</TableCell>
				);
			})}
		</TableRow>
	);
}
