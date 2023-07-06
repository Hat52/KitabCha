import AuthContainer from '../../containers/AuthContainer';
import { Button, TextField } from '../../components';

export default function Signup() {
	return (
		<AuthContainer>
			<div className="flex flex-col gap-5 px-10 w-full">
				<TextField
					id="first_name"
					placeholder="First Name"
					label="First Name"
					onChange={(e: any) => console.log(e)}
					type="text"
				/>
				<TextField
					id="last_name"
					placeholder="Last Name"
					label="Last Name"
					onChange={(e: any) => console.log(e)}
					type="text"
				/>
				<TextField
					id="email"
					placeholder="Email"
					label="Email"
					onChange={(e: any) => console.log(e)}
					type="email"
				/>
				<TextField
					id="password"
					placeholder="Password"
					label="Password"
					onChange={(e: any) => console.log(e)}
					type="password"
				/>
				<Button
					size="md"
					text="Sign up"
					variant="primary"
					className="h-[48px] mt-5"
					onClick={() => {}}
				/>
				<p className="">
					Already have an account?
					<Button
						size="md"
						text="LOG IN"
						variant="text"
						to="/login"
						className="h-[48px] px-1"
						onClick={() => {}}
					/>
				</p>
			</div>
		</AuthContainer>
	);
}
