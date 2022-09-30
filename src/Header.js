import React from 'react';

const Buttons = ({ handleFetch }) => {
	return (
		<div className='buttons'>
			<button className='btn usersBtn' onClick={() => handleFetch()}>
				Users
			</button>
			<button className='btn postsBtn' onClick={() => handleFetch('posts')}>
				Posts
			</button>
			<button className='btn commentsBtn' onClick={() => handleFetch('comments')}>
				Comments
			</button>
		</div>
	);
};

export default Buttons;
