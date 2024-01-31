import { useContext, useEffect, useState } from 'react';
import { HangManContext } from '../../contexts';
import { Card, TextField } from '@mui/material';
import { Stack } from '@mui/system';

export default function GamePanel() {
	const { answerWord } = useContext(HangManContext);
	const [idxs, setIdxs] = useState(answerWord.split('').map((alphabet) => (alphabet.trim() === '' ? -2 : -1)));
	const [guessedAlphabet, setGuessedAlphabet] = useState('');

	useEffect(() => {
		setIdxs(answerWord.split('').map((alphabet) => (alphabet.trim() === '' ? -2 : -1)));
	}, [answerWord]);

	const handleGuess = (event) => {
		if (event.key !== 'Enter') return;

		const guessedAlphabet = event.target.value.toLowerCase();

		if (guessedAlphabet.trim() === '') {
			event.target.value = '';
			return;
		}

		let idx = answerWord.toLowerCase().indexOf(guessedAlphabet);
		while (idx !== -1) {
			idxs[idx] = idxs[idx] === -2 ? -2 : idx;
			idx = answerWord.toLowerCase().indexOf(guessedAlphabet, idx + 1);
		}
		setIdxs([...idxs]);

		event.target.value = '';
	};

	const handleChange = (event) => {
		if (!/[a-zA-Z]/.test(event.target.value)) {
			setGuessedAlphabet('');
		} else {
			setGuessedAlphabet(event.target.value);
		}
	};

	return (
		<Stack
			spacing={{ xs: 0, sm: 1 }}
			direction='column'
			alignItems={'center'}
			justifyContent={'center'}
			minHeight={'400px'}
		>
			<Stack spacing={{ xs: 0, sm: 0 }} direction='row' justifyContent={'flex-start'} flexWrap={'wrap'}>
				{idxs.map((idx, _) =>
					//prettier-ignore
					<Card key={_} sx={{ paddingX: '1rem', paddingTop: '1rem', fontSize: '3rem' }}>
						{idx === -2 ? (	<> &nbsp;&nbsp; </> ) 
                                    : (	<> {idx === -1 
                                            ? <> &nbsp;&nbsp; </> 
                                            : answerWord[idx]}
						                    <hr style={{ width: '100%' }} />
                                        </>
						)}
					</Card>
				)}
			</Stack>
			<TextField
				variant='outlined'
				autoFocus={true}
				autoComplete='off'
				defaultValue={guessedAlphabet}
				inputProps={{
					maxLength: 1,
					onKeyDown: handleGuess,
					onChange: handleChange,
					style: { textAlign: 'center', width: '1em' },
				}}
			/>
		</Stack>
	);
}
