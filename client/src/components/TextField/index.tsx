import Visibility from 'src/assets/visibility.svg';
import EyeClose from 'src/assets/eye-close-icon.svg';
import { useState } from 'react';
interface ITextField {
	placeholder: string;
	label: string;
	type: 'email' | 'text' | 'password';
	onChange: (e: any) => void;
	id: string;
}

export default function TextField({ placeholder, label, type, onChange, id }: ITextField) {
	const [visibility, setVisibility] = useState(false);

	return (
		<div className="flex flex-col gap-2 relative">
			<label htmlFor="email" className="font-semibold">
				{label}
			</label>
			<input
				onChange={onChange}
				id={id}
				type={visibility ? 'text' : type}
				className="w-full h-[48px] px-2 bg-[#231F200D] outline-none rounded-sm"
				placeholder={placeholder}
			/>

			{type === 'password' ? (
				<img
					src={visibility ? EyeClose : Visibility}
					className="w-[20px] h-[20px] absolute right-4 top-1/2 translate-y-1/2 cursor-pointer"
					onClick={() => setVisibility((visibility: boolean) => !visibility)}
				/>
			) : null}
		</div>
	);
}
