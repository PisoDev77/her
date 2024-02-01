import { useContext } from 'react';
import { ScheduleContext } from '../../contexts';
import { MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { DefaultLecture } from './Lecture';

const days = ['월', '화', '수', '목', '금'];

export default function TimeTable({ edit }) {
	const { lunch, timeTable, lectures, setTimeTable } = useContext(ScheduleContext);

	const handleChange = (e) => {
		const [day, time] = e.target.name.split('-');
		timeTable.timeLectures[+time][+day] = e.target.value;
		setTimeTable({ ...timeTable });
	};

	return (
		<>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell></TableCell>
							{days.map((day, idx) => (
								<TableCell key={'day' + idx}>{day}</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{timeTable.timeLectures.map((timeLecture, timeIdx) => {
							const isLunch = lunch === timeIdx;
							const time = lunch > timeIdx ? timeIdx + 1 : timeIdx;
							return (
								<TableRow key={'time' + timeIdx}>
									<TableCell>{isLunch ? '점심' : time + '교시'}</TableCell>
									{timeLecture.map((lectureIdx, dayIdx) => (
										<TableCell key={'day-' + dayIdx}>
											{isLunch ? (
												''
											) : edit ? (
												<TextField
													select
													name={`${dayIdx}-${timeIdx}`}
													label={`${days[dayIdx]}-${time}교시`}
													defaultValue={0}
													onChange={handleChange}
												>
													{lectures.map((lecture, idx) => (
														<MenuItem key={'lecture-' + idx} value={idx}>
															<DefaultLecture {...lecture} />
														</MenuItem>
													))}
												</TextField>
											) : (
												<DefaultLecture {...lectures[lectureIdx]} />
											)}
										</TableCell>
									))}
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
