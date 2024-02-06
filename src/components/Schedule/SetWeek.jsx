import { useContext } from 'react';

import { Button, ButtonGroup, Stack, TextField, Typography } from '@mui/material';

import { ScheduleContext } from '../../contexts';

import TimeTable from './TimeTable';

export default function SetWeek() {
	const { setLunch, setStep } = useContext(ScheduleContext);

	const handleLunch = (event) => {
		setLunch(+event.target.value);
	};

	return (
		<Stack spacing={{ xs: 2 }} flexDirection={'column'} alignItems={'center'}>
			<Typography variant='h4' component={'h2'}>
				Step 3. 주 시간표
			</Typography>
			<TextField label='점심시간' select SelectProps={{ native: true }} defaultValue={4} onChange={handleLunch}>
				<option key={4} value={4}>
					4교시 후
				</option>
				<option key={5} value={5}>
					5교시 후
				</option>
			</TextField>
			<TimeTable edit={true} />
			<ButtonGroup>
				<Button onClick={() => setStep(1)}>Prev</Button>
			</ButtonGroup>
		</Stack>
	);
}
