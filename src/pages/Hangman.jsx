import { useState } from 'react';
import { HangManContext } from '../contexts';

import Page from '../components/Page';
import Setting from '../components/Hangman/Setting';
import GamePanel from '../components/Hangman/GamePanel';

export default function Hangman() {
	const [answerWord, setAnswerWord] = useState('Red Apple');
	const [cnt, setCnt] = useState(5);

	return (
		<HangManContext.Provider value={{ answerWord, setAnswerWord, cnt, setCnt }}>
			<Page
				title={'Hang Man'}
				tabs={[
					{ tabName: 'Game', tabElement: <GamePanel /> },
					{ tabName: 'Setting', tabElement: <Setting /> },
				]}
			/>
		</HangManContext.Provider>
	);
}
