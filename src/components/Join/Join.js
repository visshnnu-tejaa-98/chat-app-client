import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';
const Join = () => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
	return (
		<div className='joinOuterContainer'>
			<div className='joinInnerContainer'>
				<h1 className='heading'>Join </h1>
				<div>
					<input
						type='text'
						className='joinInput'
						placeholder='Name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<input
						type='text'
						className='joinInput mt-3'
						placeholder='Room'
						value={room}
						onChange={(e) => setRoom(e.target.value)}
					/>
				</div>
				{/* passing the name and room to the url to navigate another page */}
				<Link
					// to prevent submittion with no input
					onClick={(e) => (!name || !room ? e.preventDefault() : null)}
					to={`/chat?name=${name}&room=${room}`}
				>
					<button type='submit' className='button mt-3'>
						Sign In
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Join;
