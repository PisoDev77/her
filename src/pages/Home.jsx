import { List, ListItemButton, ListItemAvatar, Avatar, ListItemText, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const pages = [
	{
		avatar: 'H',
		to: '/hangman',
		primary: 'Hang Man',
		secondary: 'This is hang man game description.',
	},
	{
		avatar: 'H',
		to: '/calendar',
		primary: 'How to read Date?',
		secondary: `Let's Practice reading a date.`,
	},
	{
		avatar: 'S',
		to: '/schedule',
		primary: 'Template Schedule',
		secondary: `교무수첩??`,
	},
];

export default function Home() {
	return (
		<Stack spacing={{ xs: 0, sm: 1 }} direction='column' alignItems={'center'}>
			<List>
				{pages.map(({ avatar, to, primary, secondary }) => (
					<ListItemButton component={Link} to={to}>
						<ListItemAvatar>
							<Avatar>{avatar}</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary={
								<Typography variant='h3' component={'h2'}>
									{primary}
								</Typography>
							}
							secondary={secondary}
						/>
					</ListItemButton>
				))}
			</List>
		</Stack>
	);
}
