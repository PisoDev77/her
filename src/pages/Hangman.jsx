import { useState } from 'react';
import { HangManContext } from '../contexts';
import GamePanel from '../components/Hangman/GamePanel';

export default function Hangman() {
	const [word, setWord] = useState('Red Apple');

	return (
		<HangManContext.Provider value={{ word, setWord }}>
			<main id='hang-man-app'>
				<h1>Hang Man</h1>
				<GamePanel />
				<section>
					<h2>Game Status</h2>
				</section>
			</main>
		</HangManContext.Provider>
	);
}
