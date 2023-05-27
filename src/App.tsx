import './App.css';
import { Landing } from './pages';
import { Navbar } from './components';

function App() {
	return (
		<div className="w-screen max-h-max overflow-hidden min-h-screen flex justify-center bg-white pt-20">
			<Navbar />
			<Landing />
		</div>
	);
}

export default App;
