import AuthContainer from '../../containers/AuthContainer';
import { Button, TextField } from '../../components';

export default function Login() {
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
				<TextField
					id="password"
					placeholder="Password"
					label="Password"
					onChange={(e: any) => console.log(e)}
					type="password"
				/>
				<Button
					size="md"
					text="Login"
					variant="primary"
					className="h-[48px] mt-5"
					onClick={() => {}}
				/>
				<p className="">
					Don’t have an account?
					<Button
						size="md"
						text="SIGN UP"
						variant="text"
						to="/signup"
						className="h-[48px] px-1"
						onClick={() => {}}
					/>
				</p>
			</div>
		</AuthContainer>
	);
}
