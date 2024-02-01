import { useState } from 'react';
import Page from '../components/Page';
import SetLecture from '../components/Schedule/SetLecture';
import SetTerm from '../components/Schedule/SetTerm';
import SetWeek from '../components/Schedule/SetWeek';
import TimeTable from '../components/Schedule/TimeTable';
import { ScheduleContext } from '../contexts';

export default function Schedule() {
	const [lectures, setLectures] = useState([{ lecture: '없음' }]);
	const [lunch, setLunch] = useState(4);
	const [timeTable, setTimeTable] = useState({
		timeLectures: [
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
		],
	});
	return (
		<ScheduleContext.Provider value={{ lectures, lunch, setLunch, setLectures, timeTable, setTimeTable }}>
			<Page
				title={'Schedule'}
				tabs={[
					{
						tabName: 'Setting',
						tabElement: (
							<>
								<SetTerm />
								<SetLecture />
								<SetWeek />
							</>
						),
					},
					{ tabName: 'Time Table', tabElement: <TimeTable /> },
				]}
			/>
		</ScheduleContext.Provider>
	);
}
