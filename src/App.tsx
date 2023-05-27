import './App.css';
import { Landing } from './pages';
import { Navbar } from './components';

function App() {
	return (
		<div className="w-screen max-h-max min-h-screen flex justify-center bg-main pt-20">
			<Navbar />
			<Landing />
		</div>
	);
}

export default App;
