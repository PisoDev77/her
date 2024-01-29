import { useState } from 'react';

import { Grid } from '@mui/material';

export default function Hangman() {
	const [answer, setAnswer] = useState('Test Word');

	return (
		<main id='hang-man-app'>
			<h1>Hang Man</h1>
			<section>
				<h2>Game Board</h2>
			</section>
			<section>
				<h2>Game Status</h2>
			</section>
		</main>
	);
}
