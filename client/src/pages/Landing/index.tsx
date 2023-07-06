import { Card, Navbar } from '../../components';

export default function Landing() {
	return (
		<>
			<Navbar />
			<div className="min-h-screen max-h-max mt-[110px] pb-10 flex flex-col gap-5">
				<div className="grid justify-between grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</>
	);
}
