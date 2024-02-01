import { Stack, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { ScheduleContext } from '../../contexts';
import { DefaultLecture, DeleteLecture } from './Lecture';
import { getContrastColor, getRandomColor } from '../lib/random';

export default function SetLecture() {
	const [newLecture, setNewlecture] = useState('');
	const { lectures, setLectures } = useContext(ScheduleContext);

	const handleAddLecture = (e) => {
		if (e.key !== 'Enter') return;

		const inputLecture = e.target.value;

		if (inputLecture.trim() === '' || lectures.find(({ lecture }) => lecture === inputLecture)) return;

		const backgroundColor = getRandomColor(lectures);
		const color = getContrastColor(backgroundColor);

		setLectures([...lectures, { lecture: inputLecture, color, backgroundColor }]);
		e.target.value = '';
	};

	return (
		<Stack spacing={{ xs: 0, sm: 1 }} direction='column' alignItems={'flex-start'}>
			<h1>Step 2. 교과 설정하기</h1>
			<TextField
				defaultValue={newLecture}
				inputProps={{ style: { textAlign: 'center' }, onKeyDown: handleAddLecture }}
			/>
			<Stack spacing={{ xs: 0, sm: 1 }} direction='row'>
				{lectures &&
					lectures.map(({ lecture, color, backgroundColor }, idx) =>
						idx !== 0 ? (
							<DeleteLecture
								lecture={lecture}
								idx={idx}
								color={color}
								backgroundColor={backgroundColor}
							/>
						) : (
							<DefaultLecture lecture={lecture} color={color} backgroundColor={backgroundColor} />
						)
					)}
			</Stack>
		</Stack>
	);
}
