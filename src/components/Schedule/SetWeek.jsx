import { useContext } from 'react';
import { Button, TableContainer, TextField } from '@mui/material';
import { ScheduleContext } from '../../contexts';
import TimeTable from './TimeTable';

export default function SetWeek() {
	const { setLunch } = useContext(ScheduleContext);

	const handleLunch = (event) => {
		setLunch(+event.target.value);
	};

	return (
		<TableContainer>
			<h1>Step 3. 주 시간표</h1>
			<TextField label='점심시간' select SelectProps={{ native: true }} defaultValue={4} onChange={handleLunch}>
				<option key={4} value={4}>
					4교시 후
				</option>
				<option key={5} value={5}>
					5교시 후
				</option>
			</TextField>
			<Button type='submit'>저장</Button>
			<TimeTable edit={true} />
		</TableContainer>
	);
}
