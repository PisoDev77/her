import { useState } from 'react';
import Page from '../components/Page';
import SetLecture from '../components/Schedule/SetLecture';
import SetTerm from '../components/Schedule/SetTerm';
import SetWeek from '../components/Schedule/SetWeek';
import TimeTable from '../components/Schedule/TimeTable';
import { ScheduleContext } from '../contexts';

export default function Schedule() {
	const [term, setTerm] = useState({
		startDate: null,
		endDate: null,
		dates: [],
		days: 0,
	});
	const [step, setStep] = useState(0);
	const [lectures, setLectures] = useState([{ lecture: '없음' }]);
	const [lunch, setLunch] = useState(4);
	const [timeTable, setTimeTable] = useState([
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
	]);

	const stepEle = [<SetTerm />, <SetLecture />, <SetWeek />];

	return (
		<ScheduleContext.Provider
			value={{ term, setTerm, lectures, lunch, setLunch, setLectures, timeTable, setTimeTable, setStep }}
		>
			<Page
				title={'Schedule'}
				tabs={[
					{
						tabName: 'Setting',
						tabElement: stepEle[step],
					},
					{ tabName: 'Time Table', tabElement: <TimeTable /> },
				]}
			/>
		</ScheduleContext.Provider>
	);
}
