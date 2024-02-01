import { Stack, TextField } from '@mui/material';
import { useContext } from 'react';
import { ScheduleContext } from '../../contexts';
import { DefaultLecture, DeleteLecture } from './Lecture';

export default function SetLecture() {
	const { lectures, setLectures } = useContext(ScheduleContext);

	const handleAddLecture = (e) => {
		if (e.key !== 'Enter') return;

		const lecture = e.target.value;

		if (lecture.trim() === '' || lectures.find(({ lecture: _ }) => _ === lecture)) return;

		setLectures([...lectures, { lecture }]);
		e.target.value = '';
	};

	return (
		<Stack spacing={{ xs: 0, sm: 1 }} direction='column' alignItems={'flex-start'}>
			<h1>Step 2. 교과 설정하기</h1>
			<TextField onKeyDown={handleAddLecture} inputProps={{ style: { textAlign: 'center' } }} />
			<Stack spacing={{ xs: 0, sm: 1 }} direction='row'>
				{lectures &&
					lectures.map(({ lecture }, idx) =>
						idx !== 0 ? <DeleteLecture lecture={lecture} idx={idx} /> : <DefaultLecture lecture={lecture} />
					)}
			</Stack>
		</Stack>
	);
}
