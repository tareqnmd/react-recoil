import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { user } from '../recoil/user/atom';

const Login = () => {
	const [inputValue, setInputValue] = useState({ name: '', email: '' });
	const [, setUser] = useRecoilState(user);

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		setUser(inputValue);
		localStorage.setItem('user', JSON.stringify(inputValue));
	};
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setInputValue((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="login-area"
		>
			<input
				type="name"
				name="name"
				placeholder="name"
				required
				value={inputValue.name}
				onChange={changeHandler}
			/>
			<input
				type="email"
				name="email"
				placeholder="email"
				required
				value={inputValue.email}
				onChange={changeHandler}
			/>
			<button>Login</button>
		</form>
	);
};

export default Login;
