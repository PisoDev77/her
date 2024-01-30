import { useContext, useState } from 'react';
import { HangManContext } from '../../contexts';
import { Card, Stack, TextField } from '@mui/material';

const makeLetters = (answerWord) => answerWord.split('').map((alphabet) => ({ alphabet, guessed: false }));

export default function GamePanel() {
	const { answerWord, cnt, setCnt } = useContext(HangManContext);
	const [letterBoxes, setLetterBoxes] = useState(makeLetters(answerWord));

	const guessAlphabet = (event) => {
		if (event.key !== 'Enter') return;

		const guessedAlphabet = event.target.value.toLowerCase();
		if (guessedAlphabet.trim() === '') return;

		const answerAlphabetidxs = [];
		let idx = answerWord.toLowerCase().indexOf(guessedAlphabet);
		while (idx !== -1) {
			answerAlphabetidxs.push(idx);
			idx = answerWord.indexOf(guessedAlphabet, idx + 1);
		}

		answerAlphabetidxs.forEach((idx) => {
			letterBoxes[idx] = { ...letterBoxes[idx], guessed: true };
		});
		setLetterBoxes([...letterBoxes]);
		event.target.value = '';

		if (answerAlphabetidxs.length === 0) setCnt(cnt - 1);
	};

	return (
		<Stack spacing={{ xs: 0, sm: 1 }} direction='column' alignItems={'center'}>
			<h2>Hang man game Panel</h2>
			<div>기회: {cnt}</div>
			{LetterBoxes(letterBoxes)}
			{GuessAlphabet(guessAlphabet)}
		</Stack>
	);
}

function LetterBoxes(letterBoxes) {
	return (
		<Stack spacing={{ xs: 0, sm: 1 }} direction='row' useFlexGap flexWrap='wrap'>
			{letterBoxes.map(({ alphabet, guessed }, idx) => (
				<Card
					key={'LetterBox ' + idx}
					variant='outlined'
					sx={{ marginY: '1rem', paddingX: '1rem', paddingTop: '1rem' }}
				>
					{guessed ? alphabet : <>&nbsp;&nbsp;</>}
					{alphabet.trim() !== '' && <hr style={{ width: '100%' }} />}
				</Card>
			))}
		</Stack>
	);
}

function GuessAlphabet(onKeyDown) {
	return (
		<TextField
			variant='filled'
			autoFocus='true'
			autoComplete='off'
			inputProps={{ onKeyDown, maxLength: 1, style: { textAlign: 'center', width: '1em' } }}
		></TextField>
	);
}
