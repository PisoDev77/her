import { Hearing } from '@mui/icons-material';
import { Grid, IconButton, Typography } from '@mui/material';

const months = [
	{ eng: 'January', kor: '1월' },
	{ eng: 'February', kor: '2월' },
	{ eng: 'March', kor: '3월' },
	{ eng: 'April', kor: '4월' },
	{ eng: 'May', kor: '5월' },
	{ eng: 'June', kor: '6월' },
	{ eng: 'July', kor: '7월' },
	{ eng: 'August', kor: '8월' },
	{ eng: 'September', kor: '9월' },
	{ eng: 'October', kor: '10월' },
	{ eng: 'November', kor: '11월' },
	{ eng: 'December', kor: '12월' },
];

export default function Month() {
	const handleSound = (eng) => {
		alert(eng);
	};

	return (
		<>
			<Typography variant='h4' component={'h2'}>
				Month
			</Typography>
			<Grid container spacing={2} p='1rem'>
				{months.map(({ eng, kor }, idx) => (
					<Grid key={'month-' + idx} item xs={3} display='flex' justifyContent='center' alignItems='center'>
						{eng} | {kor} |{' '}
						<IconButton onClick={() => handleSound(eng)}>
							<Hearing />
						</IconButton>
					</Grid>
				))}
			</Grid>
		</>
	);
}
