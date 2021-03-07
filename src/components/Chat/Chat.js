import React, { useState, useEffect } from 'react';
// to requre the data from url
import io from 'socket.io-client';

let socket;

const Chat = ({ location }) => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
	const ENDPOINT = 'localhost:8000';

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

		const { name, room } = data;
		setName(name);
		setRoom(room);

		// socket stuff
		socket = io(ENDPOINT);
		socket.emit('join', { name, room }, () => {});

		// used for disconnecting the server
		return () => {
			socket.emit('disconnect');
			socket.off();
		};
	}, [ENDPOINT, window.location.search]);
	return (
		<div className='chat'>
			<h1>Hello Chat Page</h1>
		</div>
	);
};

export default Chat;
