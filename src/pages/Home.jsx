import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<main>
			<ul>
				<li>
					<Link to={'/hangman'}>Hang Man</Link>
				</li>
			</ul>
		</main>
	);
}
