import LoginImage from 'src/assets/login.jpg';
import Logo from 'src/assets/logo.png';

export default function AuthContainer({ children }: any) {
	return (
		<div className="flex w-screen h-screen">
			<div className="w-[30%] flex flex-col pt-5 items-center h-full bg-white shadow-lg">
				<img src={Logo} className="w-[150px] h-[150px]" />
				{children}
			</div>
			<img src={LoginImage} className="w-[70%] object-cover h-full" />
		</div>
	);
}
