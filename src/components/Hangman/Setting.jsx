import { useContext, useState } from 'react';
import { HangManContext } from '../../contexts';
import { Button, ButtonGroup, Stack, TextField } from '@mui/material';

const LEVELS = [
	{ caption: 'easy', life: 10 },
	{ caption: 'intermediate', life: 5 },
	{ caption: 'hard', life: 3 },
];

export default function Setting() {
	const { setCnt, answerWord, setAnswerWord } = useContext(HangManContext);
	const [currentLevel, setCurrentLevel] = useState(LEVELS[1].caption);

	const handleBtns = (event) => {
		const level = event.target.textContent;
		setCurrentLevel(level);
		setCnt(LEVELS.find((_level) => _level.caption === level).life);
	};

	const handleTextField = (event) => {
		if (event.key !== 'Enter') return;
		console.log(event.key);
		setAnswerWord(event.target.value);
	};

	return (
		<Stack spacing={{ xs: 0, sm: 1 }} direction='column' alignItems={'center'}>
			<h2>Setting</h2>
			<h3>Current Word: {answerWord}</h3>
			<TextField
				variant='outlined'
				autoComplete='off'
				inputProps={{ onKeyDown: handleTextField, style: { textAlign: 'center' } }}
			/>
			<ButtonGroup size='large' variant='outlined' onClick={handleBtns}>
				<Btns currentLevel={currentLevel} />
			</ButtonGroup>
		</Stack>
	);
}

function Btns({ currentLevel }) {
	return LEVELS.map(({ caption }, idx) =>
		caption === currentLevel ? (
			<Button key={'btn ' + idx} variant='contained'>
				{caption}
			</Button>
		) : (
			<Button key={'btn ' + idx}>{caption}</Button>
		)
	);
}
