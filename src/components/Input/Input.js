import './Input.css';
const Input = ({ message, setMessage, sendMessage }) => {
	return (
		<form action='' className='form'>
			<input
				type='text'
				className='input'
				placeholder='Type a message...'
				value={message}
				onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
				onChange={(e) => setMessage(e.target.value)}
			/>
			<button className='sendButton' onClick={(e) => sendMessage(e)}>
				Send
			</button>
		</form>
	);
};

export default Input;
