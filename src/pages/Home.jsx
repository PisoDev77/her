import { List, ListItemButton, ListItemAvatar, Avatar, ListItemText, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<Stack spacing={{ xs: 0, sm: 1 }} direction='column' alignItems={'center'}>
			<List>
				<ListItemButton component={Link} to={'/hangman'}>
					<ListItemAvatar>
						<Avatar>H</Avatar>
					</ListItemAvatar>
					<ListItemText
						primary={
							<Typography variant='h3' component={'h2'}>
								Hang Man
							</Typography>
						}
						secondary='This is hang man game description.'
					/>
				</ListItemButton>
			</List>
		</Stack>
	);
}
