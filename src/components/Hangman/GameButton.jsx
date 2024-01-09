import { useContext } from 'react';

import HangmanContext from '../../contexts/HangmanContext';

import { RestartAltRounded, VideogameAssetRounded } from '@mui/icons-material';
import { Button } from '@mui/material';

export default function GameButton() {
	const { isGame, setIsGame } = useContext(HangmanContext);

	const newBtn = (
		<Button variant='contained' onClick={() => setIsGame(!isGame)} startIcon={<VideogameAssetRounded />}>
			New Game
		</Button>
	);

	const restartBtn = (
		<Button variant='contained' onClick={() => setIsGame(!isGame)} startIcon={<RestartAltRounded />}>
			Restart Game
		</Button>
	);

	return isGame ? restartBtn : newBtn;
}
