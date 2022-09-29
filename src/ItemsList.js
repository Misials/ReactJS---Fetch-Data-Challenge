import React from 'react';

const ItemsList = ({ items }) => {
	return (
		<ul className='itemList'>
			{items.map(item => (
				<li key={item.id}>{JSON.stringify(item)}</li>
			))}
		</ul>
	);
};

export default ItemsList;
