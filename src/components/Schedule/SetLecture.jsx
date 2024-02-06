import { useContext, useState } from 'react';

import { Button, ButtonGroup, Paper, Stack, TextField, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';

import { ScheduleContext } from '../../contexts';

import { DefaultLecture, DeleteLecture } from './Lecture';

import { getContrastColor, getRandomColor } from '../../lib/random';

export default function SetLecture() {
	const { lectures, setLectures, setStep } = useContext(ScheduleContext);

	const [newLecture, setNewLecture] = useState('');

	const handleAddLecture = (e) => {
		e.preventDefault();

		if (newLecture.trim() === '' || lectures.find(({ lecture }) => lecture === newLecture)) return;

		const backgroundColor = getRandomColor(lectures);
		const color = getContrastColor(backgroundColor);

		setLectures([...lectures, { lecture: newLecture, color, backgroundColor }]);
		setNewLecture('');
	};

	return (
		<Paper variant='outlined' sx={{ margin: '1rem', padding: '1rem' }}>
			<Stack spacing={{ xs: 0, sm: 1 }} direction='column' alignItems={'center'}>
				<Typography variant='h4' component={'h2'}>
					Step 2. 교과 설정하기
				</Typography>
				<Stack spacing={{ xs: 0, sm: 1 }} direction='row' component={'form'} onSubmit={handleAddLecture}>
					<TextField
						autoComplete='off'
						value={newLecture}
						label='교과 또는 반'
						placeholder='교과 또는 반 학년 등을 적어주세요.'
						inputProps={{
							style: { textAlign: 'center' },
							onChange: (e) => setNewLecture(e.target.value),
						}}
					/>
					<Button type='submit' variant='contained' endIcon={<Add />}>
						추가
					</Button>
				</Stack>
				<Stack spacing={{ xs: 2, sm: 1 }} direction='row' flexWrap={'wrap'}>
					{lectures &&
						lectures.map(({ lecture, color, backgroundColor }, idx) => {
							const obj = { lecture, color, backgroundColor, key: 'lecture-' + idx };
							return idx === 0 ? <DefaultLecture {...obj} /> : <DeleteLecture {...obj} />;
						})}
				</Stack>
				<ButtonGroup>
					<Button onClick={() => setStep(0)}>Prev</Button>
					<Button onClick={() => setStep(2)}>Next</Button>
				</ButtonGroup>
			</Stack>
		</Paper>
	);
}
