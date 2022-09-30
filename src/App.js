import { useState, useEffect } from 'react';
import Header from './Header';
import ItemsList from './ItemsList';

function App() {
	const API_URL = 'https://jsonplaceholder.typicode.com';

	const [items, setItems] = useState([]);

	useEffect(() => {
		handleFetch();
	}, []);

	const handleFetch = async (data = 'users') => {
		try {
			const response = await fetch(`${API_URL}/${data}`);
			if (!response.ok) throw Error(`Did not get correct data!`);
			const listItem = await response.json();
			setItems(listItem);
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<div className='app'>
			<Header handleFetch={handleFetch} />
			<main>
				<ItemsList items={items} />
			</main>
		</div>
	);
}

export default App;
