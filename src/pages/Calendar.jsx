import Month from '../components/Calendar/Month';
import Page from '../components/Page';

export default function Calendar() {
	return <Page title={'How to read a date?'} tabs={[{ tabName: 'Month', tabElement: <Month /> }]} />;
}
