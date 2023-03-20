import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EditEvent from './pages/EditEvent';
import EventDetail, { loader as eventDetailLoader } from './pages/EventDetail';
import Events, { loader as eventsLoader } from './pages/Events';
import EventsRootLayout from './pages/EventsRootLayout';
import Home from './pages/Home';
import NewEvent from './pages/NewEvent';
import RootLayout from './pages/RootLayout';
import Error from './pages/Error';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <Error />,
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
					{
						path: ':eventId',
						element: <EventDetail />,
						loader: eventDetailLoader,
					},
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
