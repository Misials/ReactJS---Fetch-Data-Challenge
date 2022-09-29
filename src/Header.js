import React from 'react';

const Buttons = ({ handleUsers, handlePosts, handleComments }) => {
	return (
		<div className='buttons'>
			<button className='btn usersBtn' onClick={handleUsers}>
				Users
			</button>
			<button className='btn postsBtn' onClick={handlePosts}>
				Posts
			</button>
			<button className='btn commentsBtn' onClick={handleComments}>
				Comments
			</button>
		</div>
	);
};

export default Buttons;
