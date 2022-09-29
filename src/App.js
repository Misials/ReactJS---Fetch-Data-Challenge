import { useState, useEffect } from 'react';
import Header from './Header';
import ItemsList from './ItemsList';

function App() {
	const API_URL = 'https://jsonplaceholder.typicode.com';

	const [items, setItems] = useState([]);

	const handlePosts = async () => {
		try {
			const response = await fetch(`${API_URL}/posts`);
			if (!response.ok) throw Error(`Did not get correct data!`);
			const listItem = await response.json();
			setItems(listItem);
		} catch (err) {
			console.log(err.message);
		}
	};

	const handleUsers = async () => {
		try {
			const response = await fetch(`${API_URL}/users`);
			if (!response.ok) throw Error(`Did not get correct data!`);
			const listItem = await response.json();
			setItems(listItem);
		} catch (err) {
			console.log(err.message);
		}
	};

	const handleComments = async () => {
		try {
			const response = await fetch(`${API_URL}/comments`);
			if (!response.ok) throw Error(`Did not get correct data!`);
			const listItem = await response.json();
			setItems(listItem);
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<div className='app'>
			<Header handleUsers={handleUsers} handleComments={handleComments} handlePosts={handlePosts} />
			<main>
				<ItemsList items={items} />
			</main>
		</div>
	);
}

export default App;
