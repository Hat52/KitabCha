import AuthContainer from '../../containers/AuthContainer';
import { Button, TextField } from '../../components';

export default function ForgotPassword() {
	return (
		<AuthContainer>
			<div className="flex flex-col gap-5 px-10 w-full">
				<TextField
					id="email"
					placeholder="Email"
					label="Email"
					onChange={(e: any) => console.log(e)}
					type="email"
				/>
				<Button
					size="md"
					text="Send Email"
					variant="primary"
					className="h-[48px] mt-5"
					onClick={() => {}}
				/>
			</div>
		</AuthContainer>
	);
}
