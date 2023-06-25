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
				<div className="flex justify-between items-center">
					<p className="">
						Don’t have an account?
						<Button
							size="md"
							text="Sign Up"
							variant="text"
							to="/signup"
							className="px-1 capitalize"
							onClick={() => {}}
						/>
					</p>
					<p>
						<Button
							size="md"
							text="Forgot Password?"
							variant="text"
							to="/forgot-password"
							className="py-0 capitalize"
							onClick={() => {}}
						/>
					</p>
				</div>
			</div>
		</AuthContainer>
	);
}
