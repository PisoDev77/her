import { IconButton, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header id='hangman-header'>
			<Stack direction='row' justifyContent='space-between'>
				<Link to={'/hang-man'}>
					<h1>Hangmans</h1>
				</Link>
			</Stack>
		</header>
	);
}
