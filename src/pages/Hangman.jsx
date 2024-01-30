import { useState } from 'react';
import { HangManContext } from '../contexts';
import GamePanel from '../components/Hangman/GamePanel';

export default function Hangman() {
	const [answerWord, setAnswerWord] = useState('Red Apple');
	const [cnt, setCnt] = useState(3);

	return (
		<HangManContext.Provider value={{ answerWord, setAnswerWord, cnt, setCnt }}>
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
