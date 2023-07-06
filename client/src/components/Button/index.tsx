import { Link } from 'react-router-dom';

interface IButton {
	variant?: 'primary' | 'secondary' | 'text';
	size: 'sm' | 'md' | 'lg';
	text: string;
	onClick: () => void;
	className?: string;
	to?: string;
}

export default function Button({
	size,
	text,
	variant = 'primary',
	onClick,
	className,
	to
}: IButton) {
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

	switch (variant) {
		case 'text':
			if (to) {
				return (
					<Link
						className={`text-[14px] font-bold text-[#F15A29] uppercase ${className}`}
						to={to}>
						{text}
					</Link>
				);
			}
			return <></>;
		case 'primary':
		case 'secondary':
		default:
			return (
				<button
					onClick={onClick}
					className={`${style} ${variantStyle} ${className} rounded-full`}>
					{text}
				</button>
			);
	}
}
