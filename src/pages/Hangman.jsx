import Header from '../components/Hangman/Header';
import View from '../components/Hangman/View';
import InfoMenu from '../components/Hangman/InfoMenu';
import { Grid } from '@mui/material';

export default function Hangman() {
	return (
		<main id='hang-man-app'>
			<Grid container spacing={2}>
				<Grid item xs={12} md={12}>
					<Header />
				</Grid>
				<Grid item xs={12} md={9}>
					<View />
				</Grid>
				<Grid item xs={10} md={3}>
					<InfoMenu />
				</Grid>
			</Grid>
		</main>
	);
}
