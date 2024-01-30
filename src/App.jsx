import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hangman from './pages/Hangman';
import Home from './pages/Home';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/hang-man' element={<Hangman />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
