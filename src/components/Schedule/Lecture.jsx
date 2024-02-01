import { Chip } from '@mui/material';
import { ScheduleContext } from '../../contexts';
import { useContext } from 'react';

export default function Lecture() {
	const { lectures, setLectures } = useContext(ScheduleContext);

	const handleDelete = (idx) => {
		const tmpArr = [...lectures];
		tmpArr.splice(idx, 1);
		setLectures(tmpArr);
	};

	return (
		lectures &&
		lectures.map((lecture, idx) =>
			idx !== 0 ? (
				<Chip variant='filled' label={lecture} onDelete={() => handleDelete(idx)} />
			) : (
				<Chip variant='filled' label={lecture} />
			)
		)
	);
}
