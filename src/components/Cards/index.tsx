import DemoImage from 'src/assets/demo-book.jpg';
import Pattren from 'src/assets/pattren.jpg';

const Card = () => {
	return (
		<div className="card relative flex flex-col justify-between bg-[#DEE7F750] h-[500px] w-[350px] shadow-lg">
			<div className="w-full h-[40%]">
				<img src={Pattren} className="w-full h-full object-cover opacity-80" />
			</div>
			<div className="absolute top-[20%] left-5 right-5 flex justify-between items-end">
				<img
					src={DemoImage}
					className=" object-cover w-[100px] h-[120px] shadow-sm shadow-black"
				/>
				<div className="flex mb-3 h-max gap-3">
					<div className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-white shadow-lg">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-bookmark"
							viewBox="0 0 16 16">
							<path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />{' '}
						</svg>
					</div>
					<button className="bg-[#F15A29] text-[12px] text-white px-5 py-1 rounded-full shadow-lg">
						Read
					</button>
				</div>
			</div>
			<div className="flex h-[50px] mx-5 shadow-lg px-4 justify-between bg-white">
				<Item count={1023} title="Likes" />
				<Item count={1023} title="Likes" />
				<Item count={1023} title="Likes" />
				<Item count={1023} title="Likes" />
			</div>
			<div className="max-h-[35%] items-between min-h-max shadow-lg mx-5 py-4 bg-white mb-2 flex flex-col overflow-hidden px-4">
				<h3 className="font-bold text-[14px]">Synopsis</h3>
				<p className="text-[12px]">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
					Ipsum has been the industry's standard dummy text ever since the 1500s, when an
					unknown printer took a galley of type and scrambled it to make a type specimen book.
					It has survived not only five centuries.
				</p>
			</div>
		</div>
	);
};

export default Card;

interface IItem {
	count: number;
	title: string;
}

const Item = ({ count, title }: IItem) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<h6 className="font-bold text-[12px]">{count}</h6>
			<p className="-mt-1 text-[12px] text-main text-[#231F2080]">{title}</p>
		</div>
	);
};
