import { Chip } from '@mui/material';
import { useContext } from 'react';
import { ScheduleContext } from '../../contexts';

export function DeleteLecture({ lecture, idx }) {
	const { lectures, setLectures } = useContext(ScheduleContext);
	return (
		<Chip
			variant='filled'
			label={lecture}
			onDelete={() => {
				const tmpArr = [...lectures];
				tmpArr.splice(idx, 1);
				setLectures(tmpArr);
			}}
		/>
	);
}

export function DefaultLecture({ lecture }) {
	return <Chip variant='filled' label={lecture} />;
}
