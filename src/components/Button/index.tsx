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
			? 'px-5 py-2 text-[14px] rounded-md text-[#F15A29] font-bold uppercase'
			: 'px-5 py-1 text-[12px]';
	const variantStyle =
		variant === 'primary'
			? 'bg-[#F15A29] shadow-lg'
			: variant === 'secondary'
			? 'border border-[#F15A29] shadow-lg'
			: 'bg-transparent';

	return (
		<button onClick={onClick} className={`text-white ${style} ${variantStyle} rounded-full`}>
			{text}
		</button>
	);
}
