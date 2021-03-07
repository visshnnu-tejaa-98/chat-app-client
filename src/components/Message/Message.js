import './Message.css';
const Message = ({ message: { user, text }, name }) => {
	let sentByCurrentUser = false;
	const trimmedName = name.toLowerCase();
	if (user === trimmedName) {
		sentByCurrentUser = true;
	}
	return sentByCurrentUser ? (
		<div className='messageContainer justifyEnd'>
			<p className='sentText pr-10  '>{trimmedName}</p>
			<div className='messageBox bg-primary'>
				<p className='messageText text-white marginNone'>{text}</p>
			</div>
		</div>
	) : (
		<div className='messageContainer justifyStart'>
			<div className='messageBox bg-right'>
				<p className='messageText text-dark marginNone'>{text}</p>
			</div>
			<p className='sentText pl-10  '>{user}</p>
		</div>
	);
};

export default Message;
