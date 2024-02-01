import { Stack, TextField } from '@mui/material';
import { useContext } from 'react';
import { ScheduleContext } from '../../contexts';
import Lecture from './Lecture';

export default function SetLecture() {
	const { lectures, setLectures } = useContext(ScheduleContext);

	const handleAddLecture = (e) => {
		if (e.key !== 'Enter') return;

		const lecture = e.target.value;

		if (lecture.trim() === '') return;

		setLectures([...lectures, lecture]);
		e.target.value = '';
	};

	return (
		<Stack spacing={{ xs: 0, sm: 1 }} direction='column'>
			<h1>Step 2. 교과 설정하기</h1>
			<TextField onKeyDown={handleAddLecture} />
			<Stack spacing={{ xs: 0, sm: 1 }} direction='row'>
				<Lecture />
			</Stack>
		</Stack>
	);
}
