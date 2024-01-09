import { useState } from 'react';

import { Grid } from '@mui/material';

import HangmanContext from '../contexts/HangmanContext';

import Header from '../components/Hangman/Header';
import View from '../components/Hangman/View';
import Status from '../components/Hangman/Status';

export default function Hangman() {
	const [answer, setAnswer] = useState('Test Word');
	const [isGame, setIsGame] = useState(false);

	return (
		<HangmanContext.Provider value={{ answer, setAnswer, isGame, setIsGame }}>
			<main id='hang-man-app'>
				<Grid container spacing={2}>
					<Grid item xs={12} md={12}>
						<Header />
					</Grid>
					<Grid item xs={10} md={3}>
						<Status />
					</Grid>
					<Grid item xs={12} md={9}>
						<View />
					</Grid>
				</Grid>
			</main>
		</HangmanContext.Provider>
	);
}
