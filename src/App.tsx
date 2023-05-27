import './App.css';
import { ErrorPage, Landing } from './pages';
import { Navbar } from './components';
import Login from './pages/Auth/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Landing />,
		errorElement: <ErrorPage />
	},
	{
		path: '/login',
		element: <Login />
	}
]);

function App() {
	return (
		<div className="w-screen max-h-max overflow-hidden min-h-screen flex justify-center bg-white">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
