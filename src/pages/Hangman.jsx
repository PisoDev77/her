import { useState } from 'react';
import { HangManContext } from '../contexts';
import GamePanel from '../components/Hangman/GamePanel';
import Setting from '../components/Hangman/Setting';
import { Box, Stack, Tab, Tabs, Typography } from '@mui/material';
import ColorMode from '../components/ColorMode';
export default function Hangman() {
	const [answerWord, setAnswerWord] = useState('Red Apple');
	const [cnt, setCnt] = useState(5);

	const [tab, setTab] = useState(0);

	const handleChange = (_, newTab) => {
		setTab(newTab);
	};

	return (
		<HangManContext.Provider value={{ answerWord, setAnswerWord, cnt, setCnt }}>
			<Typography variant='h2' component='h1'>
				Hang Man
			</Typography>
			<Stack
				spacing={{ xs: 0, sm: 1 }}
				direction='row'
				justifyContent={'space-between'}
				borderBottom={1}
				color={'inherit'}
			>
				<Tabs value={tab} onChange={handleChange}>
					<Tab label={'Game'} />
					<Tab label={'Setting'} />
				</Tabs>
				<ColorMode />
			</Stack>
			<Box hidden={tab !== 0} style={{ paddingTop: '1rem' }} color={'inherit'}>
				<GamePanel />
			</Box>
			<Box hidden={tab !== 1} style={{ paddingTop: '1rem' }} color={'inherit'}>
				<Setting value={tab} index={1} />
			</Box>
		</HangManContext.Provider>
	);
}
