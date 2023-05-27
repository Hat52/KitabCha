interface IButton {
	variant?: 'primary' | 'secondary' | 'text';
	size: 'sm' | 'md' | 'lg';
	text: string;
	onClick: () => void;
}

export default function Button({ size, text, variant = 'primary', onClick }: IButton) {
	const style =
		size === 'sm'
			? 'px-5 py-1 text-[12px]'
			: size === 'md'
			? 'px-5 py-2 text-[14px] rounded-md font-bold uppercase'
			: 'px-5 py-1 text-[12px]';
	const variantStyle =
		variant === 'primary'
			? 'bg-[#F15A29] shadow-lg text-white'
			: variant === 'secondary'
			? 'border border-[#F15A29] shadow-lg text-[#F15A29]'
			: 'bg-transparent text-[#F15A29]';

	return (
		<button onClick={onClick} className={`${style} ${variantStyle} rounded-full`}>
			{text}
		</button>
	);
}
