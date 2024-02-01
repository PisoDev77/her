import { IconButton, Stack, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { ScheduleContext } from '../../contexts';
import { DefaultLecture, DeleteLecture } from './Lecture';
import { getContrastColor, getRandomColor } from '../../lib/random';
import { Add } from '@mui/icons-material';

export default function SetLecture() {
	const [newLecture, setNewLecture] = useState('');
	const { lectures, setLectures } = useContext(ScheduleContext);

	const handleAddLecture = (e) => {
		e.preventDefault();

		if (newLecture.trim() === '' || lectures.find(({ lecture }) => lecture === newLecture)) return;

		const backgroundColor = getRandomColor(lectures);
		const color = getContrastColor(backgroundColor);

		setLectures([...lectures, { lecture: newLecture, color, backgroundColor }]);
		setNewLecture('');
	};

	return (
		<Stack spacing={{ xs: 0, sm: 1 }} direction='column' alignItems={'flex-start'}>
			<h1>Step 2. 교과 설정하기</h1>
			<form onSubmit={handleAddLecture}>
				<Stack spacing={{ xs: 0, sm: 1 }} direction='row'>
					<TextField
						autoComplete='off'
						value={newLecture}
						inputProps={{ style: { textAlign: 'center' }, onChange: (e) => setNewLecture(e.target.value) }}
					/>
					<IconButton type='submit'>
						<Add />
					</IconButton>
				</Stack>
			</form>
			<Stack spacing={{ xs: 0, sm: 1 }} direction='row'>
				{lectures &&
					lectures.map(({ lecture, color, backgroundColor }, idx) =>
						idx !== 0 ? (
							<DeleteLecture
								key={'lecture-' + idx}
								lecture={lecture}
								idx={idx}
								color={color}
								backgroundColor={backgroundColor}
							/>
						) : (
							<DefaultLecture
								key={'lecture-' + idx}
								lecture={lecture}
								color={color}
								backgroundColor={backgroundColor}
							/>
						)
					)}
			</Stack>
		</Stack>
	);
}
