import { Skeleton } from '@mui/material';
import HangmanContext from '../../contexts/HangmanContext';
import { useContext } from 'react';

export default function View() {
	const { answer, isGame, setIsGame } = useContext(HangmanContext);

	return (
		<section>
			{isGame ? '게임 중입니다.' : `현재 답:${answer} 게임 전입니다.`}
			<Skeleton variant='rectangle' width='100%' style={{ minHeight: '50vh' }} />
		</section>
	);
}
