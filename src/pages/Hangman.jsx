import { useState } from 'react';
import { HangManContext } from '../contexts';
import GamePanel from '../components/Hangman/GamePanel';
import Setting from '../components/Hangman/Setting';

export default function Hangman() {
	const [answerWord, setAnswerWord] = useState('Red Apple');
	const [cnt, setCnt] = useState(5);

	return (
		<HangManContext.Provider value={{ answerWord, setAnswerWord, cnt, setCnt }}>
			<main id='hang-man-app'>
				<h1>Hang Man</h1>
				<GamePanel />
				<Setting />
			</main>
		</HangManContext.Provider>
	);
}
