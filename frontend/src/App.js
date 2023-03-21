import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EditEvent from './pages/EditEvent';
import EventDetail, {
	loader as eventDetailLoader,
	action as deleteEventAction,
} from './pages/EventDetail';
import Events, { loader as eventsLoader } from './pages/Events';
import EventsRootLayout from './pages/EventsRootLayout';
import Home from './pages/Home';
import NewEvent from './pages/NewEvent';
import RootLayout from './pages/RootLayout';
import Error from './pages/Error';
import { action as manipulateEventAction } from './components/EventForm';

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
						id: 'event-detail',
						loader: eventDetailLoader,
						children: [
							{
								index: true,
								element: <EventDetail />,
								action: deleteEventAction,
							},
							{
								path: 'edit',
								element: <EditEvent />,
								action: manipulateEventAction,
							},
						],
					},
					{ path: 'new', element: <NewEvent />, action: manipulateEventAction },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
