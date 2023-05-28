interface ITextField {
	placeholder: string;
	label: string;
	type: 'email' | 'text' | 'password';
	onChange: (e: any) => void;
	id: string;
}

export default function TextField({ placeholder, label, type, onChange, id }: ITextField) {
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor="email" className="font-semibold">
				{label}
			</label>
			<input
				onChange={onChange}
				id={id}
				type={type}
				className="w-[405px] h-[48px] px-2 bg-[#231F200D] outline-none rounded-sm"
				placeholder={placeholder}
			/>
		</div>
	);
}
