import { useContext, useState } from 'react';
import { MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { ScheduleContext } from '../../contexts';
import { DefaultLecture } from './Lecture';

const days = ['월', '화', '수', '목', '금'];

export default function SetWeek() {
	const { lectures } = useContext(ScheduleContext);
	const [times, setTimes] = useState(['1교시', '2교시', '3교시', '4교시', '점심', '5교시', '6교시']);

	const handleLunch = (event) => {
		setTimes(
			event.target.value === 4
				? ['1교시', '2교시', '3교시', '4교시', '점심', '5교시', '6교시']
				: ['1교시', '2교시', '3교시', '4교시', '5교시', '점심', '6교시']
		);
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
			<Table>
				<TableHead>
					<TableCell>비고</TableCell>
					{days.map((day) => (
						<TableCell>{day}</TableCell>
					))}
				</TableHead>
				<TableBody>
					{times.map((time) => (
						<TableRow>
							<TableCell>{time}</TableCell>
							{days.map((day) => (
								<TableCell>
									{time !== '점심' ? (
										<TextField
											select
											name={`${day}-${time}`}
											label={`${day}-${time}`}
											defaultValue={0}
										>
											{lectures.map(({ lecture, color, backgroundColor }, idx) => (
												<MenuItem key={lecture} value={idx}>
													<DefaultLecture
														lecture={lecture}
														color={color}
														backgroundColor={backgroundColor}
													/>
												</MenuItem>
											))}
										</TextField>
									) : (
										''
									)}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
