import { Box, Stack, Tab, Tabs, Typography } from '@mui/material';
import ColorMode from './ColorMode';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Page({ title, tabs }) {
	const [tab, setTab] = useState(0);

	const handleChange = (_, newTab) => {
		setTab(newTab);
	};

	return (
		<>
			<Typography variant='h2' component={Link} to={'/'} sx={{ textDecoration: 'none', color: 'inherit' }}>
				{title}
			</Typography>
			<Stack
				spacing={{ xs: 0, sm: 1 }}
				direction='row'
				justifyContent={'space-between'}
				borderBottom={1}
				color={'inherit'}
			>
				<Tabs value={tab} onChange={handleChange}>
					{tabs.map(({ tabName }, idx) => (
						<Tab key={'tab-' + idx} label={tabName}></Tab>
					))}
				</Tabs>
				<ColorMode />
			</Stack>
			{tabs.map(({ tabElement }, idx) => {
				return (
					<Box key={'tab-element-' + idx} hidden={tab !== idx} style={{ paddingTop: '1rem' }}>
						{tabElement}
					</Box>
				);
			})}
		</>
	);
}
