import { useContext } from 'react';
import { HangManContext } from '../../contexts';
import { Avatar, FormControl, Stack, TextField } from '@mui/material';

function LetterBox(word) {
	const arr = [];
	for (let letter of word) {
		arr.push(<div>{letter}</div>);
	}

	return (
		<Stack spacing={{ xs: 0, sm: 1 }} direction='row' useFlexGap flexWrap='wrap'>
			{arr.map((i) => (
				<Avatar variant='square'>{i}</Avatar>
			))}
		</Stack>
	);
}

function InputLetterBox() {
	return <TextField variant='filled' sx={{ textAlign: 'center' }}></TextField>;
}

export default function GamePanel() {
	const { word } = useContext(HangManContext);

	return (
		<form noValidate autoComplete='off'>
			<FormControl>
				<h2>Hang man game Panel</h2>
				{InputLetterBox()}
			</FormControl>
			{LetterBox(word)}
			<section>Game Status</section>
			<section>Game Window</section>
		</form>
	);
}
