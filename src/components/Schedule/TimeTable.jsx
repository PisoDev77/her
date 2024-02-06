import { useContext, useState } from 'react';
import { ScheduleContext } from '../../contexts';
import { TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { getDate } from '../../lib/date';
import TermDays from './TermTable/TermDays';

export default function TimeTable({ edit }) {
	const { term } = useContext(ScheduleContext);
	const { startDate, endDate, weeks } = term;

	return (
		startDate &&
		endDate &&
		weeks > 0 && (
			<TableContainer>
				<TableHead>
					<TermDays />
				</TableHead>
			</TableContainer>
		)
	);
}
