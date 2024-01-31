import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hangman from './pages/Hangman';
import Home from './pages/Home';
import { CssBaseline, ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import { useMemo, useState } from 'react';
import { ColorModeContext } from './contexts';

function App() {
	const [mode, setMode] = useState(useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light');
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
			},
		}),
		[]
	);
	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode]
	);

	return (
		<BrowserRouter>
			<ColorModeContext.Provider value={colorMode}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/hangman' element={<Hangman />} />
					</Routes>
				</ThemeProvider>
			</ColorModeContext.Provider>
		</BrowserRouter>
	);
}

export default App;
