import { useState } from 'react';
import Page from '../components/Page';
import SetLecture from '../components/Schedule/SetLecture';
import SetTerm from '../components/Schedule/SetTerm';
import SetWeek from '../components/Schedule/SetWeek';
import { ScheduleContext } from '../contexts';

export default function Schedule() {
	const [lectures, setLectures] = useState([{ lecture: '없음' }]);

	return (
		<ScheduleContext.Provider value={{ lectures, setLectures }}>
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
					{ tabName: 'Setting', tabElement: <SetTerm /> },
				]}
			/>
		</ScheduleContext.Provider>
	);
}
