import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EditEvent from './pages/EditEvent';
import EventDetail from './pages/EventDetail';
import Events, { loader as eventsLoader } from './pages/Events';
import EventsRootLayout from './pages/EventsRootLayout';
import Home from './pages/Home';
import NewEvent from './pages/NewEvent';
import RootLayout from './pages/RootLayout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: 'events',
				element: <EventsRootLayout />,
				children: [
					{
						index: true,
						element: <Events />,
						loader: eventsLoader,
					},
					{ path: ':eventId', element: <EventDetail /> },
					{ path: 'new', element: <NewEvent /> },
					{ path: ':eventId/edit', element: <EditEvent /> },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
