import React, { useState, useEffect } from 'react';
// to requre the data from url
import io from 'socket.io-client';

import './Chat.css';

let socket;

const Chat = ({ location }) => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([]);
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

	useEffect(() => {
		socket.on('message', (message) => {
			setMessages([...messages, message]);
		});
	}, [messages]);

	// functions for sending messages
	const sendMessage = (e) => {
		e.preventDefault();
		if (message) {
			socket.emit('sendMessage', message, () => setMessage(''));
		}
	};
	console.log(message, messages);

	return (
		<div className='outerContainer'>
			<div className='containerCss'>
				<input
					type='text'
					value={message}
					onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
					onChange={(e) => setMessage(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default Chat;
