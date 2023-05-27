import { Card } from '../../components';

export default function Landing() {
	return (
		<div className="w-[75%] min-h-screen overflow-x-hidden max-h-max mt-[30px] pb-10 gap-10 grid justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
}
