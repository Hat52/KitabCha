import './App.css';
import { ErrorPage, Landing, WriteNewSummary } from './pages';
import Login from './pages/Auth/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './pages/Auth/Signup';
import ForgotPassword from './pages/Auth/ForgotPassword';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Landing />,
		errorElement: <ErrorPage />
	},
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '/signup',
		element: <Signup />
	},
	{
		path: '/forgot-password',
		element: <ForgotPassword />
	},
	{
		path: '/write',
		element: <WriteNewSummary />
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
