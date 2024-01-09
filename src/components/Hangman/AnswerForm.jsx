import { useContext, useState } from 'react';
import HangmanContext from '../../contexts/HangmanContext';
import { Button, InputAdornment, TextField } from '@mui/material';
import { ArchiveRounded } from '@mui/icons-material';

export default function AnswerForm() {
	const [str, setStr] = useState('');
	const { isGame, setAnswer } = useContext(HangmanContext);

	const handleChange = (e) => {
		const inputStr = e.target.value;
		if (inputStr.length < 30) {
			setStr(inputStr);
			setAnswer(inputStr);
		}
	};

	return isGame ? (
		<></>
	) : (
		<form onSubmit={(e) => e.preventDefault()}>
			<TextField
				value={str}
				label='Game Word'
				margin='normal'
				onChange={handleChange}
				InputProps={{
					startAdornment: (
						<InputAdornment position='start'>
							<ArchiveRounded />
						</InputAdornment>
					),
				}}
			/>
		</form>
	);
}
