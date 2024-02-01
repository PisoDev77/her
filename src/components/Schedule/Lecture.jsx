import { Chip } from '@mui/material';
import { useContext } from 'react';
import { ScheduleContext } from '../../contexts';

export function DeleteLecture({ lecture, idx, color, backgroundColor }) {
	const { lectures, setLectures } = useContext(ScheduleContext);

	return (
		<Chip
			variant='filled'
			label={lecture}
			sx={{ color, backgroundColor }}
			onDelete={() => {
				const tmpArr = [...lectures];
				tmpArr.splice(idx, 1);
				setLectures(tmpArr);
			}}
		/>
	);
}

export function DefaultLecture({ lecture, color, backgroundColor }) {
	return <Chip variant='filled' label={lecture} sx={{ color, backgroundColor }} />;
}
