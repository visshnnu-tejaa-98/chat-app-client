import React, { useState, useEffect } from 'react';
// to requre the data from url
import queryString from 'query-string';
import io from 'socket.io-client';
const Chat = ({ location }) => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');

	useEffect(() => {
		let string = window.location.search;
		let splitByq = string.split('?');
		let array = splitByq[1].split('&');
		let value1 = array[0];
		let value2 = array[1];
		let data = {
			name: value1.split('=')[1],
			room: value2.split('=')[1],
		};
		setName(data.name);
		setRoom(data.room);
		console.log(name, room);
	});
	return (
		<div className='chat'>
			<h1>Hello Chat Page</h1>
		</div>
	);
};

export default Chat;
