import { Card, Navbar, Counter } from '../../components';

export default function Landing() {
	return (
		<>
			<Navbar />
			<div className="min-h-screen max-h-max mt-[110px] pb-10 flex flex-col gap-5">
				<div className="flex gap-5 w-full py-2 justify-center items-center md:flex-row flex-col flex-wrap">
					<Counter label="Users" total={200} />
					<Counter label="Notes" total={300} />
					<Counter label="Books" total={240} />
				</div>

				<div className="grid justify-between grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</>
	);
}
