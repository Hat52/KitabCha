import { useState, useEffect } from 'react';

interface ICounter {
	label: string;
	total: number;
}

export default function Counter({ label, total }: ICounter) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (count < total) {
			setCount(count + 1);
		}
	}, [count]);

	return (
		<div className="flex flex-col items-center">
			<h6 className="text-[40px] text-[#F15A29] font-black">{count}</h6>
			<p className="text-[20px]">{label}</p>
		</div>
		// <div className="h-[100px] bg-[#F15A29] min-w-[100px] flex-grow">a</div>
	);
}
