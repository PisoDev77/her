import Page from '../components/Page';
import SetTerm from '../components/Schedule/SetTerm';

export default function Schedule() {
	return <Page title={'Schedule'} tabs={[{ tabName: 'Setting', tabElement: <SetTerm /> }]} />;
}
