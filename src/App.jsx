import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hangman from './pages/Hangman';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/hang-man' element={<Hangman />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
