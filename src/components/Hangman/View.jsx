import { Skeleton } from '@mui/material';

export default function View() {
	return (
		<section>
			<Skeleton variant='rectangle' width='100%' style={{ minHeight: '50vh' }} />
		</section>
	);
}
