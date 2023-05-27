import Logo from 'src/assets/logo.png';
import { Button } from '../index';

export default function Navbar() {
	return (
		<nav className="fixed z-10 top-0 left-0 right-0 h-[80px] bg-white shadow-lg px-[11%] flex items-center justify-between">
			<img src={Logo} className="w-[80px] h-full" />
			<div className="flex items-center gap-3">
				<Button size="md" text="Login" variant="text" onClick={() => {}} />
				<Button size="md" text="Sign up" variant="secondary" onClick={() => {}} />
			</div>
		</nav>
	);
}
