import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

const Events = () => {
	const data = useLoaderData();
	const events = data.events;

	return <EventsList events={events} />;
};

export default Events;

export const loader = async () => {
	const response = await fetch('http://localhost:8080/events');

	if (!response.ok) {
		// ...
	} else {
		return response;
	}
};
