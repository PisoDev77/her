import { Brightness4, Brightness7 } from '@mui/icons-material';
import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext } from '../contexts';

export default function ColorMode() {
	const theme = useTheme();
	const colorMode = useContext(ColorModeContext);

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				bgcolor: 'background.default',
				color: 'text.primary',
			}}
		>
			{theme.palette.mode} mode
			<IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color='inherit'>
				{theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
			</IconButton>
		</Box>
	);
}
