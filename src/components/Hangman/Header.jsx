import { IconButton, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
	return (
		<header id='hangman-header'>
			<Stack direction='row' justifyContent='space-between'>
				<h1>Hang Man</h1>
				<IconButton aria-label='menu-info' size='large'>
					<MenuIcon />
				</IconButton>
			</Stack>
		</header>
	);
}
